export interface Article {
	id: string;
	slug: string;
	title: string;
	author?: string;
	subtitle: string;
	publishedAt: string;
	publishedLabel: string;
	url: string;
	paragraphs: (string | { text: string; highlighted: true })[];
	image?: {
		src: string;
		alt: string;
		width: number;
		height: number;
	};
}

export const aktualisCategories = [
	{
		slug: "part-hirek",
		label: "Párt hírek",
		englishLabel: "Party news",
		description: "A Liga belső hírei és a Liga a médiában",
		englishDescription: "News from within the League and the League in the media",
	},
	{
		slug: "hirdetmenyek",
		label: "Hirdetmények",
		englishLabel: "Announcements",
	},
	{
		slug: "esemenyek",
		label: "Események",
		englishLabel: "Events",
		description: "A Liga eseményei és minden más, amit jó szívvel ajánlunk",
		englishDescription: "League events and everything else we warmly recommend",
	},
	{
		slug: "alternativ-hirek",
		label: "Alternatív hírek",
		englishLabel: "Alternative news",
		description: "Érdekességek és furcsaságok a világ híreiből",
		englishDescription: "Interesting and unusual stories from the world's news",
	},
];

export const announcementHighlight = {
	title: "Terjeszthető állásfoglalások",
	englishTitle: "Shareable position statements",
};

export const honlapNews = {
	id: "honlap",
	slug: "honlap",
	title: "Honlap",
	author: "Horváth Tamás",
	subtitle: "Nyilvánosan elérhető az Antikapitalista Liga Magyarország honlapja",
	publishedAt: "2026-11-08",
	publishedLabel: "2026. november 8.",
	url: "/magazin/aktualis/part-hirek/honlap/",
	paragraphs: [
		"A mai naptól nyilvánosan is elérhető az Antikapitalista Liga Magyarország hivatalos honlapja.",
		"A weboldalon jelenleg a Liga alapvető dokumentumai és programadó anyagai érhetők el, a következő időszakban azonban folyamatosan bővül majd új tartalmakkal, elemzésekkel és tájékoztató anyagokkal.",
		"A honlap célja, hogy bemutassa a szervezet célkitűzéseit, értékrendjét és tevékenységét, valamint kapcsolódási lehetőséget kínáljon minden érdeklődő számára.",
		"Várjuk azok jelentkezését, akik szimpatizálnak az Antikapitalista Liga Magyarország céljaival, és szívesen bekapcsolódnának munkánkba vagy támogatnák kezdeményezéseinket.",
	],
};

export const partyArticles: Article[] = [honlapNews];

