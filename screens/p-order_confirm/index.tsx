

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface OrderItem {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  quantity: number;
  specifications: {
    size: string;
    packaging: string;
    card: string;
    gift?: string;
  };
}

interface DeliveryAddress {
  name: string;
  phone: string;
  address: string;
}

type DeliveryTimeType = 'sameday' | 'tomorrow' | 'specified';
type PaymentMethodType = 'wechat' | 'alipay';

const OrderConfirmScreen = () => {
  const router = useRouter();
  
  // 状态管理
  const [selectedDeliveryTime, setSelectedDeliveryTime] = useState<DeliveryTimeType>('sameday');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethodType>('wechat');
  const [isSubmittingOrder, setIsSubmittingOrder] = useState(false);

  // 模拟订单数据
  const orderItems: OrderItem[] = [
    {
      id: '1',
      name: '经典红玫瑰束',
      description: '11朵红玫瑰，象征热烈的爱情',
      image: 'https://s.coze.cn/image/pnJu1157DI0/',
      price: 168,
      quantity: 1,
      specifications: {
        size: '标准',
        packaging: '红色简约包装',
        card: '生日快乐，永远爱你',
        gift: '巧克力礼盒',
      },
    },
    {
      id: '2',
      name: '清新百合束',
      description: '6朵白百合，纯洁高雅',
      image: 'https://s.coze.cn/image/qye_itr298k/',
      price: 128,
      quantity: 1,
      specifications: {
        size: '迷你',
        packaging: '白色简约包装',
        card: '感谢有你',
      },
    },
  ];

  const deliveryAddress: DeliveryAddress = {
    name: '张小美',
    phone: '138****8888',
    address: '北京市朝阳区建国路88号SOHO现代城A座1501室',
  };

  // 计算费用
  const calculateDeliveryFee = (timeType: DeliveryTimeType): number => {
    switch (timeType) {
      case 'sameday':
        return 15;
      case 'tomorrow':
        return 10;
      case 'specified':
        return 20;
      default:
        return 15;
    }
  };

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = calculateDeliveryFee(selectedDeliveryTime);
  const couponDiscount = 20;
  const finalAmount = subtotal + deliveryFee - couponDiscount;

  // 事件处理函数
  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleSelectAddressPress = () => {
    router.push('/p-address_manage');
  };

  const handleDeliveryTimePress = (timeType: DeliveryTimeType) => {
    setSelectedDeliveryTime(timeType);
  };

  const handlePaymentMethodPress = (method: PaymentMethodType) => {
    setSelectedPaymentMethod(method);
  };

  const handleSelectCouponPress = () => {
    router.push('/p-coupon_center');
  };

  const validateOrder = (): boolean => {
    // 检查是否选择了地址（这里假设地址已选择）
    if (!deliveryAddress.address) {
      Alert.alert('提示', '请选择配送地址');
      return false;
    }
    
    // 检查是否选择了配送时间
    if (!selectedDeliveryTime) {
      Alert.alert('提示', '请选择配送时间');
      return false;
    }
    
    // 检查是否选择了支付方式
    if (!selectedPaymentMethod) {
      Alert.alert('提示', '请选择支付方式');
      return false;
    }
    
    return true;
  };

  const handleSubmitOrderPress = async () => {
    if (!validateOrder()) {
      return;
    }

    setIsSubmittingOrder(true);
    
    try {
      // 模拟提交订单
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // 生成订单ID
      const orderId = 'ORDER_' + Date.now();
      
      // 跳转到支付页
      router.push(`/p-payment?order_id=${orderId}`);
    } catch (error) {
      Alert.alert('错误', '提交订单失败，请重试');
    } finally {
      setIsSubmittingOrder(false);
    }
  };

  const renderOrderItem = (item: OrderItem) => (
    <View key={item.id} style={styles.orderItemContainer}>
      <Image source={{ uri: item.image }} style={styles.orderItemImage} />
      <View style={styles.orderItemDetails}>
        <Text style={styles.orderItemName}>{item.name}</Text>
        <Text style={styles.orderItemDescription}>{item.description}</Text>
        <View style={styles.orderItemSpecs}>
          <Text style={styles.orderItemSpec}>尺寸：{item.specifications.size}</Text>
          <Text style={styles.orderItemSpec}>包装：{item.specifications.packaging}</Text>
          <Text style={styles.orderItemSpec}>贺卡：{item.specifications.card}</Text>
          {item.specifications.gift && (
            <Text style={styles.orderItemSpec}>附加礼品：{item.specifications.gift}</Text>
          )}
        </View>
        <View style={styles.orderItemPriceRow}>
          <Text style={styles.orderItemPrice}>¥{item.price}</Text>
          <Text style={styles.orderItemQuantity}>x{item.quantity}</Text>
        </View>
      </View>
    </View>
  );

  const renderDeliveryTimeOption = (
    timeType: DeliveryTimeType,
    label: string
  ) => (
    <TouchableOpacity
      key={timeType}
      style={[
        styles.deliveryTimeOption,
        selectedDeliveryTime === timeType && styles.deliveryTimeOptionSelected,
      ]}
      onPress={() => handleDeliveryTimePress(timeType)}
    >
      <Text
        style={[
          styles.deliveryTimeOptionText,
          selectedDeliveryTime === timeType && styles.deliveryTimeOptionTextSelected,
        ]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  const renderPaymentOption = (
    method: PaymentMethodType,
    label: string,
    icon: string,
    backgroundColor: string
  ) => (
    <TouchableOpacity
      key={method}
      style={[
        styles.paymentOption,
        selectedPaymentMethod === method && styles.paymentOptionSelected,
      ]}
      onPress={() => handlePaymentMethodPress(method)}
    >
      <View style={styles.paymentOptionLeft}>
        <View style={[styles.paymentOptionIcon, { backgroundColor }]}>
          <FontAwesome6 name={icon} size={20} color="#FFFFFF" />
        </View>
        <Text style={styles.paymentOptionText}>{label}</Text>
      </View>
      <FontAwesome6
        name={selectedPaymentMethod === method ? 'check-circle' : 'circle'}
        size={20}
        color={selectedPaymentMethod === method ? '#E8B4B8' : '#A0AEC0'}
        solid={selectedPaymentMethod === method}
      />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>确认订单</Text>
      </View>

      {/* 主要内容区域 */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 订单商品列表 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>商品信息</Text>
            <View style={styles.orderItemsList}>
              {orderItems.map((item, index) => (
                <View key={item.id}>
                  {renderOrderItem(item)}
                  {index < orderItems.length - 1 && <View style={styles.orderItemDivider} />}
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* 配送信息区 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>配送信息</Text>
            
            {/* 配送地址 */}
            <TouchableOpacity style={styles.deliveryAddressButton} onPress={handleSelectAddressPress}>
              <View style={styles.deliveryAddressLeft}>
                <View style={styles.deliveryAddressIcon}>
                  <FontAwesome6 name="location-dot" size={16} color="#E8B4B8" />
                </View>
                <View style={styles.deliveryAddressInfo}>
                  <View style={styles.deliveryAddressNameRow}>
                    <Text style={styles.deliveryAddressName}>{deliveryAddress.name}</Text>
                    <Text style={styles.deliveryAddressPhone}>{deliveryAddress.phone}</Text>
                  </View>
                  <Text style={styles.deliveryAddressText}>{deliveryAddress.address}</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={16} color="#A0AEC0" />
            </TouchableOpacity>
            
            {/* 配送时间 */}
            <View style={styles.deliveryTimeSection}>
              <Text style={styles.deliveryTimeTitle}>配送时间</Text>
              <View style={styles.deliveryTimeOptions}>
                {renderDeliveryTimeOption('sameday', '当日达 (4小时内)')}
                {renderDeliveryTimeOption('tomorrow', '明日达')}
                {renderDeliveryTimeOption('specified', '指定时间')}
              </View>
            </View>
          </View>
        </View>

        {/* 支付方式选择区 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>支付方式</Text>
            <View style={styles.paymentOptions}>
              {renderPaymentOption('wechat', '微信支付', 'weixin', '#07C160')}
              {renderPaymentOption('alipay', '支付宝支付', 'alipay', '#1677FF')}
            </View>
          </View>
        </View>

        {/* 费用明细区 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>费用明细</Text>
            <View style={styles.costDetails}>
              <View style={styles.costDetailRow}>
                <Text style={styles.costDetailLabel}>商品总价</Text>
                <Text style={styles.costDetailValue}>¥{subtotal}</Text>
              </View>
              <View style={styles.costDetailRow}>
                <Text style={styles.costDetailLabel}>配送费</Text>
                <Text style={styles.costDetailValue}>¥{deliveryFee}</Text>
              </View>
              <View style={styles.costDetailRow}>
                <Text style={styles.costDetailLabel}>优惠券</Text>
                <Text style={styles.costDetailDiscount}>-¥{couponDiscount}</Text>
              </View>
              <View style={styles.costDetailDivider} />
              <View style={styles.costDetailRow}>
                <Text style={styles.costDetailTotalLabel}>实付金额</Text>
                <Text style={styles.costDetailTotalValue}>¥{finalAmount}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 优惠券选择区 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.couponButton} onPress={handleSelectCouponPress}>
              <View style={styles.couponLeft}>
                <View style={styles.couponIcon}>
                  <FontAwesome6 name="ticket" size={16} color="#F4D03F" />
                </View>
                <View style={styles.couponInfo}>
                  <Text style={styles.couponTitle}>优惠券</Text>
                  <Text style={styles.couponDescription}>满200减20</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={16} color="#A0AEC0" />
            </TouchableOpacity>
          </View>
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* 底部操作栏 */}
      <View style={styles.bottomAction}>
        <View style={styles.bottomAmountRow}>
          <Text style={styles.bottomAmountLabel}>实付金额：</Text>
          <Text style={styles.bottomAmountValue}>¥{finalAmount}</Text>
        </View>
        <TouchableOpacity
          style={[styles.submitButton, isSubmittingOrder && styles.submitButtonDisabled]}
          onPress={handleSubmitOrderPress}
          disabled={isSubmittingOrder}
        >
          <Text style={styles.submitButtonText}>
            {isSubmittingOrder ? '提交中...' : '提交订单'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default OrderConfirmScreen;

