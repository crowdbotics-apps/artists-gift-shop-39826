import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled13 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("Untitled14");
      }}><Text style={styles.PLorRSML}>{"Sign up"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled17");
      }}><Text style={styles.sXpvjYfa}>{"Sign in - Artist"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled16");
      }}><Text style={styles.cThqJCNX}>{"LSign in - Customer"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled15");
      }}><Text style={styles.JRrGeHhr}>{"Forgot password"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled7");
      }}><Text style={styles.UyVCLldf}>{"Terms and conditions"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled6");
      }}><Text style={styles.MChKwdHT}>{"Privacy policy"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  PLorRSML: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  sXpvjYfa: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  cThqJCNX: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  JRrGeHhr: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  UyVCLldf: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  MChKwdHT: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled13;