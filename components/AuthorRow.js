import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Avatar from "./Avatar";
import getAvatarColor from "../utils/getAvatarColor";
import getInitials from "../utils/getInitials";
import { router } from "expo-router";

export default function AuthorRow({fullname, linkText, id}) {
  return (
    <View style={styles.container}>
      <Avatar size={35} initials={getInitials(fullname)} backgroundColor={getAvatarColor(fullname)}/>
      <Text numberOfLines={1} style={styles.text}>{fullname}</Text>
      {!!linkText && (
        <TouchableOpacity onPress={() => router.push({ pathname: '/comments',params: { id: id }})}>
          <Text numberOfLines={1}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  text: {
    flex: 1,
    marginHorizontal: 6
  }
})