import { NextRequest, NextResponse } from "next/server";

async function middleware(req: NextRequest) {
  console.log("middleware");
  return NextResponse.redirect(new URL("/dashboard", req.url));
}

export default middleware;
