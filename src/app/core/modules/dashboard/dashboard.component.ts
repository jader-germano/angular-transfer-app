import { Component } from '@angular/core';
import { User } from '../../shared/models/user';
import { AuthenticationService } from '../../shared/services/authentication.service';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {

	currentUser: User;

	constructor(
		private authenticationService: AuthenticationService,
	) {
		this.currentUser = this.authenticationService.currentUserVal;
	}
}
