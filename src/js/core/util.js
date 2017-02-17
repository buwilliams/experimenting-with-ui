function getStyles(obj) {
  var out = 'style="';
  Object.keys(obj).forEach(function(key) {
    var val = obj[key];
    if(typeof val === "number") {
      out += key+": "+val+"px; ";
    } else {
      out += key+": "+val+"; ";
    }
  })
  out += '"';
  return out;
}
