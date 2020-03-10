import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from "react-native";

import options from "../../../assets/options.png";
import like from "../../../assets/like.png";
import comment from "../../../assets/comment.png";
import send from "../../../assets/send.png";
import save from "../../../assets/save.png";

import styles from "./styles";

export default function Feed() {
  const posts = [
    {
      id: "1",
      author: "_iurgan.w",
      picture_url:
        "https://observatoriodocinema.bol.uol.com.br/wp-content/uploads/2019/08/69047060_359538678332469_1243013082205126656_n.png",
      likes: 1272,
      description: "Saiu o filme do coringa!!!",
      hashtags: "#cinema #joker",
      place: "Cinema do Shopping"
    },
    {
      id: "2",
      author: "_iurgan.w",
      picture_url:
        "https://s2.glbimg.com/VUgvvuWb7QZ_q0Rfqg_EHLIV32U=/top/e.glbimg.com/og/ed/f/original/2019/08/05/angelina1.png",
      likes: 784,
      description: "Saiu o filme malevola!!!",
      hashtags: "#cinema #malevola",
      place: "Cinema do Shopping"
    },
    {
      id: "3",
      author: "_iurgan.w",
      picture_url:
        "http://br.web.img3.acsta.net/pictures/19/05/07/20/54/2901026.jpg",
      likes: 397,
      description: "Saiu o filme rei leão!!!",
      hashtags: "#cinema #reileao",
      place: "Cinema do Shopping"
    }
  ];

  function renderItem({ item: post }) {
    return (
      <SafeAreaView style={styles.post}>
        <View style={styles.postHeader}>
          <View style={styles.userInfo}>
            <Text style={styles.author}>{post.author}</Text>
            <Text style={styles.place}>{post.place}</Text>
          </View>

          <View style={styles.postOptions}>
            <TouchableOpacity>
              <Image source={options} />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Image style={styles.postImage} source={{ uri: post.picture_url }} />
        </View>

        <View style={styles.footer}>
          <View style={styles.actions}>
            <View style={styles.leftActions}>
              <TouchableOpacity style={styles.action}>
                <Image source={like} />
              </TouchableOpacity>

              <TouchableOpacity style={styles.action}>
                <Image source={comment} />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image source={send} />
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity>
                <Image source={save} />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style={styles.likes}>{post.likes} likes</Text>
            <Text style={styles.hashtags}>{post.hashtags}</Text>
            <Text style={styles.description}>{post.description}</Text>
          </View>
        </View>
      </SafeAreaView>
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
