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
          Origins of Anime Piracy
        </h1>

        <p className="text-lg leading-relaxed mb-6">
          Anime’s global popularity didn’t begin with corporations, streaming services, or official translations. 
          It began with fans—often young, broke, and deeply passionate—who used whatever 
          tools they had to share Japanese media with the world. 
          Before the internet, anime in the West existed almost entirely within niche communities. 
          Only a handful of titles aired on American television, leaving fans nationwide dependent on small, 
          scattered groups for access.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          These early communities traded VHS tapes, held watch parties, and even created their own translations using early 
          video-editing equipment. This unofficial translation culture—known as fansubbing—became 
          the backbone of anime’s initial spread across the United States. Fans acted as translators, 
          editors, distributors, and cultural mediators. They cared deeply about preserving honorifics, 
          jokes, and story elements that localized corporate versions often changed or removed.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          As the internet gained traction in the 1990s and 2000s, fansubbing exploded 
          from hobbyist clubs to massive online networks. Digital compression, peer-to-peer software, 
          and torrent platforms removed barriers overnight. Suddenly, entire audiences across the globe 
          could access Japanese media long before official releases were available.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          In countries like Brazil, fan groups even became the dominant distribution 
          system for anime long before studios entered the market. Fans weren’t just 
          consuming media—they were shaping how the world understood it. For many communities, 
          piracy was not seen as theft but as cultural preservation and translation work 
          the industry wasn’t yet willing to do.
        </p>
        <p className="text-lg leading-relaxed mb-6">
          This grassroots system eventually built the foundation for the global anime boom.
         Without these early fans and their illegal labor, most of the world would never have encountered anime at all.
        </p>
      </div>
    </div>
  );
}
