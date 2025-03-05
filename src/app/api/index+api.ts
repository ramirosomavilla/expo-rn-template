export function GET(request: Request) {
  return Response.json({
    response: `This function is executed on a server when the route '/api' is matched.
       Per example, curl http://localhost:8081/api will call this function.`,
  });
}
