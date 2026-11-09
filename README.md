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

## Honlapon belüli keresés

Az `npm run build` a weboldalak szövegéből Pagefind keresőindexet készít a
`dist/pagefind` mappában. Az index a közzétett oldal része. A fejlesztői szerver
ugyanezt a legutóbbi buildből szolgálja ki: tartalmi módosítás után futtasd újra
az `npm run build` parancsot, ha a helyi keresőt is frissíteni szeretnéd.
Az index a középső tartalmi oszlopot és a cikkek képleírását tartalmazza;
a navigáció és az oldalsáv ismétlődő elemei nem kerülnek bele. A magyar és az
angol oldalak közös, magyar nyelvi beállítású indexben kereshetők.