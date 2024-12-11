import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const studentDetails = {
  // "Sarah W.": {
  //   extracurricular: "Debate Team Captain",
  //   gpa: "3.9",
  //   interests: "Public Speaking, Leadership",
  //   background: "Extracurricular Activities",
  //   class: "Class: Extracurricular Activities",
  //   insights: [
  //     {
  //       priority: "High Priority",
  //       action: "Improve extracurricular activities",
  //     },
  //     { priority: "Medium Priority", action: "Refine Personal Statement" },
  //     { priority: "Low Priority", action: "Improve interview skills" },
  //   ],
  // },
  "John L.": {
    extracurricular: "Basketball Team Captain",
    gpa: "3.8",
    interests: "Team Sports, Strategy, Leadership",
    background: "Sports Leadership",
    class: "Class: Sports Leadership",
    // insights: [
    //   {
    //     priority: "High Priority",
    //     action: "Enhance leadership skills in team sports",
    //   },
    //   {
    //     priority: "Medium Priority",
    //     action: "Focus on time management",
    //   },
    //   {
    //     priority: "Low Priority",
    //     action: "Improve public speaking abilities",
    //   },
    // ],
    isNewStudent: true, // New student, no AI insights yet
  },
  "Liam O.": {
    extracurricular: "Robotics Club President",
    gpa: "4.0",
    interests: "Engineering, Problem Solving, Innovation",
    background: "STEM Leadership",
    class: "Class: Engineering and Robotics",
    // insights: [
    //   {
    //     priority: "High Priority",
    //     action: "Develop advanced robotics projects",
    //   },
    //   {
    //     priority: "Medium Priority",
    //     action: "Strengthen teamwork and collaboration skills",
    //   },
    //   {
    //     priority: "Low Priority",
    //     action: "Attend engineering conferences and workshops",
    //   },
    // ],
    isNewStudent: true, // New student, no AI insights yet
  },
  "Sarah W.": {
    extracurricular: "Debate Team Captain",
    gpa: "3.9",
    interests: "Public Speaking, Leadership",
    background: "Extracurricular Activities",
    class: "Class: Extracurricular Activities",
    insights: [
      {
        priority: "High Priority",
        action: "Improve extracurricular activities",
      },
      { priority: "Medium Priority", action: "Refine Personal Statement" },
      { priority: "Low Priority", action: "Improve interview skills" },
    ],
  },
  "Jack P.": {
    extracurricular: "Student Government President",
    gpa: "3.7",
    interests: "Leadership, Community Engagement, Public Policy",
    background: "Leadership in Community and Politics",
    class: "Class: Political Science and Leadership",
    noAIConsent: true, // Flag for Jack P.
  },
  "Gill S.": {
    extracurricular: "Environmental Club Vice President",
    gpa: "3.8",
    interests: "Sustainability, Environmental Advocacy, Research",
    background: "Environmental Science Leadership",
    class: "Class: Environmental Studies and Advocacy",
    insights: [
      {
        priority: "High Priority",
        action: "Lead sustainability initiatives on campus",
      },
      {
        priority: "Medium Priority",
        action: "Improve environmental research skills",
      },
      {
        priority: "Low Priority",
        action: "Attend environmental policy workshops",
      },
    ],
  },
  "Samuel L.": {
    extracurricular: "Science Club President",
    gpa: "3.9",
    interests: "STEM, Research, Innovation",
    background: "STEM Leadership and Research",
    class: "Class: Science and Innovation",
    insights: [
      {
        priority: "High Priority",
        action: "Lead cutting-edge research projects",
      },
      {
        priority: "Medium Priority",
        action: "Enhance problem-solving skills in science",
      },
      {
        priority: "Low Priority",
        action: "Collaborate on scientific papers",
      },
    ],
  },
  "Doug T.": {
    extracurricular: "Theater Club Director",
    gpa: "3.6",
    interests: "Performing Arts, Directing, Public Speaking",
    background: "Theater Arts Leadership",
    class: "Class: Drama and Performing Arts",
    insights: [
      {
        priority: "High Priority",
        action: "Direct and produce a successful play",
      },
      {
        priority: "Medium Priority",
        action: "Enhance acting skills",
      },
      {
        priority: "Low Priority",
        action: "Attend drama workshops and masterclasses",
      },
    ],
  },
  "Jude P.": {
    extracurricular: "Music Club President",
    gpa: "3.8",
    interests: "Music Composition, Performance, Music Theory",
    background: "Music Leadership and Composition",
    class: "Class: Music Composition and Performance",
    insights: [
      {
        priority: "High Priority",
        action: "Compose and perform original music",
      },
      {
        priority: "Medium Priority",
        action: "Collaborate with other musicians",
      },
      {
        priority: "Low Priority",
        action: "Study advanced music theory",
      },
    ],
  },
};

