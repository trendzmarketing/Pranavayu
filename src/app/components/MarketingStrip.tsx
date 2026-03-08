export function MarketingStrip() {
  return (
    <div className="bg-black w-full border-t border-white/8 py-3">
      <div className="flex justify-center items-center gap-2 text-[13px] tracking-[1px] text-white/50 max-md:flex-col max-md:gap-1 max-md:text-[11px]">
        <span>Digital Growth Partner</span>
        <a
          href="https://trendzmarketers.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white relative transition-opacity duration-300 hover:opacity-80 group"
          style={{ fontWeight: 500 }}
        >
          Trend Z Marketing
          <span className="absolute left-0 -bottom-[3px] h-px w-0 bg-white transition-all duration-300 group-hover:w-full" />
        </a>
      </div>
    </div>
  );
}
