

import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { OrderCardProps } from '../../types';
import styles from './styles';

const OrderCard: React.FC<OrderCardProps> = ({
  order,
  onPress,
  onCancelOrder,
  onPayOrder,
  onContactService,
  onTrackOrder,
  onBuyAgain,
  onEvaluateOrder,
}) => {
  const getStatusStyle = useCallback((status: string) => {
    switch (status) {
      case 'pending':
        return styles.statusPending;
      case 'processing':
        return styles.statusProcessing;
      case 'shipping':
        return styles.statusShipping;
      case 'completed':
        return styles.statusCompleted;
      case 'cancelled':
        return styles.statusCancelled;
      default:
        return styles.statusCompleted;
    }
  }, []);

  const renderActionButtons = useCallback(() => {
    switch (order.status) {
      case 'pending':
        return (
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={onCancelOrder}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>取消订单</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={onPayOrder}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryButtonText}>立即支付</Text>
            </TouchableOpacity>
          </View>
        );
      case 'processing':
        return (
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={onContactService}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>联系客服</Text>
            </TouchableOpacity>
          </View>
        );
      case 'shipping':
        return (
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={onTrackOrder}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>查看物流</Text>
            </TouchableOpacity>
          </View>
        );
      case 'completed':
        return (
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={onBuyAgain}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>再次购买</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.primaryButton}
              onPress={onEvaluateOrder}
              activeOpacity={0.8}
            >
              <Text style={styles.primaryButtonText}>去评价</Text>
            </TouchableOpacity>
          </View>
        );
      case 'cancelled':
        return (
          <View style={styles.actionButtonsContainer}>
            <TouchableOpacity
              style={styles.secondaryButton}
              onPress={onBuyAgain}
              activeOpacity={0.8}
            >
              <Text style={styles.secondaryButtonText}>再次购买</Text>
            </TouchableOpacity>
          </View>
        );
      default:
        return null;
    }
  }, [
    order.status,
    onCancelOrder,
    onPayOrder,
    onContactService,
    onTrackOrder,
    onBuyAgain,
    onEvaluateOrder,
  ]);

  const handleCardPress = useCallback(() => {
    onPress();
  }, [onPress]);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleCardPress}
      activeOpacity={0.98}
    >
      {/* 订单头部 */}
      <View style={styles.header}>
        <View style={styles.orderInfo}>
          <View style={styles.orderIdRow}>
            <Text style={styles.orderIdLabel}>订单号：{order.id}</Text>
          </View>
          <Text style={styles.orderTime}>下单时间：{order.time}</Text>
        </View>
        <View style={styles.statusContainer}>
          <Text style={[styles.statusText, getStatusStyle(order.status)]}>
            {order.statusText}
          </Text>
        </View>
      </View>

      {/* 订单项 */}
      <View style={styles.itemsContainer}>
        {order.items.map((item, index) => (
          <View key={index} style={styles.itemRow}>
            <Image
              source={{ uri: item.image }}
              style={styles.itemImage}
              resizeMode="cover"
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName} numberOfLines={1}>
                {item.name}
              </Text>
              <Text style={styles.itemQuantity}>数量：{item.quantity}</Text>
            </View>
            <Text style={styles.itemPrice}>{item.price}</Text>
          </View>
        ))}
      </View>

      {/* 订单底部 */}
      <View style={styles.footer}>
        <View style={styles.amountContainer}>
          <Text style={styles.itemCount}>共{order.items.length}件商品</Text>
          <Text style={styles.totalAmount}>{order.totalAmount}</Text>
        </View>
        {renderActionButtons()}
      </View>
    </TouchableOpacity>
  );
};

export default OrderCard;

