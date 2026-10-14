export function flightNumberKey(value: string): string | null {
  const match = value.trim().match(/^([a-z0-9]{2})[\s-]*0*(\d{1,4})([a-z]?)$/i);
  return match ? `${match[1].toLowerCase()}${Number(match[2])}${match[3].toLowerCase()}` : null;
}
