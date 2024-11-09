import { Tabs } from "expo-router";
import { FontAwesome } from '@expo/vector-icons'
import { SafeAreaView } from "react-native-safe-area-context";

function TabBarIcons(props:{
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color:string;
}){
  return < FontAwesome size={24} {...props} style={{color: '#1BC464'}}/>
}
const TabsLayout = () => {
  return (
    <SafeAreaView edges={['top']} style={{ flex: 1}}>
      <Tabs
      screenOptions={{
        tabBarActiveTintColor:'#1BC464',
        tabBarInactiveTintColor:'gray',
        tabBarLabelStyle: { fontSize: 16},
        tabBarStyle:{
          borderTopLeftRadius:20,
          borderBottomLeftRadius:20,
          paddingTop:10,
          paddingBottom:10,
          height:'10%'
        },
        headerShown:false
      }}
      >
        <Tabs.Screen
          name='index'
          options={{
            title:"shop",
            tabBarIcon(props){
              return <TabBarIcons {...props} name="shopping-cart"/>
            }
          }}
        />
        <Tabs.Screen name='orders'
        options={{
          title:"Orders",
          tabBarIcon(props){
            return <TabBarIcons {...props} name="book"/>
          }
        }}
        />
      </Tabs>
    </SafeAreaView>
  );
};

export default TabsLayout;
