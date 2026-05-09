import Image from "next/image";
import samPortrait from "../assets/sam-portrait.png";
import brandLogo from "../assets/black-camel-logo.png";
import { YoutubeEmbed } from "./components/YoutubeEmbed";
import { extractYoutubeId } from "../lib/youtube";

const photoUrls = [
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1674719609130-GURI116Z4NPLFNEPTDEM/046A8791.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1769748645040-D844UJR6TJSC24JROQ8X/043A8072-2.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1769747945481-ADBJ1T61TAXC9FQYW73U/Nammos-42.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1730971771119-5QPBZHRX95Q4EF8HFR1B/043A1940+copy.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1764678654641-14L73UAWBMKO31TEIVEM/043A7821.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1681305280295-GH3ZRUPMAPWX2EEYP8CC/046A2128-2.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1769749302231-SFRRZRNA60FMLLFF9AOA/043A4898.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1723703924588-RFOIB6I22HBJZQCNWJZU/IMG_3966.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1769748220050-FZX2FMDU9YV3XOFTJZBV/043A9766.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1764678671641-8UDESR84TF3JFG8KE3L3/043A7453.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1724243826926-C38M8714WT269H7MIS7X/043A9884.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1769748001472-5W1G4T4BNEON24WA9BKH/043A9032.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1685119737797-HT63YXAWBKO6R95UMZ69/202800792_866030830671654_7020320399513634454_n.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1723707975043-LXIZ30M65VW4F1KFRQJA/043A5460.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1682368054128-V28L8SXV9LHHYC3G0BM1/242431054_393000165709482_4955622272974566034_n.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1674719860421-LEDPINPT5X3T5QJ1O3GU/046A2251-Edit-3.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1724243912723-0VSH45L0XC9RVV98DS3X/043A9942.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1681297812347-QD17NVOK7FCKMX1FWEQR/043A3984.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1723707788416-RUXKML7WXFC22ZNGAEU9/043A9445.jpg?format=900w",
  "https://images.squarespace-cdn.com/content/v1/5ccc66cf9b8fe87c448ebbb2/1685276374631-Q9QMEGTTIVIBH71ZSF36/043A6007.jpg?format=900w"
];

/* Tile mosaics with 9 cells each; pool repeats URLs so every chapter has images (photoUrls alone is too short). */
const mosaicPool = Array.from({ length: 45 }, (_, i) => photoUrls[i % photoUrls.length]);

const youtubeUrls = [
  "https://youtu.be/rbosk363mYM",
  "https://youtube.com/shorts/pTjQ9g6Y9k8?feature=share",
  "https://youtube.com/shorts/JT1MMCFMLgQ?feature=share",
  "https://youtu.be/cOpMZh58Zuo",
  "https://youtube.com/shorts/pudWuyE070w?feature=share",
  "https://youtube.com/shorts/bFd827o4qj4",
  "https://youtube.com/shorts/pZ_BjdDwq7A",
  "https://youtube.com/shorts/kS_0ac6wvQA?feature=share",
  "https://youtube.com/shorts/2sghMSPJ1Kc?feature=share",
  "https://youtube.com/shorts/KDT20fTlazg?feature=share"
];

const menuItems = [
  "Info",
  "Workflow",
  "Creative Strategy",
  "Documentary",
  "Commercials",
  "Events",
  "Corporate",
  "Social Media",
  "Trusted By"
];

const clienteleLogos = [
  "/trusted/logo-01.png",
  "/trusted/logo-02.png",
  "/trusted/logo-03.png",
  "/trusted/logo-04.png",
  "/trusted/logo-05.png",
  "/trusted/logo-06.png",
  "/trusted/logo-07.png",
  "/trusted/logo-08.png",
  "/trusted/logo-09.png",
  "/trusted/logo-10.png",
  "/trusted/logo-11.png",
  "/trusted/logo-12.png",
  "/trusted/logo-13.png",
  "/trusted/logo-14.png",
  "/trusted/logo-15.png",
  "/trusted/logo-16.png",
  "/trusted/logo-17.png",
  "/trusted/logo-18.png",
  "/trusted/logo-19.png"
];

