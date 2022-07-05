import Banner from "../components/banner/banner.js";
import Layout from "../components/shared/layout.js";
import PortfolioList from "../components/portfolio/portfolio.js";

export default function Home() {
  return (
    <Layout>
      <Banner />
      <PortfolioList />
    </Layout>
  );
}
