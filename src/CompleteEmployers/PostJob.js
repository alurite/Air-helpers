import React from 'react';
import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import * as CONSTANT from '../Constants/Constant';
import AntIcon from "react-native-vector-icons/AntDesign";
import SelectMultiple from 'react-native-select-multiple';
import * as ImagePicker from 'expo-image-picker';


import Icon from 'react-native-ionicons';
import { ScrollView } from 'react-native-gesture-handler';

const things = ['Alarm Services', 'Baby Sitting', 'Car Service', 'Carpet Cleaning', 'Commercial cleaning',
  'Delivery Services', 'Domestic Cleaner', 'Furniture Assembly', 'Garage Gate/Door Services', 'Handyman services', 'Repair', 'Painting'];
export default class Settings extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedThings: [],
      currentStep: 0, /* using index 0 as starting point */
      steps: ['Step 1', 'Step 2', 'Step 3', 'Submit'],
      image: null,
      images: null,
      switchValue: false,
      imagesLength: "",
      switchfeaturedValue: false,
      sendSwitchFeaturedValue: "",
      sendSwitchValue: "",
      isUpdatingLoader: false,
      Uid: "",
      Title: "",
      Cost: "",
      HourlyRate: "",
      EstimatedHour: "",
      ExpiryDate: "",
      Content: "",
      Address: "",
      Latitude: "",
      Longitude: "",
      pickerOpacity: 0,
      opacityOfOtherItems: 1,
      label: "Firstvalue",
      isLoading: true,
      freelancerKnown: "",
      jobKnown: "",
      freelancerLevelKnown: "",
      englishKnown: "",
      durationKnown: "",
      projectCategoryKnown: "",
      projectTypeKnown: "",
      projectLevelKnown: "",
      projectLocationKnown: "",
      CatPickerValueHolder: [],
      CatKnown: [],
      LangPickerValueHolder: [],
      LangKnown: [],
      SkillsPickerValueHolder: [],
      SkillsKnown: [],
      showAlert: false,
      showSuccessAlert: false
    }

    
  }
  onSelectedArtistChange = (selectedThings) => {
    this.setState({ selectedThings })
  }
  componentDidMount() {
    this.FreelancerLevelSpinner();
    this.JObDurationSpinner();
    this.englishLevelSpinner();
    this.ProjectCatSpinner();
    this.ProjectTypeSpinner();
    this.ProjectCategoriesSpinner();
    this.ProjectLanguageSpinner();
    this.ProjectSkillsSpinner();
    this.ProjectLocationSpinner();
  }
  FreelancerLevelSpinner = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_list?list=freelancer_level",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let freelancer = responseJson;
        this.setState({
          freelancer
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  JObDurationSpinner = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_list?list=duration_list",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    ).then(response => response.json())
      .then(responseJson => {
        let JobDuration = responseJson;
        this.setState({
          JobDuration
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  englishLevelSpinner = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_list?list=english_levels",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let EnglishLevel = responseJson;
        this.setState({
          EnglishLevel
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  ProjectCatSpinner = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_list?list=project_level",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let ProjectLevel = responseJson;
        this.setState({
          ProjectLevel
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  ProjectTypeSpinner = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_list?list=project_type",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let projectType = responseJson;
        // let projectTypeValue = responseJson
        let projectTypeValue = responseJson[0].value
        let projectTypeValueHourlyRate = responseJson[1].value
        this.setState({
          projectType,
          projectTypeValue,
          projectTypeValueHourlyRate
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  ProjectLocationSpinner = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_taxonomy?taxonomy=locations",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let projectLocation = responseJson;
        this.setState({
          projectLocation
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  ProjectCategoriesSpinner = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_taxonomy?taxonomy=project_cat",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let ProjectCategory = responseJson;

        this.setState({
          isLoading: false,
          ProjectCategory
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  ProjectLanguageSpinner = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_taxonomy?taxonomy=languages",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let Language_data = responseJson;
        this.setState({
          isLoading: false,
          Language_data
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  ProjectSkillsSpinner = async () => {
    return fetch(
      CONSTANT.BaseUrl + "taxonomies/get_taxonomy?taxonomy=skills",
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        let skills_data = responseJson;
        this.setState({
          isLoading: false,
          skills_data
        });
      })
      .catch(error => {
        console.error(error);
      });
  };
  showActionSheet = () => {
    this.ActionSheet.show();
  };
  PostJob = async () => {
    // this.setState({isUpdatingLoader: true})
    const Uid = await AsyncStorage.getItem("projectUid");
    const {
      sendSwitchValue,
      sendSwitchFeaturedValue,
      Address,
      image,
      Latitude,
      Longitude,
      Title,
      Cost,
      HourlyRate,
      EstimatedHour,
      ExpiryDate,
      Content,
      freelancerLevelKnown,
      projectLevelKnown,
      durationKnown,
      englishKnown,
      projectTypeKnown,
      projectLocationKnown,
      CatKnown,
      LangKnown,
      SkillsKnown,
      images
    } = this.state;
    if (Title != "" && projectLevelKnown[0] != "" && durationKnown[0] != "" && freelancerLevelKnown[0] != ""
      && englishKnown[0] != "" && projectTypeKnown[0] != "" && projectLocationKnown[0] != "" && images.length != "") {
      const formData = new FormData();
      formData.append('user_id', Uid);
      formData.append('title', Title);
      formData.append('project_level', projectLevelKnown[0]);
      formData.append('project_duration', durationKnown[0]);
      formData.append('freelancer_level', freelancerLevelKnown[0]);
      formData.append('english_level', englishKnown[0]);
      formData.append('project_type', projectTypeKnown[0]);
      formData.append('hourly_rate', HourlyRate);
      formData.append('estimated_hours', EstimatedHour);
      formData.append('expiry_date', ExpiryDate);
      formData.append('project_cost', Cost);
      formData.append('description', Content);
      formData.append('country', projectLocationKnown[0]);
      formData.append('address', Address);
      formData.append('longitude', Longitude);
      formData.append('latitude', Latitude);
      formData.append('is_featured', sendSwitchFeaturedValue);
      formData.append('show_attachments', sendSwitchValue);
      formData.append('categories', CatKnown);
      formData.append('skills', SkillsKnown);
      formData.append('languages', LangKnown);
      formData.append('size', images.length);
      images.forEach((item, i) => {
        var path = item.uri;
        var filename = item.name;
        formData.append("proposal_files" + i, {
          uri: path,
          type: item.type,
          name: filename || `filename${i}.jpg`,
        });
      });
      fetch(CONSTANT.BaseUrl + 'listing/add_jobs', {
        method: 'POST',
        headers: {
          // 'Content-Type': 'multipart/form-data',
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
        body: formData
      })
        .then(resp => {
          if (resp.status == "200") {
            this.showSuccessAlert();
          } else if (resp.status == "203") {
            this.showAlert();
          }
        }).catch(err => {
          Alert.alert("Success", "Data Posted Successfully");
          console.log(err.response)
        })
    } else {
      Alert.alert("Sorry", "Please add complete Data")
    }

    // .then((response) => response.json())
    // .then(response => {
    //   if (response.status == "200") {
    //     this.showSuccessAlert();
    //   } else if (response.status == "203") {
    //     this.showAlert();
    //   }
    // }).catch((error) => {
    //   Alert.alert("Error:", error.message);
    //   console.log(error.response)
    // });
  };
  pickMultiple() {
    try {
      DocumentPicker.pickMultiple({
      })
        .then(images => {
          this.setState({
            image: null,
            images: images
          });
        })
        .catch(e => alert(e));
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      } else {
        throw err;
      }
    }
  }
  toggleSwitch = value => {
    this.setState({ switchValue: value });
    if (value == true) {
      this.state.sendSwitchValue = "on";
    } else {
      this.state.sendSwitchValue = "off";
    }
  };
  togglefeaturedSwitch = value => {
    this.setState({ switchfeaturedValue: value });
    if (value == true) {
      this.state.sendSwitchFeaturedValue = "on";
    } else {
      this.state.sendSwitchFeaturedValue = "off";
    }
  };
  showAlert = () => {
    this.setState({
      showAlert: true
    });
  };
  hideAlert = () => {
    this.setState({
      showAlert: false
    });
  };
  showSuccessAlert = () => {
    this.setState({
      showSuccessAlert: true
    });
  };

  hideSuccessAlert = () => {
    this.setState({
      showSuccessAlert: false
    });
  };

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
                Post A Task
              </Text>
            </View>
          </View>
        </View>
      <ScrollView>
        <View style={{ alignItems: 'center', marginTop: 50 }}>
         
          <View style={{ width: 280, height: 70 }}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ height: 2, backgroundColor: '#1FBDBD', width: 180, position: 'absolute', top: 13, zIndex: 10 }} />
            </View>
            <View style={{ flexDirection: 'row', width: '100%', position: 'absolute', zIndex: 20 }}>
              {steps.map((label, i) =>
                <View key={i} style={{ alignItems: 'center', width: 70 }}>
                  {i > currentStep && i != currentStep && /* Not selected */
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 30, height: 30, backgroundColor: '#fff', borderWidth: 2, borderColor: '#1FBDBD', borderRadius: 15, marginBottom: 10 }}>
                      <Text style={{ fontSize: 15, color: '#1FBDBD' }}>{i + 1}</Text>
                    </View>
                  }
                  {i < currentStep && /* Checked */
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 30, height: 30, backgroundColor: '#0faf9a', borderWidth: 2, borderColor: '#0faf9a', borderRadius: 15, marginBottom: 10 }}>
                      <Ionicons name="md-checkmark" size={20} color="#fff" />
                    </View>
                  }
                  {i == currentStep && /* Selected */
                    <View style={{ alignItems: 'center', justifyContent: 'center', width: 30, height: 30, backgroundColor: '#1FBDBD', borderWidth: 2, borderColor: '#1FBDBD', borderRadius: 15, marginBottom: 10 }}>
                      <Text style={{ fontSize: 13, color: '#ffffff' }}>{i + 1}</Text>
                    </View>
                  }
                  <Text style={{ fontSize: 12 }}>{label}</Text>
                </View>
              )}
            </View>
          </View>
        </View>

        <View style={{ backgroundColor: '#fff' }}>
          {currentStep == 0 &&
            <View>
              <View style={{
                height: 65,
                flexDirection: "column",
                justifyContent: "center",
                margin: 15,
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
                  Task Title
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
                  placeholder="e.g Help me move my sofa"
                  placeholderTextColor="#807f7f"
                  onChangeText={Title => this.setState({ Title })}
                />
              </View>
              <View style={{
                height: 85,
                flexDirection: "column",
                justifyContent: "center",
                margin: 15,
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
                    fontWeight: "500",
                    marginTop: 30
                  }}
                >
                  Task Details
                </Text>
                <TextInput
                  style={[
                    styles.input,
                    {
                      height: 100,
                      paddingVertical: 10,
                      textAlignVertical: 'top'
                    }
                  ]}
                  multiline={true}
                  placeholder={'Be specific as you can'}
                />
              </View>


            </View>
          }
          {currentStep == 1 &&
            <View style={{ height: 250 }}>
              <View>
                <View style={{
                  height: 65,
                  flexDirection: "column",
                  justifyContent: "center",
                  margin: 15,
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
                    Select Categories that apply to the task
                </Text>
                </View>
                <SelectMultiple
                  items={things}
                  selectedItems={this.state.selectedThings}
                  onSelectionsChange={this.onSelectedArtistChange} />
              </View>

            </View>
          }
          {currentStep == 2 &&
            <View style={{ height: 150, alignItems: 'center' }}>
              <AntIcon name="upload" size={75} color={"#000"}
                style={{ marginTop: 40 }}
              />
              <Text style={{ fontSize: 20 }}>Documents/Pictures</Text>
              <Text style={{ fontSize: 10 }}>This is optional, browse any files to inform potential helpers.</Text>
              <TouchableOpacity
                style={[styles.centerElement, {  width: 100, height: 45, backgroundColor: '#343434', elevation: 10, marginTop: 25 }]}>
                <Text style={{color: '#fff'}}>Pick a photo</Text>
              </TouchableOpacity>
            </View>
          }
          {currentStep == 3 &&
           
                <View>
              <View style={{
                height: 65,
                flexDirection: "column",
                justifyContent: "center",
                margin: 15,
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
                  Task Amount
                </Text>
                <View style={{flexDirection:'row'}}>
                <Text
                  style={{
                    marginLeft: 20,
                    textAlign: "left",
                    fontSize: 15,
                    fontWeight: "500"
                  }}
                >
                  R
                </Text>
                <TextInput
                  underlineColorAndroid="transparent"
                  style={{
                    marginLeft: 10,
                    marginRight: 20,
                    marginBottom: 20,

                    color: '#323232',
                    borderWidth: 0.2,

                    fontSize: 15,
                    padding: 5,
                    height: 50, width:300, borderWidth: 0.6, borderRadius: 4, borderColor: '#dddddd'
                  }}
                  name="username"
                  placeholder="e.g 500"
                  placeholderTextColor="#807f7f"
                  onChangeText={Title => this.setState({ Title })}
                />
                </View>
               
              </View>
              <View style={{
                height: 65,
                flexDirection: "column",
                justifyContent: "center",
                margin: 15,
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
                    fontWeight: "500",
                  }}
                >
                  Task Location
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
                  placeholder="Search for your location"
                  placeholderTextColor="#807f7f"
                  onChangeText={Title => this.setState({ Title })}
                />
              </View>


            </View>
         
          }
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {currentStep > 0 ?
              <TouchableOpacity style={[styles.centerElement, { bottom: 10, left: 10, width: 80, height: 35, backgroundColor: '#1FBDBD', elevation: 10, marginTop: 95 }]} onPress={() => {
                if (currentStep > 0) {
                  this.setState({ currentStep: currentStep - 1 });
                }
              }}>
                <Text style={{ color: '#fff' }}>Back</Text>
              </TouchableOpacity>
              : <Text> </Text>
            }
            {(currentStep + 1) < steps.length /* add other conditions here */ &&
              <TouchableOpacity style={[styles.centerElement, { bottom: 10, right: 10, width: 80, height: 35, backgroundColor: '#1FBDBD', elevation: 10, marginTop:95 }]} onPress={() => {
                if ((currentStep + 1) < steps.length) {
                  this.setState({ currentStep: currentStep + 1 });
                }
              }}>
                <Text style={{ color: '#fff' }}>Next</Text>
              </TouchableOpacity>
            }
            {(currentStep + 1) == steps.length /* add other conditions here */ &&
              <TouchableOpacity style={[styles.centerElement, { bottom: 10, right: 10, width: 80, height: 35, backgroundColor: '#1FBDBD', elevation: 10, marginTop:95  }]} onPress={() => {
                console.log('Finish');
              }}>
                <Text style={{ color: '#fff' }}>Finish</Text>
              </TouchableOpacity>
            }
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}