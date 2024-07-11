import React, { useCallback } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, InDevelopmentScreen } from '@/screens';
import { HomeIcon, SearchIcon, ShoppingCartIcon, ProfileIcon } from '@/icons';
import theme from '@/theme';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  const renderHomeIcon = useCallback(
    ({ focused }: { focused: boolean }) => (
      <HomeIcon width={24} height={24} fill={focused ? theme.colors.primary : undefined} />
    ),
    []
  );

  const renderShoppingCartIcon = useCallback(
    ({ focused }: { focused: boolean }) => (
      <ShoppingCartIcon width={24} height={24} fill={focused ? theme.colors.primary : undefined} />
    ),
    []
  );

  const renderProfileIcon = useCallback(
    ({ focused }: { focused: boolean }) => (
      <ProfileIcon width={24} height={24} fill={focused ? theme.colors.primary : undefined} />
    ),
    []
  );

  const renderSearchiconIcon = useCallback(
    ({ focused }: { focused: boolean }) => (
      <SearchIcon width={24} height={24} fill={focused ? theme.colors.primary : undefined} />
    ),
    []
  );
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: renderHomeIcon,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Search"
        component={InDevelopmentScreen}
        options={{
          headerShown: false,
          tabBarIcon: renderSearchiconIcon,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="ShoppingCart"
        component={InDevelopmentScreen}
        options={{
          headerShown: false,
          tabBarIcon: renderShoppingCartIcon,
          tabBarShowLabel: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={InDevelopmentScreen}
        options={{
          headerShown: false,
          tabBarIcon: renderProfileIcon,
          tabBarShowLabel: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
