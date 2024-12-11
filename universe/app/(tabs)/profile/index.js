import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import ProfileCard from "../../../components/profileCard";

import { ScrollView } from 'react-native';

export default function Profile() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <ProfileCard />
      <ThemedText style={styles.largeText}>Hours Mentored This Week</ThemedText>
      <ThemedText style={styles.smallText}>April 1st - April 7th</ThemedText>
      <Image
        source={require('../../../assets/images/largeImage.png')}
        style={styles.largeImage}
      />
      <ThemedView style={styles.divider} />
      <ThemedText style={styles.sectionTitle}>My Achievements</ThemedText>
      <ThemedView style={styles.cardContainer}>
        <ThemedView style={styles.card}><ThemedText style={styles.cardText}>Mentored 100 students</ThemedText></ThemedView>
        <ThemedView style={styles.card}><ThemedText style={styles.cardText}>Mentored 100 hours</ThemedText></ThemedView>
        <ThemedView style={styles.card}><ThemedText style={styles.cardText}>Top rated Counselor</ThemedText></ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  topBanner: {
    width: "100%",
    height: 60,
    backgroundColor: "#f4f4f4",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  bannerText: {
    fontSize: 20,
    textAlign: "center",
    fontFamily: "Outfit-Bold",
    color: "black",
  },
  bannerIcon: {
    position: "absolute",
    right: 16,
    fontSize: 24,
    color: "#888",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: "Outfit-Bold",
    color: "black",
    marginBottom: 15,
  },
  cardContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
    backgroundColor: "transparent",
  },
  card: {
    backgroundColor: "#f8d7da",
    padding: 10,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  cardText: {
    fontSize: 14,
    fontFamily: "Outfit-SemiBold",
    textAlign: "center",
    color: "red",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  scrollContainer: {
    alignItems: "center",
    padding: 16,
    backgroundColor: "#FFF",
    paddingBottom: 100,
  },
  largeText: {
    fontSize: 20,
    fontFamily: "Outfit-Bold",
    color: "black",
    marginTop: 20,
  },
  smallText: {
    fontSize: 14,
    color: "#555",
    fontFamily: "Outfit",
    marginTop: 5,
    marginBottom: 20,
  },
  largeImage: {
    width: "100%", // Image spans the full width of the parent container
    height: undefined, // Let aspectRatio control the height
    aspectRatio: 1156 / 634, // Preserve the original aspect ratio
    resizeMode: "contain",
    flexShrink: 0, // Prevent the image from shrinking unexpectedly
  },
});
