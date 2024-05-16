import { dbConnect } from '@/middleware/mongoose';
import Invoice from '@/models/Invoices';

export async function GET(request: Request) {
  const con = await dbConnect();

  const invoice = await Invoice.find({});

  return Response.json(invoice);
}
