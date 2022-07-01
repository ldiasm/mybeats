import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {colors} from '../../styles/App.style';
interface Props {
  navigation: any;
}

export default class LoginFormButton extends React.Component<Props> {
  // login = async () => {
  //   const data = {
  //     email: USERNAME,
  //     password: PASSWORD,
  //   };
  //   api
  //     .post(AppStrings.BASE_URL + AppStrings.SIGN_IN, data)
  //     .then(async response => {
  //       if (response.data) {
  //         await AsyncStorage.removeItem('AUTHENTICATION_TOKEN');
  //         await AsyncStorage.setItem(
  //           'AUTHENTICATION_TOKEN',
  //           response.headers.authorization,
  //         );
  //         this.setState({
  //           header: response.headers,
  //           loggedUser: response.data,
  //         });
  //         console.info('Welcome ', data.email);
  //         this.props.navigation.navigate('Home', {screen: 'Home'});
  //       } else {
  //         await AsyncStorage.removeItem('AUTHENTICATION_TOKEN');
  //       }
  //     });
  // };

  fakeLogin = async () => {
    this.props.navigation.navigate('Home', {screen: 'Home'});
  };

  render() {
    return (
      <View style={styles.justButton}>
        <Button color="#FFF" title="Entrar" onPress={this.fakeLogin} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonViewInPasswordBox: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    paddingVertical: 12,
  },
  buttonInPasswordBox: {
    width: 85,
    height: 36,
    backgroundColor: colors.purple,
    borderRadius: 44,
  },
  buttonTextInPasswordBox: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 20,
    color: colors.purple,
  },
  justButton: {
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    width: 326,
    height: 50,
    backgroundColor: colors.purple,
    borderRadius: 25,
  },
});
