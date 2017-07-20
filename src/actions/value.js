import { FOO_VALUE, BAR_VALUE } from '../constants';

export const onChangeFoo = foo => ({ type: FOO_VALUE, foo });
export const onChangeBar = bar => ({ type: BAR_VALUE, bar });
