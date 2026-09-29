import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight, BookOpen, LibraryBig } from "lucide-react";
import type { ReactElement } from "react";

import { RecordStack } from "@/components/record-stack";
import type { RecordEntry } from "@/lib/source";

export function HomeCover({
  foot,
  mark,
  name,
  title,
  purpose,
  documents,
  firstUrl,
  lead,
  behind,
}: {
  mark: StaticImageData;
  name: string;
  title: string;
  purpose: string | null;
  documents: number;
  firstUrl: string;
  /** The document `Open the record` opens, as the record describes it. */
  lead: RecordEntry;
  /** The entries standing behind it in the stack. */
  behind: readonly RecordEntry[];
  /** Signed from inside the cover, so the front door is one screen. */
  foot?: ReactElement;
}): ReactElement {
  return (
    <section className="relative flex min-h-[calc(100dvh-3.5rem)] flex-col overflow-hidden bg-[var(--ksor-cover)] text-[var(--ksor-cover-foreground)]">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[var(--ksor-cover-rule)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-[var(--ksor-cover-rule)]"
      />

      <div className="relative flex flex-1 items-start">
        <div className="mx-auto grid w-full max-w-6xl items-start gap-12 px-5 py-10 sm:px-6 sm:py-14 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:gap-16">
          <div>
            <div className="motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500">
              <div className="flex flex-wrap items-center gap-3">
                <Image
                  src={mark}
                  alt=""
                  width={30}
                  height={30}
                  priority
                  className="size-[30px] rounded-md ring-1 ring-[var(--ksor-cover-rule)]"
                />
                <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--ksor-cover-muted)] uppercase">
                  Study record
                  <span
                    aria-hidden
                    className="mx-2 text-[var(--ksor-cover-rule)]"
                  >
                    /
                  </span>
                  <span className="normal-case">{name}</span>
                </p>
              </div>

              <h1 className="mt-7 max-w-2xl font-display text-[clamp(2.25rem,4.4vw,3.65rem)] leading-[1.07] font-semibold tracking-[-0.018em] text-balance">
                {title}
              </h1>
            </div>

            {purpose === null ? null : (
              <p className="relative mt-6 max-w-xl text-base/8 text-pretty text-[var(--ksor-cover-muted)] sm:text-lg/8 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500 motion-safe:[animation-delay:120ms] motion-safe:[animation-fill-mode:backwards]">
                {purpose}
              </p>
            )}

            <dl className="mt-8 grid max-w-xl grid-cols-2 border-y border-[var(--ksor-cover-rule)] py-4 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500 motion-safe:[animation-delay:180ms] motion-safe:[animation-fill-mode:backwards] sm:grid-cols-[repeat(2,minmax(0,12rem))]">
              <div className="border-r border-[var(--ksor-cover-rule)] pr-4">
                <dt className="flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-[var(--ksor-cover-muted)] uppercase">
                  <LibraryBig aria-hidden className="size-3.5" />
                  Materials
                </dt>
                <dd className="mt-1 text-2xl font-semibold tabular-nums">
                  {documents}
                </dd>
              </div>
              <div className="pl-4">
                <dt className="flex items-center gap-2 font-mono text-[10px] tracking-[0.14em] text-[var(--ksor-cover-muted)] uppercase">
                  <BookOpen aria-hidden className="size-3.5" />
                  First stop
                </dt>
                <dd className="mt-1 truncate text-sm font-medium">
                  {lead.title}
                </dd>
              </div>
            </dl>

            <div className="mt-9 flex flex-wrap items-center gap-3 motion-safe:animate-in motion-safe:fade-in motion-safe:duration-500 motion-safe:[animation-delay:240ms] motion-safe:[animation-fill-mode:backwards]">
              <Link
                href={firstUrl}
                className="group inline-flex items-center gap-2.5 rounded-md bg-[var(--ksor-cover-foreground)] px-4 py-2.5 text-sm font-semibold text-[var(--ksor-cover-panel)] shadow-[0_8px_20px_-12px_rgb(0_0_0/0.55)] transition-all hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-12px_rgb(0_0_0/0.65)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring motion-reduce:transform-none motion-reduce:transition-none"
              >
                Start studying
                <ArrowRight
                  aria-hidden
                  className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transform-none"
                />
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center gap-2.5 rounded-md border border-[var(--ksor-cover-panel-rule)] bg-[var(--ksor-cover-panel)] px-5 py-3 text-sm font-medium text-[var(--ksor-cover-foreground)] transition-colors hover:bg-[var(--ksor-cover-hover)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-ring"
              >
                <LibraryBig aria-hidden className="size-4" />
                Browse all
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <RecordStack lead={lead} behind={behind} documents={documents} />
          </div>
        </div>
      </div>
      {foot === undefined ? null : <div className="relative pb-10">{foot}</div>}
    </section>
  );
}
