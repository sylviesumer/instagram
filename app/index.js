import { ActivityIndicator, StyleSheet, ScrollView, View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchImages } from '../services/imagesService';
import CardList from '../components/CardList';


export default function HomeScreen({style, commentsForItem=[], onPressComments}) {
  const { data:items=[], error, isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: fetchImages,
  })
  
  if (isLoading) {
    return <ActivityIndicator size="large" />
  }

  if (error) {
    return <Text>Error...</Text>
  }

  return (
    <CardList items={items} commentsForItem={commentsForItem} onPressComments={onPressComments} />
  );
}


