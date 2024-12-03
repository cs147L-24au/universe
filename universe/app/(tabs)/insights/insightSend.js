import React, {useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
  TextInput,
  Image,
} from "react-native";
import { useRouter } from "expo-router";


const VAL = `
Hi Sarah, I think it would be really helpful if you do some extracurriculars.  

Joining the debate team is a great option because it can help with your public speaking and improve your capacity to engage with topics outside your comfort zone!  

Let’s schedule a meeting to discuss more about this! 
`;



export default function PopupScreen() {
  const router = useRouter();

  const [message, setMessage] = useState(VAL);

  const handleSendPress = () => {
    Alert.alert(
      "Message Sent", // Title
      "Your message has been successfully sent.", // Message
      [
        {
          text: "OK",
          onPress: () => router.back(), // Navigate back to the previous page
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <View style={styles.avatarContainer}>
          <Image
            source={require("../../../assets/images/avatar.png")} // Replace with student avatar
            style={styles.avatar}
          />
        </View>
        <View style={styles.textBox}>
          <TextInput style={styles.message}
                      value={message}
                      onChangeText={setMessage} 
                      multiline/>
    
        </View>
        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.button, styles.cancelButton]}
            onPress={() => router.back()} // Close popup
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.sendButton]}
            onPress={handleSendPress} // Show the alert
          >
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    width: Dimensions.get("window").width * 0.9, // Responsive width
    backgroundColor: "white",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  message: {
    fontSize: 16,
    color: "#333",
    marginBottom: 20,
    minHeight: 150,
    lineHeight: 22,
    padding: 15,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    flex: 1,
    paddingVertical: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#8E9BAD",
    borderRadius: 10, // Rounded corners
    paddingVertical: 12,
    paddingHorizontal: 10,
    shadowColor: "#000", // Shadow color (black)
    shadowOffset: { width: 0, height: 2 }, // Offset the shadow (x, y)
    shadowOpacity: 0.7, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
  },
  sendButton: {
    backgroundColor: "#304674",
    borderRadius: 10, // Rounded corners
    paddingVertical: 12,
    paddingHorizontal: 10,
    shadowColor: "#000", // Shadow color (black)
    shadowOffset: { width: 0, height: 2 }, // Offset the shadow (x, y)
    shadowOpacity: 0.7, // Shadow opacity
    shadowRadius: 4, // Shadow blur radius
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  textBox: {
    borderWidth: 0.3,
    borderColor: "black",
    borderRadius: 10,
    margin: 15,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10,
    justifyContent: "center",
  },
  avatarContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
