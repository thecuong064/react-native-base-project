export const colorWithOpacity = (color, opacity) => {
  if (opacity > 1) return color;
  if (opacity < 0) return undefined;
  const hexOpacity = Math.floor(opacity * 255).toString(16);
  return color + hexOpacity;
};
