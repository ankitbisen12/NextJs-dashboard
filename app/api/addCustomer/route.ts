import { dbConnect } from '@/middleware/mongoose';
import Customer from '@/models/Customer';

export async function POST(request: Request) {
  try {
    await dbConnect();
    // console.log(request);
    const data = await request.json();
    const newCustomer = await Customer.create(data);

    return new Response(JSON.stringify(newCustomer), {
      status: 201,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('Error adding revenue:', error);
    return new Response(JSON.stringify({ error: 'Error adding revenue' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}