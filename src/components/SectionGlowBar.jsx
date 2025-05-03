function SectionGlowBar() {
  return (
    <div className="relative w-full h-2 flex justify-between gap-1 overflow-hidden mb-6 mt-2 px-2">
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={i}
          className="w-[3%] h-full bg-[#009de5] opacity-40 animate-flicker"
          style={{ animationDelay: `${i * 100}ms` }}
        ></div>
      ))}
    </div>
  );
}

export default SectionGlowBar;
