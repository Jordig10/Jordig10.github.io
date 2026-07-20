import { Button } from "@/components/ui/button";
import { GlobeIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/use-language";

export function LangToggle({ className }: { className?: string }) {
  const { lang, toggleLanguage } = useLanguage();

  return (
    <Button
      type="button"
      variant="link"
      size="icon"
      className={cn(className)}
      onClick={toggleLanguage}
    >
      <GlobeIcon className="h-full w-full" />
      <span className="sr-only">{lang === "es" ? "Español" : "English"}</span>
    </Button>
  );
}
