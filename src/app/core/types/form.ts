import { FormControl, FormGroup, FormArray } from '@angular/forms';

export type PrimitiveType = string | number | Date | boolean;

export type TypeToForm<T extends object> = {
	[P in keyof T]-?:
	NonNullable<T[P]> extends PrimitiveType
	? FormControl
	: T[P] extends Array<PrimitiveType>
	? FormControl
	: T[P] extends Array<NonNullable<object>>
	? FormArray
	: NonNullable<Required<T>[P]> extends object
	? FormGroup
	: FormControl
};
