import { dbConnect } from '@/middleware/mongoose';
import Revenue from '@/models/Revenue';

export async function GET(request: Request) {
    const con = await dbConnect();

    const revenue = await Revenue.find({});

    return Response.json(revenue);
}