const chapterBlocks = [
  {
    id: "creative",
    title: "Creative Strategy",
    subtitle: "Identity Blueprint",
    lines: ["Clear Brand Identity", "Building Community", "Effective Market Positioning"],
    images: mosaicPool.slice(0, 9)
  },
  {
    id: "documentary",
    title: "Documentary",
    subtitle: "Testimonials",
    lines: ["Compelling impact narratives", "Authentic real-life stories", "Driving awareness"],
    images: mosaicPool.slice(9, 18)
  },
  {
    id: "commercials",
    title: "Commercials",
    subtitle: "Creative Storytelling",
    lines: ["Dynamic brand narratives", "Engaging visual stories", "Impactful ad campaigns"],
    images: mosaicPool.slice(18, 27)
  },
  {
    id: "events",
    title: "Events",
    subtitle: "Live Event Coverage",
    lines: ["Memorable moments", "Unforgettable experiences", "Dynamic event footage"],
    images: mosaicPool.slice(27, 36)
  },
  {
    id: "corporate",
    title: "Corporate",
    subtitle: "Business Highlights",
    lines: ["Focused on details", "Success stories", "Distinct brand value"],
    images: mosaicPool.slice(36, 45)
  }
];

type InstagramMedia = {
  id: string;
  caption?: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url?: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
};

async function getInstagramPosts(): Promise<InstagramMedia[]> {
  const userId = process.env.INSTAGRAM_USER_ID;
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
  if (!userId || !accessToken) return [];

  const endpoint = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp&limit=12&access_token=${accessToken}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const response = await fetch(endpoint, {
      next: { revalidate: 3600 },
      signal: controller.signal
    });
    if (!response.ok) return [];
    const payload = (await response.json()) as { data?: InstagramMedia[] };
    return payload.data ?? [];
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}

