import { Validators } from '@angular/forms';

export const NumbersOnlyValidator = Validators.pattern(/(?=^\d+$)/g);
