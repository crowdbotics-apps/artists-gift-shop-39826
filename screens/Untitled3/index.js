import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("Untitled4");
      }}><Text style={styles.NojVjCgH}>{"About the app/ About us"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled5");
      }}><Text style={styles.gAPamoRa}>{"Support/ Send Feedback"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled6");
      }}><Text style={styles.nYmCbKwg}>{"Privacy policy"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled7");
      }}><Text style={styles.aqRoBOat}>{"Terms and conditions"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled8");
      }}><Text style={styles.xyBXYyeX}>{"Sign up/ Sign in"}</Text></Pressable></ScrollView>
    <Pressable onPress={() => {
      navigation.navigate("Untitled9");
    }}><Text style={styles.fOFJCUUj}>{"Social page"}</Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  NojVjCgH: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  gAPamoRa: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  nYmCbKwg: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  aqRoBOat: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  xyBXYyeX: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  fOFJCUUj: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled3;