import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  AsyncStorage,
  navigationOptions,
  CONST,
  TouchableOpacity,
  NativeModules,
  Alert,
  StatusBar,
  Button,
  SafeAreaView,
  ScrollView,
  Easing,
  Animated,
  Image,
  Dimensions,
  Platform,
  ImageBackground
} from "react-native";
import NetInfo from "@react-native-community/netinfo";
import {
  createSwitchNavigator,
  createAppContainer,
  DrawerItems
} from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { NavigationEvents } from "react-navigation";
import { Collapse, CollapseHeader, CollapseBody, AccordionList } from 'accordion-collapse-react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from "react-native-vector-icons/AntDesign";
import RNRestart from "react-native-restart";
import axios from "axios";
import home from "./src/Home/home";
import EmployerLayout from "./src/Home/EmployerLayout";
import Employers from "./src/CompleteEmployers/Employers";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Jobs from "./src/CompleteJobs/Jobs";
import Freelancers from "./src/CompleteFreelancers/Freelancers";
import Profile from "./src/ProfileSetting/Profile";
import DetailFreelancerScreen from "./src/DetailFreelancer/DetailFreelancerScreen";
import DetailJobScreen from "./src/DetailJobs/DetailJobScreen";
import DetailCompanyScreen from "./src/DetailCompany/DetailCompanyScreen";
import DetailServiceScreen from './src/DetailServices/DetailServiceScreen';
import SearchScreen from "./src/DetailSearch/SearchScreen";
import CustomHeader from "./src/Header/CustomHeader";
import LoginScreen from "./src/Login/LoginScreen";
import PostJob from "./src/CompleteEmployers/PostJob";
import PostService from './src/CompleteServices/PostService';
import SendOffer from "./src/DetailFreelancer/SendOffer";
import PreLoader from "./src/PreLoader/PreLoader";
import Favorite from "./src/Favorite/Favorite";
import SendProposal from "./src/DetailJobs/SendProposal";
import SearchResultFreelancer from "./src/DetailSearch/SearchResultFreelancer";
import SearchResultEmployer from "./src/DetailSearch/SearchResultEmployer";
import SearchResultJob from "./src/DetailSearch/SearchResultJob";
import SearchResultService from "./src/DetailSearch/SearchResultService";
import Signup from "./src/Login/Signup";
import VerificationAccount from "./src/Login/VerificationAccount";
import ForgetPassword from './src/Login/ForgetPassword';
import JobbyCategorylist from "./src/Home/JobbyCategorylist";
import SendReport from "./src/DetailJobs/SendReport";
import BuyServiceScreen from "./src/DetailServices/BuyServiceScreen";
import BuyServiceWebview from "./src/DetailServices/BuyServiceWebview";
import MessagesList from './src/Messages/MessagesList';
import MessageSingleListCard from './src/Messages/MessageSigleListCard';
import DetailMessageScreen from './src/Messages/DetailMessageScreen';
import DetailOngoing from './src/Dashboard/DetailOngoing';
import SocketChat from './src/Messages/SocketChat';
import Insight from './src/Dashboard/Insight';
import Insightstar from './src/Dashboard/Insightstar';
import Packages from './src/Dashboard/Packages';
import LatestProposals from './src/ManageFreelancerProjects/LatestProposals';
import PostedServices from './src/ManageServices/PostedServices';
import CompletedServices from './src/ManageServices/CompletedServices';
import CompleteServicesDetail from './src/ManageServices/CompleteServicesDetail';
import OngoingServices from './src/ManageServices/OngoingServices';
import OngoingServicesDetail from './src/ManageServices/OngoingServicesDetail';
import AddonsServices from './src/ManageServices/AddonsServices';
import CancelledServices from './src/ManageServices/CancelledServices';
import OngoingJobs from './src/ManageJobs/OngoingJobs';
import PostedJobs from './src/ManageJobs/PostedJobs';
import * as CONSTANT from './src/Constants/Constant';

import PersonalDetails from './src/ProfileSetting/PersonalDetails';
import AccountDetails from './src/ProfileSetting/AccountDetails';
import Attachments from './src/ProfileSetting/Attachments';
import WorkExperience from './src/ProfileSetting/WorkExperience';
import Certifications from './src/ProfileSetting/Certifications';
import Education from './src/ProfileSetting/Education';
import Portfolio from './src/ProfileSetting/Portfolio';

