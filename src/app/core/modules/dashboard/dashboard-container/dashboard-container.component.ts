import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/shared/services/user.service';
import { User } from '../../../shared/models/User';
import {Transaction} from '../../../shared/models/Transaction';
import { TransactionService } from '../../../shared/services/transaction.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard-container.component.html',
    styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {
    transactions: Transaction[];
    user: User;

    constructor(private userService: UserService,
				private transactionService: TransactionService) { }

    ngOnInit() {
		const id = 1;
		this.userService.getUser(id).subscribe(user => {
			this.user = user;
		});
        this.transactionService.getExtract(id).subscribe(extracts => {
            this.transactions = extracts;
        });
    }

}
