

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';
import CouponCard from './components/CouponCard';

type TabType = 'available' | 'used' | 'expired';

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

const CouponCenterScreen = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<TabType>('available');
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);

  const availableCoupons: CouponData[] = [
    {
      id: '1',
      title: '新用户专享券',
      description: '满199元可用',
      validUntil: '2024-03-31',
      discount: { type: 'amount', value: '¥50', unit: '优惠券' },
      status: 'available'
    },
    {
      id: '2',
      title: '情人节限定券',
      description: '全场通用',
      validUntil: '2024-02-15',
      discount: { type: 'discount', value: '9', unit: '折' },
      status: 'available'
    },
    {
      id: '3',
      title: '满减券',
      description: '满99元可用',
      validUntil: '2024-04-10',
      discount: { type: 'amount', value: '¥20', unit: '优惠券' },
      status: 'available'
    },
    {
      id: '4',
      title: '配送优惠券',
      description: '满68元可用',
      validUntil: '2024-03-20',
      discount: { type: 'freeShipping', value: '免配送费', unit: '配送券' },
      status: 'available'
    }
  ];

  const usedCoupons: CouponData[] = [
    {
      id: '5',
      title: '母亲节专享券',
      description: '满159元可用',
      usedAt: '2024-01-15 14:30',
      discount: { type: 'amount', value: '¥30', unit: '优惠券' },
      status: 'used'
    },
    {
      id: '6',
      title: '元旦特惠券',
      description: '全场通用',
      usedAt: '2024-01-01 10:15',
      discount: { type: 'discount', value: '8.5', unit: '折' },
      status: 'used'
    }
  ];

  const expiredCoupons: CouponData[] = [
    {
      id: '7',
      title: '圣诞限定券',
      description: '满188元可用',
      validUntil: '2023-12-25',
      discount: { type: 'amount', value: '¥40', unit: '优惠券' },
      status: 'expired'
    },
    {
      id: '8',
      title: '配送优惠券',
      description: '满58元可用',
      validUntil: '2023-12-31',
      discount: { type: 'freeShipping', value: '免配送费', unit: '配送券' },
      status: 'expired'
    }
  ];

  const getCurrentCoupons = (): CouponData[] => {
    switch (activeTab) {
      case 'available':
        return availableCoupons;
      case 'used':
        return usedCoupons;
      case 'expired':
        return expiredCoupons;
      default:
        return [];
    }
  };

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleTabPress = (tab: TabType) => {
    setActiveTab(tab);
  };

  const handleUseCoupon = (couponId: string) => {
    setIsSuccessModalVisible(true);
    setTimeout(() => {
      setIsSuccessModalVisible(false);
      router.push(`/p-home?coupon_id=${couponId}`);
    }, 2000);
  };

  const handleModalConfirm = () => {
    setIsSuccessModalVisible(false);
  };

  const renderEmptyState = () => (
    <View style={styles.emptyStateContainer}>
      <View style={styles.emptyStateIcon}>
        <FontAwesome6 name="ticket" size={32} color="#A0AEC0" />
      </View>
      <Text style={styles.emptyStateTitle}>暂无优惠券</Text>
      <Text style={styles.emptyStateDescription}>快去发现更多优惠活动吧</Text>
    </View>
  );

  const currentCoupons = getCurrentCoupons();

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>我的优惠券</Text>
      </View>

      {/* 分类Tab */}
      <View style={styles.tabSection}>
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'available' ? styles.tabButtonActive : styles.tabButtonInactive
            ]}
            onPress={() => handleTabPress('available')}
          >
            <Text style={[
              styles.tabButtonText,
              activeTab === 'available' ? styles.tabButtonTextActive : styles.tabButtonTextInactive
            ]}>
              可用
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'used' ? styles.tabButtonActive : styles.tabButtonInactive
            ]}
            onPress={() => handleTabPress('used')}
          >
            <Text style={[
              styles.tabButtonText,
              activeTab === 'used' ? styles.tabButtonTextActive : styles.tabButtonTextInactive
            ]}>
              已使用
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.tabButton,
              activeTab === 'expired' ? styles.tabButtonActive : styles.tabButtonInactive
            ]}
            onPress={() => handleTabPress('expired')}
          >
            <Text style={[
              styles.tabButtonText,
              activeTab === 'expired' ? styles.tabButtonTextActive : styles.tabButtonTextInactive
            ]}>
              已过期
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* 主要内容区域 */}
      <ScrollView style={styles.mainContent} showsVerticalScrollIndicator={false}>
        {currentCoupons.length > 0 ? (
          <View style={styles.couponList}>
            {currentCoupons.map((coupon) => (
              <CouponCard
                key={coupon.id}
                coupon={coupon}
                onUse={() => handleUseCoupon(coupon.id)}
              />
            ))}
          </View>
        ) : (
          renderEmptyState()
        )}
      </ScrollView>

      {/* 成功提示弹窗 */}
      <Modal
        visible={isSuccessModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleModalConfirm}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <View style={styles.modalIcon}>
              <FontAwesome6 name="check" size={24} color="#A8E6CF" />
            </View>
            <Text style={styles.modalTitle}>使用成功</Text>
            <Text style={styles.modalDescription}>优惠券已激活，快去选购心仪的花束吧</Text>
            <TouchableOpacity style={styles.modalConfirmButton} onPress={handleModalConfirm}>
              <Text style={styles.modalConfirmButtonText}>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CouponCenterScreen;

