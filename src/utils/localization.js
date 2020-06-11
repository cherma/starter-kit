import _get from 'lodash/get';
import _template from 'lodash/template';
import * as Content from '../static-contents';

const translate = (path, value) =>{
  const string = _get(Content, path, null);
  return value && string ? _template(string)(value) : string;
};

export default {
  t: translate
};