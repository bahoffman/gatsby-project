import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { PageHeader } from "../utils";
import contactImg from "../images/bcg/contactBcg.jpeg";

const ContactPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader img={contactImg}>hello from contact page</PageHeader>
  </Layout>
);

export default ContactPage;
