import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

// Mock data
const trendingGames = [
  {
    id: "1",
    name: "Football",
    location: "City Sports Complex",
    players: 8,
    image:
      "https://img.freepik.com/free-photo/soccer-sport-environment-filed_23-2151891691.jpg?semt=ais_hybrid&w=740",
  },
  {
    id: "2",
    name: "Basketball",
    location: "Downtown Court",
    players: 6,
    image:
      "https://img.freepik.com/premium-photo/view-basketball-court-by-built-structure-against-sky_1048944-10356070.jpg?ga=GA1.1.678808050.1747128054&semt=ais_hybrid&w=740",
  },
  {
    id: "3",
    name: "Tennis",
    location: "Community Center",
    players: 2,
    image: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0",
  },
];

const gamesToJoin = [
  {
    id: "1",
    name: "Pool Tournament",
    time: "Today, 6:00 PM",
    location: "Billiards Club",
    spotsLeft: 2,
  },
  {
    id: "2",
    name: "Cricket Match",
    time: "Tomorrow, 4:00 PM",
    location: "City Ground",
    spotsLeft: 5,
  },
];

const yourEvents = [
  {
    id: "1",
    name: "Football Match",
    date: "Mar 25, 2024",
    time: "5:00 PM",
    location: "Sports Complex",
    status: "upcoming",
  },
  {
    id: "2",
    name: "Basketball Game",
    date: "Mar 26, 2024",
    time: "6:30 PM",
    location: "Downtown Court",
    status: "upcoming",
  },
];

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const renderTopBar = () => (
    <View className="flex-row items-center justify-between border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900">
      <View className="flex-row items-center">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=100&h=100&fit=crop",
          }}
          className="h-10 w-10 rounded-full"
        />
        <Text className="ml-3 text-2xl font-extrabold text-gray-900 dark:text-white">
          GameConnect
        </Text>
      </View>
      <TouchableOpacity className="p-2">
        <Ionicons name="notifications-outline" size={24} color="#666" />
      </TouchableOpacity>
    </View>
  );

  const renderSearchBar = () => (
    <View className="px-4 py-3">
      <View className="flex-row items-center rounded-full bg-gray-100 px-4 py-3 dark:bg-gray-800">
        <Ionicons name="search" size={20} color="#666" />
        <TextInput
          className="ml-3 flex-1 text-base text-gray-900 dark:text-white"
          placeholder="Search games or teams..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    </View>
  );

  const renderTrendingGames = () => (
    <View className="mt-4">
      <Text className="mb-2 px-4 text-xl font-semibold text-gray-800 dark:text-white">
        🔥 Trending Games
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="px-4">
        {trendingGames.map((game) => (
          <TouchableOpacity
            key={game.id}
            activeOpacity={0.85}
            className="mr-4 overflow-hidden rounded-2xl bg-white shadow-md dark:bg-gray-800"
            style={{ width: 220 }}
          >
            <Image source={{ uri: game.image }} className="h-36 w-full" resizeMode="cover" />
            <View className="p-3">
              <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                {game.name}
              </Text>
              <Text className="text-sm text-gray-600 dark:text-gray-300">
                {game.location}
              </Text>
              <View className="mt-1 flex-row items-center">
                <Ionicons name="people" size={16} color="#666" />
                <Text className="ml-1 text-sm text-gray-600 dark:text-gray-300">
                  {game.players} players
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );

  const renderGamesToJoin = () => (
    <View className="mt-8 px-4">
      <Text className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
        🎮 Games to Join
      </Text>
      {gamesToJoin.map((game) => (
        <TouchableOpacity
          key={game.id}
          activeOpacity={0.85}
          className="mb-3 rounded-2xl bg-white p-4 shadow-md dark:bg-gray-800"
        >
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                {game.name}
              </Text>
              <Text className="text-sm text-gray-600 dark:text-gray-300">
                {game.location}
              </Text>
              <Text className="text-sm text-gray-600 dark:text-gray-300">
                {game.time}
              </Text>
            </View>
            <View className="rounded-full bg-blue-100 px-3 py-1 dark:bg-blue-900">
              <Text className="text-sm font-medium text-blue-600 dark:text-blue-300">
                {game.spotsLeft} spots
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  const renderYourEvents = () => (
    <View className="mt-8 px-4 mb-6">
      <Text className="mb-2 text-xl font-semibold text-gray-800 dark:text-white">
        📅 Your Events
      </Text>
      {yourEvents.map((event) => (
        <TouchableOpacity
          key={event.id}
          activeOpacity={0.85}
          className="mb-3 rounded-2xl bg-white p-4 shadow-md dark:bg-gray-800"
        >
          <View className="flex-row items-center justify-between">
            <View>
              <Text className="text-lg font-semibold text-gray-900 dark:text-white">
                {event.name}
              </Text>
              <Text className="text-sm text-gray-600 dark:text-gray-300">
                {event.location}
              </Text>
              <Text className="text-sm text-gray-600 dark:text-gray-300">
                {event.date} at {event.time}
              </Text>
            </View>
            <View className="rounded-full bg-green-100 px-3 py-1 dark:bg-green-900">
              <Text className="text-sm font-medium text-green-700 dark:text-green-300">
                {event.status}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900 pt-12">
      {renderTopBar()}
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderSearchBar()}
        {renderTrendingGames()}
        {renderGamesToJoin()}
        {renderYourEvents()}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
