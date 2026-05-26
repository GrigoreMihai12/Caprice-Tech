import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

function passwordsMatch(provided: string, expected: string): boolean {
  const a = Buffer.from(provided, "utf8");
  const b = Buffer.from(expected, "utf8");
  if (a.length !== b.length) return false;
  return timingSafeEqual(a, b);
}

export async function POST(request: Request) {
  const expected = process.env.DESIGN_RESOURCES_PASSWORD;

  if (!expected) {
    return NextResponse.json(
      { error: "Accesul nu este configurat. Contactați administratorul." },
      { status: 503 },
    );
  }

  let body: { password?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Cerere invalidă." }, { status: 400 });
  }

  const password = typeof body.password === "string" ? body.password : "";

  if (!passwordsMatch(password, expected)) {
    return NextResponse.json({ error: "Parolă incorectă." }, { status: 401 });
  }

  return NextResponse.json({ ok: true });
}
