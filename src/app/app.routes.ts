import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Example of layout/DashBoard Routing
/**const APP_ROUTES: Routes = [
    // Rutas con AppLayout
    {
      path: '',
      component: AppLayoutComponent,
      children: [
        { path: 'home', component: HomeComponent },
      ]
    },
    // { path: 'routePath', component: Component },
    { path: '**', pathMatch: 'full', redirectTo: '' }
  ];*/

const APP_ROUTES = [
    { path: '', component : AppComponent },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
