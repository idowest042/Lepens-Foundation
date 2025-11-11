// utils/sendEmail.js
import nodemailer from "nodemailer";

export const sendVerificationEmail = async (recipientEmail, code) => {
  // create transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // SSL
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const fromName = process.env.EMAIL_FROM_NAME || "LEPENS Admin";
  const logoUrl =
    process.env.EMAIL_LOGO_URL ||
    "https://via.placeholder.com/160x60.png?text=LEPENS+Logo";

  // Plain text fallback
  const textBody = `Verify your LEPENS admin account.

Verification code: ${code}

This code is valid for 10 minutes.
If you did not request this, please ignore this message.`;

  // HTML body (uses your color palette - Navy, Gold, Ivory, Light Gray)
  const htmlBody = `
  <!doctype html>
  <html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>LEPENS Admin Verification</title>
    <style>
      :root{
        --navy: #0A2342;
        --gold: #CBA135;
        --ivory: #FFFCEF;
        --light-gray: #F5F7FA;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial;
        background-color: var(--light-gray);
      }
      .wrapper {
        max-width: 600px;
        margin: 36px auto;
        background: var(--ivory);
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 8px 24px rgba(10, 35, 66, 0.12);
        border: 1px solid rgba(10,35,66,0.06);
      }
      .header {
        background: linear-gradient(90deg, rgba(10,35,66,1) 0%, rgba(10,35,66,0.95) 100%);
        padding: 20px 24px;
        display:flex;
        align-items: center;
        gap: 16px;
      }
      .logo img {
        display:block;
        width: 120px;
        height: auto;
        object-fit: contain;
        border-radius: 6px;
        background: rgba(255,255,255,0.02);
        padding:4px;
      }
      .brand-title {
        color: var(--ivory);
        font-size: 18px;
        font-weight: 700;
        letter-spacing: 0.2px;
      }
      .content {
        padding: 28px 28px;
        text-align: left;
      }
      .title {
        color: var(--navy);
        font-size: 20px;
        font-weight: 700;
        margin: 6px 0 12px;
      }
      .lead {
        color: #39424b;
        font-size: 15px;
        line-height: 1.5;
        margin-bottom: 18px;
      }
      .code-box {
        display:block;
        max-width: 320px;
        margin: 14px auto;
        text-align: center;
        background: var(--navy);
        color: var(--ivory);
        font-size: 26px;
        font-weight: 800;
        letter-spacing: 4px;
        padding: 14px 18px;
        border-radius: 8px;
      }
      .small {
        font-size: 13px;
        color: #6b7280;
        margin-top: 18px;
        text-align: center;
      }
      .footer {
        padding: 14px 20px;
        text-align: center;
        font-size: 12px;
        color: #98a0aa;
        background: transparent;
      }

      /* responsive */
      @media (max-width: 520px){
        .wrapper { margin: 18px; }
        .brand-title { font-size: 16px; }
        .code-box { font-size: 22px; max-width: 100%; letter-spacing: 3px; }
      }
    </style>
  </head>
  <body>
    <div class="wrapper">
      <div class="header">
        <div class="logo">
          <img src="${logoUrl}" alt="LEPENS Logo" />
        </div>
        <div>
          <div class="brand-title">${fromName}</div>
        </div>
      </div>

      <div class="content">
        <div class="title">Verify Your Email Address</div>

        <div class="lead">
          Hi there 👋,<br/>
          Thank you for registering as an admin for <strong>LEPENS</strong>. Please use the verification code below to complete your account setup. The code is valid for the next <strong>10 minutes</strong>.
        </div>

        <div class="code-box">${code}</div>

        <div class="small">
          If you did not request this verification, you can ignore this email.
        </div>
      </div>

      <div class="footer">
        &copy; ${new Date().getFullYear()} LEPENS. All rights reserved.<br/>
        This is an automated message — please do not reply to this email.
      </div>
    </div>
  </body>
  </html>
  `;

  const mailOptions = {
    from: `"${fromName}" <${process.env.EMAIL_USERNAME}>`,
    to: recipientEmail,
    subject: "✅ Verify Your LEPENS Admin Account",
    text: textBody,
    html: htmlBody,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    // optional: return info for logging
    return { success: true, info };
  } catch (err) {
    // log error server-side
    console.error("sendVerificationEmail error:", err);
    return { success: false, error: err };
  }
};