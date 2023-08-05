import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      <title>Muhammad Sufyan&apos;s Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Muhammad sufyan, Frontend Website and Mobile Developer"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Muhammad Sufyan. A Frontend Developer and Mobile Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="Muhammad Sufyan"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
