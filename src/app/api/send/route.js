import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL; // Harus dari domain yang terverifikasi
const adminEmail = "trickster21ad@gmail.com"; // Ganti dengan email pribadimu

export async function POST(req) {
  try {
    // Ambil data dari request body
    const { email, subject, message } = await req.json();

    // Kirim email dengan Resend
    const data = await resend.emails.send({
      from: fromEmail, // Tetap pakai email dari domain yang diverifikasi
      to: [adminEmail], // Email tujuan (milikmu)
      reply_to: email, // Supaya bisa langsung dibalas ke pengirim
      subject: `New Message: ${subject}`, // Bisa tambahkan prefix biar jelas
      html: `
        <h1>${subject}</h1>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
