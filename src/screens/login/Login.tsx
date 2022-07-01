import React from 'react';
import {View, Text, ImageBackground, StyleSheet, StatusBar} from 'react-native';
import {colors} from '../../styles/App.style';
import LoginForm from '../../components/login/LoginForm';

interface Props {
  navigation: any;
}

export default class Login extends React.Component<Props> {
  render() {
    return (
      <View style={styles.view}>
        <StatusBar hidden />
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../assets/images/login_background_image.png')}
          resizeMode={'cover'}>
          <View style={styles.textView}>
            <Text style={styles.titleText}>{'MyBeats'}</Text>
            <Text style={styles.titleText2}>{'Headphones'}</Text>
          </View>
          <LoginForm navigation={this.props.navigation} />
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
  },
  textView: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    left: 16,
    top: 210,
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.white,
  },
  titleText2: {
    fontSize: 28,
    lineHeight: 40,
    fontWeight: '300',
    color: colors.white,
    left: 16,
    top: 6,
  },
});
