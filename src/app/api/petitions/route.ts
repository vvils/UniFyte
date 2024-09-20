import { NextRequest, NextResponse } from "next/server";
import Petition from "../../../lib/models/petition";
import connectDB from "../../../lib/utils";

export async function POST(req: NextRequest) {
  const {
    title,
    desc,
    media = "",
    signed = 0,
    goal = 2000,
    upvotes = 0,
    uni,
    author,
  } = await req.json();
  await connectDB();

  await Petition.create({
    title,
    desc,
    media,
    signed,
    goal,
    upvotes,
    uni,
    author,
  });
  return NextResponse.json({ message: "nice" }, { status: 201 });
}

export async function GET() {
  await connectDB();
  const petitions = await Petition.find().populate("author", "name");

  return NextResponse.json({ petitions });
}
export async function DELETE(req: NextRequest) {
  const id = req.nextUrl.searchParams.get("id");
  await connectDB();
  await Petition.findByIdAndDelete(id);
  return NextResponse.json({ message: "del" }, { status: 200 });
}
