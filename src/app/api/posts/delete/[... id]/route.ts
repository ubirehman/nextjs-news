import { deletePost } from '../../../_controllers/posts';

export async function DELETE(
  request: Request,
  params: { params: { id: number } }
) {
  const data = await deletePost(params.params.id);
  return Response.json({ data });
}
