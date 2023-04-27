import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled17 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("Untitled18");
      }}><Text style={styles.UeamxRRP}>{"Notification"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled24");
      }}><Text style={styles.LBefIrYB}>{"Chat"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled9");
      }}><Text style={styles.NRCmlamd}>{"Social page"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled27");
      }}><Text style={styles.wPbTeoEb}>{"orders"}</Text></Pressable></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  UeamxRRP: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  LBefIrYB: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  NRCmlamd: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  wPbTeoEb: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled17;