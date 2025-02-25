import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core"; 
import chromium from "@sparticuz/chromium"; 
import { fetchResumeData } from "@/src/lib/fetchResumeData";
import { generateCVHtml } from "@/src/lib/generateCVHtml";

export async function GET() {
  try {
    const resumeData = await fetchResumeData();

    const htmlContent = generateCVHtml(resumeData);

    const isProduction = process.env.NODE_ENV === "production";

    console.log("# Generation PDF in production:", isProduction);

    const browser = await puppeteer.launch({
      args: isProduction ? chromium.args : [], 
      executablePath: isProduction
        ? await chromium.executablePath() 
        : "/Applications/Chromium.app/Contents/MacOS/Chromium", 
      headless: isProduction
        ? chromium.headless === "new"
          ? true
          : Boolean(chromium.headless) 
        : true,
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent);

    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
    });

    await browser.close();

    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Vinicius_Silva_CV.pdf"',
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}