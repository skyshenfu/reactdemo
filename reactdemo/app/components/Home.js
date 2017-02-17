/**
 * Created by ljunb on 16/5/26.
 */
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import TabNavigator from 'react-native-tab-navigator';
import {View,StyleSheet} from 'react-native';
import Chrome from './Chrome';
import Android from './Android';
import Ios from './Ios';
import Windows from './Windows';
import {redColor} from '../constants/Constants'

export default class TabBarView extends React.Component {

    constructor(props) {
        super(props);
        console.log("Home");
        this.state = {
            selectedTab: 'apple'
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'apple'}
                        title="IOS"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name={'apple'} size={20} color={'gray'} />}
                        renderSelectedIcon={() =>  <Icon name={'apple'} size={20} color={redColor} />}
                        onPress={() => this.setState({ selectedTab: 'apple' })}>
                        <Ios navigator={this.props.navigator}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'android'}
                        title="Android"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name={'android'} size={20} color={'gray'} />}
                        renderSelectedIcon={() =>  <Icon name={'android'} size={20} color={redColor} />}
                        onPress={() => this.setState({ selectedTab: 'android' })}>
                        <Android navigator={this.props.navigator}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'windows'}
                        title="Windows"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Icon name={'windows'} size={20} color={'gray'} />}
                        renderSelectedIcon={() =>  <Icon name={'windows'} size={20} color={redColor} />}
                        onPress={() => this.setState({ selectedTab: 'windows' })}>
                        <Windows navigator={this.props.navigator}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        selected={this.state.selectedTab === 'chrome'}
                        title="chrome"
                        renderIcon={() => <Icon name={'chrome'} size={20} color={'gray'} />}
                        renderSelectedIcon={() =>  <Icon name={'chrome'} size={20} color={redColor} />}
                        onPress={() => this.setState({ selectedTab: 'chrome' })}>
                        <Chrome navigator={this.props.navigator}/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"black"
    },
    tabText: {
        color: 'gray',
        fontSize: 13
    },
    selectedTabText: {
        color: redColor,
        fontSize: 13
    },
    icon: {
        width: 20,
        height: 20
    }
});