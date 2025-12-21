// @ts-ignore
import nodemailer from "nodemailer"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json()

    // Validasi input
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 })
    }

    // Paksa konfigurasi ke tipe 'any' supaya TypeScript tidak komplain soal 'family'
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST as string,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465", 
      auth: {
        user: process.env.SMTP_USER as string,
        pass: process.env.SMTP_PASS as string,
      },
      // Ini yang bikin error "No Overload", kita paksa lewat casting
      family: 4, 
    } as any) 

    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: `Contact Form: ${name}`,
      text: message,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #B9CFB4; border-radius: 10px; background-color: #0D1A14; color: #B9CFB4;">
          <h2 style="color: #4ADE80;">New Message from Bunglon Web</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <div style="background: #1D412E; padding: 15px; border-radius: 5px; color: #fff;">
            ${message.replace(/\n/g, "<br/>")}
          </div>
        </div>`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json({ ok: true })
  } catch (err: any) {
    console.error("Contact API error:", err)
    return NextResponse.json({ error: err.message || "Failed to send" }, { status: 500 })
  }
}