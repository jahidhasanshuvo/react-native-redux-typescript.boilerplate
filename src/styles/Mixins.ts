export const applyAlpha = (color: string, alpha: number) => {
  const alpha256 = (alpha * 255).toFixed();
  const alphaBase16 = Number(alpha256).toString(16);
  const paddedAlpha =
    alphaBase16.length === 1 ? alphaBase16.padStart(2, '0') : alphaBase16;
  return alpha === 1 ? color : color.concat('', paddedAlpha);
};
