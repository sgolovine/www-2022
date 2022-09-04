interface Props {
  title: string
  bio: string
}

const PageHeader: React.FC<Props> = ({ title, bio }) => (
  <div className="w-full flex flex-col items-center justify-center pt-4 text-center">
    <h1 className="text-lg font-medium text-gray-800 dark:text-white">
      {title}
    </h1>
    <p className="pt-2 text-gray-700 dark:text-white">{bio}</p>
  </div>
)

export default PageHeader
