import { Injectable } from '@angular/core';

@Injectable()
export class TimeUtils {

	constructor() { }

	public convertHourToSeconds(time: string) {
		const [hour, minutes, seconds] = time.split(':').map(Number);

		return (hour * 3600) + (minutes * 60) + seconds;
	}

	/**
	 * Convert seconds to hh:mm:ss format.
	 * @param {number} totalSeconds - the total seconds to convert to hh:mm:ss
	**/
	public convertSecondsToHHMMSS(totalSeconds: number): string {

		var hours = Math.floor(totalSeconds / 3600);
		var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
		var seconds = totalSeconds - (hours * 3600) - (minutes * 60);

		// round seconds
		seconds = Math.round(seconds * 100) / 100

		const hoursResult = hours < 10 ? "0" + hours : hours + "";
		const minutsResult = minutes < 10 ? "0" + minutes : minutes + "";
		const secondsResult = seconds < 10 ? "0" + seconds : seconds + "";
		return `${hoursResult}:${minutsResult}:${secondsResult}`;
	}

}
