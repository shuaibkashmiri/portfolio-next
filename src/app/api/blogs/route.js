import { NextResponse } from "next/server";
import connectDB from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { getServerSession } from "next-auth";

// Disable caching for this route
export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(request) {
  try {
    await connectDB();

    const slug = request.nextUrl.searchParams.get("slug");

    if (slug) {
      const blog = await Blog.findOne({ slug }).lean();
      if (!blog) {
        return NextResponse.json({ error: "Blog not found" }, { status: 404 });
      }

      return NextResponse.json(blog, {
        headers: {
          "Cache-Control":
            "no-store, no-cache, must-revalidate, proxy-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      });
    }

    const blogs = await Blog.find().sort({ order: 1 });
    return NextResponse.json(blogs, {
      headers: {
        "Cache-Control":
          "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const session = await getServerSession();
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const data = await request.json();
    const blog = await Blog.create(data);
    return NextResponse.json(blog, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
