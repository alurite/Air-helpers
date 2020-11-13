import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
import CardView from 'react-native-cardview';
import { Card } from "react-native-elements";
class ServicesLayout extends Component {
  render() {
    return (
      <View >
        <View style={{ backgroundColor: "#000" }}>
          <ImageBackground
            style={{ height: 120, opacity: 0.6, zIndex: 1 }}
            source={this.props.imageUri_banner}
          >
          </ImageBackground>
        </View>
        <Image
          style={{ height: 40, marginLeft: 10, width: 40, borderRadius: 20, borderColor: '#fff', borderWidth: 2, marginTop: -20, zIndex: 1 }}
          source={this.props.imageUri_profile}
        />
        <View style={{ margin: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <AntIcon
              name="check"
              color={"#0ed200"}
              size={12}
            />
            <Text style={{ fontSize: 10, marginLeft: 2 }}>{this.props.service_name}</Text>
          </View>
          <Text style={{ color: '#323232', fontSize: 14 }}>{this.props.service_title}</Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text style={{ fontWeight: '700', color: '#fe736e', fontSize: 14 }}>{this.props.service_price}</Text>
            <Text style={{ fontSize: 10, marginLeft: 3, alignSelf: 'flex-end' }}>starting from</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <AntIcon
              name="star"
              color={"#FECB02"}
              size={12} />
            <Text style={{ fontSize: 10, marginLeft: 2 }}>{this.props.service_rating}/5</Text>
            <Text style={{ fontSize: 10, textAlign: 'right' }}>0 in queue</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default ServicesLayout;
const styles = StyleSheet.create({
  container: {
    flex: 1, flexDirection: 'column', margin: 2, shadowOffset: { width: 0, height: 2 },
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10
  },
});
