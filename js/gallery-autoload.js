(function(){
  function guessPrefix(path){
    var m = path.match(/week(\d+)/);
    return m ? 'w' + m[1] + '-' : 'w-';
  }
  function tryExts(base){ return [base+'.png', base+'.jpg', base+'.jpeg', base+'.webp']; }

  function addThumb(g, src){
    var fig = document.createElement('figure');
    fig.innerHTML = '<img src="'+src+'" data-full="'+src+'" alt=""><figcaption></figcaption>';
    g.appendChild(fig);
  }

  document.addEventListener('DOMContentLoaded', function(){
    document.querySelectorAll('.gallery.w-thumbs[data-path]').forEach(function(g){
      var base = g.getAttribute('data-path');
      if(!base.endsWith('/')) base += '/';
      var prefix = g.getAttribute('data-prefix') || guessPrefix(base);
      var count  = parseInt(g.getAttribute('data-count') || 12,10);

      var pad = function(n){ return String(n).padStart(2,'0'); };
      for(var i=1;i<=count;i++){
        (function(i){
          var tried = false;
          tryExts(base + prefix + pad(i)).some(function(url){
            var img = new Image();
            img.onload = function(){ addThumb(g, url); };
            img.onerror = function(){};
            img.src = url;
            tried = true;
            return false; // نجرب كل الامتدادات بسرعة؛ أول نجاح يُضيف الصورة
          });
        })(i);
      }
    });
  });
})();
