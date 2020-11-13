import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  Text,
  ScrollView,
  AsyncStorage,
  ActivityIndicator,
  Alert
} from "react-native";
import ImageSlider from "react-native-image-slider";
import JobCategory from "./JobCategory";
import FreelancerCategory from "./FreelancerCategory";
import CustomHeader from "../Header/CustomHeader";
import LatestJobs from "./LatestJobs";
import ServiceLayout from './ServicesLayout';
import { Header } from "react-native-elements";
import { StackNavigator, NavigationEvents } from "react-navigation";
import DetailFreelancerScreen from "../DetailFreelancer/DetailFreelancerScreen";
import * as CONSTANT from "../Constants/Constant";
import GeneralStatusBarColor from "../styles/GeneralStatusBarColor";
import { getStatusBarHeight } from "react-native-status-bar-height";
import PTRView from "react-native-pull-to-refresh";
import Img01 from '../Images/slideone.jpg';

const Entities = require("html-entities").XmlEntities;
const entities = new Entities();
export default class home extends React.Component {
  state = {
    data: [],
    default_color: "#fff",
    storedValue: "",
    storedType: "",
    profileImg: "",
    type: "",
    id: "",
    Pid: "",
    isLoading: true, 
    fetchServices: [],
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
  fetchData = async () => {
    const response = await fetch(CONSTANT.BaseUrl + "list/get_categories");
    const json = await response.json();
    this.setState({ data: json });
  };
  fetchFreelancerData = async () => {
    const Pid = await AsyncStorage.getItem("projectProfileId");
    const response = await fetch(
      CONSTANT.BaseUrl +
      "listing/get_freelancers?listing_type=featured&show_users=5&profile_id=" +
      Pid
    );
    const json = await response.json();
    if (Array.isArray(json) && json[0] && json[0].type && json[0].type === 'error') {
      this.setState({ fetchFreelancer: [], isLoading: false }); // empty data set 
    } else {
      this.setState({ fetchFreelancer: json, isLoading: false });
    }
  };
  fetchLatestPostedJobs = async () => {
    const Pid = await AsyncStorage.getItem("projectProfileId");
    const response = await fetch(
      CONSTANT.BaseUrl + "listing/get_jobs?listing_type=latest"
    );
    const json = await response.json();
    if (Array.isArray(json) && json[0] && json[0].type && json[0].type === 'error') {
      this.setState({ fetchJobs: [] }); // empty data set 
    } else {
      this.setState({ fetchJobs: json });
    }
  };
  fetchLatestPostedServices = async () => {
    const Pid = await AsyncStorage.getItem("projectProfileId");
    const response = await fetch(
      CONSTANT.BaseUrl + "services/get_services?listing_type=latest"
    );
    const json = await response.json();
    if (Array.isArray(json) && json[0] && json[0].type && json[0].type === 'error') {
      this.setState({ fetchServices: [] }); // empty data set 
    } else {
      this.setState({ fetchServices: json });
    }
  };
  _onPressButton = () => {
  };
  _refresh = () => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 2000);
    });
  };
  getUser = async () => {
    try {
      const storedValue = await AsyncStorage.getItem("full_name");
      const storedType = await AsyncStorage.getItem("user_type");
      const profileImg = await AsyncStorage.getItem("profile_img");
      const type = await AsyncStorage.getItem("profileType");
      const id = await AsyncStorage.getItem("projectUid");
      const Pid = await AsyncStorage.getItem("projectProfileId");
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
      if (Pid !== null) {
        this.setState({ Pid });
      } else {
        //  alert('something wrong')
      }
      this.fetchData();
      this.fetchFreelancerData();
      this.fetchLatestPostedJobs();
      this.fetchLatestPostedServices();
    } catch (error) {
    }
  };
  render() {
    const { navigate } = this.props.navigation;
    const { isLoading } = this.state;
    return (
      <View style={styles.container}>
        <CustomHeader hasTabs style={styles.header} />
        <NavigationEvents
          onWillFocus={this.getUser}
        />
        {isLoading && (
          <View style={{ justifyContent: "center", height: "100%" }}>
            <ActivityIndicator
              size="small"
              color={CONSTANT.primaryColor}
              style={{
                height: 30,
                width: 30,
                borderRadius: 60,
                alignContent: "center",
                alignSelf: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
                elevation: 5
              }}
            />
          </View>
        )}
        <PTRView onRefresh={this._refresh}>
          <ScrollView scrollEventThrottle={16}>
            <View style={styles.imageSlider}>
              <View style={{ backgroundColor: '#000' }}>
                <ImageSlider
                  showsHorizontalScrollIndicator={false}
                  
                  style={styles.imageOpacity}
                  images={[
                    require('../Images/slideone.jpg'),
                    require('../Images/slidetwo.jpg'),
                    require('../Images/slidethree.jpg'),
                  ]}
                />
              </View>
              <View style={styles.jobTextBAckground}>
                <View
                  style={{
                    height: 130,
                    marginTop: 10,
                    paddingLeft: 10
                  }}>
                  <View
                    style={{ position: "absolute", zIndex: 1, marginLeft: 10 }}>
                    <Text style={styles.jobText}>{CONSTANT.HomeCategories}</Text>
                    <Text style={styles.jobbycatText}>{CONSTANT.HomeCategoriesTagLine}</Text>
                    <ScrollView
                      style={{ marginTop: 15, marginLeft: -5 }}
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}>
                      <FlatList
                        data={this.state.data}
                        keyExtractor={(x, i) => i.toString()}
                        renderItem={({ item }) => (
                          <TouchableOpacity
                            activeOpacity={0.9}
                            onPress={() =>
                              this.props.navigation.navigate(
                                "JobbyCategorylist",
                                { slug: item.slug }
                              )
                            }
                          >
                            <JobCategory
                              imageUri={{ uri: `${item.image}` }}
                              name={`${entities.decode(item.name)}`}
                            />
                          </TouchableOpacity>
                        )}
                        horizontal={true}
                      />
                    </ScrollView>
                  </View>
                </View>
                <View
                  style={{ marginTop: 10, paddingLeft: 10, paddingRight: 2 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      color: "#000000",
                    }}>
                    {CONSTANT.HomeFreelancer}
                  </Text>
                  <Text
                    style={{ fontSize: 10, color: "#000000", marginBottom: 5 }}
                  >
                 {CONSTANT.HomeFreelancerTagLine}
                  </Text>
                  <FlatList
                    style={{ paddingBottom: 5, paddingTop: 10, marginLeft: -5 }}
                    data={this.state.fetchFreelancer}
                    keyExtractor={(y, z) => z.toString()}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        activeOpacity={0.9}
                        onPress={() => 
                          this.props.navigation.navigate(
                            "DetailFreelancerScreen",
                            {
                              profile_id: item.profile_id,
                              user_id: item.user_id
                            }
                          )
                        }
                      >
                        <FreelancerCategory
                          imageUrifreelancer={{ uri: `${item.profile_img}` }}
                          imageUrifeatured={{ uri: `${item.badge.badget_url}` }}
                          featuredColor={`${entities.decode(
                            item.badge.badget_color
                          )}`}
                          flagimageUri={{ uri: `${item.location.flag}` }}
                          freelancername={`${entities.decode(item.name)}`}
                          title={`${entities.decode(item._tag_line)}`}
                          rate={`${entities.decode(item._perhour_rate)}`}
                          country={`${entities.decode(item.location._country)}`}
                          Fav_Color={`${entities.decode(item.favorit)}`}
                          fav_user_id={item.user_id}
                        />
                      </TouchableOpacity>
                    )}
                  />
                </View>
                {this.state.ApplicationAccessJob === "yes" ?
                  <View style={{ marginTop: 30, paddingHorizontal: 10 }}>
                    <Text
                      style={{
                        fontSize: 20,
                        fontWeight: "700",
                        color: "#000000",
                      }}
                    >
                      {CONSTANT.HomeJobs}
                </Text>
                    <Text style={{ fontSize: 10, color: "#000000" }}>
                    {CONSTANT.HomeJobsTagLine}
                </Text>
                    <View
                      style={{ height: 220, marginTop: 10, marginBottom: 10 }}
                    >
                      <ScrollView
                        style={{ marginLeft: -5 }}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                      >
                        <FlatList
                          data={this.state.fetchJobs}
                          keyExtractor={(a, b) => b.toString()}
                          renderItem={({ item }) => (
                            <TouchableOpacity
                              activeOpacity={0.9}
                              onPress={() =>
                                this.props.navigation.navigate(
                                  "DetailJobScreen",
                                  { job_id: item.job_id }
                                )
                              }
                            >
                              <LatestJobs
                              
                                jobname={`${entities.decode(item.employer_name)}`}
                                featuredJObColor={`${entities.decode(
                                  item.featured_color
                                )}`}
                                jobtitle={`${entities.decode(
                                  item.project_title
                                )}`}
                                homejobflagimageUri={{
                                  uri: `${item.location.flag}`
                                }}
                                joblevel={`${entities.decode(
                                  item.project_level.level_title
                                )}`}
                                jobcountry={`${entities.decode(
                                  item.location._country
                                )}`}
                                jobrate={`${entities.decode(item.project_cost === "" ? item.hourly_rate + " per hour rate for " + item.estimated_hours + " hours" : item.project_cost)}`}
                                jobduration={`${entities.decode(
                                  item.project_duration
                                )}`}
                                imageUrijobfeatured={{ uri: `${item.featured_url}` }}
                              />
                            </TouchableOpacity>
                          )}
                          horizontal={true}
                        />
                      </ScrollView>
                    </View>
                  </View>
                  : null}
              </View>
            </View>
          </ScrollView>
        </PTRView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa"
  },
  imageSlider: {
    height: "100%",
    position: "relative",
    zIndex: 2
  },
  imageOpacity: {
    backgroundColor: "#000",
    opacity: 0.74,
    zIndex: 1,
    height: 200
  },
  jobText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#ffffff",
  },
  jobbycatText: {
    fontSize: 10,
    color: "#ffffff"
  },
  jobTextBAckground: {
    marginTop: -90
  },
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight()
  }
});
