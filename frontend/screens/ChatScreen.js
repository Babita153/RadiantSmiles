import React, {useState,useRef} from "react";
import {View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList,KeyboardAvoidingView,Platform} from "react-native";

import MessageBubble from "./components/MessageBubble";

const ChatScreen = () => {

  const flatListRef = useRef();
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      id: "1",
      text:
        "👋 Hello! I'm the AI Dental Assistant.\n\nHow can I help you today?",
      sender: "bot"
    }
  ]);

  const sendMessage = () => {
    if (input.trim() === "") return;

    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user"
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const botReply = {
        id: Date.now().toString() + "bot",
        text:
          "This is a demo reply.\n\nLater we'll connect this with ChatGPT API.",
        sender: "bot"
      };
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  return (

    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}>

      {/* Header */}

      <View style={styles.header}>

        <Text style={styles.title}>
          AI Dental Assistant
        </Text>

        <Text style={styles.subtitle}>
          Radiant Smiles
        </Text>

      </View>

      {/* Messages */}

      <FlatList
        style={{flex:1}}
        ref={flatListRef}
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MessageBubble message={item} />
        )}

        contentContainerStyle={{paddingVertical: 20}}

        onContentSizeChange={() =>
          flatListRef.current.scrollToEnd({
            animated: true
          })
        }
      />

      {/* Input */}

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Ask your dental question..."
          value={input}
          onChangeText={setInput}
          style={styles.input}
          multiline
        />

        <TouchableOpacity
          style={styles.button}
          onPress={sendMessage}>
          <Text style={styles.send}>Send</Text>
        </TouchableOpacity>

      </View>
    </KeyboardAvoidingView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F8FAFC"
  },

 header: {
  backgroundColor: "#B44DD6",
  height: 140,
  justifyContent: "center",
  alignItems: "center",
  // borderBottomLeftRadius: 20,
  // borderBottomRightRadius: 20,
  elevation: 8,
},

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop:50,
  },

  subtitle: {
    color: "#fff",
    marginTop: 4
  },

  inputContainer: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    marginBottom:70,
  },

  input: {
    flex: 1,
    backgroundColor: "#F1F5F9",
    borderRadius: 25,
    paddingHorizontal: 16,
    paddingVertical: 10,
    maxHeight: 120,
    fontSize: 16
  },

  button: {
    backgroundColor: "#B44DD6",
    marginLeft: 10,
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 12
  },

  send: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15
  },

});