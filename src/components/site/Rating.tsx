import { Star } from "lucide-react";

export const Rating = ({ value }: { value: number }) => {
  return (
    <div className="inline-flex items-center gap-2">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star
            key={i}
            className={
              i <= Math.round(value)
                ? "h-4 w-4 fill-accent text-accent"
                : "h-4 w-4 text-muted-foreground/40"
            }
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-ink">{value.toFixed(1)}</span>
    </div>
  );
};
