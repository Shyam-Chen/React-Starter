import puppeteer from 'puppeteer';

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

    browser = await puppeteer.launch(launch);
    page = await browser.newPage();
    await page.setViewport({ width, height });
  });

  afterAll(() => {
    browser.close();
  });

  it('should display count', async () => {
    await page.goto('https://react-by-example.firebaseapp.com/counter')
    const text = await page.$eval('.typography > h3', el => el.textContent);

    expect(text).toEqual('Clicked: 0 times, value is even.');
  });
});
