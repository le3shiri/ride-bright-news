import { useState } from "react";
import { Plus, X, Trophy, Star } from "lucide-react";
import { compareBikes, type CompareBike } from "@/data/compareBikes";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

type Metric = {
  key: keyof Pick<CompareBike, "price" | "power" | "torque" | "weight" | "topSpeed" | "fuel" | "range" | "zeroToHundred" | "rating">;
  label: string;
  unit: string;
  better: "higher" | "lower";
  format?: (v: number) => string;
};

const metrics: Metric[] = [
  { key: "price", label: "Price", unit: "USD", better: "lower", format: (v) => `$${v.toLocaleString()}` },
  { key: "power", label: "Power", unit: "hp", better: "higher" },
  { key: "torque", label: "Torque", unit: "Nm", better: "higher" },
  { key: "topSpeed", label: "Top Speed", unit: "km/h", better: "higher" },
  { key: "zeroToHundred", label: "0–100 km/h", unit: "s", better: "lower", format: (v) => v.toFixed(1) },
  { key: "weight", label: "Weight", unit: "kg", better: "lower" },
  { key: "range", label: "Range", unit: "km", better: "higher" },
  { key: "fuel", label: "Fuel use", unit: "L/100km", better: "lower", format: (v) => (v === 0 ? "—" : v.toFixed(1)) },
  { key: "rating", label: "Editor rating", unit: "/5", better: "higher", format: (v) => v.toFixed(1) },
];

const ComparePage = () => {
  const [selected, setSelected] = useState<CompareBike[]>([compareBikes[0], compareBikes[1]]);

  const addBike = (bike: CompareBike) => {
    if (selected.find((b) => b.id === bike.id) || selected.length >= 3) return;
    setSelected([...selected, bike]);
  };
  const removeBike = (id: string) => setSelected(selected.filter((b) => b.id !== id));

  const isBest = (m: Metric, value: number) => {
    if (selected.length < 2) return false;
    const values = selected.map((b) => b[m.key]).filter((v) => !(m.key === "fuel" && v === 0));
    if (values.length < 2) return false;
    const best = m.better === "higher" ? Math.max(...values) : Math.min(...values);
    return value === best && value !== 0;
  };

  const available = compareBikes.filter((b) => !selected.find((s) => s.id === b.id));

  return (
    <>
      <section className="border-b border-border bg-surface">
        <div className="container-x py-16 md:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent mb-3">Side-by-side</p>
          <h1 className="font-display text-5xl md:text-7xl font-bold text-ink leading-none">Compare Bikes</h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Pick up to three motorcycles and see how they stack up — performance, price, and Throttle's verdict.
          </p>
        </div>
      </section>

      <section className="container-x py-12 md:py-16">
        {/* Selection cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-12">
          {[0, 1, 2].map((i) => {
            const bike = selected[i];
            if (bike) {
              return (
                <div key={bike.id} className="relative rounded-3xl bg-card shadow-soft overflow-hidden border border-border">
                  <button
                    onClick={() => removeBike(bike.id)}
                    aria-label="Remove"
                    className="absolute top-3 right-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/95 text-ink hover:bg-accent hover:text-accent-foreground transition-smooth shadow-soft"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="aspect-[4/3] bg-ink">
                    <img src={bike.image} alt={bike.name} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">{bike.brand}</p>
                    <h3 className="mt-1 font-display text-xl font-bold text-ink">{bike.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{bike.category}</p>
                  </div>
                </div>
              );
            }
            return (
              <Dialog key={`empty-${i}`}>
                <DialogTrigger asChild>
                  <button
                    className="group flex aspect-[4/3] w-full flex-col items-center justify-center rounded-3xl border-2 border-dashed border-border bg-secondary/40 hover:border-accent hover:bg-highlight-soft transition-smooth"
                    disabled={available.length === 0}
                  >
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-background text-ink group-hover:bg-accent group-hover:text-accent-foreground transition-smooth">
                      <Plus className="h-6 w-6" />
                    </span>
                    <span className="mt-3 font-display text-lg font-semibold text-ink">Add a bike</span>
                    <span className="mt-1 text-xs text-muted-foreground">Up to 3</span>
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl">
                  <DialogHeader>
                    <DialogTitle className="font-display text-2xl">Choose a motorcycle</DialogTitle>
                  </DialogHeader>
                  <div className="grid gap-3 max-h-[60vh] overflow-y-auto pr-1">
                    {available.map((b) => (
                      <button
                        key={b.id}
                        onClick={() => addBike(b)}
                        className="flex items-center gap-4 rounded-xl p-3 hover:bg-secondary text-left transition-smooth"
                      >
                        <img src={b.image} alt={b.name} loading="lazy" className="h-16 w-20 rounded-lg object-cover" />
                        <div className="flex-1">
                          <p className="text-xs font-semibold uppercase tracking-widest text-accent">{b.brand}</p>
                          <p className="font-display text-lg font-semibold text-ink">{b.name}</p>
                          <p className="text-xs text-muted-foreground">{b.category} · ${b.price.toLocaleString()}</p>
                        </div>
                        <Plus className="h-5 w-5 text-muted-foreground" />
                      </button>
                    ))}
                  </div>
                </DialogContent>
              </Dialog>
            );
          })}
        </div>

        {/* Comparison table */}
        {selected.length >= 1 && (
          <div className="rounded-3xl bg-card border border-border overflow-hidden shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-surface">
                    <th className="text-left px-6 py-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Specification</th>
                    {selected.map((b) => (
                      <th key={b.id} className="text-left px-6 py-4 font-display text-base font-bold text-ink min-w-[180px]">
                        {b.brand} {b.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((m, i) => (
                    <tr key={m.key} className={cn("border-t border-border", i % 2 === 0 ? "bg-card" : "bg-surface/40")}>
                      <td className="px-6 py-4 text-sm font-medium text-muted-foreground">
                        {m.label} <span className="text-xs">({m.unit})</span>
                      </td>
                      {selected.map((b) => {
                        const value = b[m.key];
                        const best = isBest(m, value);
                        return (
                          <td key={b.id} className="px-6 py-4">
                            <span className={cn(
                              "inline-flex items-center gap-2 font-display text-lg font-semibold",
                              best ? "text-accent" : "text-ink"
                            )}>
                              {m.format ? m.format(value) : value}
                              {best && <Trophy className="h-4 w-4 fill-accent text-accent" />}
                            </span>
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Verdict */}
        {selected.length >= 2 && (
          <div className="mt-12 rounded-3xl bg-ink p-8 md:p-12 text-primary-foreground">
            <div className="flex items-center gap-2 mb-4">
              <Star className="h-5 w-5 text-accent fill-accent" />
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">Throttle verdict</p>
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight max-w-3xl">
              Best overall:{" "}
              <span className="text-accent italic">
                {[...selected].sort((a, b) => b.rating - a.rating)[0].brand}{" "}
                {[...selected].sort((a, b) => b.rating - a.rating)[0].name}
              </span>
            </h2>
            <p className="mt-4 text-primary-foreground/70 leading-relaxed max-w-2xl">
              Highlighted cells show category leaders. Choose the one that matches your riding — the spec sheet only tells half the story.
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default ComparePage;
