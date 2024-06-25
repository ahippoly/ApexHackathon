import { Stack } from '@mui/material';

import CredentialDetail from '@/components/Credentials/CredentialDetail';

import { defaultCredentials } from '@/__mocks__/credentials.mock';

function CredentialDetailPage({ params }: { params: { id: string } }) {
  const credential = defaultCredentials.find((c) => c.id === params.id);

  if (!credential) {
    return <Stack>Credential not found</Stack>;
  }

  return <CredentialDetail credential={credential} />;
}

export default CredentialDetailPage;
