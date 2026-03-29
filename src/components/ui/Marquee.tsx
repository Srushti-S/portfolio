interface MarqueeProps {
  items: string[];
  separator?: string;
}

/**
 * Renders items twice so the animation loops seamlessly.
 * CSS handles the animation via .marquee-track in index.css.
 */
export default function Marquee({ items, separator = '✦' }: MarqueeProps) {
  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border py-5 select-none">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="label whitespace-nowrap px-6 text-secondary hover:text-primary transition-colors duration-300">
              {item}
            </span>
            <span className="text-accent text-[8px]">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
