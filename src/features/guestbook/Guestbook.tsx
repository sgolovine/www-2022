import CommentBox from "./components/CommentBox"
import { GuestbookProps } from "./GuestbookProps"

const Guestbook: React.FC<GuestbookProps> = ({}) => {
  return (
    <div>
      <CommentBox />
    </div>
  )
}

export default Guestbook
