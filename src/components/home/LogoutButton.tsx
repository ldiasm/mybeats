import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {colors} from '../../styles/App.style';

interface Props {
  navigation?: any;
}

export default class LogoutButton extends React.Component<Props> {
  render() {
    return (
      <View style={styles.justButton}>
        <Button color="#FFF" title="Logout" />
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
    marginTop: 64,
    marginBottom: 16,
    width: 163,
    height: 45,
    backgroundColor: colors.purple,
    borderRadius: 25,
  },
});
