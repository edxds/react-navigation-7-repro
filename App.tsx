import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

const Screen = () => {
  return (
    <View>
      <Text>Hello React Navigation 7!</Text>
    </View>
  );
};

const RootStack = createNativeStackNavigator({
  groups: {
    GroupA: {
      screens: {
        Hello: {
          screen: Screen,
          options: { presentation: "modal" },
        },
        Bye: Screen,
      },
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
