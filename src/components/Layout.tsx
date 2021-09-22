
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
          "../images/matiu.jpg"
        }
        formats={["auto", "webp", "avif"]}
      />
      <main>
        {children}
        <div className="footer">
          © {new Date().getFullYear()}, Made with
          <i className="nes-icon heart"></i> by
          {' '}<a href="https://www.instagram.com/jhernandez.cr/" target="_blank" rel="noopener noreferrer">José</a>
        </div>
      </main>
    </div>
  )
}

export default Layout
