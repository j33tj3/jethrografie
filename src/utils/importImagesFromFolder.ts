export function importImagesFromFolder(url: string) {
  const images = require.context(url, true, /\.(jpe?g)$/);
  const imageList = images.keys().map((image) => images(image));
  return imageList;
}
