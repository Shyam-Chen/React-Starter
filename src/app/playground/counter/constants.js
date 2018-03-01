// @flow

export interface ICounter {
  value: number;
}

export const INITIAL: ICounter = { value: 0 };

export const MEMOIZE = (counter: ICounter): ICounter => counter;

export const INCREMENT = '[Counter] INCREMENT';
export const DECREMENT = '[Counter] DECREMENT';
export const RESET = '[Counter] RESET';

export const DECREMENT_ASYNC = '[Counter] DECREMENT_ASYNC';
export const DECREMENT_IF_EVEN = '[Counter] DECREMENT_IF_EVEN';
export const DECREMENT_IF_ODD = '[Counter] DECREMENT_IF_ODD';

export const RESET_ASYNC = '[Counter] RESET_ASYNC';
export const RESET_IF_EVEN = '[Counter] RESET_IF_EVEN';
export const RESET_IF_ODD = '[Counter] RESET_IF_ODD';

export const START_COUNT = '[Counter] START_COUNT';
export const CANCEL_COUNT = '[Counter] CANCEL_COUNT';
