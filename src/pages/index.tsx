import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Countdown from "../components/Countdown"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Countdown date="08/20/2021" />
  </Layout>
)

export default IndexPage
