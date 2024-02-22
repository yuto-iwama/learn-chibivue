interface Attribute {
  value: string;
}

export function patchAttr(
  el: Element & { _va?: Record<string, Attribute | undefined> },
  rawName: string,
  value: string | null
) {
  const attributes = el._va || (el._va = {});
  const existingAttribute = attributes[rawName];

  if (value != null && existingAttribute) {
    existingAttribute.value = value;
  } else {
    const name = parseName(rawName);
    if (value) {
      // TODO: 関数に抽出
      el.setAttribute(name, value);
    } else {
      el.removeAttribute(name);
    }
  }
}

function parseName(rawName: string) {
  return rawName;
}
