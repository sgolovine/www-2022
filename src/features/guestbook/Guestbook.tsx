import clsx from "clsx"
import { PageHeader } from "~/components/common/PageHeader"
import pageTitles from "~/config/navigation/pageTitles"
import { themeClasses } from "~/config/themeClasses"
import { StaticRoutes } from "~/model/Routes"
import CommentBox from "./components/CommentBox"
import { GuestbookProps } from "./GuestbookProps"
import labels from "~/labels.json"

const introClasses = clsx(themeClasses.textColor, "pb-4")

const Guestbook: React.FC<GuestbookProps> = ({}) => {
  return (
    <div className={themeClasses.container}>
      <PageHeader>{pageTitles[StaticRoutes.Guestbook]}</PageHeader>
      <p className={introClasses}>{labels.guestbook.intro}</p>
      <div>
        <CommentBox isLoading={false} isError={false} isSuccess={true} />
      </div>
    </div>
  )
}

export default Guestbook
