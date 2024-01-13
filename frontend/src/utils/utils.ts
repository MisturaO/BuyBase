export function getFullYear(): number {
  /* Returns the current year */
  return new Date().getFullYear();
}

export function formatCurrency(price: number) {
  return price.toLocaleString('en-US', {
    style: 'currency',
    currency: 'NGN',
  });
}

export function getDiscount(price: number, discount: number) {
  return ((100 - discount) * price) / 100;
}

export function getScreenDifference(screenWidth: number) {
  return screenWidth < 1080
    ? 5
    : screenWidth < 1600
    ? 6
    : screenWidth < 1900
    ? 7
    : 8;
}
