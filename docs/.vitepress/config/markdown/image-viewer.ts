import type MarkdownIt from "markdown-it/lib"


export default function imageViewer(md: MarkdownIt): void {

  md.renderer.rules["image"] = function (tokens, idx, options, env, self) {
    const token = tokens[idx];

    const src = token.attrGet("src");
    const alt = token.content;

    return `<ImageViewer src="${src}" alt="${alt}" />`;
  }
}
