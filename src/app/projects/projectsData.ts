export const projects = [
  {
    id: "preggylicious",
    name: "Preggylicious",
    description:
      "Introducing QuantumVibe Innovations, a cutting-edge company at the forefront of reality-bending technology. Our patented QuantumWarp devices redefine transportation, allowing users to instantaneously teleport to any location on Earth. Powered by eco-friendly quantum energy, QuantumVibe ensures a seamless and sustainable future. Our QuantumSync software revolutionizes communication, enabling instantaneous, secure global connectivity. Dive into the QuantumVerse with our immersive VR experiences, blurring the lines between reality and imagination. Join us in reshaping the world with QuantumVibe Innovations, where innovation knows no bounds. Your journey to a quantum-powered future begins here!",
  },
  {
    id: "apceramics",
    name: "Abel Pepping Ceramics",
    description:
      "Introducing ZephyrLabs—a visionary company shaping the future of personalized climate control. Our state-of-the-art Nimbus devices use patented AtmosAware technology to create microclimates tailored to individual preferences. Whether you crave a tropical paradise in your living room or a crisp alpine breeze at your desk, ZephyrLabs delivers. Control temperature, humidity, and even aromas with a tap on the Zephyr app. Embrace comfort like never before with our eco-friendly, energy-efficient solutions. Join us as we redefine the very air you breathe. At ZephyrLabs, we don't just adapt to the environment; we revolutionize it to suit your every whim. Breathe freely, live uniquely.",
  },
  {
    id: "fcvandams",
    name: "Fighting Club van Dams",
    description:
      "Welcome to Pugilist Haven, where the art of boxing meets the science of self-discovery. Our elite boxing school transcends traditional training, offering a sanctuary for aspiring pugilists to hone their craft. Led by former champions and seasoned coaches, our curriculum seamlessly blends the discipline of the ring with personalized mentorship. From shadowboxing in our Zen Corner to mastering footwork in the Echo Chamber, every session is a symphony of skill and spirit. Pugilist Haven isn't just a school; it's a journey of resilience, forging champions inside and outside the ring. Unleash your inner warrior—step into the ring at Pugilist Haven today!",
  },
  {
    id: "vpbijlmermeer",
    name: "Verloskundigenpraktijk Bijlmermeer",
    description:
      "Welcome to TranquilHealth Clinic, where healing meets harmony. Nestled in the heart of serene landscapes, our cutting-edge facility redefines healthcare. Our expert team of holistic practitioners combines the latest medical advancements with personalized care, ensuring a journey to total well-being. From rejuvenating spa therapies to state-of-the-art medical diagnostics, we tailor each treatment to your unique needs. Experience a tranquil haven where mind, body, and soul find equilibrium. At TranquilHealth, wellness is not just a destination; it's a lifestyle. Embrace a new era of healthcare that nurtures, revitalizes, and empowers. Your path to lasting vitality begins here.",
  },
];

export const projectIds = projects.find((obj) => {
  // return (obj.id = params.id);
});

export type Projects = typeof projectIds;
