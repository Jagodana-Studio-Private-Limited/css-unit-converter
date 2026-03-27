"use client";

import { useState, useCallback } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";

interface UnitConversion {
  unit: string;
  value: number;
  display: string;
}

export function CSSUnitConverter() {
  const [value, setValue] = useState<number>(16);
  const [unit, setUnit] = useState<string>("px");
  const [baseFontSize, setBaseFontSize] = useState<number>(16);
  const [copiedUnit, setCopiedUnit] = useState<string | null>(null);

  // Calculate all conversions
  const getConversions = useCallback((): UnitConversion[] => {
    const pxValue = (() => {
      switch (unit) {
        case "px":
          return value;
        case "rem":
          return value * baseFontSize;
        case "em":
          return value * baseFontSize;
        case "vh":
          return (value / 100) * window.innerHeight;
        case "vw":
          return (value / 100) * window.innerWidth;
        case "%":
          return value; // Context-dependent, returns as is
        default:
          return value;
      }
    })();

    return [
      {
        unit: "px",
        value: Math.round(pxValue * 100) / 100,
        display: `${(Math.round(pxValue * 100) / 100).toFixed(2)}px`,
      },
      {
        unit: "rem",
        value: Math.round((pxValue / baseFontSize) * 100) / 100,
        display: `${(Math.round((pxValue / baseFontSize) * 100) / 100).toFixed(3)}rem`,
      },
      {
        unit: "em",
        value: Math.round((pxValue / baseFontSize) * 100) / 100,
        display: `${(Math.round((pxValue / baseFontSize) * 100) / 100).toFixed(3)}em`,
      },
      {
        unit: "vh",
        value: Math.round((pxValue / window.innerHeight) * 10000) / 100,
        display: `${(Math.round((pxValue / window.innerHeight) * 10000) / 100).toFixed(2)}vh`,
      },
      {
        unit: "vw",
        value: Math.round((pxValue / window.innerWidth) * 10000) / 100,
        display: `${(Math.round((pxValue / window.innerWidth) * 10000) / 100).toFixed(2)}vw`,
      },
      {
        unit: "%",
        value: Math.round(pxValue * 100) / 100,
        display: `${(Math.round(pxValue * 100) / 100).toFixed(2)}%`,
      },
    ];
  }, [value, unit, baseFontSize]);

  const conversions = getConversions();

  const copyToClipboard = (text: string, unitType: string) => {
    navigator.clipboard.writeText(text);
    setCopiedUnit(unitType);
    toast.success(`Copied: ${text}`);
    
    setTimeout(() => {
      setCopiedUnit(null);
    }, 2000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Input Section */}
      <Card className="p-8 bg-gradient-to-br from-muted/50 to-muted/30 border-border/50">
        <div className="space-y-6">
          {/* Value Input */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Value
            </label>
            <div className="flex gap-3">
              <Input
                type="number"
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                className="flex-1 text-lg h-12 bg-background border-border/50"
                placeholder="Enter value"
              />
              <select
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                className="h-12 px-4 rounded-lg bg-background border border-border/50 text-foreground font-medium hover:bg-muted/50 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand/50"
              >
                <option value="px">px</option>
                <option value="rem">rem</option>
                <option value="em">em</option>
                <option value="vh">vh</option>
                <option value="vw">vw</option>
                <option value="%">%</option>
              </select>
            </div>
          </div>

          {/* Base Font Size */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">
              Base Font Size (for rem/em)
            </label>
            <div className="flex gap-3 items-center">
              <Input
                type="number"
                value={baseFontSize}
                onChange={(e) => setBaseFontSize(Number(e.target.value))}
                className="flex-1 h-10 bg-background border-border/50"
                placeholder="Enter base font size"
              />
              <span className="text-sm text-muted-foreground font-medium">
                px
              </span>
            </div>
            <p className="text-xs text-muted-foreground">
              Default: 16px (standard browser default). Change to match your project&apos;s root font size.
            </p>
          </div>
        </div>
      </Card>

      {/* Conversions Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {conversions.map((conversion) => (
          <Card
            key={conversion.unit}
            className="p-6 bg-gradient-to-br from-muted/20 to-muted/5 border-border/50 hover:border-brand/50 transition-colors"
          >
            <div className="space-y-3">
              <div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {conversion.unit}
                </p>
                <p className="text-2xl font-bold text-foreground font-mono">
                  {conversion.display}
                </p>
              </div>
              <Button
                onClick={() => copyToClipboard(conversion.display, conversion.unit)}
                variant="outline"
                size="sm"
                className="w-full gap-2 hover:bg-brand/10 hover:border-brand/50 transition-colors"
              >
                {copiedUnit === conversion.unit ? (
                  <>
                    <Check className="h-4 w-4 text-green-500" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* Info Box */}
      <Card className="p-6 bg-brand/5 border-brand/20">
        <div className="space-y-3 text-sm">
          <p className="font-semibold text-foreground">
            💡 Quick Conversion Guide:
          </p>
          <ul className="space-y-2 text-muted-foreground list-disc list-inside">
            <li>
              <strong className="text-foreground">px</strong> - Pixels (absolute unit)
            </li>
            <li>
              <strong className="text-foreground">rem</strong> - Relative to root element font size
            </li>
            <li>
              <strong className="text-foreground">em</strong> - Relative to current element font size
            </li>
            <li>
              <strong className="text-foreground">vh/vw</strong> - Relative to viewport height/width (useful for full-screen designs)
            </li>
            <li>
              <strong className="text-foreground">%</strong> - Relative to parent container
            </li>
          </ul>
        </div>
      </Card>
    </div>
  );
}
