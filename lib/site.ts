/** Public site origin for metadata. Set `NEXT_PUBLIC_SITE_URL` on the host (e.g. https://your-app.onrender.com). */
export function getSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (raw) {
    const withProto = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
    try {
      return new URL(withProto).origin;
    } catch {
      /* ignore */
    }
  }
  return "https://www.blackcamelmedia.com";
}
