import puppeteer from 'puppeteer';

import server from '../../../puppeteer';

describe('Counter', () => {
  let page = null;
  let browser = null;

  beforeAll(async () => {
    const width = 1280;
    const height = 800;

    const launch = {
      headless: false,
      slowMo: 80,
      args: [`--window-size=${width},${height}`, '--no-sandbox']
    };

    await server;
    browser = await puppeteer.launch(launch);
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });

  afterAll(async () => {
    await browser.close();
    await server.close();
  });

  it('should display count', async () => {
    await page.goto('http://localhost:3000/counter')
    const text = await page.$eval('.typography > h3', el => el.textContent);

    expect(text).toEqual('Clicked: 0 times, value is even.');
  });
});
