import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

export default function Feed() {
  const posts = [
    {
      id: "1",
      author: "Iorgen",
      picture_url: "",
      likes: "",
      description: "",
      hashtags: ""
    },
    {
      id: "2",
      author: "Iorgen",
      picture_url: "",
      likes: "",
      description: "",
      hashtags: ""
    },
    {
      id: "3",
      author: "Iorgen",
      picture_url: "",
      likes: "",
      description: "",
      hashtags: ""
    },
    {
      id: "4",
      author: "Iorgen",
      picture_url: "",
      likes: "",
      description: "",
      hashtags: ""
    }
  ];

  function renderItem(item) {
    return (
      <View>
        <Text>Hello!</Text>
      </View>
    );
  }

  return (
    <View>
      <FlatList
        data={posts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
      />
    </View>
  );
}
