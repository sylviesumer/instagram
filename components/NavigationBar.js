import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function NavigationBar({title, leftText}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.leftText} onPress={() => router.back()}>
        <Text>{leftText}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500'
  },
  leftText: {
    position: 'absolute',
    left: 20,
    top: 0,
    bottom: 0,
    justifyContent: 'center'
  }
})