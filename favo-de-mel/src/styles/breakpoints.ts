export const sizes = {
  xs: "0px",
  sm: "576px",
  md: "720px",
  lg: "992px",
  xl: "1200px",
};

export const device = {
  mobile: `screen and (min-width: ${sizes.xs}) and (max-width: ${sizes.xl})`,
  desktop: `screen and (min-width: ${sizes.xl})`,
  xs: `screen and (min-width: ${sizes.xs})`,
  sm: `screen and (min-width: ${sizes.sm})`,
  md: `screen and (min-width: ${sizes.md})`,
  lg: `screen and (min-width: ${sizes.lg})`,
  xl: `screen and (min-width: ${sizes.xl})`,
};
