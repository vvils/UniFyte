import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/utils";
import Petition from "@/lib/models/petition";

type Params = { params: { id: string } };

export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = params;
  const { title, desc } = await req.json();
  await connectDB();
  await Petition.findByIdAndUpdate(id, { title, desc });
  return NextResponse.json({ message: "updated" }, { status: 200 });
}
export async function GET(req: NextRequest, { params }: Params) {
  const { id } = params;
  await connectDB();
  const petition = await Petition.findOne({ _id: id }).populate(
    "author",
    "name"
  );
  return NextResponse.json({ petition }, { status: 200 });
}
export async function DELETE(req: NextRequest, { params }: Params) {
  const { id } = params;
  await connectDB();
  await Petition.findByIdAndDelete(id);
  return NextResponse.json({ message: "del" }, { status: 200 });
}
