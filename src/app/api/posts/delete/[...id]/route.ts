import { deletePost } from '../../../_controllers/posts';

export async function DELETE(
  request: Request,
  params: { params: { id: number } }
) {
  console.log(request.url);
    const data = await deletePost(params.params.id);

    console.log(data)

  return Response.json({data});
}
