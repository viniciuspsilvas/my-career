import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import { fetchResumeData } from "@/src/lib/fetchResumeData";
import { generateHtml } from "@/src/lib/generateHtml";

export async function POST(request: Request) {
  const { token } = await request.json();

  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}`,
    {
      method: "POST"
    }
  );

  const data = await response.json();

  if (!data.success || data.score < 0.5) {
    return NextResponse.json(
      { error: "reCAPTCHA validation failed" },
      { status: 400 }
    );
  }

  // Fetch data from MongoDB
  const resumeData = await fetchResumeData();

  // Generate HTML content
  const htmlContent = generateHtml(resumeData);

  // Generate PDF
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setContent(htmlContent);
  const pdfBuffer = await page.pdf({
    format: "A4",
    printBackground: true ,

  });
  await browser.close();

  // Return the PDF as a response
  return new NextResponse(pdfBuffer, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Vinicius_Silva_CV.pdf"'
    }
  });
}