import React from 'react';
import {ImageBackground, StyleSheet, View, FlatList, Text} from 'react-native';
import {SafeAreaView} from 'react-navigation';
import LogoutButton from '../../components/home/LogoutButton';
import LoginFormButton from '../../components/login/LoginFormButton';
import useFetchData from '../../hooks/loadData';
import {colors} from '../../styles/App.style';

export const Home = () => {
  const {data} = useFetchData();

  const renderItem = ({item}) => {
    return (
      <View style={{backgroundColor: '#121212'}}>
        <Text style={{fontWeight: 'bold', color: colors.white}}>
          {item.name}
        </Text>
        <Text style={{fontWeight: 'bold', color: colors.white}}>
          {item.rating}
        </Text>
        <Text style={{fontWeight: 'bold', color: colors.white}}>
          {item.review}
        </Text>
        <Text style={{fontWeight: 'bold', color: colors.white}}>
          {item.value}
        </Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.view}>
      <View>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../assets/images/home_headset.png')}
          resizeMode={'cover'}
        />
        <LogoutButton />
      </View>
      <FlatList data={data} renderItem={item => renderItem(item)} />
      <View />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  imageBackground: {
    height: 266,
    width: 219,
    alignSelf: 'center',
    top: 63,
  },
  textView: {
    flex: 1,
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center',
    top: 64,
  },
  titleText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.white,
  },
  titleText2: {
    fontSize: 14,
    lineHeight: 40,
    fontWeight: '300',
    color: colors.white,
  },
});
