export const PageHeader: React.FC<{ children: string }> = ({ children }) => (
  <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-gray-800 dark:text-gray-100 pb-4">
    {children}
  </h1>
)
