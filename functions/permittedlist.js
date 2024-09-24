export function onRequest(context) {
  if (context.request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  return new Response(JSON.stringify({ hello: "world" }), { status: 200 });
}
