import { NextResponse } from "next/server";

export async function GET() {
    const where = encodeURIComponent(
      JSON.stringify({
        name: { $exists: true },
        state: { $exists: true },
      })
    );
  
    const response = await fetch(
      `https://parseapi.back4app.com/classes/University?count=1&limit=1000&where=${where}`,
      {
        headers: {
          "X-Parse-Application-Id": "Ipq7xXxHYGxtAtrDgCvG0hrzriHKdOsnnapEgcbe",
          "X-Parse-Master-Key": "HNodr26mkits5ibQx2rIi0GR9pVCwOSEAkqJjgVp",
        },
      }
    );
  
    const data = await response.json();
    return NextResponse.json(data.results);
  }