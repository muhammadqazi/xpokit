import { StyleSheet, Image, Platform, View, Text } from 'react-native';


export default function HomeScreen() {
  return (

        <View className="bg-red-800 rounded-xl mt-10">
          <Text className="text-lg font-medium text-red-800">Welcome to Home</Text>
        </View>

    
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
