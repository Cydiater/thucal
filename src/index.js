'use strict';

import IcsMaintainer from './IcsMaintainer'
import yargs from 'yargs'
import fs from 'fs'
import axios from 'axios'

const argv = yargs(process.argv)
	.option('cookie', {
		alias: 'c',
		type: 'string',
		demandOption: true
	})
	.option('output', {
		alias: 'o',
		type: 'string',
		demandOption: true
	})
	.argv;

const base_url = 'https://zhjw.cic.tsinghua.edu.cn/jxmh_out.do';
const cookie = argv.cookie;
const filename = argv.o;

function formatDate(date) {
	let year = date.getFullYear(),
		month = (date.getMonth() + 101).toString().slice(-2),
		day = (date.getDate() + 100).toString().slice(-2);
	return `${year}${month}${day}`;
}

async function fetchCalendarJson(startDate, endDate) {
	let response = await axios.get(base_url, {
		headers: {
			Cookie: cookie
		},
		params: {
			p_start_date: formatDate(startDate),
			p_end_date: formatDate(endDate),
			m: 'bks_jxrl_all',
			jsoncallback: 'no_such_method',
		}
	});
	
	return response.data.slice(15, -1);
}

(async () => {
	let today = new Date(), one_year_later = new Date();
	one_year_later.setFullYear(today.getFullYear() + 1);

	let maintainer = new IcsMaintainer();

	for (let day = today; day <= one_year_later; day.setDate(day.getDate() + 25)) {
		let startDate = day, endDate = new Date(startDate);
		endDate.setDate(endDate.getDate() + 24);
		if (one_year_later < endDate) 
			endDate = one_year_later;

		let json = await fetchCalendarJson(startDate, endDate);
		let courseArrayByDay = JSON.parse(json);

		for (let coursesOfDay of courseArrayByDay) {
			console.log(coursesOfDay['nq'] + ' - ' + coursesOfDay['nr']);
			maintainer.add_event({
				summary: coursesOfDay['nr'],
				startTime: new Date(coursesOfDay['nq'] + 'T' + coursesOfDay['kssj']),
				endTime: new Date(coursesOfDay['nq'] + 'T' + coursesOfDay['jssj']),
				location: coursesOfDay['dd']
			});
		}
	}
	
	fs.writeFile(filename, maintainer.toString(), () => {
		console.log("done");
	});
})();
