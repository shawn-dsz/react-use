import { NextResponse } from "next/server";

const FOODS = ["Burger", "Pizza", "Pasta", "Salad"];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return NextResponse.json(FOODS);
}
