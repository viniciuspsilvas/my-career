import { NextResponse } from "next/server";
import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
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

  try {
    const resumeData = await fetchResumeData();

    const htmlContent = generateHtml(resumeData);

    const isProduction = process.env.NODE_ENV === "production";

    const browser = await puppeteer.launch({
      args: isProduction ? chromium.args : [],
      executablePath: isProduction
        ? await chromium.executablePath()
        : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
      headless: isProduction
        ? chromium.headless === "new"
          ? true
          : Boolean(chromium.headless)
        : true
    });

    const page = await browser.newPage();
    await page.setContent(htmlContent);

    // Gera o PDF
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true
    });

    await browser.close();

    // Retorna o PDF como resposta
    return new NextResponse(pdfBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="Vinicius_Silva_CV.pdf"'
      }
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "Failed to generate PDF" },
      { status: 500 }
    );
  }
}
