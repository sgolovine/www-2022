import { getMap } from "./getMap.node"

export async function getStaticCategoryPaths() {
  const contentMap = await getMap()

  return {
    paths: contentMap.postCategories.map(category => ({
      params: {
        category: category.value,
      },
    })),
    fallback: false,
  }
}
