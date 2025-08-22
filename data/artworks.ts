export type Artwork = {
  slug: string;
  title: string;
  year: number;
  tags: string[];
  src: string;
  width: number;
  height: number;
};

export const artworks: Artwork[] = [
  {
    slug: "not-glock",
    title: "Not Glock",
    year: 2024,
    tags: ["weapons", "pixel-art", "gif"],
    src: "/artworks/Not_glock.gif",
    width: 200,
    height: 200
  },
  {
    slug: "skull",
    title: "Skull",
    year: 2024,
    tags: ["characters", "pixel-art", "gif"],
    src: "/artworks/Skull.gif",
    width: 150,
    height: 150
  },
  {
    slug: "finca-de-area",
    title: "Finca de Area",
    year: 2024,
    tags: ["environment", "pixel-art", "gif"],
    src: "/artworks/Finca_de_area.gif",
    width: 300,
    height: 200
  },
  {
    slug: "glock",
    title: "Glock",
    year: 2024,
    tags: ["weapons", "pixel-art", "gif"],
    src: "/artworks/Glock.gif",
    width: 120,
    height: 80
  },
  {
    slug: "iso-kevin",
    title: "Iso Kevin",
    year: 2024,
    tags: ["characters", "pixel-art", "sprites"],
    src: "/artworks/Iso_Kevin.png",
    width: 100,
    height: 100
  },
  {
    slug: "brrrrr-rayito",
    title: "Brrrrr Rayito",
    year: 2024,
    tags: ["effects", "pixel-art", "gif"],
    src: "/artworks/brrrrr_rayito.gif",
    width: 80,
    height: 80
  },
  {
    slug: "tanke",
    title: "Tanke",
    year: 2024,
    tags: ["vehicles", "pixel-art", "gif"],
    src: "/artworks/tanke.gif",
    width: 160,
    height: 120
  },
  {
    slug: "calavera-test-1",
    title: "Calavera Test 1",
    year: 2024,
    tags: ["characters", "pixel-art", "gif"],
    src: "/artworks/calavera_test_1.gif",
    width: 100,
    height: 100
  },
  {
    slug: "guayy",
    title: "Guayy",
    year: 2024,
    tags: ["characters", "pixel-art", "sprites"],
    src: "/artworks/guayy.png",
    width: 80,
    height: 80
  },
  {
    slug: "tope-down-bano",
    title: "Tope Down Bano",
    year: 2024,
    tags: ["environment", "pixel-art", "sprites"],
    src: "/artworks/tope-down_bano.png",
    width: 120,
    height: 120
  },
  {
    slug: "boton-pulpino",
    title: "Boton Pulpino",
    year: 2024,
    tags: ["ui", "pixel-art", "sprites"],
    src: "/artworks/boton_pulpino.png",
    width: 60,
    height: 60
  },
  {
    slug: "velas",
    title: "Velas",
    year: 2024,
    tags: ["objects", "pixel-art", "sprites"],
    src: "/artworks/Velas.png",
    width: 40,
    height: 40
  }
];

export const allTags = Array.from(new Set(artworks.flatMap(a => a.tags))).sort();
