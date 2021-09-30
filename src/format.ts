function toTypeName(obj: unknown): string {
  const t = typeof obj;
  if (t !== "object") {
    return t;
  }
  return Object.prototype.toString.call(obj);
}

export function format(obj: unknown): string {
  return `${obj}(${toTypeName(obj)})`;
}
