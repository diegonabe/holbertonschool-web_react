import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

describe('getFullYear', () => {
  test('should return the current year', () => {
    const currentYear = new Date().getFullYear();
    expect(getFullYear()).toEqual(currentYear);
  });
});

describe('getFooterCopy', () => {
  test('should return "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toEqual("Holberton School");
  });

  test('should return "Holberton School main dashboard" when isIndex is false', () => {
    expect(getFooterCopy(false)).toEqual("Holberton School main dashboard");
  });
});

describe('getLatestNotification', () => {
  test('should return the correct string', () => {
    const notificationString = "<strong>Urgent requirement</strong> - complete by EOD";
    expect(getLatestNotification()).toEqual(notificationString);
  });
});

