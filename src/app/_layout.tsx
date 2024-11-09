import { Stack } from 'expo-router'
import React from 'react'

const RootLayout = () => {
  return (
    <Stack>
      <Stack.Screen name='(shop)' options={{ headerShown: false, title: "Shop" }} />
      <Stack.Screen name='categories' options={{ headerShown: true, title: "Category" }} />
      <Stack.Screen name='product' options={{ headerShown: true, title: "Product" }} />
      {/* to show as modal */}
      <Stack.Screen name='auth' options={{ presentation: 'modal', title: "Auth" }} />
      <Stack.Screen name='cart' options={{ headerShown: true, title: "Shopping Cart" }} />
    </Stack>
  );
}

export default RootLayout