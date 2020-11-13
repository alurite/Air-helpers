import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import StarRating from "react-native-star-rating";
import AntIcon from "react-native-vector-icons/AntDesign";
import * as CONSTANT from '../Constants/Constant';
class FeedbackCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5
    };
  }
  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <View
          elevation={3}
          style={{
            flexDirection: "column",
            shadowColor: "#000000",
            shadowOpacity: 0.8,
            shadowRadius: 2,
            shadowOffset: { height: 1, width: 1 },
            backgroundColor: "#fff",
            width: "97%",
            marginBottom: 5,
            marginTop: 5,
            marginLeft: 5,
            borderRadius: 4,
            overflow: "hidden",
            shadowOffset: { width: 0, height: 2 },
            shadowColor: "#000",
            shadowOpacity: 0.2
          }}
        >
          <View style={{ flexDirection: "row", backgroundColor: "#fff" }}>
            <Image
              style={{
                borderRadius: 3,
                width: 60,
                marginBottom: 15,
                marginTop: 15,
                marginRight: 15,
                marginLeft: 20,
                height: 60
              }}
              source={this.props.ReviewImage}
            />
            <View
              style={{
                flexDirection: "column",
                overflow: "hidden",
                marginRight: 30,
                display: "flex",
                alignContent: "center",
                alignSelf: "center",
                justifyContent: "center"
              }}
            >
              <Text
                style={{ fontSize: 13, color: "#323232", alignItems: "center" }}
              >
                {this.props.Reviewname}
              </Text>
              <Text style={{ marginRight: 50 }}>{this.props.Reviewtitle}</Text>
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#dddddd",
              borderBottomWidth: 0.6,
              marginBottom: 10
            }}
          />
          <View
            style={{
              flexDirection: "row",
              paddingLeft: 10,
              paddingRight: 10,
              marginBottom: 10
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: "25%"
              }}
            >
              <AntIcon
                name="staro"
                color={"#323232"}
                size={14}
                style={{ alignSelf: "center" }}
              />
              <Text style={{ fontSize: 10 }}>{this.props.Reviewlevel}</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: "25%"
              }}
            >
              <AntIcon
                name="flag"
                color={"#323232"}
                size={14}
                style={{ alignSelf: "center" }}
              />
              <Text style={{ fontSize: 10 }}>{this.props.ReviewLocation}</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: "25%"
              }}
            >
              <AntIcon
                name="carryout"
                color={"#323232"}
                size={14}
                style={{ alignSelf: "center" }}
              />
              <Text style={{ fontSize: 10 }}>{this.props.ReviewDate}</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                width: "25%"
              }}
            >
              <AntIcon
                name="staro"
                color={"#323232"}
                size={14}
                style={{ alignSelf: "center", marginBottom: 2 }}
              />
              <StarRating
                disabled={true}
                maxStars={5}
                starSize={10}
                fullStarColor={"#fecb02"}
                emptyStarColor={"#fecb02"}
                rating={this.props.ReviewRating}
                selectedStar={rating => this.onStarRatingPress(rating)}
              />
            </View>
          </View>
          <View
            style={{
              borderBottomColor: "#dddddd",
              borderBottomWidth: 0.6,
              marginBottom: 10
            }}
          />
          <Text
            style={{
              fontSize: 13,
              paddingLeft: 20,
              paddingRight: 5,
              paddingBottom: 10
            }}
          >
            {this.props.ReviewContent}
          </Text>
        </View>
      </View>
    );
  }
}
export default FeedbackCard;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  }
});
