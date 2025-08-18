import type { StructureResolver } from "sanity/structure";

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.documentTypeListItem("nav").title("Navigation"),
      S.documentTypeListItem("home").title("Home"),
      S.documentTypeListItem("tiktok").title("Tiktok"),
      S.documentTypeListItem("shorts").title("Shorts"),
      S.documentTypeListItem("pourquoi").title("Pourquoi"),
      S.documentTypeListItem("work").title("Comment ça marche"),
    ]);
