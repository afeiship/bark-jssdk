import BarkJssdk from '../src';
import { IOS_SOUND } from '../src/typing';

describe('api.basic', () => {
  test('api: message should get promise', async () => {
    const sdk = new BarkJssdk();
    const result = await sdk.notify({ title: '提示', body: '您有新消息来了' });
    expect(result).toBeDefined();
    expect(result.message).toBe('success');
  });

  test('api: message with icon', async () => {
    const sdk = new BarkJssdk();
    const result = await sdk.notify({
      title: '提示',
      body: '这是一条来自 aric 的消息',
      icon: 'https://tva1.sinaimg.cn/large/007S8ZIlgy1gexw87htqhj305k05k74o.jpg',
    });
    expect(result).toBeDefined();
    expect(result.message).toBe('success');
  });

  test.only('api: notify by BarkJssdk.notify method', async () => {
    const result = await BarkJssdk.notify({
      title: '提示',
      body: '这是一条来自 aric 的消息',
    });

    console.log(result);


    expect(result).toBeDefined();
    expect(result.message).toBe('success');
  });

  test('api: with sound', async () => {
    const sdk = new BarkJssdk();
    const result = await sdk.notify({
      title: '推送铃声',
      body: '我会带着sound，但我是一个测试',
      sound: IOS_SOUND.mailsent,
    });
    expect(typeof sdk.notify).toBe('function');
    expect(result.message).toBe('success');
  });
});
