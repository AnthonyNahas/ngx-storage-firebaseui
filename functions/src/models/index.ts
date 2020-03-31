export * from './config.interface';

/**
 * @author Anthony Nahas
 * @version 1.0
 * @since 03.2020
 */
export interface NgxStorageImage {
  id?: string;
  downloadURL: string;
  path: string;
  thumbs?: Map<string, NgxStorageImage>;
}
