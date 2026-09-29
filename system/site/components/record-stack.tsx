import Link from "next/link";
import { ArrowRight, BookOpen, FileText, FolderOpen } from "lucide-react";
import type { ReactElement } from "react";

import { badgeLabel, badgeTone } from "@/lib/governance";
import type { LifecycleBadge } from "@/lib/lifecycle-rule";
import type { RecordEntry } from "@/lib/source";

export function RecordStack({
  lead,
  behind,
  documents,
}: {
  /** The document `Open the record` lands on. */
  lead: RecordEntry;
  /** The entries standing behind it — at most three; the rest are counted. */
  behind: readonly RecordEntry[];
  /** Every document in the record, for the line beneath the stack. */
  documents: number;
}): ReactElement {
  const footed = lead.owner !== null || lead.documents > 0;
  const entries = [lead, ...behind].slice(0, 4);

  return (
    <div className="w-full max-w-md rounded-xl border border-[var(--ksor-cover-panel-rule)] bg-[var(--ksor-cover-panel)] p-4 shadow-[0_22px_60px_-42px_rgb(15_23_42/0.65)] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-3 motion-safe:duration-700 motion-safe:[animation-delay:180ms] motion-safe:[animation-fill-mode:backwards] sm:p-5">
      <Link
        href={lead.url}
        className="group block rounded-lg border border-[var(--ksor-cover-panel-rule)] bg-[var(--ksor-cover-hover)] p-5 transition-colors hover:border-fd-primary/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
      >
        <div className="flex items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.16em] text-[var(--ksor-cover-muted)] uppercase">
            <BookOpen aria-hidden className="size-3.5" />
            Continue here
          </span>
          {lead.badge === null ? null : <StatusChip badge={lead.badge} />}
        </div>

        <h2 className="mt-3 font-display text-2xl leading-snug font-semibold tracking-[-0.006em] transition-colors group-hover:text-fd-primary">
          {lead.title}
        </h2>

        {lead.description === null ? null : (
          <p className="mt-3 text-sm/relaxed text-pretty text-[var(--ksor-cover-muted)]">
            {lead.description}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between gap-4">
          {!footed ? (
            <span />
          ) : (
            <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-[11px] text-[var(--ksor-cover-muted)]">
              {lead.owner === null ? null : <span>{lead.owner}</span>}
              {lead.documents === 0 ? null : (
                <span className="tracking-wider uppercase tabular-nums">
                  {`${lead.documents} ${lead.documents === 1 ? "doc" : "docs"}`}
                </span>
              )}
            </span>
          )}
          <ArrowRight
            aria-hidden
            className="size-4 shrink-0 text-fd-primary transition-transform group-hover:translate-x-0.5"
          />
        </div>
      </Link>

      <div className="mt-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="font-mono text-[10px] tracking-[0.16em] text-[var(--ksor-cover-muted)] uppercase">
            Study sections
          </h2>
          <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--ksor-cover-muted)] uppercase tabular-nums">
            {`${documents} ${documents === 1 ? "doc" : "docs"}`}
          </span>
        </div>

        <ul className="mt-3 grid gap-2">
          {entries.map((entry) => {
            const Icon = entry.documents > 0 ? FolderOpen : FileText;
            return (
              <li key={entry.url}>
                <Link
                  href={entry.url}
                  className="group flex items-center gap-3 rounded-md px-3 py-2.5 transition-colors hover:bg-[var(--ksor-cover-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
                >
                  <Icon
                    aria-hidden
                    className="size-4 shrink-0 text-[var(--ksor-cover-muted)] transition-colors group-hover:text-fd-primary"
                  />
                  <span className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium transition-colors group-hover:text-fd-primary">
                      {entry.title}
                    </span>
                    {entry.description === null ? null : (
                      <span className="mt-0.5 block truncate text-xs text-[var(--ksor-cover-muted)]">
                        {entry.description}
                      </span>
                    )}
                  </span>
                  <span className="flex shrink-0 items-center gap-2">
                    {entry.badge === null ? null : <StatusChip badge={entry.badge} />}
                    {entry.documents === 0 ? null : (
                      <span className="font-mono text-[10px] tracking-wider text-[var(--ksor-cover-muted)] uppercase tabular-nums">
                        {entry.documents}
                      </span>
                    )}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <Link
        href="/docs"
        className="mt-4 flex items-center justify-center gap-2 rounded-md border border-[var(--ksor-cover-panel-rule)] px-4 py-2.5 text-sm font-medium transition-colors hover:bg-[var(--ksor-cover-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
      >
        View full index
        <ArrowRight aria-hidden className="size-4" />
      </Link>
    </div>
  );
}

/**
 * A caveat badge, in the same chip the record's listings use — only ever a
 * state the machine surfaces decline (record spec §2.5), because a reader
 * already assumes a document in the record is current and stable.
 */
function StatusChip({ badge }: { badge: LifecycleBadge }): ReactElement {
  return (
    <span
      className={`rounded-sm border border-[var(--ksor-cover-rule)] px-1.5 py-0.5 font-mono text-[10px] tracking-widest text-[var(--ksor-cover-foreground)] uppercase ${badgeTone(badge)}`}
    >
      {badgeLabel(badge)}
    </span>
  );
}
