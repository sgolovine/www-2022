interface Props {
  isLoading: boolean
  isError: boolean
  content: string
}

export const Ledger: React.FC<Props> = ({ isLoading, isError, content }) => {
  return (
    <div>
      <p>Ledger Component</p>
    </div>
  )
}
