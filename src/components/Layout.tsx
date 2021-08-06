
import { ReactNode } from "react"
import "./Layout.css"
import { StaticImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
      <Helmet>
        <link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
      </Helmet>
      <StaticImage
        className="background"
        layout="fullWidth"
        // aspectRatio={3 / 1}
        alt=""
        src={
          "../images/Santarena1.jpeg"
        }
        formats={["auto", "webp", "avif"]}
      />
      <main>{children}</main>
      {/* <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer> */}
    </div>
  )
}

export default Layout
