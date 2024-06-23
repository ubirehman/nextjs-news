import { getAllPosts } from "../_controllers/posts";

export async function GET(request: Request) {
  const data = await getAllPosts();

  return Response.json({ data });
}
