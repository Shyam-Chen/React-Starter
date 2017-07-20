import {
  FOO_ADD_VALUE, BAR_ADD_VALUE,
  FOO_SEARCH_VALUE, BAR_SEARCH_VALUE
} from '../constants';

export const onChangeFoo = foo => ({ type: FOO_ADD_VALUE, foo });
export const onChangeBar = bar => ({ type: BAR_ADD_VALUE, bar });

export const onChangeSearchFoo = foo => ({ type: FOO_SEARCH_VALUE, foo });
export const onChangeSearchBar = bar => ({ type: BAR_SEARCH_VALUE, bar });
