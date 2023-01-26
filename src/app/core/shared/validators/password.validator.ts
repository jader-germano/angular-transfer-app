import { Validators } from '@angular/forms';

export const PasswordValidator = Validators.pattern(
	/^(?=.*[a-z])+(?=.*[A-Z])+(?=.*\d[0-9])+(?=.*[@$!%*?&])+[A-Za-z\d0-9@$!%*?&]{8,}/g
);
