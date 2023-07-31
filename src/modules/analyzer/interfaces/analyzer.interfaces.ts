export interface IAnalyzerContentPage {
  userMessage: string;
  challengeOrders: Array<IChallengeOrder>;
  orders: Array<{ challengeOrderId: number; login: string }>;
  pageMessage: IPageMessage;
}

interface IChallengeOrder {
  challengeOrderId: number;
  orderId: string;
  challengeOrderInfo: IChallengeOrderInfo;
  extensionPacks?: IExtensionPacks;
  analyzer?: IAnalyzer;
}

export interface IChallengeOrderInfo {
  account: {
    accountLabel: string;
    accountNumber: string;
  };
  fase: {
    faseLabel: string;
    faseState: "ACTIVA" | "DESAPROBADA";
  };
  credenciales: {
    title: string;
    btnName: string
    fields: [{
      label: string;
      value: string;
    },{
      label: string;
      value: string;
    }]

  };
}

export interface IExtensionPacks {
  message: string;
  link?: string;
  packs: Array<{
    challengeId: number;
    price: number;
    packLabel: string;
  }>;
}

export interface IAnalyzer {
  resume: IAcountResume;
  progress: IAcountProgress;
  rules: IAcountRules;
  fase: IFase;
}

export interface IAcountResume {
  title: string;
  currentBalance: IResuemeItem;
  initialWeek: IResuemeItem;
  maximunWeek: IResuemeItem;
  initialDay: IResuemeItem;
  maximunDay: IResuemeItem;
}

interface IResuemeItem {
  label: string;
  value: number;
  percent?: number;
  goal?: boolean
}

export interface IAcountProgress {
  title: string;
  labels: number[]
  data: Array<IProgressItem>
}

export interface IProgressItem {
  label: string;
  value: number[];
}

type RulesProperties = "tradingObjects" | "calc" | "results" | "resume";
export interface IAcountRules {
  title: string;
  properties: Array<{
    propertie: RulesProperties;
    label: string;
  }>;
  objects: Array<
    Record<RulesProperties, { value: string; extra?: string; status?: boolean }>
  >;
}

export interface IFase {
  title: string;
  currentDay: number;
  lastDay: number;
  label: string;
}

export interface IPageMessage {
  title: string;
  content: string;
  reference: string;
}
