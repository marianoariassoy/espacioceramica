export function formatPrice(
  value: number,
  currency: "ARS" | "USD" = "ARS"
): string {
  const locales = {
    ARS: "es-AR",
    USD: "en-US",
  };

  return new Intl.NumberFormat(locales[currency], {
    style: "currency",
    currency,
    currencyDisplay: "code",
    minimumFractionDigits: currency === "USD" ? 0 : 0,
  }).format(value);
}
