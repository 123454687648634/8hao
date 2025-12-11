import React, { useEffect } from "react";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack, usePathname, useGlobalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "TurboModuleRegistry.getEnforcing(...): 'RNMapsAirModule' could not be found",
  // 添加其它想暂时忽略的错误或警告信息
]);

export default function RootLayout() {
  const pathname = usePathname();
  const searchParams = useGlobalSearchParams();

  useEffect(() => {
    if (!pathname) {
      return;
    }
    let searchString = '';
    if (Object.keys(searchParams).length > 0) {
      const queryString = Object.keys(searchParams)
        .map(key => {
          const value = searchParams[key];
          if (typeof value === 'string') {
            return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
          }
          return '';
        }).filter(Boolean).join('&');

      searchString = '?' + queryString;
    }

    const pageId = pathname.replace('/', '').toUpperCase();
    console.log('当前pageId:', pageId, ', pathname:', pathname, ', search:', searchString);
    if (typeof window === 'object' && window.parent && window.parent.postMessage) {
      window.parent.postMessage({
        type: 'chux-path-change',
        pageId: pageId,
        pathname: pathname,
        search: searchString,
      }, '*');
    }
  }, [pathname, searchParams])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark"></StatusBar>
      <Stack screenOptions={{
        // 设置所有页面的切换动画为从右侧滑入，适用于iOS 和 Android
        animation: 'slide_from_right',
        gestureEnabled: true,
        gestureDirection: 'horizontal',
        // 隐藏自带的头部
        headerShown: false 
      }}>
        <Stack.Screen name="(tabs)" options={{ title: "底部导航栏" }} />
        <Stack.Screen name="p-flower_detail" options={{ title: "花材详情页" }} />
        <Stack.Screen name="p-order_confirm" options={{ title: "订单确认页" }} />
        <Stack.Screen name="p-order_tracking" options={{ title: "订单跟踪页" }} />
        <Stack.Screen name="p-knowledge" options={{ title: "花艺知识页" }} />
        <Stack.Screen name="p-promotion" options={{ title: "节日活动页" }} />
        <Stack.Screen name="p-payment" options={{ title: "支付页" }} />
        <Stack.Screen name="p-address_manage" options={{ title: "地址管理页" }} />
        <Stack.Screen name="p-coupon_center" options={{ title: "优惠券中心页" }} />
        <Stack.Screen name="p-settings" options={{ title: "设置页" }} />
        <Stack.Screen name="p-order_history" options={{ title: "历史订单页" }} />
        <Stack.Screen name="p-order_evaluation" options={{ title: "订单评价页" }} />
        <Stack.Screen name="p-search_result" options={{ title: "搜索结果页" }} />
      </Stack>
    </GestureHandlerRootView>
  );
}
