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
          The Ethics, Motivations, and Future of Anime Piracy
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          <span className="float-left mr-4 mb-2 block text-center w-100">
            <img
              src="src/assets/hianime.png"
              alt="hianime"
              className="rounded-lg shadow-md w-full h-auto"
            />
            <span className="text-xs text-gray-600 italic block mt-1">
              HiAnime - The world's largest anime pirating site.
            </span>
          </span>
          Even as legal streaming platforms expand, anime piracy remains
          widespread, and the ethical debates surrounding it are far from
          simple. Many fans do not view the law as the measure of right and
          wrong. Condry notes that “neither side views the law as the measure of
          ethics… principles are developed by a citizenry composed of a
          transnational community of fans” (Condry, 194). Ethical norms are
          often shaped by accessibility, cultural preservation, and community
          values rather than copyright law.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Many fans justify piracy due to limited access. Legal releases are
          frequently region-locked, overpriced, delayed, or never translated at
          all. In some cases, pirated versions are the only existing archives of
          older or niche series that have never received official international
          distribution. This makes piracy not only a means of access but also a
          method of preservation.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          But the culture of fansubbing has changed over time. As Urbano
          observes, “speed is imposed as a competitive tool in the online fan
          community” (Urbano, 67). What began as cooperative cultural labor
          evolved into competition between groups racing to release episodes
          first. Some groups branded their subtitles, sought online recognition,
          and even adopted monetized distribution through ad-supported websites.
          This shift blurred the line between community service and
          exploitation, as fansubbing increasingly resembled commercial media
          production.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          The economic effects of piracy continue to pressure an already
          strained industry. While the market is larger than ever, many
          animators and production staff remain underpaid, and piracy can worsen
          financial instability for smaller studios. At the same time, many
          lifelong anime fans began as pirates before becoming paying
          consumers—subscribing to platforms, purchasing Blu-rays, or buying
          merchandise.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This complex landscape shows why piracy remains unresolved. It damages
          the industry, yet it also creates fans who contribute money in other
          ways. It threatens revenue, yet preserves media that might otherwise
          disappear. It undermines legal access, yet exists largely because
          legal access remains inconsistent.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          The paradox persists: without the illegal labor of fans, anime would
          not be the global medium it is today, yet that same piracy now
          challenges the sustainability of the industry that fans love.
        </p>
      </div>
    </div>
  );
}
