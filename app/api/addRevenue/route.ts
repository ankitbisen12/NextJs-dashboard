// app/api/addRevenue/route.ts
import { dbConnect } from "@/middleware/mongoose"
import Revenue from "@/models/Revenue";

export async function POST(request: Request) {
  try {
    await dbConnect();
    // console.log(request);
    const { month, revenue } = await request.json();
    const newRevenue = await Revenue.create({ month, revenue });

    return new Response(JSON.stringify(newRevenue), {
      status: 201,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error adding revenue:", error);
    return new Response(JSON.stringify({ error: "Error adding revenue" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
}
