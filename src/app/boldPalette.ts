// Shared accent palette for the "Bold" editorial redesign. Kept separate from
// content.ts so data and presentation-only color assignments stay distinguishable.
export const BLUE = "#0A6EC2";
export const PINK = "#BE3372";
export const MINT = "#4FE7AF";
export const CYAN = "#11C4D4";
export const DEEP = "#0C4E8C";
export const NAVY = "#141f29";

// The two brightest accents (cyan/mint) don't hold up as body-copy or small
// numeral color on light surfaces, so they're swapped for a readable "ink"
// version there while the brighter rule color is still used for borders/bars.
export function ink(rule: string): string {
  if (rule === CYAN) return BLUE;
  if (rule === MINT) return DEEP;
  return rule;
}
