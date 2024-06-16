import { signIn } from "../_controllers/authentication"

export async function POST(request: Request) {
  const req = await request.json()
  const signInUser = await signIn(req);
  console.log(signInUser)


    return Response.json({})
  }