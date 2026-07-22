import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { useLanguage } from "@/lib/use-language";

export default function ContactSection() {
  const { t } = useLanguage();

  return (
    <div className="border rounded-xl px-10 pb-10 pt-14 relative">
      <div className="absolute -top-4 border border-link/40 bg-link/10 z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-link text-sm font-medium">{t.sections.contact.label}</span>
      </div>
      <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
        <FlickeringGrid
          className="h-full w-full"
          squareSize={2}
          gridGap={2}
          style={{
            maskImage: "linear-gradient(to bottom, black, transparent)",
            WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
          }}
        />
      </div>
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          {t.sections.contact.heading}
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          {t.sections.contact.text}
        </p>
      </div>
    </div>
  );
}

