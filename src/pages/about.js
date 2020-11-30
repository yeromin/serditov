import React from "react";
import { Title, Link, Meta } from "react-head";
import Layout from "../components/layout";
import TabsVertical from "../components/tabs/tabs";

const Seo = () => (
  <>
    <Title>About Serditov architect</Title>
    <Meta name="description" content="About Anton Serditov architect" />
    <Link rel="canonical" content="https://serditov.com/" />
  </>
);

export default function About({ location }) {
  return (
    <Layout location={location}>
      <Seo />
      <TabsVertical />
    </Layout>
  );
}
