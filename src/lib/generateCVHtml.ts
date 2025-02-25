import { IExperience } from "../models/Experience";
import { IResume } from "../models/Resume";
import { ISkill } from "../models/Skill";
import { ITool } from "../models/Tool";
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://vinitech.dev";


export function generateCVHtml(data: IResume) {
  const { personalInfo, skills, tools } = data;

  const experiences = data.experiences.slice(0, 4);

  const experienceTable = data.experiences.slice(4);

  const educations = data.educations || [];
  const certifications = data.certifications || [];
  const references = data.references || [];
  const interests = data.interests || [];

  return `
      <html>
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
            <style>
              .icon {
                margin-right: 8px;
              }
            </style>
          <style>
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

              ul {
                list-style-type: disc; /* Bullets padrão */
                padding-left: 20px; /* Espaçamento para os bullets */
              }

              .resume {
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

              .header-footer-site {
      
              }

              .header-footer-email {
                grid-column: 2 / span 2;
                border-right: 2px solid white;
                border-left: 2px solid white;
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

              .education-title {
                color: #07d2be; 
                font-weight: bold;
                text-transform: uppercase;
              }

              .education-subtitle {
                font-weight: bold;
              }

              .experience-title {
                color: #07d2be;
                font-weight: bold; 
              }

              .experience-subtitle {
                font-weight: bold;
              }

              .skill-name {
                font-weight: bold;
              }

              .progress-bar {
                background: #e0e0e0;
                border-radius: 3px;
                overflow: hidden;
                height: 7px;
                margin-top: 5px;
              }

              .progress-bar-fill {
                background: #07d2be; /* Cor da barra de progresso */
                height: 100%;
              }

              .section-title {
                font-size: 14px;
                font-weight: bold;
                margin-bottom: 10px;
                text-transform: uppercase;
              }

              .section {
                margin-bottom: 50px;
                page-break-inside: avoid; 
                break-inside: avoid; 
              }

              .section-right {
                margin-bottom: 15px;
              }

              .section-right:last-of-type {
                  margin-bottom: 0px;
              }

              .skill, .education, .certification, .reference, .interest {
                margin-bottom: 15px;
              }

              .profile{
              }

              .experience {
                margin-bottom: 20px;
                page-break-inside: avoid; 
                break-inside: avoid;               }

              .experience-data-locality{
              }

              .experience-company, .skill-percentage, .education-institution, .certification-institution, .reference-position, .interest-description {
                color: #666;
                font-size: 12px;
              }

              .experience-description {
                  font-size: 12px;
              }
              
              .experience-company {
                font-weight: bold;
              }

              a {
                color: #007bff;
                text-decoration: none;
              }

              a:hover {
                text-decoration: underline;
              }

              .tags {
                font-style: italic;
                color: #666;
              }

              .experience-table {
                width: 100%;
                border-collapse: collapse;
                font-size: 10px;
              }

              .experience-table-head {
                background-color: #07d2be;
                color: white;
              }

              .experience-table-head th {
                padding: 8px;
                text-align: left;
              }

              .experience-table tbody tr:nth-child(odd) {
                background-color: #f9f9f9;
              }

              .experience-table tbody tr:nth-child(even) {
                background-color: #f0f0f0;
              }

              .experience-table tbody tr td {
                padding: 8px;
              }

              .section-expertise {
                font-size: 12px;
                color: #666;
                word-spacing: 0.1em;
                font-weight: bold;
              }

              .reference-section {
                display: grid;
                grid-template-columns: 1fr 1fr;
              }

              .reference {
                margin-bottom: 15px;
              }

              .reference-name {
                font-weight: bold;
              }

              .reference-position {
                color: #666;
                font-size: 12px;
              }

              .interest {
                display: flex;
                flex-direction: column;
                gap: 5px;
                justify-content: space-between;
              }

              .interest-title {
                font-size: 12px;
              }

              .interest-icon {
                font-size: 28px;
                color: #07d2be;
              }

              .section-interest {
                color: #666;
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 1fr 1fr;
                margin-left: 20px;
                gap: 5px;  

              }
            </style>
        </head>
        <body>
          <div class="resume">
            <div class="header">
              <div class="titles">
                <h1>${personalInfo.fullName}</h1>
                <h2>${personalInfo.title}</h2>
              </div>
              <div class="header-footer">
                  <span class="header-footer-site">
                    <i class="fa-solid fa-globe"></i>
                    ${SITE_URL}
                  </span>
                <span class="header-footer-email">
                  <i class="fa-regular fa-envelope"></i>
                ${personalInfo.email}</span>
                <span class="header-footer-location">
                <i class="fa-solid fa-location-dot"></i>
                ${personalInfo.location}</span>
              </div> 
            </div>
            <div class="content">
              <div class="left-column">
                <div class="section">
                  <div class="section-title">Education</div>
                  ${educations
                    .map(
                      (edu) => `
                    <div class="education">
                      <div class="education-title">${edu.courseName}</div>
                      <div class="education-locality">${edu.locality}</div>
                      <div class="education-institution">${edu.institution}</div>
                      <div class="education-institution">${edu.year}</div>
                    </div>
                  `
                    )
                    .join("")}
                </div>
                <div class="section">
                  <h4 class="section-title">Skills</h4>
                  ${skills
                    .map(
                      (skill: ISkill) => `
                    <div class="skill">
                      <div class="skill-name">${skill.name}</div>
                      <div class="progress-bar">
                        <div class="progress-bar-fill" style="width: ${skill.percentage}%;"></div>
                      </div>
                    </div>
                  `
                    )
                    .join("")}
                </div>

              <div class="section">
                <h4 class="section-title">Expertise</h4>
                <div class="section-expertise">
                ${tools.map((tool: ITool) => tool.title).join(", ")}
                </div>
              </div>

              <div class="section">
                <div class="section-title">Certifications</div>
                <ul>
                ${certifications
                  .map(
                    (cert) => `
                  <li class="certification">
                    <div class="certification-title">${cert.name}</div>
                    <div class="certification-institution">${cert.institution}</div>
                  </li>
                `
                  )
                  .join("")}
                </ul>
              </div>

              <div class="section">
                <div class="section-title">Languages</div>
                <ul>
                ${(personalInfo.languages ?? [])
                  .map((language) => `${language}`)
                  .join(", ")}
                </ul>
              </div>
              <div class="section">
                <div class="section-title">Interests</div>
                <div class="section-interest">
                  ${interests
                    .map(
                      (interest) => `
                    <div class="interest">
                      <i class="interest-icon ${interest.icon}"></i>
                      <span class="interest-title">${interest.title}</span>
                    </div>
                  `
                    )
                    .join("")}
                </div>
              </div>
            </div> <!-- Fechamento da div left-column -->
            <div class="right-column">
              <div class="section-right">
                <h3>Profile</h3>
                <div class="profile">${personalInfo.profile}</div>

              </div>

              <div class="section-right">
                <h3>Work Experience</h3>
                ${experiences
                  .map(
                    (exp: IExperience) => `
                  <div class="experience">
                    <h4 class="experience-title">${
                      exp.title
                    }  <span class="experience-company"> | ${
                      exp.company
                    }</span></h4>
                    <div class="experience-data-locality">${exp.year} - ${
                      exp.locality
                    }</div>
                    <div class="experience-description">${exp.description}</div>
                    <div class="tags">${exp.tags.join(", ")}</div>
                  </div>
                `
                  )
                  .join("")}
              
                  </div>

                <div class="section-right">
                  <h3 class="section-title">Previous Experiences</h3>
                  <table class="experience-table">
                    <thead class="experience-table-head">
                      <tr>
                        <th>Company</th>
                        <th>Title</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody id="experienceTableBody">
                           ${experienceTable
                             .map(
                               (exp: IExperience) => `
                    <tr>
                      <td>${exp.company}</td>
                      <td>${exp.title}</td>
                      <td>${exp.year}</td>
                    </tr>
                  `
                             )
                             .join("")}
                    </tbody>
                  </table>
                </div>
                <div class="section-right">
                  <h4 class="section-title">References</h4>
                      <div class="reference-section">
                  ${references
                    .map(
                      (ref) => `
                    <div class="reference">
                      <div class="reference-name">${ref.name}</div>
                      <div class="reference-position">${ref.description}</div>
                      <div class="reference-position">
                        <i class="fa-solid fa-phone"></i>
                      ${ref.phone}</div>
                      <div class="reference-position">
                      <i class="fa-solid fa-envelope"></i>
                      ${ref.email}</div>
                           </div>
                  `
                    )
                    .join("")}
                  </div>
                </div>

                </div>
                </div> <!-- Fechamento da div right-column -->
              </div> <!-- Fechamento da div right-column -->
            </div> <!-- Fechamento da div content -->
          </div> <!-- Fechamento da div resume -->
        </body>
      </html>
    `;
}
