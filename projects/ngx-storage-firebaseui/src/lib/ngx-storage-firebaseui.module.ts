import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgxStorageFirebaseuiComponent} from './ngx-storage-firebaseui.component';
import {NgxStorageFirebaseuiImagesComponent} from './ngx-storage-firebaseui-images/ngx-storage-firebaseui-images.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {FirebaseAppConfig, FirebaseNameOrConfigToken, FirebaseOptionsToken} from '@angular/fire';
import {NgxStorageFirebaseUIConfig} from './interfaces/config.interface';
import {NgxStorageFirebaseUIConfigToken} from './tokens';


@NgModule({
  declarations: [NgxStorageFirebaseuiComponent, NgxStorageFirebaseuiImagesComponent],
  imports: [
    // Firebase
    AngularFirestoreModule,
    AngularFireStorageModule,
    // Material
    MatButtonModule,
    MatIconModule,
    // FLEX_LAYOUT
    FlexLayoutModule,
  ],
  exports: [NgxStorageFirebaseuiComponent]
})
export class NgxStorageFirebaseuiModule {

  static forRoot(
    configFactory: FirebaseAppConfig,
    appNameFactory: () => string | undefined = () => undefined,
    config: NgxStorageFirebaseUIConfig = {}
  ): ModuleWithProviders {
    return {
      ngModule: NgxStorageFirebaseuiModule,
      providers:
        [
          {
            provide: FirebaseOptionsToken,
            useValue: configFactory
          },
          {
            provide: FirebaseNameOrConfigToken,
            useFactory: appNameFactory
          },
          {provide: NgxStorageFirebaseUIConfigToken, useValue: config}
        ]
    };
  }
}
