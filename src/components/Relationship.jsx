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
          The Industry’s Complicated Relationship With Piracy
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          The anime industry’s relationship with piracy is more complex than
          most entertainment sectors. In Japan, companies have historically
          tolerated certain kinds of fan infringement because, paradoxically, it
          helps their franchises grow. Fan-made works—doujinshi, fansubs,
          derivative art, and AMVs—are technically illegal, yet they have long
          served as free marketing tools.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Economists who study Japan’s copyright culture note that ignoring some
          fan-made infringement can actually increase long-term profit by
          expanding engagement and community loyalty. Fansubs, doujin markets,
          and parody works generate enthusiasm and help smaller series develop
          cult followings.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          But this tolerance isn’t universal. Outside Japan, companies rarely
          exhibit the same leniency. Copyright enforcement becomes reactive
          rather than strategic, largely because combating piracy
          internationally is nearly impossible. Different legal systems,
          region-locked licensing structures, and distributed online communities
          mean foreign copyright holders often lack the tools to control
          infringement the way they can domestically. Companies may want
          stricter control abroad, but practical limitations force them into
          defensive positions.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Meanwhile, the economic losses caused by online piracy continue to
          grow. Billions of dollars are lost yearly to illegal streaming,
          torrenting, and unauthorized distribution. Yet despite these losses,
          the anime market is thriving more than ever, reaching record-breaking
          revenue totals worldwide.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This dual reality reveals a central tension: piracy both harms the
          industry financially and simultaneously fuels its global expansion.
          The result is an ongoing struggle to balance exposure with
          protection—a conflict that remains unresolved.
        </p>
      </div>
    </div>
  );
}
