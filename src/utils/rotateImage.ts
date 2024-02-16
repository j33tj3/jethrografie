export function rotateImage(number?: 1 | 2 | 3) {
  const amount = number ?? 4;
  const randomRotate = Math.floor(Math.random() * amount);
  const randomDirection = Boolean(Math.round(Math.random())) ? "-" : "";
  return `${randomDirection}rotate-${randomRotate}`;
}
