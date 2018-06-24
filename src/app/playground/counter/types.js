// @flow

export interface ICounter {
  value: number;
}

export interface Props {
  counter: ICounter;
  actions: Object;
  selectors: Object;
}
