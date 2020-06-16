import React from "react";
import { Link as LinkGatsby } from "gatsby";
import { Title, Link, Meta } from "react-head";
import Layout from '../components/layout';


const Seo = () => (
  <>
    <Title>Serditov architect - 404: page not found</Title>
    <Meta name="description" content="Anton Serditov architect" />
    <Link rel="canonical" content="https://serditov.com/" />
  </>
);


const Error404 = ({location}) => {
  return (
    <Layout location={location}> 
      <Seo />
      <h1>404 - page not found</h1>
      <LinkGatsby to="/">BACK</LinkGatsby>
    </Layout>
  );
}
export default Error404;