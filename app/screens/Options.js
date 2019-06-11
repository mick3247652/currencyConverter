import React, { Component } from "react";
import { ScrollView, StatusBar, Linking } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";

import { ListItem, Separator } from "../components/List";
import { connectAlert } from '../components/Alert'

const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

class Options extends Component {
  static propTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handleThemePress = () => {
    this.props.navigation.navigate("Themes");
  };

  handleSitePress = () => {
    Linking.openURL("http://fixer.io").catch(() => this.props.alertWithType('error', 'Sorry!', "Fixer.io can't be opend right now."))
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem
          text="Themes"
          onPress={this.handleThemePress}
          customIcon={
            <Icon name="angle-right" size={ICON_SIZE} color={ICON_COLOR} />
          }
        />
        <Separator />
        <ListItem
          text="Fixer.io"
          onPress={this.handleSitePress}
          customIcon={<Icon name="link" size={ICON_SIZE} color={ICON_COLOR} />}
        />
        <Separator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);
