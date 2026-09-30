import type { ReactElement } from "react";
import { ExternalLink } from "lucide-react";
import { BuiltWith } from "@/components/built-with";
import { audienceNotice } from "@/lib/audience";

/**
 * The foot of the site chrome: who built it, and — on any build below the
 * public tier — which audience that build was for, so a screenshot of an
 * internal site names itself and a page that escapes carries its own
 * warning.
 *
 * The public build renders the attribution ALONE, exactly as a site with no
 * audience model does: the one build with nothing to disclose must not even
 * carry the shape of a disclosure.
 */
export function FooterMark(): ReactElement {
  const notice = audienceNotice();
  return (
    <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
      <span>Study notes by Shazil Khan</span>
      <span aria-hidden className="text-fd-muted-foreground">
        ·
      </span>
      <a
        href="https://github.com/shazilk-dev"
        target="_blank"
        rel="noreferrer"
        aria-label="Shazil Khan on GitHub"
        title="GitHub"
        className="inline-flex items-center gap-1 transition-colors hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
      >
        GitHub
        <ExternalLink aria-hidden className="size-3" />
      </a>
      <a
        href="https://instagram.com/risewith.sk"
        target="_blank"
        rel="noreferrer"
        aria-label="Shazil Khan on Instagram"
        title="Instagram"
        className="inline-flex items-center gap-1 transition-colors hover:text-fd-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
      >
        Instagram
        <ExternalLink aria-hidden className="size-3" />
      </a>
      <span aria-hidden className="text-fd-muted-foreground">
        ·
      </span>
      <BuiltWith />
      {notice === null ? null : (
        <>
          <span aria-hidden className="text-fd-muted-foreground">
            ·
          </span>
          <span className="text-fd-muted-foreground">{notice}</span>
        </>
      )}
    </span>
  );
}
