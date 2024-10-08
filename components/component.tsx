/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rzLwCuWKkcG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link";

export function Component() {
  return (
    <section className="w-full py-24 bg-[#1a1b1e] text-white">
      <div className="container px-4 md:px-6 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Unlock the Power of Dark Mode
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Experience a sleek, modern interface that s easy on the eyes.
          </p>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
