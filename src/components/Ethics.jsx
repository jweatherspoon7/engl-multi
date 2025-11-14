import React from "react";
import NavBar from "../components/Navbar.jsx"; // Adjust path as needed

export default function Ethics() {
  console.log("Ethics");
  return (
    <div className="min-h-screen w-full bg-gray-100 text-gray-900 font-serif">
      {/* NAV BAR */}
      <NavBar />

      {/* PAGE CONTENT */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-blue-900">
          The Ethics and Future of Anime Piracy
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Modern anime fans navigate a complicated ethical landscape. Piracy is
          illegal, but fans often justify it for reasons that extend beyond
          convenience. Some regions have limited or no legal access to anime.
          Licensing windows can delay releases for months. Certain series never
          receive legal translations or disappear entirely due to expired
          licenses. In these situations, piracy becomes a tool for preservation,
          access, and cultural participation.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Many older or obscure anime survive today only because fans uploaded
          and archived them online. In some cases, the official industry has
          allowed entire eras of anime to fade into obscurity, leaving fan
          archivists as the only preservers of cultural history.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          But ethical lines blur in the modern digital era. As fansubbing groups
          grew, the scene shifted from collaborative cultural work to
          competitive digital branding. Groups raced to release episodes first,
          plastered their names across subtitles, and sometimes monetized their
          distribution through ad-supported websites. What began as community
          labor sometimes evolved into profit-driven behavior mirroring the very
          industries fans opposed.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Piracy also places strain on the creative labor behind anime. Studios
          may earn record profits, but animators and production staff often work
          under extreme conditions and low pay. When piracy cuts into revenue,
          it's the workers—already underpaid—who face the consequences.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The future of anime piracy depends on the industry’s willingness to
          address global access issues while also protecting its creators. Legal
          streaming platforms have reduced some reliance on piracy, offering
          simultaneous releases, affordable subscriptions, and large libraries.
          But gaps remain—untranslated works, regional restrictions, and
          disappearing licenses continue to push fans toward illegal
          alternatives.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The paradox persists: piracy damages the industry while simultaneously
          sustaining its worldwide reach. Understanding this tension is key to
          charting a future that honors both the creators and the global fanbase
          who helped build anime into the phenomenon it is today.
        </p>
      </div>
    </div>
  );
}
