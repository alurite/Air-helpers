import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Button,
  StatusBar,
  Platform
} from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import { withNavigation, } from 'react-navigation';
import { DrawerActions } from 'react-navigation-drawer';
import { Header } from "react-native-elements";
import * as CONSTANT from '../Constants/Constant';
class CustomHeader extends Component {
  showSearch = () => {
    this.props.navigation.navigate("SearchScreen");
  };
  toggleDrawer = () => {
    this.props.navigation.dispatch(DrawerActions.toggleDrawer())
  }
  render() {
    return (
      <View style={styles.container}>
        {Platform.OS === "android" ?
          <StatusBar backgroundColor={CONSTANT.statusBarColor} barStyle="light-content" /> : <StatusBar hidden />
        }
        <View
          style={{
            height: 60,
            paddingLeft: 15,
            paddingRight: 15,
            width: "100%",
            backgroundColor: CONSTANT.primaryColor,
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flexDirection: "column",
              width: "20%",
              display: "flex",
              alignContent: "center",
              alignSelf: "center",
              justifyContent: "center"
            }}
          >
            <AntIcon name="menufold" size={25} color={"#fff"} onPress={this.toggleDrawer} />
          </View>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={this.showSearch}
            style={{
              flexDirection: "column",
              width: "60%",
              backgroundColor: "#00000020",
              borderRadius: 20,
              display: "flex",
              alignContent: "center",
              alignSelf: "center",
              justifyContent: "center"
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignSelf: "center"
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: "300",
                    color: "#fff",
                    height: 30,
                    marginTop: 9,
                  }}
                >
                  {CONSTANT.searchHeader}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={this.showSearch}
            style={{
              flexDirection: "column",
              width: "20%",
              display: "flex",
              alignContent: "center",
              alignSelf: "center",
              justifyContent: "flex-end"
            }}
          >
            <View>
              <View
                style={{
                  flexDirection: "row",
                  display: "flex",
                  alignSelf: "flex-end"
                }}
              >
                <AntIcon name="search1" size={25} color={"#fff"} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default withNavigation(CustomHeader);
const styles = StyleSheet.create({
  container: {
    backgroundColor: CONSTANT.primaryColor,
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10
  }
});
