// This token is the official token containing the final configuration; ie. the merge between default and user provided configurations
import {InjectionToken} from '@angular/core';
import {NgxStorageFirebaseUIConfig} from '../interfaces/config.interface';

export const NgxStorageFirebaseUIConfigToken = new InjectionToken<NgxStorageFirebaseUIConfig>('NgxStorageFirebaseUIConfigToken');
