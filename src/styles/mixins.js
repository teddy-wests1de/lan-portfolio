// styles/mixins.js

export const respondTo = {
  mobile: "@media (max-width: 768px)",
  tablet: `@media (min-width: 769px) and (max-width: 1024px)`,
  desktop: `@media (min-width: 1025px)`,

  // Or simpler approach - mobile first:
  tabletUp: `@media (min-width: 769px)`,
  desktopUp: `@media(min-width: 1025px)`,
};
