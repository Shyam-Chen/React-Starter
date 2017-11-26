import puppeteer from 'puppeteer';

import server from '~/e2e';

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
    await page.goto('http://localhost:3000/counter');
  });

  afterAll(async () => {
    await browser.close();
    await server.close();
  });

  it('should display count', async () => {
    const text = await page.$eval('.typography:nth-child(2) > h3', el => el.textContent);
    expect(text).toEqual('Clicked: 0 times, value is even.');
  });

  it('should click increment button', async () => {
    await page.click('.typography:nth-child(3) button:nth-child(1)');
    const text = await page.$eval('.typography > h3', el => el.textContent);
    expect(text).toEqual('Clicked: 1 times, value is odd.');
  });
});
