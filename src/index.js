'use strict';

import IcsMaintainer from './IcsMaintainer'
import { fetchCookie } from './agent.js'
import fs from 'fs'
import axios from 'axios'
import prompts from 'prompts'

const date = new Date();
const defaultOutput = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + ".ics"

const questions = [
	{
		type: 'text',
		name: 'username',
		initial: 'jiaojh19',
		message: '您在清华大学信息门户的用户名'
	},
	{
		type: 'password',
		name: 'password',
		message: '您在清华大学信息门户的密码'
	},
	{
		type: 'text',
		name: 'output',
		initial: defaultOutput,
		message: '存储为'
	}
]

const base_url = 'https://zhjw.cic.tsinghua.edu.cn/jxmh_out.do';

function formatDate(date) {
	let year = date.getFullYear(),
		month = (date.getMonth() + 101).toString().slice(-2),
		day = (date.getDate() + 100).toString().slice(-2);
	return `${year}${month}${day}`;
}

async function fetchCalendarJson(startDate, endDate, cookie) {
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
	const args = await prompts(questions);

	let today = new Date(), one_year_later = new Date();
	one_year_later.setFullYear(today.getFullYear() + 1);

	const cookie = await fetchCookie({username: args.username, password: args.password})
	console.log(`fetched cookie = ${cookie}`);

	let maintainer = new IcsMaintainer();

	for (let day = today; day <= one_year_later; day.setDate(day.getDate() + 25)) {
		let startDate = day, endDate = new Date(startDate);
		endDate.setDate(endDate.getDate() + 24);
		if (one_year_later < endDate) 
			endDate = one_year_later;

		let json = await fetchCalendarJson(startDate, endDate, cookie);
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
	
	fs.writeFile(args.output, maintainer.toString(), () => {
		console.log("保存成功：" + args.output)
	});
})();
