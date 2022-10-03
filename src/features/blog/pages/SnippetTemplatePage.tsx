import { MarkdownRenderer } from "../components/MarkdownRenderer"
import { useFontSize } from "../hooks/useFontSize"
import { SnippetTemplatePageProps } from "../types/SnippetTemplatePageProps"
import { TemplateHeader } from "../components/TemplateHeader"
import { Divider } from "../components/Divider"

const SnippetTemplatePage: React.FC<SnippetTemplatePageProps> = ({
  meta,
  mdx,
}) => {
  const { handleFontSizeDecrease, handleFontSizeIncrease, proseClasses } =
    useFontSize()

  return (
    <div className="max-w-2xl mx-auto">
      <TemplateHeader
        type="snippet"
        title={meta.title}
        description={meta.description}
        onFontSizeIncrease={handleFontSizeIncrease}
        onFontSizeDecrease={handleFontSizeDecrease}
      />
      <Divider />
      {/* Main Content */}
      <MarkdownRenderer classes={proseClasses} mdx={mdx} />
    </div>
  )
}

export default SnippetTemplatePage
