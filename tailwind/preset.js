/* Tailwind v3 preset. Colors point at the CSS variables in
   colors_and_type.css, so import that file too.

   // tailwind.config.ts
   presets: [require("wave-aesthetics/tailwind/preset")]
*/
const v = (name) => `var(--${name})`;

module.exports = {
  theme: {
    extend: {
      colors: {
        wave: {
          volt: v("volt"),
          silver: v("silver"),
          clay: v("clay"),
          slate: v("slate"),
          night: v("night"),
          elev: v("bg-elev-2"),
          line: v("line"),
          "line-strong": v("line-strong"),
          muted: v("fg-muted"),
        },
        bg: {
          DEFAULT: v("bg"),
          "elev-1": v("bg-elev-1"),
          "elev-2": v("bg-elev-2"),
          inverse: v("bg-inverse"),
        },
        fg: {
          DEFAULT: v("fg"),
          muted: v("fg-muted"),
          dim: v("fg-dim"),
          inverse: v("fg-inverse"),
          "on-volt": v("fg-on-volt"),
          accent: v("fg-accent"),
        },
        line: {
          DEFAULT: v("line"),
          strong: v("line-strong"),
        },
        intent: {
          success: v("intent-success"),
          warning: v("intent-warning"),
          danger: v("intent-danger"),
          info: v("intent-info"),
        },
        yellow: v("yellow"),
        orange: v("orange"),
        red: v("red"),
        pink: v("pink"),
        purple: v("purple"),
        violet: v("violet"),
        indigo: v("indigo"),
        blue: v("blue"),
        azure: v("azure"),
        cyan: v("cyan"),
        teal: v("teal"),
        green: v("green"),
        grey: Object.fromEntries(
          [950, 900, 800, 700, 600, 500, 400, 300, 200, 100, 50].map((n) => [n, v(`grey-${n}`)])
        ),
      },
      fontFamily: {
        sans: [v("font-sans")],
        display: [v("font-display")],
        mono: [v("font-mono")],
        serif: [v("font-serif")],
      },
      letterSpacing: {
        tight: "-0.025em",
        spec: "0.08em",
        mono: "0.04em",
      },
      // Wave is brutalist: surfaces are sharp. Only small controls get 2–4px;
      // pills (rounded-full) stay for tags, status badges and avatars.
      borderRadius: {
        sm: "2px",
        DEFAULT: "2px",
        md: "4px",
        lg: "0px",
        xl: "0px",
        "2xl": "0px",
      },
      boxShadow: {
        flat: v("shadow-flat"),
        card: v("shadow-card"),
        volt: v("shadow-volt"),
        pop: v("shadow-pop"),
      },
      transitionTimingFunction: {
        wave: v("ease-standard"),
      },
      transitionDuration: {
        quick: "120ms",
        base: "200ms",
        slow: "400ms",
      },
      maxWidth: {
        container: v("container-max"),
      },
    },
  },
};
