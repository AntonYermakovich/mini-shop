export const formatPrice = (cost: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(
    cost
  );

export const formatDate = (date: string) =>
  new Date(date).toLocaleString("ru-RU", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
