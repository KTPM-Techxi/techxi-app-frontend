import React from 'react';
import { SafeAreaView, Text, View, Image} from 'react-native';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import SearchLocationInput from '../components/SearchLocationInput';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LineChart } from 'react-native-chart-kit';

const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Rainy Days"] // optional
  };

const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};

const StatScreen = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView className='flex-1 bg-white'>
            <View className='bg-green-500 mt-8 mx-4 flex-row justify-between p-3 rounded-2xl'>
                <View className='flex-row'>
                    <View className='w-10 h-10 bg-green-700 rounded-full align-middle'>
                        <View className='mx-auto my-auto'>
                            <FontAwesomeIcon name='arrow-left' size={20} color="white"/>
                        </View>
                    </View>
                    <Text className='ml-3 mt-auto font-bold text-3xl text-white'>
                        Statistics
                    </Text>
                </View>
                <View className='flex-row'>
                        <Image 
                        className='align-middle rounded-full h-10 w-10 border-white'
                        source={{uri: 'https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj'}}/>
                </View>
            </View>

            <View>
                <LineChart
                    data={data}
                    width={350}
                    height={220}
                    chartConfig={chartConfig}
                />
            </View>
        </SafeAreaView>
    );
};

export default StatScreen;
