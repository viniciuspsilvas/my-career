import { IExperience } from "../models/Experience";
import { IResume } from "../models/Resume";
import { ISkill } from "../models/Skill";
import { ITool } from "../models/Tool";

export function generateHtml(data: IResume) {
  const { personalInfo, skills, tools } = data;

  const experiences = data.experiences.slice(0, 3);

  const experienceTable = data.experiences.slice(3);

  const education = [
    {
      courseName: "Bachelor of Science in Computer Science",
      institution: "University of California, Los Angeles",
      year: "2016 - 2020"
    },
    {
      courseName: "High School Diploma",
      institution: "Los Angeles High School",
      year: "2012 - 2016"
    }
  ];

  const certifications = [
    {
      name: "Certified Scrum Master",
      institution: "Scrum Alliance"
    },
    {
      name: "SUn Certified Java Programmer",
      institution: "Oracle"}
  ];

  const references = [
    {
      name: "John Doe",
      description: "Senior Software Engineer",
      phone: "0452420202",
      email: "joshn@gmail.com"
    },
    {
      name: "Jane Doe",
      description: "Tech Lead",
      phone: "0452420202",
      email: "joshn@gmail.com"
    }
  ];

  const interests = [
    { title: "Music", icon: "fa-solid fa-music" },
    { title: "Coding", icon: "fa-solid fa-laptop-code" },
    { title: "Travels", icon: "fa-solid fa-plane-departure" },
    { title: "Sport", icon: "fa-solid fa-person-biking" }
  ];

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
          @page {
            size: A4;
            margin: 10mm 10mm 15mm 10mm; /* top, right, bottom, left */
          }

          @page :first {
          //   margin-bottom: 50mm; /* Margem maior apenas na primeira página */
          margin: 0mm 0mm 10mm 0mm; /* top, right, bottom, left */
          }
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              margin: 0;
              padding: 0;
              color: #333;
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
            .header-footer-email{
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
              padding-left: 20px;
              grid-column: 2 / span 3;
            }
            h3 {
              font-size: 16px;
              color: #323232; /* Cor do H3 */
              margin-bottom: 10px;
              text-transform: uppercase;
              font-weight: bold;
            }
            h4 {
              font-size: 14px;
              color: #323232; /* Cor do H3 */
              text-transform: uppercase;
              font-weight: bold;
            }
            .education-title {
              color: #07d2be; /* Cor do education-title */
              font-weight: bold; /* Texto em negrito */
              
              text-transform: uppercase;
            }
            .education-subtitle {
              font-weight: bold; /* Texto em negrito */
            }
            .experience-title {
              color: #07d2be; /* Cor do experience-title */
              font-weight: bold; /* Texto em negrito */
            }
            .experience-subtitle {
              font-weight: bold; /* Texto em negrito */
            }
            .skill-name {
              font-weight: bold; /* Texto em negrito */
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
              margin-bottom: 30px;
            }
            .section-right {
              margin-bottom: 30px;
            }
            .skill, .education, .certification, .reference, .interest {
              margin-bottom: 15px;
            }
            .experience {
              margin-bottom: 15px;
            }
            .experience-separator {
              border: 0;
              height: 1px;
              background: #e5e5e5;
              margin: 15px 0;
              width: 75%;
              
              margin-left: auto;
              margin-right: auto;

            }
            .experience-company, .skill-percentage, .education-institution, .certification-institution, .reference-position, .interest-description {
              color: #666;
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
            .experience-table{
              width: 100%;
              border-collapse: collapse;
              margin-top: 20px;
              margin-bottom: 20px;
              font-size: 10px;
            }
            .experience-table-head{
              background-color: #07d2be;
              color: white;
            }
            .experience-table-head th{
              padding: 8px;
            }
            .experience-table tbody tr:nth-child(odd){
              background-color: #f9f9f9;
            }
            .experience-table tbody tr:nth-child(even){
              background-color: #f0f0f0;
            }
            .experience-table tbody tr td{
              padding:8px;
            }
            .section-expertise{
              font-size: 12px;
              color: #666;
              word-spacing: 0.1em;
              font-weight: bold;
            }
            .reference-section{
              display: grid;
              grid-template-columns: 1fr 1fr;
            }
            .reference{
              margin-bottom: 15px;
            }
            .reference-name{
              font-weight: bold;
            }
            .reference-position{
              color: #666;
              font-size: 12px;
            }
            .interest{
              margin-bottom: 15px;
              display: flex;
              align-items: center;
              flex-direction: column;

            }
            .interest-title{
              font-size: 12px;
            }
            .interest-icon{
              font-size: 28px;
              color: #07d2be;
              margin-right: 5px;
            }
            .section-interest{
              font-size: 18px;
              color: #666;
              word-spacing: 0.1em;
              display: flex;
              flex-wrap: nowrap;
              justify-content: space-between;
              
              width: 50%;
              margin-left: auto;
              margin-right: auto;

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
                <div></div>
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
                  ${education
                    .map(
                      (edu) => `
                    <div class="education">
                      <div class="education-title">${edu.courseName}</div>
                      <div class="education-institution">${edu.institution} - ${edu.year}</div>
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

              </div> <!-- Fechamento da div left-column -->
              <div class="right-column">
                    <div class="section-right">
                <h3>Profile</h3>
                <p>${personalInfo.profile}</p>

                <h3 class="section-title">Work Experience</h3>
                ${experiences
                  .map(
                    (exp: IExperience) => `
                  <div class="experience">
                    <h4 class="experience-title">${
                      exp.title
                    }  <span class="experience-company"> | ${
                      exp.company
                    }</span></h4>
                    <div>${exp.year} - ${exp.locality}</div>
                    <p>${exp.description}</p>
                    <div class="tags">${exp.tags.join(", ")}</div>
                  </div>
                `
                  )
                  .join("")}
              
                  </div>

                <div class="section">
                <h4 class="section-title">Previous Experiences</h4>
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



                <div class="section">
                  <h4 class="section-title">References</h4>
                      <div class="reference-section">
                  ${references
                    .map(
                      (ref) => `
                    <div class="reference">
                      <div class="reference-name">${ref.name}</div>
                      <div class="reference-position">${ref.description}</div>
                      <div class="reference-position">${ref.phone}</div>
                      <div class="reference-position">${ref.email}</div>
                    </div>
                  `
                    )
                    .join("")}
                  </div>
                </div>

                <div class="section">
                    <h4 class="section-title">Interests</h4>
                   
                    <div class="section-interest">
                      ${interests
                        .map(
                          (interest) => `
                        <div class="interest">
                          <i class="interest-icon ${interest.icon}"></i>
                          <h4 class="interest-title">${interest.title}</h4>
                        </div>
                      `
                        )
                        .join("")}
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
