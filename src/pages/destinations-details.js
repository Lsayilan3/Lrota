import DestinationsDetailsPage from "@/components/DestinationsDetails/DestinationsDetailsPage";
import { useRouter } from "next/router";
import Layout from "@/components/Layout/Layout";
import PageHeader from "@/components/PageHeader/PageHeader";
import React from "react";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";

const DestinationsDetails = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  return (
    <Layout pageTitle="Destinations Details">
      <PageHeader title="Destinations Details" page="Destinations" />
      <DestinationsDetailsPage  />
    </Layout>
  );
};

export default DestinationsDetails;
