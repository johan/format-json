module.exports = (function() {
  var n = null
    , leadOp = '\n$2$1 '
    , tailOp = /\ ?([,\{\[])\n ( *)(?: )/gm // make trailing ,{[ become leading
    , cuddle = /(^|[,\{\[] ?)\n */gm // cuddle brackets, braces and array items
    , format =
      { terse: function(o) { return JSON.stringify(o); }
      , plain: function(o, i) { return JSON.stringify(o, n, i == n ? 2 : i); }
      , diffy: function(o) {
          return format.plain(o)
            .replace(tailOp, leadOp)
            .replace(cuddle, '$1');
        }
      }
    ;
  return format;
})();
