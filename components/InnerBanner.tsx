type BannerLink = {
  url: string;
  title: string;
  target?: string;
};

type BannerProps = {
  title?: string;
  image?: string;
  link?: BannerLink;
  link2?: BannerLink;
  fallbackTitle?: string; // from page context
  type?: "single" | "category" | "home" | "page";
};

export default function BannerDefault({
  title,
  image,
  link,
  link2,
  fallbackTitle,
  type = "page",
}: BannerProps) {
  const bannerImage =
    image || "https://griffinheadlesscms.kinsta.cloud/wp-content/uploads/2025/09/arizona-skyline-e1757520675891.jpg";

  const renderTitle = () => {
    if (title) return title;

    switch (type) {
      case "single":
        return fallbackTitle;
      case "category":
        return `${fallbackTitle} Archives`;
      case "home":
        return "Blog"; // or pass firm name from API
      default:
        return fallbackTitle;
    }
  };

  return (
    <section
      className="banner-main bg-image bg-center bg-cover bg-no-repeat bg-overlay section-pt pb-5 relative"
      style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="container relative max-w-7xl">
        <h1 className="banner-title text-white font-primary fw-normal h1 d-block">{renderTitle()}</h1>
        <div className="d-flex flex-row flex-wrap align-items-center gap-3 mt-5">
          {link ? (<a href={link.url} target={link.target || "_self"} className="btn btn-primary">{link.title}</a>) : (<a href="#footer-contact" className="btn btn-primary btn-arrow btn-arrow-light offset-anchor-link">Free Consultation</a>)}
          {link2 && (<a href={link2.url} target={link2.target || "_self"} className="btn btn-outline-primary">{link2.title}</a>)}
        </div>
      </div>
    </section>
  );
}