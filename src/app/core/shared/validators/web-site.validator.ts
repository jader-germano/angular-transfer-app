import { Validators } from '@angular/forms';

export const WebSiteCodeValidator = Validators.pattern(
	/^(https?:\/\/)?(www(\.[a-z\d]{2,}){2,}|(?!www)[a-z\d]{2,}(\.[a-z\d]{2,})+)$/
);
