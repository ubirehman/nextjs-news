import { getPostById } from '../../_controllers/posts';

export async function GET(
  request: Request,
  params: { params: { id: number } }
) {
  const data = await getPostById(params.params.id);

  return Response.json({ data });
}
