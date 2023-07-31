export interface IConfigureContentPage {
  title: string
  typeProducts: { label: string, items: Array<ITypeProduct> }
  modalities: { label: string, items: Array<IModality> }
  challenges: { label: string, items: Array<IChallenge> }
  buyChallengeBtn: {
    value: string
  }
  cuponInput: ICupon
  term_conditions: Array<ITerm>
}

export interface ICupon {
  label: string
  id: string
  name: string
  placeholader: string
}

export interface ITerm {
  id: string
  name: string
  defaultValue: boolean
  required: true,
  label: Array<{ letter: string, bold?: boolean }>
}
export interface ITypeProduct {
  typeProductId: number;
  typeProductName: string;
  typeProductImg: string;
}

export interface IModality {
  typeProductId: number
  typeModalityId: number;
  typeModalityName: string;
}

export interface IChallenge {
  balance: number;
  label: string;
  typeProductId: number;
  typeModalityId: number;
  challengeId: number;
  detailsChallenge: Array<{ label: string; info: string }>;
  balanceLabel: string;
  amount: {
    price: number;
    priceLabel: string;
    priceValue: string;
  };
}
