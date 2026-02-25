import { notFound } from "next/navigation";
import Link from "next/link";

const MENUS: Record<string, { title: string; src: string; subtitle?: string }> = {
  "north-indian": {
    title: "North Indian Menu",
    subtitle: "Starters, Main Course & Seafood Specialities",
    src: "/menus/north-indian.pdf",
  },
  "south-indian": {
    title: "South Indian Menu",
    subtitle: "Authentic South Indian Delicacies",
    src: "/menus/south-indian.pdf",
  },
  "catering": {
    title: "Catering Packages",
    subtitle: "Veg & Non-Veg Per Plate Menus",
    src: "/menus/catering-veg-1200.pdf",
  },
  "bar": {
    title: "Bar & Beverages",
    subtitle: "Cocktails, Mocktails & Premium Spirits",
    src: "/menus/bar.pdf",
  },
};

export default function MenuPage({ params }: { params: { slug: string } }) {
  const menu = MENUS[params.slug];
  if (!menu) return notFound();

  return (
    <section className="min-h-screen bg-[#0B1C2D] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-8 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h1 className="text-3xl md:text-4xl font-semibold">
              {menu.title}
            </h1>
            {menu.subtitle && (
              <p className="mt-2 text-sm text-white/70">
                {menu.subtitle}
              </p>
            )}
          </div>

          <div className="flex gap-3">
            <Link
              href="/#menu"
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white hover:bg-white/10 transition"
            >
              ← Back to Menus
            </Link>

            <a
              href={menu.src}
              target="_blank"
              className="rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-black hover:bg-amber-400 transition"
            >
              Download PDF
            </a>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative w-full h-[70vh] md:h-[80vh] rounded-2xl overflow-hidden border border-white/10 bg-black shadow-2xl">
          <iframe
            src={menu.src}
            className="w-full h-full"
            title={menu.title}
          />
        </div>
      </div>
    </section>
  );
}