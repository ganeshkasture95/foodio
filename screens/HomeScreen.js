import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView>
      <Text className='text-red-500'>
        {/* headerShown */}
        <View className="flex-row pb-3 items-center mx-4 space-x-2">
          <Image source={{
            uri: "https://links.papareact.com/wru"
          }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <View>
            <Text>Diliver Now!</Text>
            <Text>Current Location</Text>
          </View>
        </View>

      </Text>
    </SafeAreaView>
  )
}

export default HomeScreen