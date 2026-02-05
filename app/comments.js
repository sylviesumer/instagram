import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Comments() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Text>Comments for item {id}</Text>
    </View>
  );
}
