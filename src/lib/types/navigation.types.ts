import { NavigatorScreenParams, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type AuthParamList = {
  Login: undefined;
  Register: undefined;
  ForgotPassword: { email?: string };
};

// Main Stack Navigator Param List
export type MainParamList = {
  Home: undefined;
  Profile: { userId: string };
  Settings: undefined;
  ProductDetails: { productId: string };
};

// Tab Navigator Param List
export type TabParamList = {
  TabHome: undefined;
  TabExplore: undefined;
  TabNotifications: undefined;
  TabProfile: undefined;
};

// Combined Root Navigator Param List
export type RootParamList = {
  Auth: NavigatorScreenParams<AuthParamList>;
  Main: NavigatorScreenParams<MainParamList>;
};

// Helper types for screens to use
export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};

export type MainNavProps<T extends keyof MainParamList> = {
  navigation: StackNavigationProp<MainParamList, T>;
  route: RouteProp<MainParamList, T>;
};

export type TabNavProps<T extends keyof TabParamList> = {
  navigation: BottomTabNavigationProp<TabParamList, T>;
  route: RouteProp<TabParamList, T>;
};
