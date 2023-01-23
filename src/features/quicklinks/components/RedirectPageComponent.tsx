interface Props {
  label: string
  redirectLink: string
}

export const RedirectPageComponent: React.FC<Props> = ({
  label,
  redirectLink,
}) => {
  return (
    <div className="max-w-2xl mx-auto py-12 text-center">
      <h1 className="font-bold text-3xl">Redirecting you to {label}</h1>
      <div className="pt-4">
        <p className="text-lg font-medium">
          You are being redirected to: {redirectLink}
        </p>
      </div>
      <div className="pt-4">
        <a className="text-xl font-bold text-blue-500" href={redirectLink}>
          Click here if you are not automatically redirected
        </a>
      </div>
    </div>
  )
}
