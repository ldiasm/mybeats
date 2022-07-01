import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_KEY = 'LOGIN_TOKEN';
export default class TokenUtils {
  static token: string | null | undefined;

  static save = (token: string | null | undefined) => {
    if (!token) {
      return;
    }
    TokenUtils.token = token;
    return AsyncStorage.setItem(TOKEN_KEY, token);
  };

  static clear = () => {
    TokenUtils.token = undefined;
    return AsyncStorage.removeItem(TOKEN_KEY);
  };

  static get = async () => {
    TokenUtils.token = await AsyncStorage.getItem(TOKEN_KEY);
    return TokenUtils.token;
  };
}
