import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <Layout>
      <Seo
        title="Web Development and Search Engine Optimization "
        description="Developer Gus"
      />
      <div className="my-4">
        <h1 className="text-xl">Home page</h1>
        <h2 className="text-lg">Blog Posts</h2>
      </div>
      <ul className="my-9"></ul>
    </Layout>
  )
}

export default IndexPage
