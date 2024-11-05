import nodemailer from 'nodemailer';

interface Request {
  json: () => Promise<{
    name: string;
    email: string;
    phone: string;
    projectAddress: string;
    projectDescription: string;
  }>;
}

export async function post({ request }: { request: Request }) {
  const { name, email, phone, projectAddress, projectDescription } = await request.json();

  console.log('Received data:', { name, email, phone, projectAddress, projectDescription }); // Debug log

  // Configure nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
      user: 'unkletas@gmail.com', // Your email
      pass: 'frdm drxh sigy wrjy', // Your email password or app password
    },
  });

  const mailOptions = {
    from: email,
    to: 'unkletas@gmail.com',
    subject: `Contact Form Submission from ${name}`,
    text: `Phone: ${phone}\nProject Address: ${projectAddress}\nProject Description: ${projectDescription}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully'); // Debug log
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error: unknown) {
    console.error('Error sending email:', error); // Log the error for debugging
    return new Response(JSON.stringify({ success: false, error: (error as Error).message }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
