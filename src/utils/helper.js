/**
 * renderIf renders the DOM based on condtion
 * @argument condition
 * @argument ifCallBack
 */

export const renderIf = ( condition, ifCallBack, elseCallBack) =>{
  if(condition()) {
    return ifCallBack();
  } else if( elseCallBack ) {
    return elseCallBack();
  } else {
    return null;
  }
};

export const detectMob = () =>{
  if( navigator.userAgent.match(/Android/i)
  || navigator.userAgent.match(/webOS/i)
  || navigator.userAgent.match(/iPhone/i)
  || navigator.userAgent.match(/iPad/i)
  || navigator.userAgent.match(/iPod/i)
  || navigator.userAgent.match(/BlackBerry/i)
  || navigator.userAgent.match(/Windows Phone/i)
  ){
    return true;
  } else {
    return false;
  }
};

export const millisToMinutesAndSeconds = (millis) =>{
  const minutes = Math.floor(millis / 60000);
  const seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
};