console.disableYellowBox = true;
let CollapseExpand = (index, position) => {
  const inputRange = [index - 1, index, index + 1];
  const opacity = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });
  const scaleY = position.interpolate({
    inputRange,
    outputRange: [0, 1, 1]
  });
  return {
    opacity,
    transform: [{ scaleY }]
  };
};
const TransitionConfiguration = () => {
  return {
    transitionSpec: {
      duration: 750,
      easing: Easing.out(Easing.poly(4)),
      timing: Animated.timing,
      useNativeDriver: true
    },
    screenInterpolator: sceneProps => {
      const { layout, position, scene } = sceneProps;
      const width = layout.initWidth;
      const { index, route } = scene;
      const params = route.params || {}; // <- That's new
      const transition = params.transition || "default"; // <- That's new
      return {
        collapseExpand: CollapseExpand(index, position),
        default: CollapseExpand(index, position, width)
      }[transition];
    }
  };
};
class App extends Component {
  state = {
    data: [],
  };
  constructor() {
    super();
    this.state = {
      connection_Status: ""
    };
  }
  componentDidMount() {
    NetInfo.isConnected.addEventListener(
      "connectionChange",
      this._handleConnectivityChange
    );
    NetInfo.isConnected.fetch().done(isConnected => {
      if (isConnected == true) {
        this.setState({ connection_Status: "Online" });
      } else {
        this.setState({ connection_Status: "Offline" });
      }
    });
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this._handleConnectivityChange
    );
  }
  componentWillUnmount() {
    NetInfo.isConnected.removeEventListener(
      "connectionChange",
      this._handleConnectivityChange
    );
  }
  _handleConnectivityChange = isConnected => {
    if (isConnected == true) {
      this.setState({ connection_Status: "Online" });
    } else {
      this.setState({ connection_Status: "Offline" });
    }
  };
  _handleConnectivityChange = isConnected => {
    if (isConnected == true) {
      this.setState({ connection_Status: "Online" });
    } else {
      this.setState({ connection_Status: "Offline" });
    }
  };
  componentDidMount() {
    this.CheckApplicationAccess();
  }
  CheckApplicationAccess = async () => {
    const response = await fetch(CONSTANT.BaseUrl + "user/get_access");
    const json = await response.json();
    this.setState({ data: json });
    console.log("This is Check Access json " + JSON.stringify(json))
  }
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {this.state.connection_Status === "Offline" ? (
          <View style={{ flex: 1 }}>
            <Image
              style={{
                resizeMode: "contain",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center",
                textAlign: "center"
              }}
              source={require("./src/Images/NoInternet.png")}
            />
          </View>
        ) : (
            <AppContainer />
          )}
      </SafeAreaView>
    );
  }
}
export default App;

class WelcomeScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000001",
          opacity: 0.8
        }}
      >
        {
          Platform.OS === "android" ?
            <StatusBar backgroundColor={CONSTANT.statusBarColor} barStyle="light-content" />
            : <StatusBar hidden />
        }
        <Image
          source={require("./src/Images/wizardbackground.jpg")}
          style={{
            width: "100%",
            height: "100%",
            opacity: 0.4,
            position: "relative"
          }}
        />
        <View
          style={{
            position: "absolute",
            flex: 1,
            left: 0,
            top: "5%",
            height: "100%",
            width: "100%",
            alignSelf: "center"
          }}
        >
          <Image
            style={{
              width: 150,
              marginTop: 25,
              resizeMode: "center",
              alignSelf: "center"
            }}
            source={require("./src/Images/logo.png")}
          />
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              alignSelf: "center",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              marginTop: 5
            }}
          >
            {CONSTANT.welcomeMain}
          </Text>
          <Text
            onPress={() => this.props.navigation.navigate("Dashboard")}
            style={{
              color: "#fff",
              fontSize: 18,
              alignSelf: "center",
              marginTop: 25,
              textDecorationLine: 'underline'
            }}
          >
            {CONSTANT.welcomeSkip}
          </Text>
          {/* <Button 
            
           
            style={{
              color: "#fff",
              backgroundColor: "#1FBD83",
              fontSize: 18,
              alignSelf: "center",
              marginTop: 90,
              width:100
            }}
          /> */}


          {/* <Image
            style={{
              width: "100%",
              resizeMode: "contain",
              height: "100%",
              bottom: 0
            }}
            source={require("./src/Images/scrone.png")}
          /> */}
        </View>
      </View>
    );
  }
}
class CustomDrawerComponent extends Component {
  state = {
    storedValue: "",
    storedType: "",
    profileImg: "",
    type: "",
    id: "",
    permissionChat: "",
    listing_type: '',
    showAlert: false
  };
  componentWillMount() {
    this.CheckApplicationAccess();
    this.getUser();
  }
  CheckApplicationAccess = async () => {
    const response = await fetch(CONSTANT.BaseUrl + "user/get_access");
    const json = await response.json();
    this.setState({ ApplicationAccessServcie: json.access_type.service_access });
    this.setState({ ApplicationAccessJob: json.access_type.job_access });
  }
  getUser = async () => {
    try {
      const permissionChat = await AsyncStorage.getItem("chatPermission");
      const storedValue = await AsyncStorage.getItem("full_name");
      const storedType = await AsyncStorage.getItem("user_type");
      const profileImg = await AsyncStorage.getItem("profile_img");
      const type = await AsyncStorage.getItem("profileType");
      const id = await AsyncStorage.getItem("projectUid");
      const listing_type = await AsyncStorage.getItem("listing_type");

      //  console.log(storedValue ,storedType, profileImg  ,type , id);
      if (storedValue !== null) {
        this.setState({ storedValue });
      } else {
        // alert('something wrong')
      }
      if (storedType !== null) {
        this.setState({ storedType });
      } else {
        //  alert('something wrong')
      }
      if (profileImg !== null) {
        this.setState({ profileImg });
      } else {
        //  alert('something wrong')
      }
      if (type !== null) {
        this.setState({ type });
      } else {
        //  alert('something wrong')
      }
      if (id !== null) {
        this.setState({ id });
      } else {
        //  alert('something wrong')
      }
      if (listing_type !== null) {
        this.setState({ listing_type });
      } else {
        //  alert('something wrong')
      }
      if (permissionChat !== null) {
        this.setState({ permissionChat });
      } else {
        //  alert('something wrong')
      }
    } catch (error) {
      // alert(error)
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
  logout = () => {
    const { id, storedValue, storedType, profileImg, type } = this.state;
    axios
      .post(
        CONSTANT.BaseUrl + "user/do_logout",
        {
          user_id: id
        }
      )
      .then(async response => {
        if (response.data.type == "success") {
          AsyncStorage.getAllKeys()
            .then(keys => AsyncStorage.multiRemove(keys))
            .then(() => console.log("success data deleted"));
          this.clearAsyncStorage();
          RNRestart.Restart();
          this.checkAppAccess();
        } else if (response.data.type == "error") {
          alert("Incorrect Detail");
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
  clearAsyncStorage = async () => {
    AsyncStorage.clear();
  }
  canceledLogout = () => {
  };
  logoutAlert = () => {
    Alert.alert("Confirm", "Are you sure that you want to logout?", [
      { text: "Yes", onPress: () => this.logout() },
      { text: "Cancel", onPress: () => this.canceledLogout }
    ]);
  };
  checkAppAccess = async () => {
    const response = await fetch(CONSTANT.BaseUrl + "user/get_access");
    const json = await response.json();
    this.setState({ data: json });
  }
  render() {
    const { storedValue, storedType, profileImg, permissionChat, showAlert, listing_type } = this.state;
    console.log("Chat Permission=", permissionChat, storedType);
    return (
      <SafeAreaView style={{ flex: 1, height: "100%" }}>
        <NavigationEvents onWillFocus={this.getUser} />
        <View
          style={{
            height: 150,
            backgroundColor: "#fafafa",
            flexDirection: "row"
          }}
        >
          {storedValue != "" ? (
            <Image
              source={{ uri: `${profileImg}` }}
              style={{
                marginLeft: 20,
                marginTop: 65,
                height: 60,
                width: 60,
                borderRadius: 50
              }}
            />) :
            (
              <Image
                source={require('./src/Images/guest.png')}
                style={{
                  marginLeft: 20,
                  marginTop: 65,
                  height: 60,
                  width: 60,
                  borderRadius: 50
                }}
              />)
          }
          <View
            style={{ marginLeft: 10, marginTop: 75, flexDirection: "column" }}
          >
            {storedValue != "" ? (
              <Text style={{ fontWeight: "500", }}>
                {storedValue}
              </Text>
            ) : (
                <Text style={{ fontWeight: "500", }}>
                  {CONSTANT.DrawerGuest}
                </Text>
              )}
            {storedType != "" ? (
              <Text style={{}}>{storedType}</Text>
            ) : (
                <Text style={{}}>{CONSTANT.DrawerGreeting}</Text>
              )}
          </View>
        </View>
        <ScrollView>
          <View style={{ marginLeft: 5 }}>
            <Text
              style={{
                margin: 10,
                fontWeight: "500",
                fontSize: 18,
                color: "#7a7a7a",
              }}
            >
              {CONSTANT.DrawerDashboard}
            </Text>
            {storedType == "" ? (
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Login")}
              >
                <View style={{ flexDirection: "row", margin: 10 }}>
                  <AntIcon name="login" size={17} color={"#e67e22"} />
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 15,
                      color: "#323232",
                      fontWeight: "300",
                    }}
                  >
                    {CONSTANT.DrawerLogin}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}

            {storedType != "" && permissionChat === "allow" ? (

              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("MessagesList")}
              >
                <View style={{ flexDirection: "row", margin: 10 }}>
                  <AntIcon name="message1" size={17} color={"#ff5851"} />
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 15,
                      color: "#323232",
                      fontWeight: "300",
                    }}
                  >
                    {CONSTANT.DrawerInbox}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}

            {storedType != "" && this.state.ApplicationAccessServcie === "yes" ? (
              <Collapse>
                <CollapseHeader>
                  <View style={{
                    flexDirection: 'row',
                    backgroundColor: '#f7f7f7',
                    alignItems: 'center',
                    borderRadius: 5,
                    marginBottom: 5
                  }}>
                    <AntIcon name='layout' color={"#2ecc71"} size={20} style={{
                      alignSelf: 'center',
                      textAlign: 'center',
                      marginLeft: 10
                    }} />
                    <Text style={{
                      fontSize: 14,
                      color: '#24355a',
                      paddingLeft: 20,
                      paddingVertical: 20,
                    }}>{CONSTANT.DrawerManageJobs}</Text>
                    <SimpleLineIcons name='arrow-right' color={'#767676'} size={15} style={{
                      alignSelf: 'center',
                      position: 'absolute',
                      right: 10
                    }} />
                  </View>
                </CollapseHeader>
                <CollapseBody style={{ paddingHorizontal: 20 }}>
                  {
                    storedType != "" && storedType == "employer" &&
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("PostJob")} style={{
                      marginLeft: 30, borderLeftWidth: 1,
                      borderRadius: 0.5,
                      borderStyle: 'dashed',
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderLeftColor: '#767676'
                    }}>
                      <Text style={{ color: "#767676" }}>----  {CONSTANT.DrawerPostJob}</Text>
                    </TouchableOpacity>
                  }

                  {
                    storedType != "" && storedType == "employer" &&
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("PostedJobs")} style={{
                      marginLeft: 30, borderLeftWidth: 1,
                      borderRadius: 0.5,
                      borderStyle: 'dashed',
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderLeftColor: '#767676'
                    }}>
                      <Text style={{ color: "#767676" }}>----  {CONSTANT.DrawerPostedJobs}</Text>
                    </TouchableOpacity>
                  }

                  {
                    storedType != "" && storedType == "freelancer" &&
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("LatestProposals")} style={{
                      marginLeft: 30, borderLeftWidth: 1,
                      borderRadius: 0.5,
                      borderStyle: 'dashed',
                      paddingTop: 10,
                      paddingBottom: 10,
                      borderLeftColor: '#767676'
                    }}>
                      <Text style={{ color: "#767676" }}>----  {CONSTANT.DrawerProposalJobs}</Text>
                    </TouchableOpacity>
                  }

                  <TouchableOpacity onPress={() => this.props.navigation.navigate("OngoingJobs")} style={{
                    marginLeft: 30, borderLeftWidth: 1,
                    borderRadius: 0.5,
                    borderStyle: 'dashed',
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderLeftColor: '#767676'
                  }}>
                    <Text style={{ color: "#767676" }}>----  {CONSTANT.DrawerOngoingJobs}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("CompletedServices")} style={{
                    marginLeft: 30, borderLeftWidth: 1,
                    borderRadius: 0.5,
                    borderStyle: 'dashed',
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderLeftColor: '#767676'
                  }}>
                    <Text style={{ color: "#767676" }}>----  {CONSTANT.DrawerCompletedJobs}</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("CancelledServices")} style={{
                    marginLeft: 30, borderLeftWidth: 1,
                    borderRadius: 0.5,
                    borderStyle: 'dashed',
                    paddingTop: 10,
                    paddingBottom: 10,
                    borderLeftColor: '#767676'
                  }}>
                    <Text style={{ color: "#767676" }}>----  {CONSTANT.DrawerCancelledJobs}</Text>
                  </TouchableOpacity>
                </CollapseBody>
              </Collapse>
            ) : null}
            <TouchableOpacity>
              <View style={{ flexDirection: "row", margin: 10 }}>
                <AntIcon name="profile" size={17} color={"#3498db"} />
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 15,
                    color: "#323232",
                    fontWeight: "300",
                  }}
                >
                  {CONSTANT.DrawerAboutus}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ flexDirection: "row", margin: 10 }}>
                <AntIcon name="like2" size={17} color={"#1abc9c"} />
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 15,
                    color: "#323232",
                    fontWeight: "300",
                  }}
                >
                  {CONSTANT.DrawerRateApp}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            >
              <View style={{ flexDirection: "row", margin: 10 }}>
                <AntIcon name="mail" size={17} color={"#e74c3c"} />
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 15,
                    color: "#323232",
                    fontWeight: "300",
                  }}
                >
                  {CONSTANT.DrawerInviteFriends}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ flexDirection: "row", margin: 10 }}>
                <AntIcon name="questioncircleo" size={17} color={"#f1c40f"} />
                <Text
                  style={{
                    marginLeft: 20,
                    fontSize: 15,
                    color: "#323232",
                    fontWeight: "300",
                  }}
                >
                  {CONSTANT.DrawerContact}
                </Text>
              </View>
            </TouchableOpacity>
            
            {storedType != "" ? (
              <TouchableOpacity
                onPress={() => {
                  this.logoutAlert();
                }}
              >
                <View style={{ flexDirection: "row", margin: 10 }}>
                  <AntIcon name="logout" size={17} color={"#c0392b"} />
                  <Text
                    style={{
                      marginLeft: 20,
                      fontSize: 15,
                      color: "#323232",
                      fontWeight: "300",
                    }}>
                    {CONSTANT.DrawerLogout}
                  </Text>
                </View>
              </TouchableOpacity>
            ) : null}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
