import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled16 = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><Pressable onPress={() => {
        navigation.navigate("Untitled18");
      }}><Text style={styles.ifzJyBlN}>{"notification"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled22");
      }}><Text style={styles.aMfRVMlT}>{"Cart"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled23");
      }}><Text style={styles.nROHVCNF}>{"Artist's card"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled9");
      }}><Text style={styles.dmBwFmym}>{"Social page"}</Text></Pressable><Pressable onPress={() => {
        navigation.navigate("Untitled28");
      }}><Text style={styles.dJvOFpui}>{"Favorite"}</Text></Pressable></ScrollView>
    <Pressable onPress={() => {
      navigation.navigate("Untitled24");
    }}><Text style={styles.fbtgfYEB}>{"chat"}</Text></Pressable><Pressable onPress={() => {
      navigation.navigate("Untitled26");
    }}><Text style={styles.YMAQzWtL}>{"Orders"}</Text></Pressable></SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  ifzJyBlN: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  aMfRVMlT: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  nROHVCNF: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  dmBwFmym: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  fbtgfYEB: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  dJvOFpui: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  YMAQzWtL: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  }
});
export default Untitled16;