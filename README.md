# liga-website

## Letölthető dokumentumok

A Küldetés oldalon letölthető dokumentumok listája és fájlnevei a
`src/data/missionDocuments.ts` fájlban szerepelnek. Az Alapszabály és a Premodern
Manifesztum Word-fájlja a `src/docs` mappából származik; a Manifesztum weboldala
is ebből készül. A Pártalkotmány weboldala és letölthető Word-változata egyaránt
a `src/data/constitution.json` tartalmából épül fel; a dokumentum végén szereplő
adatok forrása a `src/data/documentColophon.ts`. Frissítés után újra kell buildelni
és közzé kell tenni az oldalt.

## Keresőindexelés

Az Astro a `site` beállításból készít kanonikus címeket és sitemapet.
Közzététel után a `https://antikapitalistaliga.hu/sitemap-index.xml` beküldhető
a Google Search Console-ba. A keresők az indexelésről önállóan döntenek.