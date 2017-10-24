// @flow

export interface State {
  value: number;
}

export const INITIAL: State = { value: 0 };

export const INCREMENT = '[Counter] INCREMENT';
export const DECREMENT = '[Counter] DECREMENT';
export const RESET = '[Counter] RESET';

export const DECREMENT_ASYNC = '[Counter] DECREMENT_ASYNC';
export const DECREMENT_IF_EVEN = '[Counter] DECREMENT_IF_EVEN';
export const DECREMENT_IF_ODD = '[Counter] DECREMENT_IF_ODD';

export const RESET_ASYNC = '[Counter] RESET_ASYNC';
export const RESET_IF_EVEN = '[Counter] RESET_IF_EVEN';
export const RESET_IF_ODD = '[Counter] RESET_IF_ODD';
