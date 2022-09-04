import { Image } from "~/components/Image"

const ProfilePicture: React.FC = () => (
  <div className="flex flex-row justify-center items-center rounded-full">
    <Image
      className="rounded-full"
      src="images/profile_picture.png"
      alt="Profile Picture"
      layout="fixed"
      height={75}
      width={75}
    />
  </div>
)

export default ProfilePicture
