import { delayExecute, fetchData } from './async';

test('delayExecute: default 1000/0, when delay is empty/0', (done) => {
  delayExecute((res) => {
    expect(res).toBe('1000');
    done();
  });

  delayExecute((res) => {
    expect(res).toBe('0');
    done();
  }, 0);
});

test('fetData: should get login/username from github', () => {
  return fetchData().then((data: any) => {
    expect(data.login).toBe('afeiship');
  });
});

test('fetData: resolves should match object.', () => {
  return expect(fetchData()).resolves.toMatchObject({ login: 'afeiship' });
});

test('fetchData: use async', async () => {
  const data = await fetchData();
  expect(data).toMatchObject({ login: 'afeiship' });
});