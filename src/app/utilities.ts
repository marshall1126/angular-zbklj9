export function formatDec1(x: number): string {
  var h = Math.floor(x);
  var s = h + "." + Math.round(10 * x - 10 * h);
  return s;
}

export function formatDec2(x: number): string {
  if (x == null) return '';
  if (isNaN(x)) return '';
  var h = Math.floor(x);
  var t = 100 + Math.round(100 * x - 100 * h);
  var s = h + "." + (t+'').substring(1,3);
  return s;
}