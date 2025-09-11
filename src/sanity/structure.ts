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
      S.documentTypeListItem("marque").title("Les marques te payent"),
      S.documentTypeListItem("pricing").title("Pricing"),
      S.documentTypeListItem("community").title("Community"),
      S.documentTypeListItem("faq").title("FAQ"),
      S.documentTypeListItem("joinus").title("Join Us"),
      S.documentTypeListItem("footer").title("Footer"),
      S.documentTypeListItem("vsl").title("VSL"),
      S.divider(),
      S.listItem()
        .title("Pages légales")
        .child(
          S.list()
            .title("Pages légales")
            .items([
              S.documentTypeListItem("cgv").title("CGV"),
              S.documentTypeListItem("mentionsLegales").title(
                "Mentions légales"
              ),
              S.documentTypeListItem("termesConditionsVentes").title(
                "Termes et conditions de ventes"
              ),
            ])
        ),
    ]);
