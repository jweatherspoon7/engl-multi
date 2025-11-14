import React from "react";
import NavBar from "../components/Navbar.jsx"; // Adjust path as needed

export default function Relationship() {
  console.log("Relationship");
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 font-serif">
      {/* NAV BAR */}
      <NavBar />

      {/* PAGE CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">
          Why Japanese Studios Tolerate Piracy (and Why the Rest of the World
          Doesn’t){" "}
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Japan’s relationship with piracy is strikingly different from most
          countries. Many Japanese companies have historically tolerated certain
          forms of copyright infringement because they view fan activity as
          beneficial to long-term market growth. Tianxiang He describes this
          strategy as one shaped by intentional “strategic ignorance,”
          explaining that the anime and manga industries “have tolerated these
          fan-based activities… simply because their existence benefits the
          industry as a whole” (He, 1014).
        </p>

        <p className="text-lg leading-relaxed mb-6">
          In Japan, fan-made works—though technically illegal—are treated as
          grassroots marketing tools. Doujinshi, fansubs, and derivative art
          generate enthusiasm for franchises, prolong interest, and create
          dedicated communities. Arai and Kinukawa’s economic model supports
          this view, concluding that “ignoring copyright infringement by a
          derivative creator can be optimal for the copyright holder” (Arai &
          Kinukawa, 131). In other words, tolerating fan activity can maximize
          both cultural reach and profit.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          However, this strategic tolerance rarely extends beyond Japan. He
          explains that “foreign copyright strategies towards fan activities
          abroad appear more of a reaction, more of a last-ditch move” (He,
          1017). Outside Japan, infringement is seen largely as a financial
          threat rather than a cultural asset. Japanese companies recognize that
          controlling online piracy in international markets is nearly
          impossible, but they do not offer the same deliberate openness abroad.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Even with strategic tolerance, the consequences of piracy are
          significant. According to Kyodo News, online piracy of Japanese
          entertainment caused an estimated loss of 2 trillion yen ($15 billion)
          in 2021. These numbers reflect a growing global problem, as illegal
          streaming and download sites continue to expand.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          At the same time, the anime industry is more profitable than ever. The
          Association of Japanese Animation reports that as of 2024, the anime
          market reached 3.347 trillion yen, or 114.3% of the previous year’s
          profits. This means that while piracy cuts into revenue, industry
          growth continues to accelerate.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The result is a fundamental tension: piracy harms profits but expands
          cultural influence. Japanese studios must balance strict enforcement
          with the recognition that fan-driven distribution helped anime become
          a global phenomenon.
        </p>
      </div>
    </div>
  );
}
