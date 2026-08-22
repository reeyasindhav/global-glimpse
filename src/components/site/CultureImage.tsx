import type { ImgHTMLAttributes } from "react";

type CultureImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  /** Images at the top of the page can opt out of native lazy loading. */
  priority?: boolean;
};

/**
 * Wikimedia's original upload URLs frequently point at multi-megabyte files.
 * Requesting a thumbnail keeps the visual source and attribution intact while
 * letting MediaWiki select a suitably small, cached derivative.
 */
function imageSource(src: string, width: number) {
  const marker = "/wikipedia/commons/";
  const index = src.indexOf(marker);

  if (index === -1) return src;

  const filename = src.slice(src.lastIndexOf("/") + 1);
  return `https://commons.wikimedia.org/wiki/Special:Redirect/file/${filename}?width=${width}`;
}

export function CultureImage({
  src,
  alt,
  className,
  priority = false,
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  ...props
}: CultureImageProps) {
  const width = sizes.includes("100vw") ? 960 : 640;

  return (
    <img
      {...props}
      src={src ? imageSource(src, width) : undefined}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : "low"}
      sizes={sizes}
    />
  );
}
