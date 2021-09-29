function toTypeName(obj: any): string {
  const t = typeof obj;
  if (t !== "object") {
    return t;
  }
  return Object.prototype.toString.call(obj);
}

export function format(obj: any): string {
  return `${obj}(${toTypeName(obj)})`;
}