export const announcementArticles: Article[] = [
	{
		id: "gazdatlan-temakorok",
		slug: "gazdatlan-temakorok",
		title: "Gazdátlan témakörök",
		author: "ALMA",
		subtitle: "Gazdátlan ügyek, amelyekért felelősek vagyunk",
		publishedAt: "2026-10-12",
		publishedLabel: "2026. október 12.",
		url: "/magazin/aktualis/hirdetmenyek/gazdatlan-temakorok/",
		paragraphs: [],
		image: {
			src: "/gazdatlan-temakorok-plakat.jpg",
			alt: "Antikapitalista Liga Magyarország. Gazdátlan témakörök érdemi politikai képviselet nélkül: az egészében vett természet védelme, a széthullott közösségi kötelékek megújítása, a modern gazdasági szemlélet mélyen rögzült alapfeltevéseinek kritikája. Ezek nem feltétlenül azok a témák, amelyek köré a mindennapi politikai élet szerveződik, mégis meghatározzák a jövőnket. Sok fontos gondolat jelen van a természetvédelemben, a civil közösségek életében és a felelős gondolkodásunkban, ám a politika nem veszi számításba ezeket, és nem tárgyalja súlyuknak megfelelően. Az Antikapitalista Liga azért jön létre, hogy mindez koherens formában jelenjen meg a közéletben. Több természet, kevesebb növekedés. Több személyesség, kevesebb fogyasztás. Több gondoskodás, kevesebb kizsákmányolás.",
			width: 526,
			height: 789,
		},
	},
	{
		id: "magyarorszagi-erdok-vedelmeben",
		slug: "magyarorszagi-erdok-vedelmeben",
		title: "AZ ANTIKAPITALISTA LIGA A MAGYARORSZÁGI ERDŐK VÉDELMÉBEN",
		author: "ALMA",
		subtitle: "Magyarország minden erdejét védelem alá kell helyezni!",
		publishedAt: "2026-10-03",
		publishedLabel: "2026. október 3.",
		url: "/magazin/aktualis/hirdetmenyek/magyarorszagi-erdok-vedelmeben/",
		paragraphs: [
			"Az Antikapitalista Liga döntési helyzetbe kerülve garantáltan kezdeményezi az Erdőtörvény teljes megújítását, hogy Magyarország erdei valódi és feltétlen védelmet kapjanak.",
			"Megújítjuk a törvényalkotás egész eddigi rendjét. Olyan jogi keretrendszer kialakítását kezdeményezzük, amely a jelenlegi Alaptörvényhez hasonló, kiemelt jogi védettséget biztosít az alapvető társadalmi és természeti értékeknek, ugyanakkor nem teszi azok védelmét kizárólag a mindenkori parlamenti kétharmados többségtől függővé. Célunk, hogy az ilyen alapvető garanciák módosítása szélesebb társadalmi legitimációhoz és szigorúbb eljárási feltételekhez kötődjön, ne válhasson a mindenkori politikai erőviszonyok egyszerű következményévé.",
			{
				text: "Erdőinkből nem lehet tüzelőanyag! Sem erőművekbe, sem más célra nem szabad fát kivágni azért, hogy azokat gazdasági vagy politikai haszonszerzés céljából használják fel.",
				highlighted: true,
			},
			"Ezzel párhuzamosan kezdeményezni, szorgalmazni és szabályozni fogjuk a szántóföldi energiaültetvények létrehozását, hogy az energetikai célú faanyag előállítása ne természetes erdeink pusztításával történjen.",
			"Az erdő nem pusztán gazdasági erőforrás! Ökoszisztémák, élőhelyek, a vízháztartás és az éghajlat természetes szabályozói, közös természeti örökségünk részei. Ha erdő nincs, ember sincs!",
			{
				text: "Az erdők sem lehetnek a kapitalista gazdaság és közgondolkodás áldozatai!",
				highlighted: true,
			},
			"A természetet nem rendelhetjük alá a végtelen gazdasági növekedés és a profittermelés embertelen érdekeinek. Az erdő nem egyszerűen kitermelhető nyersanyag, hanem az élet egyik alapja.",
			"Védjük meg Magyarország erdeit – a jelen és a jövő nemzedékeiért!",
		],
	},
	{
		id: "sokba-fog-kerulni",
		slug: "sokbafogker",
		title: "Sokba fog kerülni",
		author: "ALMA",
		subtitle: "Sokba kerül majd rendbe tenni, amit szétvertünk, de a lehetőségünk a jövőre csak így marad meg.",
		publishedAt: "2026-08-08",
		publishedLabel: "2026. augusztus 8.",
		url: "/magazin/aktualis/hirdetmenyek/sokbafogker/",
		paragraphs: [],
		image: {
			src: "/nehez-valasztas-plakat.png",
			alt: "Nagyon sokba fog kerülni mindenkinek, ha Magyarországon végül valódi természetvédelem lesz. Ha egy ökológiai szempontokon alapuló országos tájrehabilitáció valósul meg. Ha a gazdaság és a társadalompolitika egészét ezen változások mentén újítjuk meg. Nehéz választás... Viszont egyedül csak így lesz jövőnk!",
			width: 1918,
			height: 820,
		},
	},
];

export const articlesByCategory: Record<string, Article[]> = {
	"part-hirek": partyArticles,
	hirdetmenyek: announcementArticles,
	esemenyek: [],
	"alternativ-hirek": [],
};

export function sortArticlesByDate(articles: readonly Article[]): Article[] {
	return [...articles].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

export function getRecentArticles(articles: readonly Article[], limit = 5): Article[] {
	return sortArticlesByDate(articles).slice(0, limit);
}
