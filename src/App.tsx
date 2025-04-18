import React from "react";

export default function LandingPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-white p-6"
      style={{ backgroundImage: "url('/mnt/data/IMG_20240818_123131.jpg')" }}
    >
      <div className="bg-black bg-opacity-70 rounded-2xl max-w-4xl mx-auto p-6 shadow-xl">
        <h1 className="text-4xl font-bold mb-2">
          TechXplora Library & Multi-Business Hub
        </h1>
        <p className="text-lg mb-6">Tafelkop, Limpopo</p>

        <h2 className="text-2xl font-semibold mb-2">
          Community-Driven Innovation
        </h2>
        <p className="mb-4">
          I'm Sello Makena, a local entrepreneur and community builder. I've
          invested my savings into building a library, digital hub, and car wash
          to uplift the youth of Ga Matsepe, Tafelkop. Now I’m seeking partners
          to help bring it to life.
        </p>

        <h2 className="text-2xl font-semibold mb-2">Why Support?</h2>
        <ul className="list-disc pl-6 mb-4">
          <li>Infrastructure already built</li>
          <li>Electricity available</li>
          <li>Immediate impact on youth employment and education</li>
          <li>Income-generating services for long-term sustainability</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">What We Need</h2>
        <p className="mb-4">We're looking for R21,100–R33,000 to complete:</p>
        <ul className="list-disc pl-6 mb-4">
          <li>Roof repairs, floor polishing</li>
          <li>Chairs, desks, screens, server</li>
          <li>Printer setup, internet, books</li>
        </ul>

        <h2 className="text-2xl font-semibold mb-2">Join the Mission</h2>
        <p className="mb-4">
          Help us bridge the digital divide and build a brighter future. Get in
          touch to discuss funding, mentorship, or collaboration opportunities.
        </p>

        <div className="bg-white text-black rounded-xl p-4">
          <p className="font-semibold">Contact:</p>
          <p>Sello Makena</p>
          <p>📞 067 342 0211</p>
          <p>📧 smakena74@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
