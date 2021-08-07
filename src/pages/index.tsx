import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Countdown from "../components/Countdown"

const IndexPage = () => (
  <Layout>
    <Seo title="Viaje a las Catas" />
    <Countdown date="08/22/2021" />
  </Layout>
)

export default IndexPage
