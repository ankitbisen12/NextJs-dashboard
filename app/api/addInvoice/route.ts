import { dbConnect } from '@/middleware/mongoose';
import Invoice from '@/models/Invoices';

export async function POST(request: Request) {
  try {
    await dbConnect();
    // console.log(request);
    const data = await request.json();
    // console.log("data",data);
    const newRevenue = await Invoice.create(data);

    return new Response(JSON.stringify(newRevenue), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error adding InVoice:', error);
    return new Response(JSON.stringify({ error: 'Error adding revenue' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
