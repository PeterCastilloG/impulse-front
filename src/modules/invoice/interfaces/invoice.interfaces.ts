export interface IInvoiceContentPage {
  challengeOrderId: number;
  title: string;
  label: string;
  description: Array<ILetter>;
  invoiceDetailts: Array<Array<IDetail>>;
  paymentMethods: {
    title: string;
    methods: Array<{
      currencie: string;
      currencieImg: string;
      processors: Array<IProcessor>;
    }>;
  };
  extrainfo: string;
  invoiceInfo: IInvoiceInfo;
}

export interface IProcessor {
  label: string;
  code: string;
  img: string;
  paymenteProcessor: string;
  currencyCode?: string;
  currencyToken?: string;
}
export interface ILetter {
  letter: string;
  bold?: boolean;
}

export interface IDetail {
  propertie: string;
  value: string;
  variant?: boolean;
}

export interface IInvoiceInfo {
  labelInvoice: string;
  payWith: string;
  code: string;
  img: string;
  title: string;
  qrImg: string;
  qrCode: string;
  properties: Array<Array<IDetail>>;
  extraInfo: Array<string>;
  extraInfWithLinks: string;
  warns: Array<IProcessorWarn>;
  verify: {
    text: string;
  };
  checkpage: {
    text: string;
    link: string;
  };
}

export interface IProcessorWarn {
  title: string;
  content: string;
}