export default async function HomePage() {
  const instagramPosts = await getInstagramPosts();

  return (
    <div className="page-bg">
      <main className="project">
        <header className="hero" id="top">
          <div className="hero-media" aria-hidden="true">
            <Image
              src="/hero.png"
              alt=""
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="hero-img"
            />
          </div>
          <div className="hero-scrim" aria-hidden="true" />
          <div className="hero-overlay">
            <p className="tag">BlackCamelMedia</p>
            <h1>
              FILM
              <br />
              PORTFOLIO
            </h1>
            <p className="hero-meta">VOL.2026</p>
          </div>
        </header>

        <section className="section chapter-menu">
          <aside className="left-rail">
            <span>Film Portfolio</span>
            <span>2026</span>
          </aside>
          <div className="chapter-menu-main">
            <div className="brand-block">
              <Image src={brandLogo} alt="Black Camel Media" priority />
            </div>
            <div className="menu-list">
            {menuItems.map((item, index) => (
              <p key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </p>
            ))}
            </div>
          </div>
        </section>

        <section className="section info-section" id="about">
          <aside className="left-rail">
            <span>Film Portfolio</span>
            <span>2026</span>
          </aside>
          <div className="info-card">
            <div className="info-profile">
              <div className="portrait-wrap">
                <Image
                  src={samPortrait}
                  alt="Portrait of Sambhav Mehra"
                  fill
                  sizes="(max-width: 900px) 88vw, 292px"
                  className="portrait-img"
                  priority
                />
              </div>
              <p className="info-tagline">
                | Creative strategist | Photographer | Filmmaker | Content creator |
              </p>
              <div className="info-block info-block--about">
                <h3 className="info-heading-about">About me</h3>
                <div className="info-prose">
                  <p>
                    I&apos;m Sambhav Mehra, photographer and filmmaker based in Dubai,
                    creating premium campaigns across hospitality, food and lifestyle.
                  </p>
                  <p>
                    Founder of Black Camel Media LLC, producing visual work across the
                    Middle East.
                  </p>
                </div>
              </div>
            </div>

            <div className="info-col info-col--a">
              <div className="info-block">
                <h3>Roles</h3>
                <ul>
                  <li>Creative Strategy</li>
                  <li>Project Manager</li>
                  <li>Filmmaker</li>
                  <li>Post-Producer</li>
                  <li>Content Creator</li>
                </ul>
              </div>
              <div className="info-block">
                <h3>Software</h3>
                <ul>
                  <li>Premiere</li>
                  <li>After Effects</li>
                  <li>DaVinci Resolve</li>
                  <li>Capture One</li>
                </ul>
              </div>
              <div className="info-block">
                <h3>Contact</h3>
                <ul className="info-contact-list">
                  <li>
                    <a href="mailto:sam@blackcamelmedia.com">sam@blackcamelmedia.com</a>
                  </li>
                  <li>
                    <a href="https://www.samfotoart.com/" target="_blank" rel="noreferrer">
                      samfotoart.com
                    </a>
                  </li>
                  <li>Dubai, UAE</li>
                </ul>
              </div>
            </div>

            <div className="info-col info-col--b">
              <div className="info-block">
                <h3>Skills</h3>
                <ul>
                  <li>Concept Development</li>
                  <li>Planning &amp; Scheduling</li>
                  <li>Cinematography</li>
                  <li>Video Editing / Grading</li>
                </ul>
              </div>
              <div className="info-block">
                <h3>Links</h3>
                <div className="social-row" aria-label="Social links">
                  <a
                    className="social-icon"
                    href="https://www.instagram.com/blackcamelmedia/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                      />
                    </svg>
                  </a>
                  <a
                    className="social-icon"
                    href="mailto:sam@blackcamelmedia.com"
                    aria-label="Email"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
                      />
                    </svg>
                  </a>
                  <a
                    className="social-icon"
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="YouTube"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                      />
                    </svg>
                  </a>
                  <a
                    className="social-icon"
                    href="https://www.samfotoart.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Website"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
                      <path
                        fill="currentColor"
                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="info-col info-col--c">
              <div className="info-block">
                <h3>Interests</h3>
                <ul>
                  <li>Culture</li>
                  <li>Documentary</li>
                  <li>Sports</li>
                  <li>Design</li>
                </ul>
              </div>
              <div className="info-block">
                <h3>Languages</h3>
                <ul>
                  <li>English</li>
                  <li>Hindi</li>
                </ul>
              </div>
              <div className="info-block info-block--brand">
                <h3>Brand</h3>
                <div className="brand-lockup">
                  <Image
                    src={brandLogo}
                    alt="Black Camel Media"
                    width={160}
                    height={160}
                    className="brand-lockup-mark"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section workflow-section">
          <aside className="left-rail">
            <span>Film Portfolio</span>
            <span>2026</span>
          </aside>
          <div className="workflow-content">
            <h2 className="arrow-title">Workflow</h2>
            {[
              ["Kick-off", "Meet with clients to understand their vision and requirements."],
              ["Budget", "Finalize budget via transparent communication and negotiation."],
              ["Pre-Production", "Develop concept, style and production-ready treatment."],
              ["Production", "Capture high-quality footage while aligning with the vision."],
              ["Post-Production", "Edit, grade and finalize visual and sound polish."],
              ["Delivery", "Deliver final assets ensuring expectations are exceeded."]
            ].map(([step, text]) => (
              <div className="workflow-row" key={step}>
                <h3>{step}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        {chapterBlocks.map((block) => (
          <section className="section chapter-block" key={block.id} id={block.id}>
            <aside className="left-rail">
              <span>Film Portfolio</span>
              <span>2026</span>
            </aside>
            <div className="chapter-content">
              <div className="chapter-copy">
                <h2 className="arrow-title">{block.title}</h2>
                <h3 className="chapter-subtitle">{block.subtitle}</h3>
                {block.lines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
              <div className="mosaic-grid">
                {block.images.map((url, index) => (
                  <div className="mosaic-cell" key={`${block.id}-${url}-${index}`}>
                    <Image
                      src={url}
                      alt={`${block.title} ${index + 1}`}
                      fill
                      sizes="(max-width: 900px) 50vw, 28vw"
                      className="mosaic-img"
                      unoptimized
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="section chapter-block" id="videos">
          <aside className="left-rail">
            <span>Film Portfolio</span>
            <span>2026</span>
          </aside>
          <div className="chapter-content">
            <div className="chapter-copy">
              <h2 className="arrow-title arrow-title--stack">
                <span className="arrow-title-line">Social</span>
                <span className="arrow-title-line">Media</span>
              </h2>
              <h3 className="chapter-subtitle">Awareness</h3>
              <p>Community Package</p>
              <p>Elevate your brand&apos;s reach</p>
              <p>Keep engagement high</p>
            </div>
            <div className="video-grid">
              {youtubeUrls.map((url, index) => {
                const videoId = extractYoutubeId(url);
                if (!videoId) return null;
                return (
                  <YoutubeEmbed
                    key={url}
                    videoId={videoId}
                    title={`Sam portfolio video ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section className="section chapter-block" id="instagram">
          <aside className="left-rail">
            <span>Film Portfolio</span>
            <span>2026</span>
          </aside>
          <div className="chapter-content">
            <div className="chapter-copy">
              <h2 className="arrow-title">Instagram</h2>
              <h3 className="chapter-subtitle">Black Camel Media</h3>
              <p>Live social feed</p>
              <p>Updated automatically</p>
              <p>
                <a href="https://www.instagram.com/blackcamelmedia/" target="_blank" rel="noreferrer">
                  @blackcamelmedia
                </a>
              </p>
            </div>
            {instagramPosts.length > 0 ? (
              <div className="instagram-grid">
                {instagramPosts.map((post) => {
                  const preview = post.media_type === "VIDEO" ? post.thumbnail_url : post.media_url;
                  if (!preview) return null;
                  return (
                    <a
                      className="instagram-card"
                      key={post.id}
                      href={post.permalink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span className="instagram-cell">
                        <img
                          src={preview}
                          alt={post.caption ?? "Instagram post"}
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </span>
                      {post.media_type === "VIDEO" && <span className="media-pill">Video</span>}
                    </a>
                  );
                })}
              </div>
            ) : (
              <div className="instagram-empty">
                <p>
                  Instagram feed will appear here after adding `INSTAGRAM_USER_ID` and
                  `INSTAGRAM_ACCESS_TOKEN` in `.env.local`.
                </p>
              </div>
            )}
          </div>
        </section>

        <section className="section trusted-section">
          <aside className="left-rail">
            <span>Film Portfolio</span>
            <span>2026</span>
          </aside>
          <div className="trusted-content">
            <h2>Trusted By</h2>
            <div className="logos">
              {clienteleLogos.map((logoUrl, index) => (
                <Image
                  key={logoUrl}
                  src={logoUrl}
                  alt={`Brand logo ${index + 1}`}
                  width={250}
                  height={100}
                  unoptimized
                />
              ))}
            </div>
          </div>
        </section>

        <section className="final-contact" id="contact">
          <div className="final-contact-photo">
            <Image
              src="/collaborate-bg.png"
              alt=""
              fill
              sizes="100vw"
              className="final-contact-img"
            />
          </div>
          <div className="contact-overlay">
            <h2>Let&apos;s collaborate</h2>
            <a href="mailto:sam@blackcamelmedia.com">sam@blackcamelmedia.com</a>
          </div>
        </section>
      </main>
    </div>
  );
}