componentDidMount = () => {
  this.CheckApplicationAccess();
}
CheckApplicationAccess = async () => {
  const response = await fetch(CONSTANT.BaseUrl + "user/get_access");
  const json = await response.json();
  this.setState({ data: json });

}
const DashboardTabNavigator = createBottomTabNavigator(
  {
    // MainNavigator: MainDrawer},{
    Home: {
      screen: home,
      navigationOptions: {
        headerStyle: {
          backgroundColor: CONSTANT.primaryColor
        },
        headerTintColor: CONSTANT.primaryColor,
        tabBarLabel: "Home",
        tabBarIcon: ({ tintColor }) => (
          <AntIcon name="home" color={tintColor} size={25} />
        )
      }
    },
    Jobs: {
      screen: Jobs,
      navigationOptions: {
        tabBarLabel: "Tasks",
        tabBarIcon: ({ tintColor }) => (
          <AntIcon name="appstore-o" color={tintColor} size={25} />
        )
      }
    },
    Freelancers: {
      screen: Freelancers,
      navigationOptions: {
        headerStyle: {
          backgroundColor: "#FF9800"
        },
        headerTintColor: "#fff",
        tabBarLabel: "Helpers",
        tabBarIcon: ({ tintColor }) => (
          <AntIcon name="user" color={tintColor} size={25} />
        )
      }
    },

    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <AntIcon name="setting" color={tintColor} size={25} />
        )
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName
      };
    },
    tabBarOptions: {
      activeTintColor: CONSTANT.primaryColor
    }
  },
  {
    headerMode: "none"
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
    Profile: Profile,
    Employers: Employers,
    Jobs: Jobs,
    DetailFreelancerScreen: DetailFreelancerScreen,
    DetailJobScreen: DetailJobScreen,
    DetailCompanyScreen: DetailCompanyScreen,
    SearchScreen: SearchScreen,
    EmployerLayout: EmployerLayout,
    LoginScreen: LoginScreen,
    PostJob: PostJob,
    PostService: PostService,
    SendOffer: SendOffer,
    CustomHeader: CustomHeader,
    PreLoader: PreLoader,
    Favorite: Favorite,
    SendProposal: SendProposal,
    SearchResultFreelancer: SearchResultFreelancer,
    SearchResultEmployer: SearchResultEmployer,
    SearchResultJob: SearchResultJob,
    SearchResultService: SearchResultService,
    Signup: Signup,
    JobbyCategorylist: JobbyCategorylist,
    SendReport: SendReport,
    CustomDrawerComponent: CustomDrawerComponent,
    ForgetPassword: ForgetPassword,
    DetailServiceScreen: DetailServiceScreen,
    VerificationAccount: VerificationAccount,
    BuyServiceScreen: BuyServiceScreen,
    BuyServiceWebview: BuyServiceWebview,
    MessagesList: MessagesList,
    MessageSingleListCard: MessageSingleListCard,
    DetailMessageScreen: DetailMessageScreen,
    SocketChat: SocketChat,
    Insightstar: Insightstar,
    Insight: Insight,
    Packages: Packages,
    LatestProposals: LatestProposals,
    DetailOngoing: DetailOngoing,
    PostedServices: PostedServices,
    CompletedServices: CompletedServices,
    CompleteServicesDetail: CompleteServicesDetail,
    OngoingServices: OngoingServices,
    OngoingServicesDetail: OngoingServicesDetail,
    AddonsServices: AddonsServices,
    CancelledServices: CancelledServices,
    OngoingJobs: OngoingJobs,
    PostedJobs: PostedJobs,
    PersonalDetails: PersonalDetails,
    AccountDetails: AccountDetails,
    Attachments: Attachments,
    WorkExperience: WorkExperience,
    Certifications: Certifications,
    Education: Education,
    Portfolio: Portfolio
  },
  {
    headerMode: "none",
    mode: Platform.OS === "ios" ? "modal" : "card",
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false
      },
      gesturesEnabled: false
    },
    gesturesEnabled: false,
    transitionConfig: TransitionConfiguration
  }
);
const AppDrawerNavigator = createDrawerNavigator(
  {
    Dash: { screen: DashboardStackNavigator },
    Login: LoginScreen,
    PostJOb: PostJob
  },
  {
    headerMode: "none",
    mode: Platform.OS === "ios" ? "modal" : "card",
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false
      },
      gesturesEnabled: false
    },
    gesturesEnabled: false,
    transitionConfig: TransitionConfiguration,
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: CONSTANT.primaryColor
    }
  }
);
const AppSwitchNavigator = createSwitchNavigator(
  {
    PreLoader: { screen: PreLoader },
    Welcome: { screen: WelcomeScreen },
    Dashboard: { screen: AppDrawerNavigator }
  },
  {
    headerMode: "none",
    initialRouteName: "PreLoader",
    mode: Platform.OS === "ios" ? "modal" : "card",
    navigationOptions: {
      cardStack: {
        gesturesEnabled: false
      },
      gesturesEnabled: false
    },
    gesturesEnabled: false,
    transitionConfig: TransitionConfiguration
  }
);
const AppContainer = createAppContainer(AppSwitchNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },

});


