import { MDXRemote } from "next-mdx-remote"
import dynamic from "next/dynamic"
import { PrismCodeBlock } from "./CodeBlock"

interface Props {
  classes: string
  mdx: string
}

export const MarkdownRenderer: React.FC<Props> = ({ classes, mdx }) => {
  return (
    <div className={classes}>
      <MDXRemote
        compiledSource={mdx}
        components={{
          img: dynamic(() => import("./PostImage")),
          pre: PrismCodeBlock,
        }}
      />
    </div>
  )
}
