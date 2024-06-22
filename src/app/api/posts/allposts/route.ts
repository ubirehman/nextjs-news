export async function GET(request: Request) {
    const req = await request.json();
    console.log(req);
  
    return Response.json({});
  }
  