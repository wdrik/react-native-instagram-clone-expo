import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  post: {
    marginVertical: 15
  },

  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15
  },

  postOptions: {},

  postImage: {
    width: "100%",
    height: 400
  },

  userInfo: {},

  author: {
    fontSize: 14,
    color: "#000",
    fontWeight: "bold"
  },

  place: {
    fontSize: 12,
    color: "#666"
  },

  footer: {
    paddingHorizontal: 15
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15
  },

  action: {
    marginRight: 8
  },

  leftActions: {
    flexDirection: "row"
  },

  likes: {
    fontWeight: "bold",
    fontSize: 12
  },

  hashtags: {
    color: "#002d5e"
  },

  description: {
    color: "#000",
    lineHeight: 18
  }
});

export default styles;
