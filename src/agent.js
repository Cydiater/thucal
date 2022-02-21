import puppeteer from 'puppeteer'

async function fetchCookie(crendential) {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('http://info.tsinghua.edu.cn');
	await page.focus('#userName');
	await page.keyboard.type(crendential.username);
	await page.focus('input[name="password"]');
	await page.keyboard.type(crendential.password);
	console.log("Logging in info with crendential");
	await page.click('input[src="initial/all/images/t_09.gif"]');
	await page.waitForSelector('a[href="mailto:its@tsinghua.edu.cn"]')
	const allText = await page.$eval("*", e => e.innerText);
	if (allText.includes('进入选课')) {
		console.log("Logging in succeed, have label 进入选课 in current page");
		await page.click('a[href="/render.userLayoutRootNode.uP"]')
		await page.waitForSelector('a[href="mailto:its@tsinghua.edu.cn"]')
	} 
	await page.goto('https://zhjw.cic.tsinghua.edu.cn/jxmh_out.do');
	const cookies = await page.cookies();
	await browser.close();
	return cookies.map(cookie => cookie.name + "=" + cookie.value, "").join(";");
}

export { fetchCookie }
