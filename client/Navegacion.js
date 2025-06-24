import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

// Importar el contexto global
import { estadoLoginGlobal } from "./src/context/contexData";


import { FontAwesome } from '@expo/vector-icons';

// Crear el navegador de pestañas
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


// Importar las pantallas principales
import ScreenAcercade from './src/screen/acercade/ScreenAcercade';
import ScreenHome from './src/screen/home/ScreenHome';
import ScreenSetting from './src/screen/setting/ScreenSetting';

// Llamar los Screen hijos home
import LucesCasas from "./src/screen/home/LucesCasas";
import DetallesHome from "./src/screen/home/DetallesHome";
import PuertasCasa from "./src/screen/home/PuertasCasa";

// Llamar los componentes login
import ScreenLogin from "./src/screen/login/ScreenLogin";
import ScreenCrearCuenta from "./src/screen/login/ScreenCrearCuenta";



function MyStackHome() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="menu" component={ScreenHome}  options={{ headerShown:false, title: 'Inicio' }}/>
            <Stack.Screen name="lucescasas" component={LucesCasas}/>
            <Stack.Screen name="detallescasa" component={DetallesHome} />
            <Stack.Screen name="puertacasa" component={PuertasCasa} />
        </Stack.Navigator>
    )
}


function MyStackLogin() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="login" component={ScreenLogin}/>
            <Stack.Screen name="crearcuenta" component={ScreenCrearCuenta}/>
        </Stack.Navigator>
    )
}


function MyDrawer() {
   return (
      <Drawer.Navigator>
         <Drawer.Screen
            name="Dash"
            component={Mytabs} 
            options={{
               title: 'Dashboard',
               drawerIcon: ({ color }) => <FontAwesome name="dashboard" size={24} color={color} />,
               drawerActiveTintColor: 'blue',
               drawerInactiveTintColor: 'gray',
               drawerStyle: { backgroundColor: 'lightgray' }
            }}/>
            <Drawer.Screen
            name="notificaciones"
            component={MyStackHome}
            options={{
               title: 'Notifications',
               drawerIcon: ({ color }) => <FontAwesome name="bell" size={24} color={color} />,
               drawerActiveTintColor: 'blue',
               drawerInactiveTintColor: 'gray',
               drawerStyle: { backgroundColor: 'lightgray' }
            }}
            />
            <Drawer.Screen
            name="perfin"
            component={MyStackHome}
            options={{
               title: 'Perfil',
               drawerIcon: ({ color }) => <FontAwesome name="user" size={24} color="color" />,
               drawerActiveTintColor: 'blue',
               drawerInactiveTintColor: 'gray',
               drawerStyle: { backgroundColor: 'lightgray' }
            }}/>
            <Drawer.Screen
            name="settings"
            component={MyStackHome}
            options={{
               title: 'Settings',
               drawerIcon: ({ color }) => <FontAwesome name="cog" size={24} color="color" />,
               drawerActiveTintColor: 'blue',
               drawerInactiveTintColor: 'gray',
               drawerStyle: { backgroundColor: 'lightgray' }
            }}/>
      </Drawer.Navigator>
   )

}



function Mytabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: 'green' },
                tabBarStyle: { backgroundColor: '#E7F2E4' },
            }}
        >
            <Tab.Screen 
                name="home" 
                component={MyStackHome} 
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="home" size={24} color={focused ? 'green' : '#888'} />
                    ),
                    tabBarLabelPosition: 'beside-icon',
                    tabBarBadge: 2,
                    tabBarLabelStyle: {
                        color: 'green',
                        backgroundColor: 'Purple'
                    }
                }} 
            />
            <Tab.Screen 
                name="about" 
                component={ScreenAcercade} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="info-circle" size={24} color={focused ? 'red' : '#888'} />
                    ),
                    tabBarLabelPosition: 'beside-icon',
                    tabBarBadge: 3,
                    tabBarLabelStyle: {
                        color: 'red',
                        backgroundColor: 'Purple'
                    }
                }}
            />
            <Tab.Screen 
                name="setting" 
                component={ScreenSetting} 
                options={{
                    tabBarIcon: ({ focused }) => (
                        <FontAwesome name="cogs" size={24} color={focused ? 'blue' : '#888'} />
                    ),
                    tabBarLabelPosition: 'beside-icon',
                    tabBarBadge: 0,
                    tabBarLabelStyle: {
                        color: ' blue ',
                        backgroundColor: 'Purple'
                    }
                }}
            />
        </Tab.Navigator>
    );
}

export default function Navegacion() {
  const { isLogin } = useContext(estadoLoginGlobal);

  console.log("Estado de login:", isLogin);

  return (
    <>
      {isLogin ? <MyDrawer /> : <MyStackLogin />}
    </>
  );
}
