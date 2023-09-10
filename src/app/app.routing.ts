import { Route } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { ELayout } from './shared/enum/layout.enum';

export const routes: Route[] = [
  // Redirect empty path to '/?'
  { path: '', pathMatch: 'full', redirectTo: 'sign-in' },

  // Redirect signed in user to the ''
  /* -------------------------------------------------------------------------- */
  /*                                    Auth                                    */
  /* -------------------------------------------------------------------------- */
  {
    path: '',
    component: LayoutComponent,
    data: {
      layout: ELayout.EMPTY,
    },
    children: [
      {
        path: 'sign-in',
        loadChildren: () =>
          import('src/app/modules/auth/sign-in/sign-in.module').then(
            (m) => m.SignInModule
          ),
      },
      {
        path: 'sign-up',
        loadChildren: () =>
          import('src/app/modules/auth/sign-up/sign-up.module').then(
            (m) => m.SignUpModule
          ),
      },
    ],
  },
];
