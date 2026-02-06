import { ActivityIndicator, StyleSheet, ScrollView, View, Text } from 'react-native';
import { useQuery } from '@tanstack/react-query';
import { fetchImages } from '../services/imagesService';
import CardList from '../components/CardList';
import { useState } from 'react';


export default function HomeScreen() {
  const { data:items=[], error, isLoading } = useQuery({
    queryKey: ['images'],
    queryFn: fetchImages,
  });
  
  if (isLoading) {
    return <ActivityIndicator size="large" />
  }

  if (error) {
    return <Text>Error...</Text>
  }

  return (
    <CardList items={items} />
  );
}


