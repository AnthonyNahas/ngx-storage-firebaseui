import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxStorageFirebaseuiModule} from 'ngx-storage-firebaseui';
import {GettingStartedComponent} from './getting-started/getting-started.component';
import {UsageComponent} from './usage/usage.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MarkdownModule} from 'ngx-markdown';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {FlexLayoutModule} from '@angular/flex-layout';
import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';


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
    AppComponent,
    GettingStartedComponent,
    UsageComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    MarkdownModule.forRoot({loader: HttpClient}),
    NgxStorageFirebaseuiModule.forRoot(firebaseKey),
    GalleryModule,
    LightboxModule,
    MatTabsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
