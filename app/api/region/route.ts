export const runtime = "edge"; // 'nodejs' is the default
// execute this function on iad1 or hnd1, based on the connecting client location
export const preferredRegion = ["sin1"];
export const dynamic = "force-dynamic"; // no caching

export function GET(request: Request) {
  return new Response(
    `I am an Edge Function! (executed on ${process.env.VERCEL_REGION})`,
    {
      status: 200,
    }
  );
}
