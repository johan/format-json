module.exports = (function() {
  function json(o) { return JSON.stringify(o); }
  var n = null
    , leadOp = '\n$2$1 '
    , tailOp = /\ ?([,\{\[])\n ( *)(?: )/gm // make trailing ,{[ become leading
    , cuddle = /(^|[,\{\[] ?)\n */gm // cuddle brackets, braces and array items
    , format =
      { terse: json
      , plain: function(o, i) { return JSON.stringify(o, n, i == n ? 2 : i); }
      , diffy: function(o) {
          return format.plain(o).replace(tailOp, leadOp).replace(cuddle, '$1');
        }
      , space: function(o) {
          return JSON.stringify(o, null, 1).replace(/\n */g, ' ');
        }
      , lines: function(o) {
          if ('object' !== typeof o || o == null) return format.terse(o);
          if ('[object Array]' === Object.prototype.toString.call(o))
            return '[ '+ o.map(format.space).join('\n, ') + '\n]';
          var res = '', sep = '{ ', key;
          for (key in o) {
            res += sep + json(key) +': '+ format.space(o[key]);
            sep = '\n, ';
          }
          return res + '\n}';
        }
      }
    ;
  return format;
})();
