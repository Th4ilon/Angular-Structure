import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

// Components
import { LayoutComponent } from './components/shared/layout/layout/layout.component';
import { HomeComponent } from './components/home/home.component';
// Example of layout/DashBoard Routing
const APP_ROUTES: Routes = [
    // Rutas con AppLayout
    {
      path: '',
      component: LayoutComponent,
      children: [
        { path: 'home', component: HomeComponent },
      ]
    },
    // { path: 'routePath', component: Component },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];

  export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
