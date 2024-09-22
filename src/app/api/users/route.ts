import { NextRequest, NextResponse } from "next/server";
import connectDB from "@/lib/utils";
import User from "@/lib/models/user";

export async function POST(req: NextRequest) {
  const { name, email, uni } = await req.json();
  await connectDB();
  await User.create({ name, email, uni });
  return NextResponse.json({ message: "nice" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const users = await User.find();
  return NextResponse.json({ users });
}
export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await connectDB();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "del" }, { status: 200 });
}
