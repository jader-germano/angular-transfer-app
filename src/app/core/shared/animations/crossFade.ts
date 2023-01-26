import { animate, animation, style } from '@angular/animations';

export const slideInLeft = animation([
	style({ transform: 'translateX(-100%)', opacity: '0' }),
	animate('0.2s ease-in-out',
		style({ transform: 'translateX(0%)', opacity: '1' })
	)
]);
export const slideOutLeft = animation([
	style({ transform: 'translateX(0%)', opacity: '0' }),
	animate('0.2s ease-in-out',
		style({ transform: 'translateX(100%)', opacity: '1' }))
]);

export const slideInUp = animation([
	style({ transform: 'translateY(100%)', opacity: '0' }),
	animate('0.3s ease-in-out',
		style({ transform: 'translateY(0%)', opacity: '1' })
	)
]);
export const slideOutDown = animation([
	style({ transform: 'translateY(0%)', opacity: '0' }),
	animate('0.3s ease-in-out',
		style({ transform: 'translateY(100%)', opacity: '1' }))
]);

export const fadeIn = animation([
	style({ opacity: '0' }),
	animate('0.2s ease',
		style({ opacity: '1' })
	)
]);
export const fadeOut = animation([
	style({ opacity: '1' }),
	animate('0.2s ease',
		style({ opacity: '0' }))
]);
