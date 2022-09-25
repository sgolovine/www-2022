import { PageParams } from "~/model/PageProps"
import { ContentMapCategory, PostMap } from "~/model/Post"

// Type for the internal page in `features/blog/pages/CategoryLandingPage.tsx`
export interface CategoryLandingPageProps {
  postsByCurrentCategory: PostMap
  currentCategory: ContentMapCategory
}

// Type for the page in `/pages/blog/category/[category].tsx`
export interface CategoryLandingRouteProps extends CategoryLandingPageProps {
  postCategories: ContentMapCategory[]
}

export type CategoryLandingRouteParams = PageParams<{
  category: string
}>
