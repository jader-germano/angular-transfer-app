import { AbstractControl } from '@angular/forms';

export function validatePasswordMatch(control: AbstractControl): {
	[key: string]: boolean;
} {
	const parent = control.parent;
	if (parent && control.value) {
		const passwordValue = parent.get('password').value;
		const passwordMatchValue = control.value;

		if (
			passwordValue &&
			passwordMatchValue &&
			passwordValue !== passwordMatchValue
		) {
			return { invalidPassword: true };
		}
	}
}
