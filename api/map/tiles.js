const UPSTREAM = "https://havenhk.xyz/api/map/tiles";

export default async function handler(req, res) {
  if (req.method !== "GET" && req.method !== "HEAD") {
    res.statusCode = 405;
    res.end("Method Not Allowed");
    return;
  }

  const headers = { "User-Agent": "haven-hk-vercel" };
  if (req.headers.range) headers.Range = req.headers.range;

  const upstream = await fetch(UPSTREAM, {
    method: req.method,
    headers,
  });

  res.statusCode = upstream.status;
  const pass = [
    "content-type",
    "content-length",
    "content-range",
    "accept-ranges",
    "etag",
    "last-modified",
    "cache-control",
  ];
  for (const key of pass) {
    const value = upstream.headers.get(key);
    if (value) res.setHeader(key, value);
  }
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Expose-Headers",
    "Content-Length, Content-Range, Accept-Ranges, ETag",
  );

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  const buf = Buffer.from(await upstream.arrayBuffer());
  res.end(buf);
}
