import Header from './Header'

const SiteLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="mx-auto my-8 max-w-2xl px-4">{children}</main>
    </>
  )
}

export default SiteLayout
