import React from 'react';
import PropTypes from 'prop-types';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class Icons extends React.Component {
  getIcon(type) {
    switch (type) {
      case 'AntDesign':
        return AntDesign;
      case 'Entypo':
        return Entypo;
      case 'EvilIcons':
        return EvilIcons;
      case 'Feather':
        return Feather;
      case 'FontAwesome':
        return FontAwesome;
      case 'Foundation':
        return Foundation;
      case 'Ionicons':
        return Ionicons;
      case 'MaterialCommunityIcons':
        return MaterialCommunityIcons;
      case 'MaterialIcons':
        return MaterialIcons;
      case 'Octicons':
        return Octicons;
      case 'SimpleLineIcons':
        return SimpleLineIcons;
      case 'Zocial':
        return Zocial;
      default:
        return FontAwesome5;
    }
  }

  render() {
    const {type, name, size, color} = this.props;
    const IconComponent = this.getIcon(type);
    return (
      <IconComponent size={size} name={name} color={color} {...this.props} />
    );
  }
}

Icons.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
  type: PropTypes.oneOf([
    'Entypo',
    'EvilIcons',
    'Feather',
    'FontAwesome',
    'Foundation',
    'Ionicons',
    'MaterialCommunityIcons',
    'MaterialIcons',
    'Octicons',
    'SimpleLineIcons',
    'Zocial',
    'FontAwesome5',
  ]),
};

Icons.defaultProps = {
  type: 'FontAwesome5',
  size: 16,
  color: '#000',
};
