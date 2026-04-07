export default function Marquee({ items }: { items: string[] }) {
  return (
    <section className="bg-black py-10 border-y-4 border-primary overflow-hidden marquee relative">
      <div className="absolute inset-0 swiss-noise opacity-20 pointer-events-none"></div>
      <div className="marquee-content flex gap-16 items-center relative z-10">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center">
            {items.map((item, index) => (
              <span 
                key={index} 
                className="text-primary font-black uppercase text-4xl flex items-center gap-16 tracking-tighter italic"
              >
                {item}
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-white opacity-20"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/></svg>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