const priorityColors = {
  "High Priority": "#304674",
  "Medium Priority": "#8294C4",
  "Low Priority": "#ACB1D6",
};

export default function StudentProfile({ name }) {
  const details = studentDetails[name] || {};
  const router = useRouter();

  if (!name) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Profile Found</Text>
        <Text style={styles.subtitle}>
          The profile for "{name}" does not exist.
        </Text>
      </View>
    );
  }

  // Special case for Jack P. (No AI Consent)
  if (details.noAIConsent) {
    return (
      <View style={styles.container}>
        <View style={styles.topCard}>
          <Image
            source={require("../assets/images/boy1.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.class}>{details.class}</Text>
          <Text style={styles.info}>Background in {details.background}.</Text>
          <Text style={styles.info}>Interested in {details.interests}.</Text>
        </View>
        <Text style={styles.sectionTitle}>AI Insights</Text>
        <View style={styles.noAIContainer}>
          <Text style={styles.noAIText}>
            This student does not have AI insights generated as they have
            refused to share their materials and information with our AI bot.
          </Text>
        </View>

        {/* Student Materials Section */}
        <View style={styles.bottomSection}>
          <Text style={styles.bottomText}>Student Materials</Text>
          <TouchableOpacity>
            <Text style={styles.icon}>⇅</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  // Special case for new students (No AI Insights yet)
  if (details.isNewStudent) {
    return (
      <View style={styles.container}>
        <View style={styles.topCard}>
          <Image
            source={require("../assets/images/boy1.png")}
            style={styles.avatar}
          />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.class}>{details.class}</Text>
          <Text style={styles.info}>Background in {details.background}.</Text>
          <Text style={styles.info}>Interested in {details.interests}.</Text>
        </View>
        <Text style={styles.sectionTitle}>AI Insights</Text>
        <View style={styles.noAIContainer}>
          <Text style={styles.noAIText}>
            This student does not have AI insights generated yet as they are new
            to our system. Insights will be available soon.
          </Text>
        </View>

        {/* Student Materials Section */}
        <View style={styles.bottomSection}>
          <Text style={styles.bottomText}>Student Materials</Text>
          <TouchableOpacity>
            <Text style={styles.icon}>⇅</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  const handleInsightPress = (insight) => {
    router.push({
      pathname: "/insights/insightDetail",
      params: {
        priority: insight.priority,
        action: insight.action,
      },
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.topCard}>
        <Image
          source={require("../assets/images/boy1.png")}
          style={styles.avatar}
        />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.class}>{details.class}</Text>
        <Text style={styles.info}>Background in {details.background}.</Text>
        <Text style={styles.info}>Interested in {details.interests}.</Text>
      </View>

      <Text style={styles.sectionTitle}>AI Insights</Text>
      {details.insights?.map((insight, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.insightCard,
            { backgroundColor: priorityColors[insight.priority] || "#345DA7" },
          ]}
          onPress={() => handleInsightPress(insight)}
        >
          <Text style={styles.priority}>{insight.priority}</Text>
          <Text style={styles.action}>{insight.action}</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.bottomSection}>
        <Text style={styles.bottomText}>Student Materials</Text>
        <TouchableOpacity>
          <Text style={styles.icon}>⇅</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  /* Styles remain the same as previously provided */
  // Add your styles here...
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 20,
    width: "100%",
  },
  topCard: {
    backgroundColor: "#DBDFEA",
    borderRadius: 15,
    padding: 20,
    alignItems: "center",
    marginBottom: 35,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 22,
    marginBottom: 5,
    fontFamily: "Outfit-Bold",
  },
  class: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
    color: "#2C2C54",
    fontFamily: "Outfit",
  },
  info: {
    fontSize: 14,
    color: "#777",
    textAlign: "center",
    fontFamily: "Outfit",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "black",
    fontFamily: "Outfit-Bold",
  },
  insightCard: {
    backgroundColor: "#345DA7",
    borderRadius: 10,
    padding: 15,
    marginBottom: 25,
    alignItems: "center",
  },
  priority: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 5,
    fontFamily: "Outfit",
  },
  action: {
    fontSize: 14,
    color: "#EEE",
    textAlign: "center",
    fontFamily: "Outfit",
  },
  noAIContainer: {
    backgroundColor: "#FFF5F5",
    borderWidth: 1,
    borderColor: "#FFCCCC",
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  noAIText: {
    fontSize: 14,
    color: "#FF6666",
    textAlign: "center",
    fontFamily: "Outfit",
  },
  bottomSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "#ECEFF7",
  },
  bottomText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    fontFamily: "Outfit",
  },
  icon: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#345DA7",
    marginLeft: 10,
  },
});
