export async function GET() {
  console.log('intentando');
  const res = await fetch(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  const data = await res.json();

  return Response.json({ data });
}
