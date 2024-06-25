import { StaticImageData } from 'next/image';

export {};

declare global {
  interface Wallet {
    address: string;
  }

  interface IIssuer {
    name: string;
    address: string;
    img: string | StaticImageData;
  }

  interface IHolder {
    name: string;
    address: string;
    img: string | StaticImageData;
  }

  interface ICredential {
    id: string;
    issuer: IIssuer;
    name: string;
    img: string | StaticImageData;
    issueDate: Date;
    description: string;
    status: string;
    type: string;
    blockchain: string;
    destinator: IHolder;
    metadata?: string;
  }

  interface IOpportunity {
    id: string;
    title: string;
    description: string;
    img: string | StaticImageData;
    issuer: string;
    credentialsRequired: ICredential[];
    deadlineToApply: Date;
    location: string;
  }
}
