import { Stack } from "expo-router";

export default function DetailsLayout() {
  return (
    <Stack>
      <Stack.Screen
        name = "recipeDetails"
        options={{headerShown: false}}
      />
    </Stack>
);
}
