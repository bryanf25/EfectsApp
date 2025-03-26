import { isDevMode, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { UsersModule } from "./users/users.module";
import { provideHttpClient } from '@angular/common/http';
import { provideStore, StoreModule } from '@ngrx/store';
import { appReducers } from './app.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectArray } from './store/effects';

import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    UsersModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectArray),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    provideHttpClient(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
