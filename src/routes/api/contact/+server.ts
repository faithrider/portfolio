import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ request }) {
  const { name, email, message } = await request.json();
    // Simple email regex: X@X.X
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ success: false, error: 'Invalid email format.' }), { status: 400 });
    }
  try {
    const { data, error } = await resend.emails.send({
      from: 'Faith Rider <contact@faithmrider.com>',
      to: ['fmhrider@gmail.com'],
      subject: `PORTFOLIO | Contact from ${name}`,
      replyTo: email,
        text: `${message}\n\n----------\n REPLY TO: ${email}`,
    });

    if (error) {
      return new Response(JSON.stringify({ success: false, error }), { status: 500 });
    }

    return new Response(JSON.stringify({ success: true, data }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error && typeof error === 'object' && 'message' in error ? error.message : String(error) }), { status: 500 });
  }
}
