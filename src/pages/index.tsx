import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Countdown from "../components/Countdown"

const IndexPage = () => (
  <Layout>
    <Seo title="Focus Employee" />
    <Countdown date="2021-09-22T16:00:00.707Z" />
  </Layout>
)

export default IndexPage
