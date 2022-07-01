import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors} from '../../styles/App.style';
import LoginFormButton from './LoginFormButton';

interface Props {
  navigation: any;
}

const USERNAME = 'teste@mybeats.com';
const PASSWORD = '12341234';

export default class LoginForm extends React.Component<Props> {
  render() {
    return (
      <View style={styles.loginView}>
        <View style={styles.inputBox}>
          <Text style={styles.boxTitle}>{'Email'}</Text>
          <TextInput
            style={styles.inputText}
            value={USERNAME}
            keyboardType={'email-address'}
            textContentType={'username'}
          />
        </View>
        <View style={styles.inputBox2}>
          <View style={styles.inputBox2TetrisColumn1}>
            <Text style={styles.boxTitle}>{'Senha'}</Text>
            <TextInput
              style={styles.inputText}
              value={PASSWORD}
              keyboardType={'default'}
              textContentType={'password'}
              secureTextEntry
            />
          </View>
          <LoginFormButton navigation={this.props.navigation} />
        </View>
        <Text style={styles.buttonArea}>
          {'Ainda não é cadastrado? '}
          {<Text style={styles.link}>Inscrever-se</Text>}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  inputBox: {
    flexDirection: 'column',
    marginBottom: 16,
    width: '85%',
    height: 68,
    backgroundColor: colors.blackAlpha32,
    borderRadius: 4,
    paddingHorizontal: 13,
    paddingTop: 8,
  },
  inputBox2: {
    flexDirection: 'row',
    marginBottom: 16,
    width: '85%',
    height: 68,
    backgroundColor: colors.blackAlpha32,
    borderRadius: 4,
    paddingHorizontal: 13,
  },
  inputBox2TetrisColumn1: {
    width: '60%',
    paddingTop: 8,
  },
  inputBox2TetrisColumn2: {
    width: '40%',
  },
  boxTitle: {
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    fontSize: 12,
    lineHeight: 16,
    height: 16,
    fontWeight: '400',
    color: colors.white,
    opacity: 0.5,
  },
  inputText: {
    flex: 1,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    color: colors.white,
    fontSize: 16,
    lineHeight: 24,
    height: 24,
    fontWeight: '400',
  },
  buttonArea: {
    justifyContent: 'center',
    alignSelf: 'center',
    fontSize: 12,
    lineHeight: 16,
    height: 16,
    fontWeight: '400',
    color: colors.white,
  },
  link: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: '400',
    color: colors.blue600,
  },
});
