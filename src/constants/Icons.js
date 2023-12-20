import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {
  Zocial as ZocialIcon,
  Octicons as OcticonIcon,
  MaterialIcons as MaterialIcon,
  MaterialCommunityIcons as MaterialCommunityIcon,
  Ionicons as Ionicon,
  Foundation as FoundationIcon,
  EvilIcons as EvilIcon,
  Entypo as EntypoIcon,
  FontAwesome as FAIcon,
  SimpleLineIcons as SimpleLineIcon,
  Feather as FeatherIcon,
  AntDesign,
  Octicons,
  FontAwesome5,
} from 'react-native-vector-icons'

import Colors from '../themes/colors'

class Icon extends Component {
  getIconType(type) {
    const iconTypes = {
      zocial: ZocialIcon,
      octicon: OcticonIcon,
      material: MaterialIcon,
      'material-community': MaterialCommunityIcon,
      ionicon: Ionicon,
      foundation: FoundationIcon,
      evilicon: EvilIcon,
      entypo: EntypoIcon,
      'font-awesome': FAIcon,
      'simple-line-icon': SimpleLineIcon,
      feather: FeatherIcon,
      'ant-design': AntDesign,
      octicons: Octicons,
      fontAwesome5: FontAwesome5,
    }

    return iconTypes[type] || MaterialIcon
  }

  render() {
    const {size: iconSize, name, color, type, style} = this.props
    const FontIcon = this.getIconType(type)

    return <FontIcon {...this.props} name={name} style={style} size={iconSize} color={color} />
  }
}

Icon.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  name: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  color: Colors.white,
  size: 20,
}

export default Icon
