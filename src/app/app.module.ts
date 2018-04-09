import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { BaseService } from '../services/base.service';

// Pipes
import { KeysPipe } from '../utils/pipes/pipe';

// Components

// Shared
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/layout/footer/footer.component';
import { HeaderComponent } from './components/shared/layout/header/header.component';
import { LayoutComponent } from './components/shared/layout/layout/layout.component';
import { MenuComponent } from './components/shared/layout/menu/menu.component';
// Home
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    KeysPipe,
    AppComponent,
    HomeComponent,
    LayoutComponent,
      FooterComponent,
      HeaderComponent,
      MenuComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
