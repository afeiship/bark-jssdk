import fetch from 'node-fetch';

function delayExecute(fn: (res: string) => void, delay?: number) {
  delay = typeof delay === 'undefined' ? 1000 : delay;
  setTimeout(() => {
    fn(String(delay));
  }, delay);
}

function fetchData() {
  return fetch('https://api.github.com/users/afeiship ').then(r => r.json());
}

export { delayExecute, fetchData };