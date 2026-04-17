import { Facebook, Twitter, Linkedin, Link as LinkIcon, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export const ShareButtons = ({ title, url }: { title: string; url?: string }) => {
  const link = url ?? (typeof window !== "undefined" ? window.location.href : "");
  const enc = encodeURIComponent(link);
  const encTitle = encodeURIComponent(title);

  const items = [
    { label: "Twitter", Icon: Twitter, href: `https://twitter.com/intent/tweet?text=${encTitle}&url=${enc}` },
    { label: "Facebook", Icon: Facebook, href: `https://www.facebook.com/sharer/sharer.php?u=${enc}` },
    { label: "LinkedIn", Icon: Linkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc}` },
    { label: "Email", Icon: Send, href: `mailto:?subject=${encTitle}&body=${enc}` },
  ];

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      toast({ title: "Link copied", description: "Share it with anyone." });
    } catch {
      toast({ title: "Couldn't copy", description: "Try again or copy manually." });
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mr-2">Share</span>
      {items.map(({ label, Icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${label}`}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
      <button
        onClick={copy}
        aria-label="Copy link"
        className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-accent hover:text-accent-foreground transition-smooth"
      >
        <LinkIcon className="h-4 w-4" />
      </button>
    </div>
  );
};
