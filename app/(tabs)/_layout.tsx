
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';


export default function TabLayout() {
  return (   
    <Tabs 
        screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#399363',
        headerStyle: {
            backgroundColor: '#25292e',
        },
        headerShadowVisible: false,
        headerTintColor: '#aff',
        tabBarStyle: {
            backgroundColor: '#25292e',
        },
      }}
    >
    <Tabs.Screen 
        name="index" 
        options={{ 
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
            ),
        }} 
    />
    <Tabs.Screen
        name="login"
        options={{
            title:'Login',
            tabBarIcon: ({color}) => (<Ionicons name='log-in'  size={24} color={color}/>),               
        }}   
    />
    <Tabs.Screen 
        name="settings"
        options={{
            title: 'Settings',
            tabBarIcon: ({color}) => <Ionicons name='settings' size={24} color={color} />
        }}
    />
    <Tabs.Screen 
        name="books" 
        options={{ 
            title:'Books',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'book' : 'bookmark'} color={color} size={24}/>
            ),
        }}            
    />
    <Tabs.Screen 
        name="mars" 
        options={{
            // headerShown: false, 
            title: 'Mars',
            tabBarIcon: ({ color, focused }) => (
                <Ionicons name={focused ? 'globe' : 'globe-outline'} color={color} size={24}/>
            ),
        }}            
    />
    <Tabs.Screen 
        name="about"
        options={{
            title: 'About',
            tabBarIcon: ({color}) => <Ionicons name='information' size={24} color={color} />
        }}
    />
    </Tabs>
  )
}
