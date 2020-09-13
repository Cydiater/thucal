'use strict';

function formatDate(date) {
	let year = date.getFullYear(),
		month = (date.getMonth() + 101).toString().slice(-2),
		day = (date.getDate() + 100).toString().slice(-2),
		hour = (date.getHours() + 100).toString().slice(-2),
		minute = (date.getMinutes() + 100).toString().slice(-2);
	return `${year}${month}${day}T${hour}${minute}00`;
}

module.exports = class IcsMaintainter {
	constructor() {
		this._content = "";
	}

	add_event(event) {
		let icsStartTime = formatDate(event.startTime),
			icsEndTime = formatDate(event.endTime);
		this._content += [
						`BEGIN:VEVENT`,
						`SUMMARY:${event.summary}`,
						`DTSTART;VALUE=DATE-TIME:${icsStartTime}`,
						`DTEND;VALUE=DATE-TIME:${icsEndTime}`,
						`LOCATION:${event.location}`,
						`UID:${icsStartTime}`,
						`END:VEVENT`
		].join('\n');
		this._content += '\n';
	}

	toString() {
		return 'BEGIN:VCALENDAR\n' + this._content + 'END:VCALENDAR';
	}
};
