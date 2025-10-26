import { Text, View } from "react-native";
import {Link} from "expo-router";

export default function Index() {
  return (
    <View className={"flex-1 justify-center items-center"}>
      <Text className={"text-5xl text-secondary font-bold"}>Hello World!</Text>
        <Link href="/onboarding">OnBoarding</Link>
        <Link href="/movie/avengers">Avengers Movie</Link>
    </View>
  );
}
