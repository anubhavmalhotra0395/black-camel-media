export function extractYoutubeId(url: string): string | null {
  try {
    let raw = url.trim();
    if (!/^https?:\/\//i.test(raw)) raw = `https://${raw}`;
    const parsed = new URL(raw);

    const fromQuery = parsed.searchParams.get("v");
    if (fromQuery) return fromQuery;

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace(/^\//, "").split(/[/?#]/)[0] || null;
    }

    const shorts = parsed.pathname.match(/\/shorts\/([^/?#]+)/);
    if (shorts?.[1]) return shorts[1];

    const embed = parsed.pathname.match(/\/embed\/([^/?#]+)/);
    if (embed?.[1]) return embed[1];

    return null;
  } catch {
    return null;
  }
}

export function youtubeEmbedSrc(videoId: string, autoplay: boolean): string {
  const params = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    ...(autoplay ? { autoplay: "1" } : {})
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${params.toString()}`;
}

export function youtubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

/** YouTube static thumbnails, highest first. Not every size exists for every video. */
export const YOUTUBE_POSTER_QUALITIES = [
  "maxresdefault",
  "sddefault",
  "hqdefault",
  "mqdefault"
] as const;

export function youtubePosterUrl(
  videoId: string,
  quality: (typeof YOUTUBE_POSTER_QUALITIES)[number]
): string {
  return `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`;
}
