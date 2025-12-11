

import React, { useState, useCallback } from 'react';
import { View, Text, TouchableOpacity, FlatList, RefreshControl, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';
import OrderCard from './components/OrderCard';
import StatusTabs from './components/StatusTabs';
import { Order, OrderStatus } from './types';

const mockOrders: Order[] = [
  {
    id: 'ORD20240315001',
    time: '2024-03-15 14:30',
    status: 'completed',
    statusText: '已完成',
    totalAmount: '¥168.00',
    items: [
      {
        name: '经典红玫瑰束',
        image: 'https://s.coze.cn/image/kUU9X7EA3P8/',
        quantity: 1,
        price: '¥168.00'
      }
    ]
  },
  {
    id: 'ORD20240314002',
    time: '2024-03-14 10:15',
    status: 'shipping',
    statusText: '待配送',
    totalAmount: '¥128.00',
    items: [
      {
        name: '清新百合束',
        image: 'https://s.coze.cn/image/ISJeb-Hf-ZA/',
        quantity: 1,
        price: '¥128.00'
      }
    ]
  },
  {
    id: 'ORD20240313003',
    time: '2024-03-13 16:45',
    status: 'pending',
    statusText: '待支付',
    totalAmount: '¥228.00',
    items: [
      {
        name: '梦幻绣球花束',
        image: 'https://s.coze.cn/image/ufgAsGUcseo/',
        quantity: 1,
        price: '¥228.00'
      }
    ]
  },
  {
    id: 'ORD20240312004',
    time: '2024-03-12 09:20',
    status: 'processing',
    statusText: '待制作',
    totalAmount: '¥88.00',
    items: [
      {
        name: '特价康乃馨束',
        image: 'https://s.coze.cn/image/jo_0XEAkuGo/',
        quantity: 1,
        price: '¥88.00'
      }
    ]
  },
  {
    id: 'ORD20240311005',
    time: '2024-03-11 11:30',
    status: 'cancelled',
    statusText: '已取消',
    totalAmount: '¥158.00',
    items: [
      {
        name: '阳光向日葵束',
        image: 'https://s.coze.cn/image/Qhiim08RSqo/',
        quantity: 1,
        price: '¥158.00'
      }
    ]
  },
  {
    id: 'ORD20240310006',
    time: '2024-03-10 15:10',
    status: 'completed',
    statusText: '已完成',
    totalAmount: '¥198.00',
    items: [
      {
        name: '优雅郁金香束',
        image: 'https://s.coze.cn/image/E1vQyGXK5qA/',
        quantity: 1,
        price: '¥198.00'
      }
    ]
  }
];

const OrderHistoryScreen: React.FC = () => {
  const router = useRouter();
  const [currentFilter, setCurrentFilter] = useState<OrderStatus>('all');
  const [isRefreshing, setIsRefreshing] = useState(false);

  const filteredOrders = mockOrders.filter(order => 
    currentFilter === 'all' || order.status === currentFilter
  );

  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  const handleGoShopping = useCallback(() => {
    router.push('/p-home');
  }, [router]);

  const handleOrderPress = useCallback((orderId: string) => {
    router.push(`/p-order_tracking?order_id=${orderId}`);
  }, [router]);

  const handleCancelOrder = useCallback((orderId: string) => {
    Alert.alert(
      '取消订单',
      '确定要取消订单吗？',
      [
        { text: '取消', style: 'cancel' },
        {
          text: '确定',
          onPress: () => {
            Alert.alert('提示', '订单已取消');
          }
        }
      ]
    );
  }, []);

  const handlePayOrder = useCallback((orderId: string) => {
    router.push(`/p-payment?order_id=${orderId}`);
  }, [router]);

  const handleContactService = useCallback(() => {
    Alert.alert('提示', '正在跳转到客服页面...');
  }, []);

  const handleTrackOrder = useCallback((orderId: string) => {
    router.push(`/p-order_tracking?order_id=${orderId}`);
  }, [router]);

  const handleBuyAgain = useCallback((orderId: string) => {
    router.push(`/p-custom_flower?order_id=${orderId}`);
  }, [router]);

  const handleEvaluateOrder = useCallback((orderId: string) => {
    router.push(`/p-order_evaluation?order_id=${orderId}`);
  }, [router]);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // 模拟刷新延迟
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  const renderOrderItem = useCallback(({ item }: { item: Order }) => (
    <OrderCard
      order={item}
      onPress={() => handleOrderPress(item.id)}
      onCancelOrder={() => handleCancelOrder(item.id)}
      onPayOrder={() => handlePayOrder(item.id)}
      onContactService={handleContactService}
      onTrackOrder={() => handleTrackOrder(item.id)}
      onBuyAgain={() => handleBuyAgain(item.id)}
      onEvaluateOrder={() => handleEvaluateOrder(item.id)}
    />
  ), [
    handleOrderPress,
    handleCancelOrder,
    handlePayOrder,
    handleContactService,
    handleTrackOrder,
    handleBuyAgain,
    handleEvaluateOrder
  ]);

  const renderEmptyState = useCallback(() => (
    <View style={styles.emptyStateContainer}>
      <View style={styles.emptyStateIcon}>
        <FontAwesome6 name="bag-shopping" size={48} color="#A0AEC0" />
      </View>
      <Text style={styles.emptyStateTitle}>暂无订单</Text>
      <Text style={styles.emptyStateSubtitle}>快去挑选心仪的花束吧</Text>
      <TouchableOpacity 
        style={styles.goShoppingButton}
        onPress={handleGoShopping}
        activeOpacity={0.8}
      >
        <Text style={styles.goShoppingButtonText}>去购物</Text>
      </TouchableOpacity>
    </View>
  ), [handleGoShopping]);

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleBackPress}
          activeOpacity={0.7}
        >
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>我的订单</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      {/* 主要内容 */}
      <FlatList
        data={filteredOrders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={
          <StatusTabs
            currentFilter={currentFilter}
            onFilterChange={setCurrentFilter}
          />
        }
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#E8B4B8']}
            tintColor="#E8B4B8"
          />
        }
      />
    </SafeAreaView>
  );
};

export default OrderHistoryScreen;

