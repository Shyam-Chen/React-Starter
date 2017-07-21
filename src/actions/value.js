import {
  FOO_ADD_VALUE, BAR_ADD_VALUE,
  FOO_EDIT_VALUE, BAR_EDIT_VALUE,
  FOO_SEARCH_VALUE, BAR_SEARCH_VALUE
} from '../constants';

export const onChangeAddFoo = foo => ({ type: FOO_ADD_VALUE, foo });
export const onChangeAddBar = bar => ({ type: BAR_ADD_VALUE, bar });

export const onChangeEditFoo = foo => ({ type: FOO_EDIT_VALUE, foo });
export const onChangeEditBar = bar => ({ type: BAR_EDIT_VALUE, bar });

export const onChangeSearchFoo = foo => ({ type: FOO_SEARCH_VALUE, foo });
export const onChangeSearchBar = bar => ({ type: BAR_SEARCH_VALUE, bar });
