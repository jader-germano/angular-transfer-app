import { Injectable } from '@angular/core';
import { HTTP_STATUS } from '../../constants/http-status.constant';

@Injectable({
	providedIn: 'root'
})
export class ErrorHandlerService {

	constructor() { }

	public getMessage(error: any) {
		if (error.status === HTTP_STATUS.NOT_FOUND || (error.error && error.error.message)) {
			return error.error.message;
		} else {
			return 'Ocorreu um erro durante a operação, tente novamente mais tarde';
		}
	}
}
