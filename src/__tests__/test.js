import fetchData from '../http';
import getLevel from '../index';

jest.mock('../http');

beforeEach(() => {
  jest.resetAllMocks();
});

test('check success response of getLevel', () => {
  const value = { status: 'ok', level: 5 };
  fetchData.mockReturnValue(value);
  const level = getLevel(1);
  expect(level).toEqual('Ваш текущий уровень: 5');
});

test('check false response of getLevel', () => {
  const value = { status: '400' };
  fetchData.mockReturnValue(value);
  const level = getLevel(1);
  expect(level).toEqual('Информация об уровне временно недоступна');
});

test('check trow response of fetchData', () => {
  expect(fetchData).toThrow('Mock this!');
});
