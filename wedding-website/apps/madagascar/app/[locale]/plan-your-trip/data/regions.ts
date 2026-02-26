export type RegionKey = "north" | "east" | "center" | "west" | "south";

export const REGION_IMAGES: Record<
  RegionKey,
  readonly { src: string; alt: string }[]
> = {
  north: [
    { src: "/images/travel/north/1.jpg", alt: "Fisherman in Nosy Be" },
    { src: "/images/travel/north/2.jpg", alt: "Ambatoloaka village, Nosy Be" },
    { src: "/images/travel/north/3.jpg", alt: "Tsingy Rouge formations" },
    { src: "/images/travel/north/4.jpg", alt: "Indian Ocean viewpoint" },
    { src: "/images/travel/north/5.jpg", alt: "Nosy Be coastal village" },
  ],
  west: [
    { src: "/images/travel/west/1.jpg", alt: "Baobab tree, Adansonia grandidieri" },
    { src: "/images/travel/west/2.jpg", alt: "Avenue of the Baobabs, Morondava" },
    { src: "/images/travel/west/3.jpg", alt: "Baobab landscape at sunset" },
    { src: "/images/travel/west/4.jpg", alt: "Baobab trees in Morondava" },
    { src: "/images/travel/west/5.jpg", alt: "Giant baobab tree" },
  ],
  center: [
    { src: "/images/travel/center/1.jpg", alt: "Ambohimanga royal hill" },
    { src: "/images/travel/center/2.jpg", alt: "Ambohimanga sacred site" },
    { src: "/images/travel/center/3.jpg", alt: "Ambohimanga UNESCO heritage" },
    { src: "/images/travel/center/4.jpg", alt: "Royal palace at Ambohimanga" },
    { src: "/images/travel/center/5.jpg", alt: "Ambohimanga historic grounds" },
  ],
  east: [
    { src: "/images/travel/east/1.jpg", alt: "Indri lemur calling in Andasibe" },
    { src: "/images/travel/east/2.jpg", alt: "Indri in the rainforest canopy" },
    { src: "/images/travel/east/3.jpg", alt: "Indri lemur portrait" },
    { src: "/images/travel/east/4.jpg", alt: "Indri in natural habitat" },
    { src: "/images/travel/east/5.jpg", alt: "Indri lemur in Andasibe forest" },
  ],
  south: [
    { src: "/images/travel/south/1.jpg", alt: "Canyon des Singes, Isalo" },
    { src: "/images/travel/south/2.jpg", alt: "Isalo Window rock formation" },
    { src: "/images/travel/south/3.jpg", alt: "Rainbow over Isalo National Park" },
    { src: "/images/travel/south/4.jpg", alt: "Isalo canyon landscape" },
    { src: "/images/travel/south/5.jpg", alt: "Canyon des Rats, Isalo" },
  ],
};

export const REGION_SLUG_MAP: Record<string, RegionKey> = {
  "the-north": "north",
  "the-south": "south",
  "the-east": "east",
  "the-west": "west",
  "the-center": "center",
};

export const REGION_KEY_TO_SLUG: Record<RegionKey, string> = {
  north: "the-north",
  south: "the-south",
  east: "the-east",
  west: "the-west",
  center: "the-center",
};
