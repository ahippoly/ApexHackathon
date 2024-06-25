'use client';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { Card, Stack, Typography } from '@mui/material';
import Image from 'next/image';

import { useWeb3Auth } from '@/hooks/useWeb3Auth';
import { shrinkString } from '@/lib/utils';

function CredentialDetail({ credential }: { credential: ICredential }) {
  const webAuth = useWeb3Auth();

  return (
    <Card
      sx={{
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        gap: 2,
        p: 2,
        overflowY: 'auto',
        height: '100%',
        maxHeight: '100%',
        scrollbarWidth: 'thin',
      }}
    >
      <Stack justifyContent='center' alignItems='center' alignSelf='center'>
        <Image
          src={credential.img}
          alt={credential.name}
          width={100}
          height={100}
        />
        <Typography
          sx={{
            mt: 2,
          }}
        >
          {credential.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {credential.issuer.name}
        </Typography>
      </Stack>
      <Stack>
        <Typography variant='body1' fontWeight='bold'>
          Issuer
        </Typography>
        <Stack direction='row' gap={1} alignItems='center'>
          <Typography>{credential.issuer.name}</Typography>
          <DoneAllIcon />
        </Stack>

        <Typography>
          DID:{credential.blockchain}:
          {shrinkString(credential.issuer.address, 3, 3)}
        </Typography>
      </Stack>
      <Stack direction='row' gap={1}>
        <Typography fontWeight='bold'>Issue Date :</Typography>
        <Typography>{credential.issueDate.toLocaleDateString()}</Typography>
      </Stack>
      <Stack>
        <Typography fontWeight='bold'>Credential description</Typography>
        <Typography>{credential.description}</Typography>
      </Stack>
      <Stack direction='row' gap={1}>
        <Typography fontWeight='bold'>Credential Status :</Typography>
        <Typography>{credential.status}</Typography>
      </Stack>
      <Stack flexWrap='wrap'>
        <Typography fontWeight='bold'>Credential Type</Typography>
        <Typography>{credential.type}</Typography>
      </Stack>
      <Stack>
        <Typography fontWeight='bold'>Destinator</Typography>
        <Typography>{credential.destinator.name}</Typography>
        <Typography noWrap>
          {`did:xrp:1:${webAuth.userWallet?.address}` ||
            `DID:${credential.blockchain}:
          ${shrinkString(credential.destinator.address, 3, 3)}`}
        </Typography>
      </Stack>
    </Card>
  );
}

export default CredentialDetail;
