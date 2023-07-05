import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import PopularToursTwo from "@/components/PopularTours/PopularToursTwo";
import React from "react";

const Tours = () => {
  return (
    <Layout pageTitle="Turlar">
      <PageHeader title="Popüler Turlar" page="Turlar" />
      <PopularToursTwo toursPage />
    </Layout>
  );
};

export default Tours;
