import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes
import { APP_ROUTING } from './app.routes';

// Services
import { BaseService } from '../services/base.service';

// Pipes
import { KeysPipe } from '../utils/pipes/pipe';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    KeysPipe,
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
