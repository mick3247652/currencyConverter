import React, { Component } from "react";
import { ScrollView, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import PropTypes from 'prop-types'

import { ListItem, Separator } from "../components/List";

const ICON_COLOR='#868686'
const ICON_SIZE=23

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  }

  handleThemePress = () => {
    this.props.navigation.navigate('Themes')
  };

  handleSitePress = () => {
    console.log("Site Press");
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem text="Themes" onPress={this.handleThemePress} customIcon={
          <Icon name="angle-right" size={ICON_SIZE} color={ICON_COLOR} />
        }/>
        <Separator/>
        <ListItem text="Fixer.io" onPress={this.handleSitePress} customIcon={
          <Icon name="link" size={ICON_SIZE} color={ICON_COLOR} />
        }/>
        <Separator/>
      </ScrollView>
    );
  }
}

export default Options;
