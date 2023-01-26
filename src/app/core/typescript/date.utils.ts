import * as moment from 'moment';

export function isSameDayUTC(date1: string | Date | moment.Moment, date2: string | Date | moment.Moment): boolean {
	return moment.utc(date1).isSame(date2, 'day');
}

export function dateFormat(date: string | Date | null, formatHours?: boolean) {
	if (!date) {
		return null;
	} else if (formatHours) {
		return moment(date).format('DD/MM/YYYY HH:mm');
	} else {
		return moment(date).format('DD/MM/YYYY');
	}

}
