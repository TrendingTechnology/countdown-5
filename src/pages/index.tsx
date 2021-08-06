import Layout from "../components/Layout"
import Seo from "../components/Seoa"
import Countdown from "../components/Countdown"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    {/* <i className="nes-ash"></i> */}
    <Countdown date="08/20/2021" />
  </Layout>
)

export default IndexPage
