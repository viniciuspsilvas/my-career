// app/api/generate-cover-letter/route.ts
import { connectDB } from "@/src/lib/mongodb";
import OpenAI from "openai";
import puppeteer from "puppeteer-core";
import { NextResponse } from "next/server";
import { Experience } from "@/src/models/Experience";
import { PersonalInfo } from "@/src/models/PersonalInfo";
import { Skill } from "@/src/models/Skill";
import chromium from "@sparticuz/chromium";
import { generateCoverLetterHtml } from "@/src/lib/generateCoverLetterHtml";
// import coverLetterModel from "@/src/lib/coverLetterModel";

const website = process.env.NEXT_PUBLIC_SITE_URL || "https://vinitech.dev";

function substringUntilFirstUL(str: string) {
  const index = str.indexOf("<ul>");
  return index !== -1 ? str.substring(0, index) : str;
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(request: Request) {
  const {
    jobTitle,
    jobDescription,
    companyName,
    experiences: selectedExperienceIds
  }: {
    jobTitle: string;
    jobDescription?: string;
    companyName?: string;
    experiences: string[];
  } = await request.json();


  try {
    await connectDB();

    // Fetch data from MongoDB
    const personalInfo = await PersonalInfo.findOne({});
    const skills = await Skill.find({});

    let experiences;
    if (selectedExperienceIds && selectedExperienceIds.length > 0) {
      experiences = await Experience.find({
        _id: { $in: selectedExperienceIds }
      }).sort({ order: "desc" });
    } else {
      experiences = await Experience.find({}).sort({ order: "desc" }).limit(2);
    }

    const secondParagraph = ` 2️⃣ **Second Paragraph (Why I Am a Good Fit):**  
    - Explain why my profile aligns with the job description by highlighting **3 key points** in common between my experience and the job requirements. 
    - Maximum 4 lines.   
    - Analyze the job description below and summarize the connection in **3 concise phrases**:  
      "${jobDescription}"  
    - Example structure:  
      1. "With my experience in {skill/area}, I can contribute to {specific requirement from job description}."  
      2. "My background in {skill/area} aligns with your need for {specific requirement from job description}."  
      3. "I have a proven track record of {achievement/responsibility}, which matches your requirement for {specific requirement from job description}."  `;

    // Generate cover letter using OpenAI
    const prompt = `
    Generate a professional cover letter in HTML format, starting **directly** with a <div> tag (do not include <html>, <head>, or <body>).  

    The cover letter is for a **${jobTitle}** position at **${companyName}**. It should follow this structure:  

    1️⃣ **First Paragraph:**  
    - State that I am reaching out to explore opportunities for the **${jobTitle}** role  **${companyName ? `at ${companyName}` : ""}**, as my current position has become redundant.  
    - Briefly introduce myself using this profile:  
    "${personalInfo.profile}"  

  ${jobDescription ? secondParagraph : ""}

    3️⃣ **Third Paragraph (Most Recent Role at ${experiences[0].company} as ${
      experiences[0].title
    }):**  
    - Summarize my most recent role in **one concise sentence**, focusing on **what the company does**, **key responsibilities**, and **technologies used**.  
    - Extract from the description below what the company does and summarize it in a few words:  
      "${substringUntilFirstUL(experiences[0].description)}"  
    - Example structure:  
      "At ${
        experiences[0].company
      }, a company that {briefly describe what the company does}, I worked as a ${
      experiences[0].title
    }, where I {briefly describe main responsibility} using ${
      experiences[0].tags
    }."  
    - Highlight **one impactful achievement** or contribution.  
    - Maximum 4 lines.  

    4️⃣ **Fourth Paragraph (Previous Role at ${experiences[1].company} as ${
      experiences[1].title
    }):**  
    - Summarize my second most recent role in **one concise sentence**, focusing on **what the company does**, **key responsibilities**, and **technologies used**.  
    - Extract from the description below what the company does and summarize it in a few words:  
      "${substringUntilFirstUL(experiences[1].description)}"  
    - Example structure:  
      "At ${
        experiences[1].company
      }, a company that {briefly describe what the company does}, I served as a ${
      experiences[1].title
    }, focusing on {briefly describe main responsibility} with ${
      experiences[1].tags
    }."  
    - Mention **one key result** or teamwork achievement.  

    5️⃣ **Fifth Paragraph (What I Expect & What I Can Offer):**  
    - Explain what excites me about **${companyName}** and why I believe I’d be a great fit.  
    - Highlight my **key skills** that match the job description, listing them and making them bold:  
      ${skills.map((skill) => `- <strong>${skill.name}</strong>`).join(", ")}  

    6️⃣ **Sixth Paragraph (Closing & Contact Information):**  
    - Write the following closing paragraph **exactly as described below**:  
      "I look forward to the possibility of discussing how I can contribute to your team. Please feel free to contact me at <strong>${
        personalInfo.phone
      }</strong> and see more about my experiences at my website <a href="${website}">${website}</a>."  
    - Add a final line:  
      "Thank you for considering my application."  
    - End with:  
      "Sincerely, <br /> <strong>${personalInfo.fullName}</strong>"  

    **Output format:**  
    - The response **must** start with a <div> tag.  
    - Use proper paragraphs (<p>) and line breaks where necessary.  
    - **Use <strong> tags to highlight my name, phone number, and key skills.**  
    - **Do NOT include any titles tag.**  
    - **Do NOT include <html>, <head>, <body>, or any other wrapping tags.**  
    - Keep the text within **2000 characters (including spaces)**.  
`;

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-4o-mini",
      max_tokens: 600,
      temperature: 0.7
    });

    const coverLetter =
      completion.choices[0].message.content ||
      "Failed to generate cover letter";

    const htmlContent = generateCoverLetterHtml(personalInfo, coverLetter);

    // NOT CHATGPT
    // const htmlContent = generateCoverLetterHtml(personalInfo, coverLetterModel);

    const isProduction = process.env.NODE_ENV === "production";

    console.log("# Generation PDF in production:", isProduction);


    const executablePath = isProduction
      ? await chromium.executablePath()
      : "/Applications/Chromium.app/Contents/MacOS/Chromium";

    console.log("Executable Path:", executablePath);

    const browser = await puppeteer.launch({
      args: isProduction ? chromium.args : [],
      executablePath,
      headless: isProduction ? chromium.headless === "new" ? true : Boolean(chromium.headless) : true,
    });

    console.log("Browser launched successfully");


    const page = await browser.newPage();
    await page.setContent(htmlContent);

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Vinicius_Silva_CV.pdf"'
      }
    });
  } catch (error) {
    console.error("Error generating cover letter:", error);
    return NextResponse.json(
      { error: "Failed to generate cover letter" },
      { status: 500 }
    );
  }
}
