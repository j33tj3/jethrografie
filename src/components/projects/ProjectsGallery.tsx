"use client";
export const ProjectsGallery = ({ id }: { id: string }) => {
  const images = require.context(id, true, /\.(jpe?g)$/);
  const imageList = images.keys().map((image) => images(image));
  console.log(imageList);
  return imageList;
};
