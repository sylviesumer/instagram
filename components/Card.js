import { ActivityIndicator, Image, StyleSheet, View } from "react-native";
import { useState } from "react";
import AuthorRow from "./AuthorRow";

export default function Card({fullname, image, linkText, id}) {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  }
  return (
    <View>
      <AuthorRow fullname={fullname} linkText={linkText} id={id} />
      <View style={styles.image}>
        {loading && <ActivityIndicator style={StyleSheet.absoluteFill} size="large" />}
        <Image style={StyleSheet.absoluteFill} source={image} onLoad={handleLoad} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    aspectRatio: 1,
    backgroundColor: 'rgba(0,0,0,0.02 )',
  }
});
