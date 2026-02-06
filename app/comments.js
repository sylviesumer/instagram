import { View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useLocalSearchParams } from 'expo-router';
import CommentInput from '../components/CommentInput';
import CommentList from '../components/CommentList';
import NavigationBar from '../components/NavigationBar';
import { useEffect, useState } from 'react';

const ASYNC_STORAGE_COMMENTS_KEY = 'ASYNC_STORAGE_COMMENTS_KEY';


export default function Comments() {
  const { id } = useLocalSearchParams();
  const [commentsForItem, setCommentsForItem] = useState([]);
  const comments = commentsForItem[id] || [];

  useEffect(() => {
    const loadComments = async () => {
      const stored = await AsyncStorage.getItem(ASYNC_STORAGE_COMMENTS_KEY);

      if (stored) {
        setCommentsForItem(JSON.parse(stored));
      } else {
        setCommentsForItem({});
      }
    };

    loadComments();
  }, [comments]);


  const onSubmitComment = async (text) => {
    const updated = {
      ...commentsForItem,
      [id]: [...comments, text]
    };
    setCommentsForItem(updated);
    try {
      await AsyncStorage.setItem(ASYNC_STORAGE_COMMENTS_KEY, JSON.stringify(updated));
    } catch(e) {
      console.log('Failed to save comment for ', id);
    }
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationBar title="Comments" leftText={'Close'} />
      <CommentInput placeholder='Leave a comment' onSubmit={onSubmitComment} />
      <CommentList items={comments} />
    </View>
  );
}
