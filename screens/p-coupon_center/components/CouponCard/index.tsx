

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface CouponData {
  id: string;
  title: string;
  description: string;
  validUntil?: string;
  usedAt?: string;
  discount: {
    type: 'amount' | 'discount' | 'freeShipping';
    value: string;
    unit: string;
  };
  status: 'available' | 'used' | 'expired';
}

interface CouponCardProps {
  coupon: CouponData;
  onUse: () => void;
}

const CouponCard: React.FC<CouponCardProps> = ({ coupon, onUse }) => {
  const getCardStyle = () => {
    switch (coupon.status) {
      case 'used':
        return styles.couponCardUsed;
      case 'expired':
        return styles.couponCardExpired;
      default:
        return styles.couponCard;
    }
  };

  const getDiscountStyle = () => {
    switch (coupon.status) {
      case 'used':
        return styles.couponDiscountUsed;
      case 'expired':
        return styles.couponDiscountExpired;
      default:
        return styles.couponDiscount;
    }
  };

  const getStatusInfo = () => {
    switch (coupon.status) {
      case 'used':
        return {
          text: '已使用',
          icon: 'check-circle',
          iconColor: '#A8E6CF',
          timeText: `使用时间：${coupon.usedAt}`
        };
      case 'expired':
        return {
          text: '已过期',
          icon: 'times-circle',
          iconColor: '#FF8A80',
          timeText: `有效期至：${coupon.validUntil}`
        };
      default:
        return null;
    }
  };

  const statusInfo = getStatusInfo();

  const renderDiscountContent = () => {
    if (coupon.discount.type === 'discount') {
      return (
        <View style={styles.discountContent}>
          <Text style={styles.discountValue}>{coupon.discount.value}</Text>
          <Text style={styles.discountUnitLarge}>{coupon.discount.unit}</Text>
          <Text style={styles.discountUnitSmall}>{coupon.discount.unit}</Text>
        </View>
      );
    }

    return (
      <View style={styles.discountContent}>
        <Text style={[
          styles.discountValue,
          coupon.discount.type === 'freeShipping' && styles.discountValueFreeShipping
        ]}>
          {coupon.discount.value}
        </Text>
        <Text style={styles.discountUnitSmall}>{coupon.discount.unit}</Text>
      </View>
    );
  };

  return (
    <TouchableOpacity style={[styles.couponCardContainer, getCardStyle()]} activeOpacity={0.98}>
      <View style={styles.couponContent}>
        <View style={[styles.couponDiscount, getDiscountStyle()]}>
          {renderDiscountContent()}
        </View>
        <View style={styles.couponInfo}>
          <Text style={styles.couponTitle}>{coupon.title}</Text>
          <Text style={styles.couponDescription}>{coupon.description}</Text>
          <Text style={styles.couponTime}>
            {coupon.status === 'available' 
              ? `有效期至：${coupon.validUntil}` 
              : statusInfo?.timeText
            }
          </Text>
          
          {coupon.status === 'available' ? (
            <TouchableOpacity style={styles.useButton} onPress={onUse}>
              <Text style={styles.useButtonText}>立即使用</Text>
            </TouchableOpacity>
          ) : (
            <View style={styles.statusContainer}>
              <FontAwesome6 
                name={statusInfo?.icon as any} 
                size={16} 
                color={statusInfo?.iconColor} 
                style={styles.statusIcon}
              />
              <Text style={styles.statusText}>{statusInfo?.text}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CouponCard;

