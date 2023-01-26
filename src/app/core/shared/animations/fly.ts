import { animate, animation, style } from '@angular/animations';

export const flyInEnter = animation([
	style({ height: '0', overflow: 'hidden', display: 'block' }),
	animate('0.4s ease-in-out')
]);
export const flyInLeave = animation([
	animate('0.4s ease-in-out',
		style({ height: '0', overflow: 'hidden', display: 'none' }))
]);

export const flyInEnterFlex = animation([
	style({ height: '0', overflow: 'hidden', display: 'flex' }),
	animate('0.4s ease-in-out')
]);
export const flyInLeaveFlex = animation([
	animate('0.4s ease-in-out',
		style({ height: '0', overflow: 'hidden', display: 'none' }))
]);
