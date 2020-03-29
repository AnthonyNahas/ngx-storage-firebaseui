import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxStorageFirebaseuiModule} from 'ngx-storage-firebaseui';


export function firebaseAppNameFactory() {
  return `you_app_name`;
}

export const firebaseKey = {
  apiKey: 'AIzaSyASG7KxDO2z5AH9r0jlUmwiw68Ap8kG20c',
  authDomain: 'ngx-auth-firebaseui.firebaseapp.com',
  databaseURL: 'https://ngx-auth-firebaseui.firebaseio.com',
  projectId: 'ngx-auth-firebaseui',
  storageBucket: 'ngx-auth-firebaseui.appspot.com',
  messagingSenderId: '520699629648'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxStorageFirebaseuiModule.forRoot(firebaseKey),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
