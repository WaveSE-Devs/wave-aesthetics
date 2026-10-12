/* Tailwind v3 preset. Fonts and shadows point at the CSS variables in
   tokens.css (`import "wave-aesthetics"`), so import that too.

   // tailwind.config.ts
   presets: [require("wave-aesthetics/tailwind/preset")]
*/
const v = (name) => `var(--${name})`;

module.exports = {
  theme: {
    extend: {
      // Hex, not var(), so opacity modifiers work (bg-wave-night/80).
      // Everything sits under `wave` so Tailwind's own red/green/... scales stay intact.
      colors: {
        wave: {
          volt: "#E3F643",
          silver: "#FAF7F4",
          clay: "#94958B",
          slate: "#212922",
          night: "#0B0909",
          elev: "#2A332B",
          line: "#2E332E",
          "line-strong": "#3F4640",
          muted: "#B7B8AF",

          // Secondary palette: taxonomy only, never decoration.
          yellow: "#FFC421",
          orange: "#FF8712",
          red: "#FA3842",
          pink: "#D12670",
          purple: "#A11791",
          violet: "#A60AFF",
          indigo: "#590FFF",
          blue: "#0A16FF",
          azure: "#007DFF",
          cyan: "#0AC2FF",
          teal: "#69EDE9",
          green: "#0BDD65",

          grey: {
            950: "#0B0909",
            900: "#14161A",
            800: "#212922",
            700: "#2E332E",
            600: "#4B504A",
            500: "#6B6F66",
            400: "#94958B",
            300: "#B7B8AF",
            200: "#D6D6CF",
            100: "#ECEAE3",
            50: "#FAF7F4",
          },
        },
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
        wave: "cubic-bezier(0.2, 0, 0, 1)",
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
