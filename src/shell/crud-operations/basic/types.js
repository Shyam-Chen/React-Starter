// @flow

export interface Item {
  id: number;
  primary: string;
  accent: string;
}

export interface IBasic {
  searchData: string;
  selected: Item[];

  dataset: Item[];

  addData: Item | Object;
  viewData: Item | Object;
  editData: Item | Object;
  deleteData: Item | Object;

  dialogs: {
    add: boolean,
    edit: boolean,
    view: boolean,
    delete: boolean,
  };
}

export interface Props {
  classes: Object;
  b$: IBasic;
  actions: Object;
  selectors: Object;
}
