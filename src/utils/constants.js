export default class CONSTANTS {
  static BEST_ITEM_PAGE_SIZE = Object.freeze({
    PC: 4,
    TABLET: 2,
    MOBILE: 1,
  });
  static BUNDLE_SIZE = 5;
  static ITEM_PAGE_SIZE = Object.freeze({
    PC: 10,
    TABLET: 6,
    MOBILE: 4,
  });
  static SORT_ORDER = Object.freeze({
    RECENT: 'recent',
    FAVORITE: 'favorite',
  });
  static SORT_ORDER_MSG = Object.freeze({
    [this.SORT_ORDER.RECENT]: '최신순',
    [this.SORT_ORDER.FAVORITE]: '좋아요순',
  });
  static MODIFY = Object.freeze({
    EDIT: 'edit',
    DELETE: 'delete',
  });
  static MODIFY_MSG = Object.freeze({
    [this.MODIFY.EDIT]: '수정하기',
    [this.SORT_ORDER.FAVORITE]: '삭제하기',
  });
  static VIEWPORT = Object.freeze({
    PC: 'PC',
    TABLET: 'TABLET',
    MOBILE: 'MOBILE',
  });
  static BREAKPOINTS = Object.freeze({
    MOBILE: 743,
    TABLET: 1199,
  });
  static EMPTY_INPUT_OBJ = Object.freeze({
    value: '',
    name: '',
    type: '',
    errMsg: '',
  });
}
