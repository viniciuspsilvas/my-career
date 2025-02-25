import { IPersonalInfo } from "../models/PersonalInfo";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vinitech.dev";

export function generateCoverLetterHtml(
  personalInfo: IPersonalInfo,
  coverLetter: string
) {
  return `
    <html>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>
          .icon {
            margin-right: 8px;
          }

          @page :first {
            margin: 0mm 0mm 10mm 0mm; /* top, right, bottom, left */
          }

          @page {
            size: A4;
            margin: 10mm 5mm 0mm 0mm; /* top, right, bottom, left */
          }

          body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            text-align: justify;
          }

          .coverLetter {
            display: flex;
            justify-content: space-between;
            flex-direction: column;
          }

          .header {
            background-color: #323232 !important;
            color: #fff !important;
            text-align: center;
            -webkit-print-color-adjust: exact; /* Força o navegador a renderizar o background */
            print-color-adjust: exact; /* Padrão moderno */
          }

          .titles {
            padding-top: 30px;
            padding-bottom: 30px;
          }

          .header h1 {
            margin-bottom: 5px;
            color: #ffffff; /* Cor do H1 */
            text-transform: uppercase;
            font-family: 'Poppins', sans-serif;
            font-feature-settings: normal;
            font-size: 48px;
            font-variation-settings: normal;
            font-weight: 700;
          }

          .header h2 {
            font-size: 18px;
            color: #07d2be;
            margin-bottom: 20px;
            text-transform: uppercase;
            font-weight: 700;
            letter-spacing: 0.2em;
            word-spacing: 0.1em;
          }

          .header-footer {
            background: #07d2be;
            color: #fff;
            text-align: center;
            padding: 10px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }

          .content {
            background: #fff;
            color: #323232;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
            padding: 20px;
            font-size: 12px;
          }

          .left-column {
            border-right: 2px solid #e0e0e0;
            padding-right: 20px;
          }

          .right-column {
            display: flex;
            flex-direction: column;
            padding-left: 20px;
            grid-column: 2 / span 3;
          }

          h3 {
            font-size: 16px;
            color: #323232; 
            margin-bottom: 5px;
            text-transform: uppercase;
            font-weight: bold;
            margin-top: 0px;
          }

          h4 {
            font-size: 14px;
            color: #323232;
            text-transform: uppercase;
            font-weight: bold;
            margin-bottom: 0px;
            margin-top: 5px;
          }

          .section {
            display: flex;
            flex-direction: column;
            font-size: 12px;
            gap: 15px;
          }

          .section-right {
            margin-bottom: 15px;
          }

          .section-right:last-of-type {
            margin-bottom: 0px;
          }

          a {
            color: #007bff;
            text-decoration: none;
          }

          a:hover {
            text-decoration: underline;
          }

          .letter{
            font-size: 14px;
            line-height: 1.5;
          }

        </style>
      </head>
      <body>
        <div class="coverLetter">
          <div class="header">
            <div class="titles">
              <h1>${personalInfo.fullName}</h1>
              <h2>${personalInfo.title}</h2>
            </div>
            <div class="header-footer"></div>
          </div>
          <div class="content">
            <div class="left-column">
              <div class="section">
                <span class="header-footer-site">
                  <i class="fa-solid fa-globe"></i>
                  ${SITE_URL}
                </span>
                <span class="header-footer-phone">
                  <i class="fa-solid fa-phone"></i>
                  ${personalInfo.phone}
                </span>
                <span class="header-footer-email">
                  <i class="fa-regular fa-envelope"></i>
                  ${personalInfo.email}
                </span>
                <span class="header-footer-location">
                  <i class="fa-solid fa-location-dot"></i>
                  ${personalInfo.location}
                </span>
              </div>
            </div>
            <div class="right-column">
              <div class="section-right">
                <h3>TO WHOM IT MAY CONCERN</h3>
                <div class="letter">${coverLetter}</div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
