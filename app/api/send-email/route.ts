import nodemailer from "nodemailer";

const RECAPTCHA_SECRET_KEY: string | undefined =
  process.env.RECAPTCHA_SECRET_KEY;
const GOOGLE_NODE_MAILER_PASSWORD: string | undefined =
  process.env.GOOGLE_NODE_MAILER_PASSWORD;
const GOOGLE_NODE_MAILER_EMAIL: string | undefined =
  process.env.GOOGLE_NODE_MAILER_EMAIL;

interface RequestBody {
  name: string;
  email: string;
  subject: string;
  message: string;
  recaptcha: string;
}

interface RecaptchaResponse {
  success: boolean;
}

export async function POST(request: Request): Promise<Response> {
  const { name, email, subject, message, recaptcha }: RequestBody =
    await request.json();
  const isProduction = process.env.NODE_ENV === "production";

  if (isProduction) {
    if (
      !RECAPTCHA_SECRET_KEY ||
      !GOOGLE_NODE_MAILER_PASSWORD ||
      !GOOGLE_NODE_MAILER_EMAIL
    ) {
      return new Response("Environment variables not set", { status: 500 });
    }

    const recaptchaSecretKey: string = RECAPTCHA_SECRET_KEY;
    const recaptchaResponse: Response = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${recaptcha}`,
      {
        method: "POST"
      }
    );

    const recaptchaData: RecaptchaResponse = await recaptchaResponse.json();

    if (!recaptchaData.success) {
      return new Response("reCAPTCHA verification failed", { status: 400 });
    }
  } else {
    console.log("reCAPTCHA validation skipped in development mode.");
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GOOGLE_NODE_MAILER_EMAIL,
      pass: GOOGLE_NODE_MAILER_PASSWORD
    }
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color: #007BFF;">New message of Contacts page</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Topic:</strong> ${subject}</p>
      <hr style="border: 1px solid #ddd;">
      <p><strong>Message:</strong></p>
      <p style="background-color: #f9f9f9; padding: 10px; border-radius: 5px;">${message}</p>
    </div>
  `;

  const mailOptions = {
    from: GOOGLE_NODE_MAILER_EMAIL,
    to: GOOGLE_NODE_MAILER_EMAIL,
    subject: `Contact form - My Career website - ${subject}`,
    html: htmlContent,
    replyTo: email
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response("Email sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response("Error sending email", { status: 500 });
  }
}
