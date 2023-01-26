import { animate, animation, keyframes, style } from '@angular/animations';

export const pageFade = animation([
	style({
		transform: '{{ transformStart }}',
		opacity: '{{ opacityStart }}',
	}),
	animate('{{ timing }}',
		style({
			transform: '{{ transformEnd }}',
			opacity: '{{ opacityEnd }}',
		})
	)
]);
