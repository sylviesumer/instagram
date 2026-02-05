import { FlatList, View, Text } from "react-native";
import { getImageFromId } from '../utils/api';
import Card from "./Card";
import { router } from "expo-router";

const keyExtractor = ({ id }) => id.toString();

export default function CardList({items}) {
  
  const renderItem = ({item: { id, author }}) => {
    return (
      <Card fullname={author} image={{uri:getImageFromId(id)}} linkText={'Comments'} id={id} />
    )
  }

  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  )
}