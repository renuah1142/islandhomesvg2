"use client";
import { useState } from "react";
const items = [
    { src: "/images/Island_Homes_SVG_Catalog_FINAL_UPDATED_page-0004.jpg", title: "Island living, reimagined" },
    { src: "/images/Island_Homes_SVG_Catalog_FINAL_UPDATED_page-0005.jpg", title: "Modern spaces" },
    { src: "/images/Island_Homes_SVG_Catalog_FINAL_UPDATED_page-0006.jpg", title: "Built for comfort" },
    { src: "/images/Island_Homes_SVG_Catalog_FINAL_UPDATED_page-0007.jpg", title: "Designed for island life" }
];
export default function Gallery() {
    const [active, setActive] = useState<number | null>(null);
    return <section id="gallery" className="section bg-white"><div className="container">
        <div className="reveal-item flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">Showcase</p><h2 className="font-display mt-3 text-balance text-5xl leading-none md:text-8xl">See the possibilities.</h2></div><a href="#catalog" className="rounded-full border border-[#18231f]/15 px-5 py-3 text-sm font-extrabold text-[#18231f] hover:border-[#b6925a] hover:text-[#b6925a]">View full catalog ↓</a></div>
        <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4">{items.map((x, i) => <button type="button" key={i} onClick={() => setActive(i)} className="group relative overflow-hidden rounded-[1.5rem] text-left focus:outline-none focus:ring-2 focus:ring-[#c99227]"><img src={x.src} alt={x.title} className="aspect-square w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute inset-x-3 bottom-3 rounded-xl bg-[#061b33]/80 px-3 py-2 text-xs font-bold text-white backdrop-blur">{x.title}</span></button>)}</div>
    </div>
        {active !== null && <div className="fixed inset-0 z-[120] grid place-items-center bg-[#041326]/90 p-5 backdrop-blur" role="dialog" aria-modal="true" onClick={() => setActive(null)}><div className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-[2rem] bg-black" onClick={e => e.stopPropagation()}><img src={items[active].src} alt={items[active].title} className="max-h-[82vh] w-auto object-contain" /><button onClick={() => setActive(null)} aria-label="Close image" className="absolute right-4 top-4 rounded-full bg-white/90 px-4 py-2 text-xl font-bold text-[#061b33]">×</button></div></div>}
    </section>
}
