(function (doc, win) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      var clientWidth = docEl.clientWidth;
      if (!clientWidth) return;
      //这个意思就是 屏幕宽度大于750的时候 设置固定的px值
      if (clientWidth >= 750) {
        docEl.style.fontSize = "16px";
      } else {
        //屏幕宽度大于750的时候 采用rem自适应布局
        docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
      }
    };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);
