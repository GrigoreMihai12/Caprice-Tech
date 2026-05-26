/** Verificare parolă Design — funcționează și pe export static (cPanel). */

export async function hashDesignPassword(password: string): Promise<string> {
  const data = new TextEncoder().encode(password);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function safeEqualHex(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return diff === 0;
}

export async function verifyDesignPassword(
  password: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const expectedHash =
    process.env.NEXT_PUBLIC_DESIGN_RESOURCES_PASSWORD_HASH;

  if (expectedHash) {
    const inputHash = await hashDesignPassword(password);
    if (safeEqualHex(inputHash, expectedHash)) {
      return { ok: true };
    }
    return { ok: false, error: "Parolă incorectă." };
  }

  try {
    const res = await fetch("/api/design-unlock", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    const data = (await res.json()) as { error?: string };
    if (res.ok) return { ok: true };
    return { ok: false, error: data.error ?? "Parolă incorectă." };
  } catch {
    return {
      ok: false,
      error: "Nu s-a putut verifica parola. Încercați din nou.",
    };
  }
}
