import React from "react";
import NavBar from "../components/Navbar.jsx"; // Adjust path as needed

export default function Origins() {
  console.log("origins");
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 font-serif">
      {/* NAV BAR */}
      <NavBar />

      {/* PAGE CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">
          How Piracy Built the Global Popularity of Anime
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Anime’s rise as a global cultural force is rooted in a paradox: it was
          both built through piracy and ultimately threatened by it. Before
          anime gained mainstream recognition in the West, it existed almost
          entirely within small, scattered fan circles. As Otmazgin explains,
          anime in the United States was initially driven by “small groups
          scattered across the U.S.” who relied on both legal and illegal
          methods to distribute and consume Japanese media (Otmazgin, 60).
        </p>

        <p className="text-lg leading-relaxed mb-6">
          These early communities played a foundational role. Fans gathered in
          clubs—often on college campuses—to trade VHS tapes, host watch
          parties, and purchase manga (Pinto). These groups acted not only as
          distribution hubs but as translators. Ian Condry describes their early
          translation efforts as “efforts to translate Japanese anime using
          video-editing technology” (Condry, 200). Although illegal, these
          fansub translations allowed non-Japanese-speaking viewers to access
          anime that had no official English release.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          These fan-driven systems also included early forms of quality control.
          Translators, editors, and timers were credited, forming an informal
          network dedicated to cultural exchange. Even so, VHS trading remained
          limited by physical technology, until the internet changed everything.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          In the 1990s and early 2000s, digital editing tools, file compression,
          and peer-to-peer networks transformed fansubbing from local tape
          trading into a vast online movement. What once required mailing VHS
          tapes could now be done instantly through torrents and download links.
          In Brazil, for example, Krystal Urbano notes that fansubbers became
          “the main core of anime distribution for Brazilian fans” (Urbano, 72).
          These fans became curators of culture—choosing shows to distribute,
          deciding how to preserve jokes and honorifics, and maintaining the
          “Japaneseness” of the text.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This approach contrasted sharply with American licensors like 4Kids or
          early Funimation, who often localized shows by altering dialogue,
          rewriting story elements, replacing music, or cutting scenes to fit
          Western tastes (Otmazgin, 61). Fans, by contrast, treated fansubbing
          as cultural mediation and preservation.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          Without this illegal, but passionate work, anime would never have
          reached millions of viewers across the world. The early fan movement
          established the global foundation the industry now relies on.
        </p>
      </div>
    </div>
  );
}
