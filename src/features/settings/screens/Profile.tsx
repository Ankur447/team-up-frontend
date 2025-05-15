import React from "react";
import { View, Text, Image } from "react-native";

// Mock Data - Replace with actual NAPI data later
const mockUser = {
  id: "1",
  name: "Kobe",
  username: "@kobe",
  avatar: "https://pbs.twimg.com/media/GrAeOWNW8AEQcQR?format=jpg&name=small",
  bio: "Full-stack developer. Dug addict , Gambler.",
  followers: 69,
  following: 420,
  posts: 75,
};

export default function ProfileCard() {
  return (
    <View className="p-6 mx-4 my-8 rounded-2xl shadow bg-white dark:bg-gray-900">
      {/* Header: Avatar and Name */}
      <View className="flex-row items-center space-x-8">
        <Image
          source={{ uri: mockUser.avatar }}
          className="w-20 h-20 rounded-full border-2 border-gray-300 dark:border-gray-700"
        />
        <View>
          <Text className="text-xl font-bold text-gray-900 dark:text-gray-100 pl-4">
            {mockUser.name}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400 pl-4">
            {mockUser.username}
          </Text>
        </View>
      </View>

      {/* Bio */}
      <Text className="mt-4 text-gray-700 dark:text-gray-300">
        {mockUser.bio}
      </Text>

      {/* Stats */}
      <View className="mt-6 flex-row justify-between">
        <View className="items-center">
          <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {mockUser.posts}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            Posts
          </Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {mockUser.followers}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            Followers
          </Text>
        </View>
        <View className="items-center">
          <Text className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            {mockUser.following}
          </Text>
          <Text className="text-sm text-gray-500 dark:text-gray-400">
            Following
          </Text>
        </View>
      </View>
    </View>
  );
}
