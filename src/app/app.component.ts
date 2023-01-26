import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter, map, mergeMap } from 'rxjs/operators';
import { User } from './core/shared/models/user';
import { AuthenticationService } from './core/shared/services/authentication.service';
import { PageLoaderService } from './core/shared/services/page-loader.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
    public visible: boolean;
    public loadingSub: Subscription;
    public loading: boolean;
    public isLogin: boolean;
    public currentUser: User;

    constructor(
        public router: Router,
        private activatedRoute: ActivatedRoute,
        private loader: PageLoaderService,
        private cdr: ChangeDetectorRef,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(
            x => (this.currentUser = x)
        );
    }

    public ngOnInit() {
        this.router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                map(() => this.activatedRoute),
                map(route => {
                    while (route.firstChild) {
                        route = route.firstChild;
                    }
                    return route;
                }),
            )
            .pipe(
                filter(route => route.outlet === 'primary'),
                mergeMap(route => route.data),
            )
            .subscribe(event => {
                this.showToolbar(event.sideNavbar);
            });

        this.loadingSub = this.loader.loading$.subscribe((_loading) => {
            this.loading = _loading;
            this.cdr.detectChanges();
        });


    }

    public showToolbar(event: boolean) {
        this.visible = event !== false;
    }

    public ngOnDestroy(): void {
        this.loadingSub.unsubscribe();
    }
}


