import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { APIRoute } from "astro";
import { Document, HeadingLevel, Packer, Paragraph } from "docx";
import { missionDocuments } from "../../data/missionDocuments";
import chapters from "../../data/constitution.json";
import { documentColophon } from "../../data/documentColophon";

export function getStaticPaths() {
	return missionDocuments.map((document) => ({
		params: { document: document.slug },
		props: { file: document.file, slug: document.slug },
	}));
}

export const GET: APIRoute = async ({ props }) => {
	const bytes = props.slug === "partalkotmany"
		? await Packer.toBuffer(new Document({
			sections: [{
				children: [
					new Paragraph({ text: "Pártalkotmány", heading: HeadingLevel.TITLE }),
					...chapters.flatMap((chapter) => [
						new Paragraph({ text: chapter.title, heading: HeadingLevel.HEADING_1 }),
						...chapter.paragraphs.map((text) => new Paragraph({ text })),
					]),
					new Paragraph({ text: documentColophon.author }),
					new Paragraph({ text: documentColophon.placeDate }),
					new Paragraph({ text: documentColophon.lastModified }),
				],
			}],
		}))
		: await readFile(resolve(process.cwd(), "src", "docs", props.file));
	return new Response(new Uint8Array(bytes), {
		headers: {
			"Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
		},
	});
};
