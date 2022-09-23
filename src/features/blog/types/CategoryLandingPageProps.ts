import { PageParams } from "~/model/PageProps"
import { BlogPost, Category, PostMapData } from "~/model/Post"

// Type for the internal page in `features/blog/pages/CategoryLandingPage.tsx`
export interface CategoryLandingPageProps {
  postsByCurrentCategory: PostMapData<BlogPost>[]
  currentCategory: Category
}

// Type for the page in `/pages/blog/category/[category].tsx`
export interface CategoryLandingRouteProps extends CategoryLandingPageProps {
  postCategories: Category[]
}

export type CategoryLandingRouteParams = PageParams<{
  category: string
}>
