import puppeteer from 'puppeteer'

async function fetchCookie(crendential) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('http://info.tsinghua.edu.cn');
	await page.focus('#userName');
	await page.keyboard.type(crendential.username);
	await page.focus('input[name="password"]');
	await page.keyboard.type(crendential.password);
	await page.click('input[src="initial/all/images/t_09.gif"]');
	await new Promise(r => setTimeout(r, 3000));
	await page.goto('https://zhjw.cic.tsinghua.edu.cn/jxmh_out.do');
	const cookies = await page.cookies()
	await browser.close();
	return cookies[0].name + "=" + cookies[0].value
}

export { fetchCookie }
