"use client";

import { useState } from "react";
import {
  youtubeEmbedSrc,
  youtubePosterUrl,
  youtubeWatchUrl,
  YOUTUBE_POSTER_QUALITIES
} from "../../lib/youtube";

type Props = {
  videoId: string;
  title: string;
};

export function YoutubeEmbed({ videoId, title }: Props) {
  const [playing, setPlaying] = useState(false);
  const [posterTier, setPosterTier] = useState(0);
  const watchUrl = youtubeWatchUrl(videoId);
  const quality = YOUTUBE_POSTER_QUALITIES[posterTier] ?? "hqdefault";
  const posterSrc = youtubePosterUrl(videoId, quality);

  const bumpPosterQuality = () => {
    setPosterTier((i) =>
      i < YOUTUBE_POSTER_QUALITIES.length - 1 ? i + 1 : i
    );
  };

  return (
    <article className="video-card">
      <div className="video-frame">
        {playing ? (
          <iframe
            src={youtubeEmbedSrc(videoId, true)}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="video-poster"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={posterSrc}
              alt=""
              className="video-poster-img"
              referrerPolicy="no-referrer"
              onError={bumpPosterQuality}
            />
            <span className="video-play-badge" aria-hidden />
          </button>
        )}
      </div>
      <a className="video-open-yt" href={watchUrl} target="_blank" rel="noreferrer">
        Watch on YouTube
      </a>
    </article>
  );
}
