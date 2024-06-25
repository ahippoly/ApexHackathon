import logo42 from '@/assets/423918.logowik.com.webp';
import easyALogo from '@/assets/uBaka3Xr_400x400.jpg';
import xrpLogo from '@/assets/xrp-xrp-logo-CBBF77A5CF-seeklogo.com.webp';
import jadeMeer from '@/assets/yuewang.jpg';

export const defaultIssuers: IIssuer[] = [
  {
    name: 'XRPLedger',
    address: 'r9LqNeG6qHxjeUocjvVki2XR35weJ9mZgQ',
    img: xrpLogo,
  },
  {
    name: 'EasyA',
    address: 'r9LqNeG6qHxjeUocjvVki2XR35weJ9mZgQ',
    img: easyALogo,
  },
  {
    name: '42',
    address: 'r9LqNeG6qHxjeUocjvVki2XR35weJ9mZgQ',
    img: logo42,
  },
];

export const defaultHolders: IHolder[] = [
  {
    name: 'Yue Wang',
    address: 'rBcfGpKaYEQsRjY6NsCHDCPT5PfvNki4Pz',
    img: jadeMeer,
  },
  {
    name: 'Bob',
    address: 'rBcfGpKaYEQsRjY6NsCHDCPT5PfvNki4Pz',
    img: jadeMeer,
  },
  {
    name: 'Charlie',
    address: 'rBcfGpKaYEQsRjY6NsCHDCPT5PfvNki4Pz',
    img: jadeMeer,
  },
];

export const defaultCredentials: ICredential[] = [
  {
    id: '1',
    issuer: defaultIssuers[0],
    name: 'Dev Training',
    img: xrpLogo,
    blockchain: 'XRPL',
    description:
      'This credential certifies that the holder has successfully completed the Basic Level training for developers on the XRP Ledger, covering fundamental concepts and practical implementation skills.',
    issueDate: new Date('2024-06-25'),
    status: 'Active',
    type: 'Professional Certification',
    destinator: defaultHolders[0],
  },
  {
    id: '2',
    issuer: defaultIssuers[1],
    name: 'Blockchain Basis',
    img: easyALogo,
    blockchain: 'XRPL',
    description: '',
    issueDate: new Date('2024-06-25'),
    status: 'Active',
    type: 'Professional Certification',
    destinator: defaultHolders[0],
  },
  {
    id: '3',
    issuer: defaultIssuers[2],
    name: 'Software Engineer',
    img: logo42,
    blockchain: 'XRPL',
    description: '',
    issueDate: new Date('2024-06-25'),
    status: 'Active',
    type: 'Professional Certification',
    destinator: defaultHolders[0],
  },
];
