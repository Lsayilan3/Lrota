import Layout from "@/components/Layout/Layout";
import MainSliderTwo from "@/components/MainSliderTwo/MainSliderTwo";
import TourDetailsPage from "@/components/TourDetails/TourDetailsPage";
import { useRouter } from "next/router";
import React from "react";

const TourDetails = () => {
    const router = useRouter();
    const { populerId } = router.query;
  return (
    <Layout pageTitle="Tur Detayları">
      <MainSliderTwo />
      <TourDetailsPage populerId={populerId} />
    </Layout>
  );
};

export default TourDetails;
