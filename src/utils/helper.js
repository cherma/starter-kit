/**
 * renderIf renders the DOM based on condtion
 * @argument condition
 * @argument ifCallBack
 */

export const renderIf = ( condition, ifCallBack) => condition() ? ifCallBack() : null;