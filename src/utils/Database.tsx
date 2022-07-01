import AsyncStorage from '@react-native-community/async-storage';
import TokenUtils from './TokenUtils';

const STORAGE_LOGIN = '@Login:key';
const STORAGE_MAINONBOARD = '@MainOnboard:key';
const STORAGE_SPLASHONBOARD = '@SplashOnboard:key';

export default class Database {
  static setUser(user: any, callback: (arg0: any) => void) {
    const userString = JSON.stringify(user);
    AsyncStorage.setItem(STORAGE_LOGIN, userString).then(() => {
      if (callback) {
        callback(user);
      }
    });
  }

  static getUser(callback: (arg0: string | null) => void) {
    AsyncStorage.getItem(STORAGE_LOGIN).then(user => {
      if (callback) {
        callback(user);
      }
    });
  }

  static eraseUserLocalData(callback: () => void) {
    TokenUtils.clear();
    AsyncStorage.multiRemove([
      STORAGE_LOGIN,
      STORAGE_MAINONBOARD,
      STORAGE_SPLASHONBOARD,
    ]);
    Database.setOnboard(2);
    Database.setSplashOnboard(2);
    if (callback) {
      callback();
    }
  }

  static setOnboard(
    onboard: number,
    callback: ((arg0: boolean) => void) | undefined,
  ) {
    const onboardString = JSON.stringify(onboard);
    AsyncStorage.setItem(STORAGE_MAINONBOARD, onboardString).then(() => {
      if (callback) {
        callback(true);
      }
    });
  }

  static getOnboard(callback: (arg0: string | null) => void) {
    AsyncStorage.getItem(STORAGE_MAINONBOARD).then(onboard => {
      if (callback) {
        callback(onboard);
      }
    });
  }

  static setSplashOnboard(
    onboard: number,
    callback: ((arg0: boolean) => void) | undefined,
  ) {
    const onboardString = JSON.stringify(onboard);
    AsyncStorage.setItem(STORAGE_SPLASHONBOARD, onboardString).then(() => {
      if (callback) {
        callback(true);
      }
    });
  }

  static getSplashOnboard(callback: (arg0: string | null) => void) {
    AsyncStorage.getItem(STORAGE_SPLASHONBOARD).then(onboard => {
      if (callback) {
        callback(onboard);
      }
    });
  }
}
