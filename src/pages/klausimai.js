import React from "react"
import { ReactTypeformEmbed } from 'react-typeform-embed';
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="Super" />
    <div className="cool">
    <h1>Klausimai</h1>
    <ReactTypeformEmbed url="https://form.typeform.com/to/e3P3G4tX" />
    {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
    </div>
 
  </Layout>
)

export default NotFoundPage
