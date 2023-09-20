import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, FlatList, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { BlurView } from 'expo-blur'
import { Ionicons } from "@expo/vector-icons";
import categories from '../config/categories';
import coffees from "../config/coffees";
import { SafeAreaView } from 'react-native-safe-area-context';

const avatar = require("../assets/avatar.jpg");

const { width } = Dimensions.get("window");

const Categories = ({ onChange }) => {
    const [activeCategoryId, setActiveCategoryId] = useState(null);

    const handlePress = (id) => {
      setActiveCategoryId(id);
      onChange(id);
    };
  
    return (
      <FlatList
        horizontal={true}
        data={categories}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ marginVertical: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => handlePress(item.id)}
            style={{ marginRight: 10 * 2, alignItems: "center" }}
          >
            <Text
              style={[
                { color: '#52555A', fontSize: 17, textTransform: 'uppercase'},
                activeCategoryId === item.id && { color: '#D17842' },
              ]}
            >
              {item.name}
            </Text>
            {activeCategoryId === item.id && (
              <View
                style={{
                  height: 10,
                  width: 10,
                  backgroundColor: '#D17842',
                  borderRadius: 10 / 2,
                  marginTop: 10 / 2,
                }}
              />
            )}
          </TouchableOpacity>
        )}
      />
    );
}

const HomeScreen = ({ navigation }) => {
    const [activeCategoryId, setActiveCategoryId] = useState(null);

  return (
    <SafeAreaView className="flex-1 bg-[#0C0F14]">
        <ScrollView
         className="p-2.5 w-full"
        >
            <View className="items-center justify-between flex-row">
               <TouchableOpacity
                 className="rounded-[10px] overflow-hidden w-10 h-10"
               >
                  <BlurView className="h-full justify-center items-center">
                    <Ionicons name='menu' size={25} color={'#52555A'}/>
                  </BlurView>
               </TouchableOpacity>

               <View className="w-10 h-10 overflow-hidden rounded-[10px]">
                 <BlurView className='h-full p-1.5'>
                     <Image source={avatar} className="h-full w-full rounded-[10px]"/>
                 </BlurView>
               </View>
            </View>

            <View className="w-[80%] mt-7 mb-5">
                <Text className="text-white text-[30px] font-semibold">
                    Find the best coffee for you
                </Text>
            </View>

            <View className="rounded-[10px] overflow-hidden">
                <BlurView className="items-center justify-center" intensity={30}>
                   <TextInput
                     className="w-full text-white text-[17px] p-2.5 pl-9" 
                     placeholder='Find your coffee...'
                     placeholderTextColor={'#4D4F52'}
                   />
                    <Ionicons name='search' color={'#4D4F52'} size={20}
                        style={{
                            position: "absolute",
                            left: 10,
                            }}
                    />
                </BlurView>
            </View>

             <Categories onChange={(id) => setActiveCategoryId(id)}/>

             <View className="flex-row flex-wrap justify-between mt-2">
                 { 
                   coffees.filter((coffee) => {
                    if(activeCategoryId === null){
                        return true;
                    }
                    return coffee.categoryId === activeCategoryId;
                   })
                   .map((coffee) => (
                    <View style={{
                        width: width / 2 - 20,
                        marginBottom: 15,
                        borderRadius: 20,
                        overflow: 'hidden'
                    }}
                     key={coffee.id}
                    >
                        <BlurView
                         tint='dark'
                         intensity={95}
                         className="p-2.5"
                        >
                           <TouchableOpacity
                            style={{
                                height: 150,
                                width: "100%"
                            }}
                            onPress={() => navigation.navigate('Detail', coffee)}
                           >
                            <Image source={coffee.image} className="w-full h-full rounded-[20px]"/>

                            <View
                            style={{
                                position: 'absolute',
                                right: 0,
                                borderBottomStartRadius: 30,
                                borderTopEndRadius: 20,
                                overflow: 'hidden'
                            }}>
                                <BlurView
                                  tint='dark'
                                  intensity={70}
                                  className="flex-row p-2"
                                >
                                  <Ionicons name='star' color={'#D17842'} size={17}/>
                                  <Text className="text-white ml-[5px]">{coffee.rating}</Text>
                                </BlurView>
                            </View>
                           </TouchableOpacity>

                           <Text className="text-white font-semibold mt-2.5 mb-[5px] text-[15px]" numberOfLines={2}>
                            {coffee.name}
                           </Text>
                           <Text className="text-[#52555A] font-semibold text-[12px]" numberOfLines={1}>
                            {coffee.included}
                           </Text>

                           <View className="my-[5px] flex-row justify-between items-center">

                              <View className="flex-row">
                                 <Text className="text-[#D17842] mr-[5px] text-[15px]">$</Text>
                                 <Text className="text-white text-[15px]">{coffee.price}</Text>
                              </View>

                              <TouchableOpacity className="bg-[#D17842] p-[5px] rounded-[10px]">
                                <Ionicons name='add' size={18} color={'#fff'}/>
                              </TouchableOpacity>
                           </View>
                        </BlurView>
                    </View>
                   ))
                 }
             </View>
        </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen