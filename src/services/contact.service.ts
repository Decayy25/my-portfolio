import { ContactProps } from "@/@types/Ui";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});

const escapeHTML = (text: string) => {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const sendContactMail = async (body: ContactProps) => {
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return {
      success: false,
      message: "All fields are required",
    };
  }

  if (!isValidEmail(email)) {
    return {
      success: false,
      message: "Invalid email format",
    };
  }

  const escape = {
    name: escapeHTML(name),
    email: escapeHTML(email),
    message: escapeHTML(message).replace(/\n/g, "<br>"),
  };

  try {
    const info = await transporter.sendMail({
      from: `"${escape.name}" <${process.env.USER_EMAIL}>`,
      replyTo: escape.email,
      to: process.env.USER_EMAIL,
      subject: "Pesan dari website portfolio",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6">
            <h3 style="color: #0f172b;">Pesan Baru dari Website Portfolio</h3>
            <p><b>Nama:</b> ${escape.name}</p>
            <p><b>Email Pengunjung:</b> ${escape.email}</p>
            <p><b>Pesan:</b></p>
            <p style="padding-bottom: 30px;">${escape.message}</p>
            <hr />
            <small>Email ini dikirim otomatis dari website portfolio.</small>
        </div>
        `,
    });

    return {
      success: true,
      result: info,
      message: "Success send mail",
    };
  } catch (error) {
    return {
      success: false,
      message: error instanceof Error ? error.message : "Unknown error",
    };
  }
};

export default sendContactMail;