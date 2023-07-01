import Layout from "@/components/Layout/Layout";
import NewsDetailsPage from "@/components/NewsDetailsPage/NewsDetailsPage";
import PageHeader from "@/components/PageHeader/PageHeader";
import { useRouter } from "next/router";
import React from "react";

const NewsDetails = () => {
  const router = useRouter();
  const { haberId } = router.query;

  return (
    <Layout pageTitle="News Details">
      <PageHeader title="News Details" />
      <NewsDetailsPage haberId={haberId} />
    </Layout>
  );
};

export default NewsDetails;
