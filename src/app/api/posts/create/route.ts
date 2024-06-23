import { createPost } from '../../_controllers/posts';

export async function POST(request: Request) {
  const req = await request.json();
  console.log(req);
  const { title, content } = req;
  const postData = {
    title,
    content,
  };

  const data = await createPost(postData);
  console.log(data);

  return Response.json({ data });
}
