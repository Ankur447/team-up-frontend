import * as React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useColorScheme } from "nativewind";
import { Ionicons } from "@expo/vector-icons";

type Chat = {
  id: string;
  name: string;
  isGroup: boolean;
  lastMessage: string;
  time: string;
  unreadCount?: number;
  avatarUrl?: string;
};

const mockChats: Chat[] = [
  {
    id: '1',
    name: 'Jane Doe',
    isGroup: false,
    lastMessage: 'Hey, are we meeting today?',
    time: '10:32 AM',
    unreadCount: 2,
  },
  {
    id: '2',
    name: 'Family Group',
    isGroup: true,
    lastMessage: "Mom: Don't forget to bring the groceries.",
    time: '9:45 AM',
  },
  {
    id: '3',
    name: 'Dev Team',
    isGroup: true,
    lastMessage: 'Alex: Pushed the latest update to Git.',
    time: 'Yesterday',
    unreadCount: 1,
  },
  {
    id: '4',
    name: 'Jane Smith',
    isGroup: false,
    lastMessage: 'Thanks for the help!',
    time: 'Monday',
  },
];

export default function ChatroomList() {
  const { colorScheme } = useColorScheme();

  const renderTopBar = () => (
    <View className="flex-row items-center justify-between border-b border-gray-200 bg-white px-4 py-3 dark:border-gray-800 dark:bg-gray-900">
      <View className="flex-row items-center">
        <Text className="text-2xl font-extrabold text-gray-900 dark:text-white">
          Messages
        </Text>
      </View>
      <TouchableOpacity className="p-2">
        <Ionicons name="create-outline" size={24} color={colorScheme === 'dark' ? '#fff' : '#666'} />
      </TouchableOpacity>
    </View>
  );

  const renderItem = ({ item }: { item: Chat }) => (
    <TouchableOpacity className="flex-row items-center px-4 py-3 border-b border-gray-200 dark:border-gray-800">
      {/* Avatar */}
      <View className="w-12 h-12 rounded-full bg-gray-300 dark:bg-gray-700 justify-center items-center mr-4">
        <Text className="text-lg text-white font-semibold">
          {item.name
            .split(' ')
            .slice(0, 2)
            .map((word) => word[0])
            .join('')}
        </Text>
      </View>

      {/* Chat Info */}
      <View className="flex-1">
        <View className="flex-row justify-between items-center">
          <Text className="text-base font-semibold text-gray-900 dark:text-white">
            {item.name}
          </Text>
          <Text className="text-xs text-gray-500 dark:text-gray-400">{item.time}</Text>
        </View>
        <View className="flex-row justify-between items-center">
          <Text
            className="text-sm text-gray-600 dark:text-gray-300"
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {item.lastMessage}
          </Text>
          {item.unreadCount ? (
            <View className="ml-2 bg-blue-500 rounded-full px-2 py-0.5">
              <Text className="text-white text-xs">{item.unreadCount}</Text>
            </View>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50 dark:bg-gray-900 pt-12">
      {renderTopBar()}
      <FlatList
        data={mockChats}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </SafeAreaView>
  );
}
