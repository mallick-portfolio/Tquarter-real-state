import Footer from "./footer.js"
import Header from "./header.js"

const Layout = ({children}) => {
  return (
    <>
      <Header />
        {children}
      <Footer />
    </>
  )
}

export default Layout