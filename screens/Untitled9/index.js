import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled9 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("Untitled10");
      }}><Text style={styles.daGkLZLG}>{"Post"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled11");
      }}><Text style={styles.JiEjtIDl}>{"Comment screen"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled12");
      }}><Text style={styles.vIBuKNrJ}>{"Report/flag reasons pop up"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  daGkLZLG: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  JiEjtIDl: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  vIBuKNrJ: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled9;