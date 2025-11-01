
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.formData()
  // TODO: wire to email provider (Resend, SES, etc.). For now, just echo success.
  const payload = Object.fromEntries(data.entries())
  console.log('Contact submission:', payload)
  return NextResponse.json({ ok: true })
}
