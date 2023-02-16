import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
export default function Home() {
  return (
    <Layout>
      <section className={`headingMd textCenter`}>
        <p>Hello this introduction paragraph</p>
      </section>
    </Layout>
  );
}
