import Link from "next/link";

export default function CareersPage() {
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-[#f9f9f9] px-4 py-20">
      <div className="max-w-2xl text-center bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl md:text-4xl font-bold text-[#041424] mb-4">Careers at Travel of Trust</h1>
        <p className="text-gray-700 text-lg mb-6">
         While we don't have any current openings, we'd love to hear from you if you're passionate about travel and customer service.
         <br/>

         <br/>
        Stay tuned for future opportunities or reach out to us directly if you'd like to learn more about our team.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#7E22CE] font-bold text-[#FFFFFF] px-6 py-3 rounded hover:bg-[#551291] transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
}
