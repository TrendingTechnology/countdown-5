
import { ReactNode } from "react"
import "nes.css/css/nes.min.css";
import "./Layout.css"
import { StaticImage } from "gatsby-plugin-image"

interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="container">
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
