export const projects: ProjectData[] = [
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
    id: "apceramics",
    name: "Abel Pepping Ceramics",
    images: [
      { file: "R78A7966", horizontal: false },
      { file: "R78A7976", horizontal: true },
      { file: "R78A7984", horizontal: false },
      { file: "R78A7991", horizontal: false },
      { file: "R78A8014", horizontal: false },
      { file: "R78A8029", horizontal: false },
      { file: "R78A8037", horizontal: true },
      { file: "R78A8108", horizontal: false },
      { file: "R78A8113", horizontal: false },
      { file: "R78A8136", horizontal: false },
      { file: "R78A8140", horizontal: true },
    ],
  },
  {
    id: "preggylicious",
    name: "Preggylicious",
    images: [
      { file: "1", horizontal: false },
      { file: "2", horizontal: false },
    ],
  },
  {
    id: "beautybyyess",
    name: "beauty By Yess",
    images: [
      { file: "R78A3248", horizontal: true },
      { file: "R78A3288", horizontal: false },
      { file: "R78A3340", horizontal: false },
      { file: "R78A3398", horizontal: false },
      { file: "R78A3416", horizontal: false },
      { file: "R78A3432", horizontal: false },
      { file: "R78A3445", horizontal: true },
      { file: "R78A3448", horizontal: true },
      { file: "R78A3453", horizontal: false },
    ],
  },
];

export interface ProjectData {
  name: string;
  id: string;
  images: ProjectImages[];
}

export interface ProjectImages {
  file: string;
  horizontal: boolean;
}
