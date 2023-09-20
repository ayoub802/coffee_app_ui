import { View, Text, ScrollView, ImageBackground, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from "@expo/vector-icons";

const { height, width } = Dimensions.get("window");

const DetailScreen = ({ route, navigation}) => {
    const item = route.params;
    const sizes = ["S", "M", "L"];
    const [activeSize, setActiveSize] = useState(null);

  return (
    <SafeAreaView className='flex-1'>
        <View className="flex-1 bg-[#0C0F14]">
            <ScrollView className="flex-1">
                <ImageBackground 
                    source={item.image}
                    style={{
                    height: height / 2 + 20,
                    justifyContent: "space-between"
                    }}
                    imageStyle={{
                    borderRadius: 30
                    }}
                >

                <View
                    className="flex-row justify-between p-5"
                >
                    <TouchableOpacity
                    className='bg-[#0C0F14] p-2.5 rounded-[15px]'
                        onPress={() => navigation.goBack()} 
                    >
                        <Ionicons 
                        name='arrow-back'
                        color={'#4D4F52'}
                        size={20}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                    className='bg-[#0C0F14] p-2.5 rounded-[15px]'
                        onPress={() => navigation.goBack()} 
                    >
                        <Ionicons 
                        name='heart'
                        color={'#4D4F52'}
                        size={20}
                        />
                    </TouchableOpacity>
                </View>

                </ImageBackground>

                <View className='p-2.5'>
                   <Text className="text-[#b5b5b5] text-[16px] mb-2.5">
                      Description
                   </Text>
                   <Text numberOfLines={3} className="text-white">
                      {item.description}
                   </Text>

                   <View className="my-5">
                   <Text className="text-[#b5b5b5] text-[16px] mb-2.5">
                      Size
                    </Text>

                    {
                        sizes.map((size, index) => (
                            <TouchableOpacity
                              onPress={() => setActiveSize(size)}
                              key={index}
                              style={[
                                { 
                                    borderWidth: 2,
                                    paddingVertical: 5,
                                    borderRadius: 10,
                                    backgroundColor: '#b5b5b5',
                                    width: width / 2 - 20,
                                    alignItems: "center"
                                },
                                activeSize == size && {
                                    borderColor: '#D17842',
                                    backgroundColor: '#0C0F14'
                                }
                              ]}
                            >

                            </TouchableOpacity>
                        ))
                    }
                   </View>
                </View>

            </ScrollView>
        </View>

    </SafeAreaView>
  )
}

export default DetailScreen