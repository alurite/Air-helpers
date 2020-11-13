import React from 'react';
import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import * as CONSTANT from '../Constants/Constant';
import AntIcon from "react-native-vector-icons/AntDesign";
import Icon from 'react-native-ionicons';
import { ScrollView } from 'react-native-gesture-handler';
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';

export default class Education extends React.Component {

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
        backgroundColor: '#f1f3f6',
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
      shadow: {
        display: "flex",
        margin: 5,
        width: 165,
        height: '100%',
        paddingBottom: 5,
        borderRadius: 4,
        backgroundColor: "#fff",
        flexDirection: "column",
        borderRadius: 4,
        borderWidth: 0,
        borderColor: "transparent",
        elevation: 15,
        shadowOffset: { width: 0, height: 2 },
        shadowColor: "#000",
        shadowOpacity: 0.2,

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
                Attachments
              </Text>
            </View>
          </View>
        </View>
        <ScrollView>
       <View style={{ flexDirection: "column", width: "100%" }}>
                
                  <View
                    style={{
                      borderBottomColor: "#dddddd",
                      borderBottomWidth: 0.6
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "#fff",
                      paddingLeft: 10,
                      paddingTop: 15,
                      marginLeft: 5,
                      marginRight: 5,
                      paddingBottom: 15,
                      flexDirection: 'row',
                      justifyContent: 'flex-start'
                      
                    }}
                  >
                    <AntIcon name="file1" size={25} color={"#5DD8D4"}
                     
                    />
                    <TouchableOpacity
                      
                    >
                    <Text
                     
                      style={{
                        color: "#323232",
                        fontSize: 20,
                        marginLeft: 20
                       
                      }}
                    >
                      ID/Passport
                    </Text>
                    </TouchableOpacity>
                    
                  </View>
                  <View
                    style={{
                      borderBottomColor: "#dddddd",
                      borderBottomWidth: 0.6
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "#fff",
                      paddingLeft: 10,
                      paddingTop: 15,
                      marginLeft: 5,
                      marginRight: 5,
                      paddingBottom: 15,
                      flexDirection: 'row',
                      justifyContent: 'flex-start'
                      
                    }}
                  >
                    <AntIcon name="file1" size={25} color='red'
                     
                    />
                    <TouchableOpacity
                    >
                         <Text
                      style={{
                        color: "#323232",
                        fontSize: 20,
                        marginLeft: 20
                       
                      }}
                    >
                      Police Clearance
                    </Text>
                    </TouchableOpacity>
                  
                  </View>
                  <View
                    style={{
                      borderBottomColor: "#dddddd",
                      borderBottomWidth: 0.6
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "#fff",
                      paddingLeft: 10,
                      paddingTop: 15,
                      marginLeft: 5,
                      marginRight: 5,
                      paddingBottom: 15,
                      flexDirection: 'row',
                      justifyContent: 'flex-start'
                      
                    }}
                  >
                    <AntIcon name="file1" size={25} color={"#5DD8D4"}
                     
                    />
                    <TouchableOpacity
                    >
                       <Text
                      style={{
                        color: "#323232",
                        fontSize: 20,
                        marginLeft: 20
                       
                      }}
                    >
                      Diploma/Degree
                    </Text>
                    </TouchableOpacity>
                    
                  </View>
                  <View
                    style={{
                      borderBottomColor: "#dddddd",
                      borderBottomWidth: 0.6
                    }}
                  />
                   <View
                    style={{
                      borderBottomColor: "#dddddd",
                      borderBottomWidth: 0.6
                    }}
                  />
                   
                  
                   <View
                    style={{
                      backgroundColor: "#fff",
                      paddingLeft: 10,
                      paddingTop: 15,
                      marginLeft: 5,
                      marginRight: 5,
                      paddingBottom: 15,
                      flexDirection: 'row',
                      justifyContent: 'flex-start'
                      
                    }}
                  >
                    <AntIcon name="file1" size={25} color={"red"}
                     
                    />
                    <TouchableOpacity
                    >
                       <Text
                      style={{
                        color: "#323232",
                        fontSize: 20,
                        marginLeft: 20
                       
                      }}
                    >
                      Plumbing Certificate
                    </Text>
                    </TouchableOpacity>
                    
                  </View>
                  <View
                    style={{
                      borderBottomColor: "#dddddd",
                      borderBottomWidth: 0.6
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "#fff",
                      paddingLeft: 10,
                      paddingTop: 15,
                      marginLeft: 5,
                      marginRight: 5,
                      paddingBottom: 15,
                      flexDirection: 'row',
                      justifyContent: 'flex-start'
                      
                    }}
                  >
                    <AntIcon name="file1" size={25} color={"red"}
                     
                    />
                    <TouchableOpacity
                    >
                      <Text
                      style={{
                        color: "#323232",
                        fontSize: 20,
                        marginLeft: 20
                       
                      }}
                    >
                      Gas Certificate
                    </Text>
                    </TouchableOpacity>
                     
                  </View>
                  <View
                    style={{
                      borderBottomColor: "#dddddd",
                      borderBottomWidth: 0.6
                    }}
                  />
                  <View
                    style={{
                      backgroundColor: "#fff",
                      paddingLeft: 10,
                      paddingTop: 15,
                      marginLeft: 5,
                      marginRight: 5,
                      paddingBottom: 15,
                      flexDirection: 'row',
                      justifyContent: 'flex-start'
                      
                    }}
                  >
                    <AntIcon name="file1" size={25} color={"#5DD8D4"}
                     
                    />
                     <Text
                      style={{
                        color: "#323232",
                        fontSize: 20,
                        marginLeft: 20
                      }}
                    >
                      Electrical Certificate
                    </Text>
                    
                  </View>
                  <View
                    style={{
                      borderBottomColor: "#dddddd",
                      borderBottomWidth: 0.6
                    }}
                  />
                  
                  
                  
                 
                </View>
              
       </ScrollView>
       </View>
    );
  }
}