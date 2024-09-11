import { NextRequest, NextResponse } from "next/server";
import Petition from "../../../../lib/models/petition";
import connectDB from "../../../../lib/utils";

export async function POST(req: NextRequest) {
  const { title, desc } = await req.json();
  await connectDB();
  await Petition.create({ title, desc });
  return NextResponse.json({ message: "nice" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const petitions = await Petition.find();
  return NextResponse.json({ petitions });
}
export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await connectDB();
  await Petition.findByIdAndDelete(id);
  return NextResponse.json({ message: "del" }, { status: 200 });
}
