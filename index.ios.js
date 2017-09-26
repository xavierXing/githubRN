/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
/*引入第三方库*/
import TabNavigator from 'react-native-tab-navigator';

export default class githubRN extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "home",
      sceondState: "second",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TabNavigator>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="Home"
              renderIcon={() => <Image source={require('./resource/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image source={require('./resource/images/ic_polular.png')} />}
              onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.page1}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'profile'}
              title="Home"
              renderIcon={() => <Image source={require('./resource/images/ic_trending.png')} />}
              renderSelectedIcon={() => <Image source={require('./resource/images/ic_trending.png')} />}
              onPress={() => this.setState({ selectedTab: 'profile' })}>
            <View style={styles.page2}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === '33'}
              title="Home"
              renderIcon={() => <Image source={require('./resource/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image source={require('./resource/images/ic_polular.png')} />}
              onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.page3}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
              selected={this.state.selectedTab === 'home'}
              title="Home"
              renderIcon={() => <Image source={require('./resource/images/ic_polular.png')} />}
              renderSelectedIcon={() => <Image source={require('./resource/images/ic_polular.png')} />}
              onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.page4}></View>
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  page1: {
    flex: 1,
    backgroundColor: 'red',
  },
  page2: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  page3: {
    flex: 1,
    backgroundColor: 'green',
  },
  page4: {
    flex: 1,
    backgroundColor: 'blue',
  },
});

AppRegistry.registerComponent('githubRN', () => githubRN);
