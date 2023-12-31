import SearchWiki from "@/components/SearchWiki";
import Head from "next/head";

export default function Wiki() {
  return (
    <>
      <Head>
        <title>Spacemony - Wiki</title>
        <meta name="description" content="Cb-7 Final Project gruppo-B" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://img.freepik.com/free-vector/astronaut-holding-flag-space-cartoon-icon-illustration-technology-space-icon-isolated-flat-cartoon-style_138676-3099.jpg?w=2000"
        />
      </Head>
      <main className="Main__Wiki">
        <SearchWiki />
      </main>
    </>
  );
}
