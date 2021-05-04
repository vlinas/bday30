import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Super" />
    <div className="cool">
    <h1>Super!</h1>
    {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
    </div>
 
  </Layout>
)

export default NotFoundPage
