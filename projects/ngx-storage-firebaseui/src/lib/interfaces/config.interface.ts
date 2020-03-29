// import * as firebase from 'firebase';

/**
 * @author Anthony Nahas
 * @since 03.2020
 * @version 1.0
 */
export interface NgxStorageFirebaseUIConfig {
  // authNextURL?: string, // popup or redirect
  // tosUrl?: string, // term of services url
  // ppUrl?: string, // privacy policy url
  // authProviders?: Array<AuthProvider>,
  // languageCode?: string, // todo: 28.3.18
  authGuardFallbackURL?: string;
  authGuardLoggedInURL?: string;
  enableFirestoreSync?: boolean;

  // Toasts
  toastMessageOnAuthSuccess?: boolean;
  toastMessageOnAuthError?: boolean;

  // Password length min/max in forms independently of each componenet min/max.
  // `min/max` input parameters in components should be within this range.
  passwordMaxLength?: number;
  passwordMinLength?: number;

  // Same as password but for the name
  nameMaxLength?: number;
  nameMinLength?: number;

  // If set, sign-in/up form is not available until email has been verified.
  // Plus protected routes are still protected even though user is connected.
  guardProtectedRoutesUntilEmailIsVerified?: boolean;

  // Control whether or not email verification is used
  enableEmailVerification?: boolean;
}

export const defaultStorageFirebaseUIConfig: NgxStorageFirebaseUIConfig = {
  // authMethod: 'redirect',
  // authProviders: [new GoogleAuthProvider(), new FacebookAuthProvider(), new TwitterAuthProvider(), new GithubAuthProvider()],
  enableFirestoreSync: true,
  // Default to email verification on
  enableEmailVerification: true
};
