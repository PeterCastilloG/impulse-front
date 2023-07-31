export interface IProfileContentPage {
    title: string
    fields: Array<InputField | SelectFiled>
    verifiedState : {
      label: string
      value: string
      state: 1 | 2
    }
    button: {
        value: string
    }
}


interface InputField {
    label: string;
    id: string;
    name: string;
    value: string;
    placeholder: string;
    type: "INPUT";
    disabled: boolean;
    readonly: boolean;
    variant: "text" | "number" | "date"
  }
  
  interface SelectFiled {
    label: string;
    id: string;
    name: string;
    value: string;
    placeholder: string;
    type: "SELECT";
    options: Array<{
      value: string;
      label: string;
    }>;
    disabled: boolean;
    readonly: boolean;
  }
  