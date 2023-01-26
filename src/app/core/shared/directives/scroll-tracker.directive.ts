import { Directive, Output, EventEmitter, HostListener, ElementRef } from '@angular/core';

@Directive({
	// tslint:disable-next-line: directive-selector
	selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {
	@Output() scrollingFinished = new EventEmitter<void>();

	emitted = false;

	constructor(private _elementRef: ElementRef) {
	}

	@HostListener('scroll')
	onScroll(): void {
		if (this._elementRef.nativeElement.scrollTop >= this._elementRef.nativeElement.scrollHeight - 500 && !this.emitted) {
			this.emitted = true;
			this.scrollingFinished.emit();
		} else if (this._elementRef.nativeElement.scrollTop < this._elementRef.nativeElement.scrollHeight) {
			this.emitted = false;
		}
	}
}
