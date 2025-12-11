

import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

type PaymentMethod = 'wechat' | 'alipay';

interface OrderData {
  orderId: string;
  amount: number;
  items: Array<{
    name: string;
    price: number;
    quantity: number;
  }>;
  shippingFee: number;
  discount: number;
}

const PaymentScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethod>('wechat');
  const [isLoadingVisible, setIsLoadingVisible] = useState(false);
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);
  const [isFailureToastVisible, setIsFailureToastVisible] = useState(false);

  // 模拟订单数据
  const orderData: OrderData = {
    orderId: (params.order_id as string) || 'ORDER123456789',
    amount: 168.00,
    items: [
      { name: '经典红玫瑰束', price: 158.00, quantity: 1 },
    ],
    shippingFee: 10.00,
    discount: 0.00
  };

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handlePaymentMethodSelect = (method: PaymentMethod) => {
    setSelectedPaymentMethod(method);
  };

  const handleConfirmPayment = () => {
    setIsLoadingVisible(true);
    
    // 模拟支付处理过程
    setTimeout(() => {
      setIsLoadingVisible(false);
      
      // 模拟支付结果（90%成功率）
      const isSuccess = Math.random() > 0.1;
      
      if (isSuccess) {
        setIsSuccessToastVisible(true);
      } else {
        setIsFailureToastVisible(true);
      }
    }, 2000);
  };

  const handleViewOrder = () => {
    setIsSuccessToastVisible(false);
    router.push(`/p-order_tracking?order_id=${orderData.orderId}`);
  };

  const handleCancelPayment = () => {
    setIsFailureToastVisible(false);
  };

  const handleRetryPayment = () => {
    setIsFailureToastVisible(false);
    handleConfirmPayment();
  };

  const renderPaymentMethod = (
    method: PaymentMethod,
    title: string,
    subtitle: string,
    iconName: string,
    iconColor: string
  ) => {
    const isSelected = selectedPaymentMethod === method;
    
    return (
      <TouchableOpacity
        key={method}
        style={[
          styles.paymentMethodCard,
          isSelected ? styles.paymentMethodSelected : styles.paymentMethodUnselected
        ]}
        onPress={() => handlePaymentMethodSelect(method)}
        activeOpacity={0.7}
      >
        <View style={styles.paymentMethodContent}>
          <View style={styles.paymentMethodLeft}>
            <View style={[styles.paymentMethodIcon, { backgroundColor: iconColor }]}>
              <FontAwesome6 name={iconName} size={20} color="#FFFFFF" />
            </View>
            <View style={styles.paymentMethodInfo}>
              <Text style={styles.paymentMethodTitle}>{title}</Text>
              <Text style={styles.paymentMethodSubtitle}>{subtitle}</Text>
            </View>
          </View>
          <View style={[
            styles.radioButton,
            isSelected ? styles.radioButtonSelected : styles.radioButtonUnselected
          ]}>
            {isSelected && <View style={styles.radioButtonInner} />}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

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
        <Text style={styles.headerTitle}>支付订单</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 订单金额显示区 */}
        <View style={styles.amountSection}>
          <View style={styles.amountCard}>
            <Text style={styles.amountLabel}>支付金额</Text>
            <Text style={styles.amountValue}>¥{orderData.amount.toFixed(2)}</Text>
            <View style={styles.securityBadge}>
              <FontAwesome6 name="shield-halved" size={14} color="#A8E6CF" />
              <Text style={styles.securityText}>安全支付保障</Text>
            </View>
          </View>
        </View>

        {/* 支付方式选择区 */}
        <View style={styles.paymentMethodsSection}>
          <Text style={styles.sectionTitle}>选择支付方式</Text>
          <View style={styles.paymentMethodsList}>
            {renderPaymentMethod(
              'wechat',
              '微信支付',
              '推荐使用微信支付',
              'weixin',
              '#10B981'
            )}
            {renderPaymentMethod(
              'alipay',
              '支付宝支付',
              '支付宝安全支付',
              'alipay',
              '#3B82F6'
            )}
          </View>
        </View>

        {/* 订单信息摘要 */}
        <View style={styles.orderSummarySection}>
          <View style={styles.orderSummaryCard}>
            <Text style={styles.orderSummaryTitle}>订单信息</Text>
            <View style={styles.orderSummaryContent}>
              <View style={styles.orderSummaryRow}>
                <Text style={styles.orderSummaryLabel}>商品总价</Text>
                <Text style={styles.orderSummaryValue}>¥{orderData.items[0].price.toFixed(2)}</Text>
              </View>
              <View style={styles.orderSummaryRow}>
                <Text style={styles.orderSummaryLabel}>配送费</Text>
                <Text style={styles.orderSummaryValue}>¥{orderData.shippingFee.toFixed(2)}</Text>
              </View>
              <View style={styles.orderSummaryRow}>
                <Text style={styles.orderSummaryLabel}>优惠金额</Text>
                <Text style={styles.orderSummaryDiscount}>-¥{orderData.discount.toFixed(2)}</Text>
              </View>
              <View style={styles.orderSummaryDivider} />
              <View style={styles.orderSummaryRow}>
                <Text style={styles.orderSummaryTotalLabel}>实付金额</Text>
                <Text style={styles.orderSummaryTotalValue}>¥{orderData.amount.toFixed(2)}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* 底部操作栏 */}
      <View style={styles.bottomAction}>
        <TouchableOpacity
          style={styles.confirmButton}
          onPress={handleConfirmPayment}
          activeOpacity={0.8}
        >
          <Text style={styles.confirmButtonText}>
            确认支付 ¥{orderData.amount.toFixed(2)}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 加载遮罩 */}
      <Modal
        visible={isLoadingVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.loadingModal}>
            <View style={styles.loadingSpinner} />
            <Text style={styles.loadingText}>正在处理支付...</Text>
          </View>
        </View>
      </Modal>

      {/* 支付成功提示 */}
      <Modal
        visible={isSuccessToastVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.toastModal}>
            <View style={styles.successIcon}>
              <FontAwesome6 name="check" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.toastTitle}>支付成功</Text>
            <Text style={styles.toastMessage}>您的订单已提交，我们将尽快为您处理</Text>
            <TouchableOpacity
              style={styles.toastButton}
              onPress={handleViewOrder}
              activeOpacity={0.8}
            >
              <Text style={styles.toastButtonText}>查看订单</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* 支付失败提示 */}
      <Modal
        visible={isFailureToastVisible}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.modalOverlay}>
          <View style={styles.toastModal}>
            <View style={styles.failureIcon}>
              <FontAwesome6 name="xmark" size={24} color="#FFFFFF" />
            </View>
            <Text style={styles.toastTitle}>支付失败</Text>
            <Text style={styles.toastMessage}>支付过程中出现问题，请重试</Text>
            <View style={styles.toastButtonRow}>
              <TouchableOpacity
                style={styles.toastButtonSecondary}
                onPress={handleCancelPayment}
                activeOpacity={0.8}
              >
                <Text style={styles.toastButtonSecondaryText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.toastButton}
                onPress={handleRetryPayment}
                activeOpacity={0.8}
              >
                <Text style={styles.toastButtonText}>重试</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default PaymentScreen;

