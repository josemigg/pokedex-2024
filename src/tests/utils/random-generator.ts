export const generateRandomId = (): string => Math.random().toString().replace('0.', '');

export const generateRandomNumericId = (): number => Number(Math.random().toString().replace('0.', ''));
export const generateRandomNumber = (): number => Number(Math.random().toString());

export const generateRandomString = (): string => Math.random().toString(32).replace('0.', '');

export const generateRandomLink = ({ ensureLength }: { ensureLength?: number } = {}): string => {
  let randomUrl = `https://app.${generateRandomString()}.com?`;

  if (ensureLength && ensureLength > randomUrl.length) {
    Array.from({ length: ensureLength - randomUrl.length }).forEach(() => (randomUrl += 'a'));
  }

  return randomUrl;
};
