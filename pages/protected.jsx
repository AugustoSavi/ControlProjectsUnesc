import { useSession } from 'next-auth/client';
import Layout from '../components/layout';
import Relatorio from '../components/relatorio';
import AccessDenied from '../components/access-denied';

export default function Page() {
  const [session, loading] = useSession();

  // When rendering client side don't display anything until loading is complete
  if (typeof window !== 'undefined' && loading) return null;

  // If no session exists, display access denied message
  if (!session) { return <Layout><AccessDenied /></Layout>; }

  // If session exists, display content
  return (
    <Relatorio />
  );
}
