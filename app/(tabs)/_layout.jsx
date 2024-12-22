import { View } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Home } from "lucide-react-native";

const HomeLayout = () => {
    return (
        <Tabs screenOptions={{ tabBarStyle: { display: "none" } }}>
            <Tabs.Screen
                name='home'
                options={{
                    title: "Home",
                    headerShown: false,

                    // tabBarIcon: () => (
                    //     <View>
                    //         <Home size={25} color='black' />
                    //     </View>
                    // ),
                }}
            />
        </Tabs>
    );
};

export default HomeLayout;
