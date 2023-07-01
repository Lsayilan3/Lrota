import { useRouter } from 'next/router';
import Layout from '@/components/Layout/Layout';
import PageHeader from '@/components/PageHeader/PageHeader';
import DestinationsDetailsPage from '@/components/DestinationsDetails/DestinationsDetailsPage';

const DestinationsDetails = () => {
  const router = useRouter();
  const { categoryId } = router.query;

  return (
    <Layout pageTitle="Destinations Details">
      <PageHeader title="Destinations Details" page="Destinations" />
      <DestinationsDetailsPage categoryId={categoryId} />
    </Layout>
  );
};

export default DestinationsDetails;
