export const projects = [
  {
    id: "preggylicious",
    name: "Preggylicious",
    images: [
      { file: "1", horizontal: false },
      { file: "2", horizontal: false },
    ],
  },
  {
    id: "apceramics",
    name: "Abel Pepping Ceramics",
    images: [
      { file: "R78A8108", horizontal: false },
      { file: "R78A8140", horizontal: true },
    ],
  },
  {
    id: "fcvandams",
    name: "Fighting Club van Dams",
    images: [
      { file: "R78A8560", horizontal: true },
      { file: "R78A8653", horizontal: false },
      { file: "R78A8761", horizontal: true },
      { file: "R78A8970", horizontal: false },
      { file: "R78A9118", horizontal: true },
      { file: "R78A9245", horizontal: false },
      { file: "R78A9254", horizontal: false },
    ],
  },
  {
    id: "vpbijlmermeer",
    name: "Verloskundigenpraktijk Bijlmermeer",
    images: [
      { file: "R78A9633", horizontal: true },
      { file: "R78A9643", horizontal: true },
      { file: "R78A9655", horizontal: true },
      { file: "R78A9671", horizontal: true },
      { file: "R78A9697", horizontal: true },
      { file: "R78A9707", horizontal: true },
      { file: "R78A9713", horizontal: true },
      { file: "R78A9718", horizontal: true },
      { file: "R78A9730", horizontal: true },
      { file: "R78A9737", horizontal: true },
      { file: "R78A9764", horizontal: true },
      { file: "R78A9770", horizontal: true },
      { file: "R78A9779", horizontal: true },
      { file: "R78A9790", horizontal: true },
      { file: "R78A9793", horizontal: true },
      { file: "R78A9813", horizontal: true },
      { file: "R78A9845", horizontal: true },
      { file: "R78A9848", horizontal: true },
    ],
  },
];

export const projectIds = projects.find((obj) => {
  // return (obj.id = params.id);
});

export type Projects = typeof projectIds;
