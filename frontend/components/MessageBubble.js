import React from "react";
import {View,Text,StyleSheet,Image} from "react-native";

const MessageBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (

    <View style={[styles.container, { justifyContent: isUser ? "flex-end" : "flex-start"}]}>
      {!isUser && (
        <Image
          source={require("../assets/bot.png")}
          style={styles.avatar}
        />
      )}

      <View style={[styles.bubble,isUser ? styles.userBubble : styles.botBubble]}>
        <Text style={[styles.text,{color: isUser? "#fff" : "#333" }]}>
          {message.text}
        </Text>
      </View>

      {isUser && (
        <Image
          source={require("../assets/person.png")}
          style={styles.avatar}
        />
      )}
    </View>
  );
};

export default MessageBubble;

const styles = StyleSheet.create({

  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginVertical: 8,
    paddingHorizontal: 12,
  },

  avatar: {
    width: 35,
    height: 35,
    borderRadius: 18,
  },

  bubble: {
    maxWidth: "75%",
    padding: 14,
    borderRadius: 18,
    marginHorizontal: 8
  },

  userBubble: {
    backgroundColor: "#B44DD6",
    borderBottomRightRadius: 4
  },

  botBubble: {
    backgroundColor: "#F1F5F9",
    borderBottomLeftRadius: 4
  },

  text: {
    fontSize: 16,
    lineHeight: 22
  },
});