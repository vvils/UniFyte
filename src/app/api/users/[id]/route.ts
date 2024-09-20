import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../lib/utils";
import User from "../../../../lib/models/user";

type Params = { params: { id: string } };
//fix
export async function PUT(req: NextRequest, { params }: Params) {
  const { id } = params;
  const { name, email } = await req.json();
  await connectDB();
  await User.findByIdAndUpdate(id, { name, email });
  return NextResponse.json({ message: "updated" }, { status: 200 });
}
export async function GET(req: NextRequest, { params }: Params) {
  const { id } = params;
  await connectDB();
  const user = await User.findOne({ _id: id });
  return NextResponse.json({ user }, { status: 200 });
}
export async function DELETE(req: NextRequest, { params }: Params) {
  const { id } = params;
  await connectDB();
  await User.findByIdAndDelete(id);
  return NextResponse.json({ message: "del" }, { status: 200 });
}
