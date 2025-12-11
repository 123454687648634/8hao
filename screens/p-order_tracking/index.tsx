

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface OrderItem {
  id: string;
  name: string;
  description: string;
  image: string;
  quantity: number;
  price: number;
}

interface LogisticsItem {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: string;
  color: string;
  isCompleted: boolean;
}

interface OrderData {
  orderNumber: string;
  status: string;
  statusDescription: string;
  statusIcon: string;
  recipientName: string;
  recipientPhone: string;
  deliveryAddress: string;
  items: OrderItem[];
  logistics: LogisticsItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
}

const OrderTrackingScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const [isCancelModalVisible, setIsCancelModalVisible] = useState(false);
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  // 模拟订单数据
  const orderData: OrderData = {
    orderNumber: 'HF20240315001',
    status: '配送中',
    statusDescription: '您的花束正在配送途中，预计今日16:00送达',
    statusIcon: 'truck-fast',
    recipientName: '李小雨',
    recipientPhone: '138****8888',
    deliveryAddress: '北京市朝阳区建国门外大街1号国贸大厦A座1501室',
    items: [
      {
        id: '1',
        name: '经典红玫瑰束',
        description: '11朵红玫瑰，豪华包装，贺卡',
        image: 'https://s.coze.cn/image/1rk0N2moB0k/',
        quantity: 1,
        price: 168,
      },
      {
        id: '2',
        name: '精美巧克力礼盒',
        description: '附加礼品，比利时进口巧克力',
        image: 'https://s.coze.cn/image/adyf2PuB0AM/',
        quantity: 1,
        price: 58,
      },
    ],
    logistics: [
      {
        id: '1',
        title: '商品已发货',
        description: '快递员正在配送中，请注意查收',
        time: '2024-03-15 14:30',
        icon: 'truck',
        color: '#E8B4B8',
        isCompleted: true,
      },
      {
        id: '2',
        title: '花束制作完成',
        description: '花艺师已完成花束制作，准备发货',
        time: '2024-03-15 12:15',
        icon: 'check',
        color: '#F4D03F',
        isCompleted: true,
      },
      {
        id: '3',
        title: '开始制作花束',
        description: '花艺师已开始制作您的专属花束',
        time: '2024-03-15 10:00',
        icon: 'screwdriver-wrench',
        color: '#A8E6CF',
        isCompleted: true,
      },
      {
        id: '4',
        title: '订单已确认',
        description: '商家已确认您的订单，即将开始制作',
        time: '2024-03-15 09:30',
        icon: 'circle',
        color: '#A0AEC0',
        isCompleted: true,
      },
      {
        id: '5',
        title: '订单已支付',
        description: '支付成功，感谢您的购买',
        time: '2024-03-15 09:25',
        icon: 'circle',
        color: '#A0AEC0',
        isCompleted: true,
      },
    ],
    subtotal: 226,
    deliveryFee: 15,
    discount: 20,
    total: 221,
  };

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/p-user_center');
    }
  };

  const handleSharePress = () => {
    setSuccessMessage('分享链接已复制到剪贴板');
    setIsSuccessModalVisible(true);
  };

  const handleContactServicePress = () => {
    setSuccessMessage('正在为您转接客服...');
    setIsSuccessModalVisible(true);
  };

  const handleModifyOrderPress = () => {
    setSuccessMessage('订单修改成功');
    setIsSuccessModalVisible(true);
  };

  const handleCancelOrderPress = () => {
    setIsCancelModalVisible(true);
  };

  const handleConfirmCancel = () => {
    setIsCancelModalVisible(false);
    setSuccessMessage('订单已取消');
    setIsSuccessModalVisible(true);
    
    setTimeout(() => {
      setIsSuccessModalVisible(false);
      router.push('/p-order_history');
    }, 1500);
  };

  const handleCancelModalClose = () => {
    setIsCancelModalVisible(false);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalVisible(false);
  };

  const renderLogisticsItem = (item: LogisticsItem, index: number) => (
    <View key={item.id} style={styles.timelineItem}>
      <View style={styles.timelineContent}>
        <View style={[styles.timelineDot, { backgroundColor: item.color }]}>
          <FontAwesome6
            name={item.icon as any}
            size={14}
            color="#FFFFFF"
          />
        </View>
        <View style={styles.timelineInfo}>
          <Text style={styles.timelineTitle}>{item.title}</Text>
          <Text style={styles.timelineDescription}>{item.description}</Text>
          <Text style={styles.timelineTime}>{item.time}</Text>
        </View>
      </View>
      {index < orderData.logistics.length - 1 && <View style={styles.timelineLine} />}
    </View>
  );

  const renderOrderItem = (item: OrderItem) => (
    <View key={item.id} style={styles.orderItem}>
      <Image source={{ uri: item.image }} style={styles.orderItemImage} />
      <View style={styles.orderItemInfo}>
        <Text style={styles.orderItemName}>{item.name}</Text>
        <Text style={styles.orderItemDescription}>{item.description}</Text>
        <View style={styles.orderItemFooter}>
          <Text style={styles.orderItemQuantity}>数量: {item.quantity}</Text>
          <Text style={styles.orderItemPrice}>¥{item.price}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>订单跟踪</Text>
        <TouchableOpacity style={styles.headerButton} onPress={handleSharePress}>
          <FontAwesome6 name="share-nodes" size={20} color="#2D3748" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 订单状态区 */}
        <View style={styles.section}>
          <View style={styles.statusCard}>
            <View style={styles.statusIconContainer}>
              <FontAwesome6
                name={orderData.statusIcon as any}
                size={30}
                color="#E8B4B8"
              />
            </View>
            <Text style={styles.statusText}>{orderData.status}</Text>
            <Text style={styles.statusDescription}>
              {orderData.statusDescription}
            </Text>
            <View style={styles.orderNumberContainer}>
              <FontAwesome6 name="clock" size={12} color="#A0AEC0" />
              <Text style={styles.orderNumber}>
                订单号: {orderData.orderNumber}
              </Text>
            </View>
          </View>
        </View>

        {/* 物流信息时间轴 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>物流信息</Text>
            <View style={styles.timeline}>
              {orderData.logistics.map((item, index) => renderLogisticsItem(item, index))}
            </View>
          </View>
        </View>

        {/* 订单商品列表 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>商品信息</Text>
            <View style={styles.orderItems}>
              {orderData.items.map(renderOrderItem)}
            </View>
            <View style={styles.priceSummary}>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>商品总价</Text>
                <Text style={styles.priceValue}>¥{orderData.subtotal}</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>配送费</Text>
                <Text style={styles.priceValue}>¥{orderData.deliveryFee}</Text>
              </View>
              <View style={styles.priceRow}>
                <Text style={styles.priceLabel}>优惠减免</Text>
                <Text style={styles.discountValue}>-¥{orderData.discount}</Text>
              </View>
              <View style={styles.totalRow}>
                <Text style={styles.totalLabel}>实付金额</Text>
                <Text style={styles.totalValue}>¥{orderData.total}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 配送信息区 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>配送信息</Text>
            <View style={styles.deliveryInfo}>
              <View style={styles.deliveryIconContainer}>
                <FontAwesome6 name="location-dot" size={16} color="#E8B4B8" />
              </View>
              <View style={styles.deliveryDetails}>
                <View style={styles.recipientInfo}>
                  <Text style={styles.recipientName}>{orderData.recipientName}</Text>
                  <Text style={styles.recipientPhone}>{orderData.recipientPhone}</Text>
                </View>
                <Text style={styles.deliveryAddress}>
                  {orderData.deliveryAddress}
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* 底部操作栏 */}
      <View style={styles.bottomActions}>
        <TouchableOpacity
          style={styles.contactButton}
          onPress={handleContactServicePress}
        >
          <FontAwesome6 name="headset" size={16} color="#2D3748" />
          <Text style={styles.contactButtonText}>联系客服</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.modifyButton}
          onPress={handleModifyOrderPress}
        >
          <FontAwesome6 name="pen-to-square" size={16} color="#FFFFFF" />
          <Text style={styles.modifyButtonText}>修改订单</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={handleCancelOrderPress}
        >
          <FontAwesome6 name="xmark" size={16} color="#FFFFFF" />
          <Text style={styles.cancelButtonText}>取消订单</Text>
        </TouchableOpacity>
      </View>

      {/* 确认取消订单弹窗 */}
      <Modal
        visible={isCancelModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancelModalClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>确认取消订单</Text>
            <Text style={styles.modalMessage}>
              取消后将无法恢复，确定要取消这个订单吗？
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.modalCancelButton}
                onPress={handleCancelModalClose}
              >
                <Text style={styles.modalCancelText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalConfirmButton}
                onPress={handleConfirmCancel}
              >
                <Text style={styles.modalConfirmText}>确认取消</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* 成功提示弹窗 */}
      <Modal
        visible={isSuccessModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleSuccessModalClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.successIconContainer}>
              <FontAwesome6 name="check" size={24} color="#A8E6CF" />
            </View>
            <Text style={styles.modalTitle}>操作成功</Text>
            <Text style={styles.modalMessage}>{successMessage}</Text>
            <TouchableOpacity
              style={styles.modalOkButton}
              onPress={handleSuccessModalClose}
            >
              <Text style={styles.modalOkText}>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OrderTrackingScreen;

