import React from 'react';
import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import * as CONSTANT from '../Constants/Constant';
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from 'react-native-ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-elements';

export default class Portfolio extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      
    }

    
  }
  

  render() {
    const styles = StyleSheet.create({
      centerElement: { justifyContent: 'center', alignItems: 'center' },
      input: {
        width: '100%',
        height: 44,
        paddingHorizontal: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20
      },
      button: {
        backgroundColor: 'blue',
        padding: 20,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 20,
        color: '#fff',
      }, 
    });

    const { steps, currentStep } = this.state;
  
    return (
      <View style={{
        flex: 1,
        backgroundColor: "#ffffff"
      }}>

<View
          style={{
            height: 60,
            paddingLeft: 15,
            paddingRight: 15,
            width: "100%",
            backgroundColor: CONSTANT.primaryColor,
            flexDirection: "row",
            shadowOffset: { width: 0, height: 2 },
            shadowColor: "#000",
            shadowOpacity: 0.2,
            shadowRadius: 2,
            elevation: 10
          }}
        >
          <TouchableOpacity
            onPress={() => this.props.navigation.goBack(null)}
            style={{
              flexDirection: "column",
              width: "20%",
              display: "flex",
              alignContent: "center",
              alignSelf: "center",
              justifyContent: "center"
            }}
          >
            <AntIcon name="back" size={25} color={"#fff"} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "column",
              width: "60%",
              display: "flex",
              alignContent: "center",
              alignSelf: "center",
              justifyContent: "center"
            }}
          >
            <View
              style={{
                flexDirection: "row",
                display: "flex",
                alignSelf: "center"
              }}
            >
              <Text numberOfLines={1}
                style={{
                  fontSize: 18,
                  fontWeight: "500",
                  color: "#fff",
                  height: 30,
                  marginTop: 9
                }}
              >
                Portfolio
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{
            height: 65,
            flexDirection: "column",
            justifyContent: "center",
            margin: 15,
            marginTop: 45,
            backgroundColor: "#fcfcfc",
            borderLeftWidth: 5,
            borderLeftColor: CONSTANT.primaryColor
          }}>
            <Text
              style={{
                marginLeft: 20,
                textAlign: "left",
                fontSize: 15,
                fontWeight: "500"
              }}
            >

            </Text>
            <Text
              style={{
                marginLeft: 20,
                textAlign: "left",
                fontSize: 15,
                fontWeight: "500"
              }}
            >
              Portfolio Title
                </Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,

                color: '#323232',
                borderWidth: 0.2,

                fontSize: 15,
                padding: 5,
                height: 50, borderWidth: 0.6, borderRadius: 4, borderColor: '#dddddd'
              }}
              name="username"
              placeholderTextColor="#807f7f"
              onChangeText={Title => this.setState({ Title })}
            />
          </View>
         
           <View style={{
            height: 85,
            flexDirection: "column",
            justifyContent: "center",
            margin: 15,
            borderLeftWidth: 5,
            borderLeftColor: CONSTANT.primaryColor
          }}>
            <Text
              style={{
                marginLeft: 20,
                textAlign: "left",
                fontSize: 15,
                fontWeight: "500"
              }}
            >

            </Text>
            <Text
              style={{
                marginLeft: 20,
                textAlign: "left",
                fontSize: 15,
                fontWeight: "500",
                marginTop: 30
              }}
            >
              Brief Description of the Portfolio
                </Text>
            <TextInput
              style={[
                styles.input,
                {
                  height: 100,
                  paddingVertical: 10,
                  textAlignVertical: 'top',
                  borderWidth: 0.6, borderRadius: 4, borderColor: '#dddddd'
                }
              ]}
              multiline={true}
            />
          </View>
          <View style={{ height: 150, alignItems: 'center' }}>
              <AntIcon name="upload" size={45} color={"#000"}
                style={{ marginTop: 40 }}
              />
              <Text style={{ fontSize: 13 }}>Browse and upload any files from your cellphone.</Text>
              <TouchableOpacity
                style={[styles.centerElement, {  width: 100, height: 45, backgroundColor: '#343434', elevation: 10, marginTop: 10 }]}>
                <Text style={{color: '#fff'}}>Pick a photo</Text>
              </TouchableOpacity>
            </View>
        
          <View style={{
            height: 65,
            flexDirection: "column",
            justifyContent: "center",
            margin: 15,
            marginTop: 45,
            backgroundColor: "#fcfcfc",
            borderLeftWidth: 5,
            borderLeftColor: CONSTANT.primaryColor
          }}>
            <Text
              style={{
                marginLeft: 20,
                textAlign: "left",
                fontSize: 15,
                fontWeight: "500"
              }}
            >

            </Text>
            <Text
              style={{
                marginLeft: 20,
                textAlign: "left",
                fontSize: 15,
                fontWeight: "500"
              }}
            >
              Skills (optional)
                </Text>
            <TextInput
              underlineColorAndroid="transparent"
              style={{
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 20,

                color: '#323232',
                borderWidth: 0.2,

                fontSize: 15,
                padding: 5,
                height: 50, borderWidth: 0.6, borderRadius: 4, borderColor: '#dddddd'
              }}
              name="username"
              placeholderTextColor="#807f7f"
              onChangeText={Title => this.setState({ Title })}
            />
          </View>
         
        
          <TouchableOpacity
            style={{
              alignItems: "center",
              height: 40,
              margin: 20,
              marginTop: 30,
              borderRadius: 4,
              width: "50%",
              alignSelf: "center",
              backgroundColor: CONSTANT.primaryColor
            }}
          >
            <Text
              style={{
                alignSelf: "center",
                alignItems: "center",
                textAlign: "center",
                color: "#fff",
                paddingTop: 10,
              }}
            >
              Add Portfolio
            </Text>
          </TouchableOpacity>

          
        </ScrollView>

      </View>
    );
  }
}