

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

interface RecommendedFlower {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  promotionId: string;
}

interface Coupon {
  id: string;
  title: string;
  description: string;
  value: string;
  condition: string;
  expiry: string;
  isClaimed: boolean;
}

const PromotionScreen = () => {
  const router = useRouter();
  
  const [isSuccessModalVisible, setIsSuccessModalVisible] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [claimedCoupons, setClaimedCoupons] = useState<Set<string>>(new Set());

  const recommendedFlowers: RecommendedFlower[] = [
    {
      id: '1',
      name: '永恒爱恋红玫瑰束',
      description: '19朵精选红玫瑰，象征永恒的爱情',
      price: 268,
      originalPrice: 328,
      discount: '限时8折',
      rating: 4.9,
      reviewCount: 128,
      imageUrl: 'https://s.coze.cn/image/hpj0roimRbg/',
      promotionId: 'promo_001',
    },
    {
      id: '2',
      name: '浪漫粉玫瑰束',
      description: '11朵粉玫瑰，温柔浪漫的爱意表达',
      price: 198,
      originalPrice: 258,
      discount: '限时7.7折',
      rating: 4.8,
      reviewCount: 96,
      imageUrl: 'https://s.coze.cn/image/lPMc-qZDxyA/',
      promotionId: 'promo_002',
    },
    {
      id: '3',
      name: '香槟玫瑰混搭束',
      description: '香槟玫瑰+满天星，优雅而温馨',
      price: 228,
      originalPrice: 288,
      discount: '限时7.9折',
      rating: 4.7,
      reviewCount: 74,
      imageUrl: 'https://s.coze.cn/image/x7BCoJRAGZQ/',
      promotionId: 'promo_003',
    },
  ];

  const [coupons, setCoupons] = useState<Coupon[]>([
    {
      id: 'coupon_001',
      title: '情人节专享券',
      description: '满200元即可使用',
      value: '¥50',
      condition: '满200可用',
      expiry: '有效期至2024-02-14',
      isClaimed: false,
    },
    {
      id: 'coupon_002',
      title: '新用户专享券',
      description: '满100元即可使用',
      value: '¥20',
      condition: '满100可用',
      expiry: '有效期至2024-02-29',
      isClaimed: false,
    },
    {
      id: 'coupon_003',
      title: '全场9折券',
      description: '全场商品均可使用',
      value: '9折',
      condition: '全场通用',
      expiry: '有效期至2024-02-20',
      isClaimed: false,
    },
  ]);

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleFlowerPress = (promotionId: string) => {
    router.push(`/p-custom_flower?promotion_id=${promotionId}`);
  };

  const handleCouponClaim = (couponId: string, couponValue: string) => {
    setCoupons(prevCoupons =>
      prevCoupons.map(coupon =>
        coupon.id === couponId ? { ...coupon, isClaimed: true } : coupon
      )
    );
    
    const message = couponValue === '9折' 
      ? '9折优惠券已领取成功！' 
      : `${couponValue}优惠券已领取成功！`;
    
    setSuccessMessage(message);
    setIsSuccessModalVisible(true);
  };

  const handleSuccessModalClose = () => {
    setIsSuccessModalVisible(false);
  };

  const renderRecommendedFlower = (flower: RecommendedFlower) => (
    <TouchableOpacity
      key={flower.id}
      style={styles.flowerCard}
      onPress={() => handleFlowerPress(flower.promotionId)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: flower.imageUrl }} style={styles.flowerImage} />
      <View style={styles.flowerInfo}>
        <Text style={styles.flowerName}>{flower.name}</Text>
        <Text style={styles.flowerDescription}>{flower.description}</Text>
        <View style={styles.flowerPriceRow}>
          <Text style={styles.flowerPrice}>¥{flower.price}</Text>
          <Text style={styles.flowerOriginalPrice}>¥{flower.originalPrice}</Text>
          <View style={styles.discountBadge}>
            <Text style={styles.discountText}>{flower.discount}</Text>
          </View>
        </View>
        <View style={styles.flowerFooter}>
          <View style={styles.ratingContainer}>
            <FontAwesome6 name="star" style={styles.starIcon} solid />
            <Text style={styles.ratingText}>
              {flower.rating} ({flower.reviewCount}评价)
            </Text>
          </View>
          <TouchableOpacity style={styles.customizeButton}>
            <Text style={styles.customizeButtonText}>立即定制</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderCoupon = (coupon: Coupon) => (
    <View key={coupon.id} style={styles.couponCard}>
      <View style={styles.couponContent}>
        <LinearGradient
          colors={['#E8B4B8', '#F4D03F']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.couponDiscount}
        >
          <Text style={styles.couponValue}>{coupon.value}</Text>
          <Text style={styles.couponCondition}>{coupon.condition}</Text>
        </LinearGradient>
        <View style={styles.couponInfo}>
          <Text style={styles.couponTitle}>{coupon.title}</Text>
          <Text style={styles.couponDescription}>{coupon.description}</Text>
          <Text style={styles.couponExpiry}>{coupon.expiry}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={[
          styles.couponButton,
          coupon.isClaimed && styles.couponButtonClaimed,
        ]}
        onPress={() => !coupon.isClaimed && handleCouponClaim(coupon.id, coupon.value)}
        disabled={coupon.isClaimed}
      >
        <Text
          style={[
            styles.couponButtonText,
            coupon.isClaimed && styles.couponButtonTextClaimed,
          ]}
        >
          {coupon.isClaimed ? '已领取' : '立即领取'}
        </Text>
      </TouchableOpacity>
    </View>
  );

  const activityRules = [
    '活动时间：2024年2月1日00:00 - 2024年2月14日23:59',
    '优惠券每人限领一张，不可叠加使用',
    '推荐花束享受限时折扣，数量有限，售完即止',
    '支持当日达服务，4小时内新鲜送达',
    '如有疑问请联系客服：400-888-8888',
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>节日活动</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Event Banner */}
        <View style={styles.bannerSection}>
          <LinearGradient
            colors={['#E8B4B8', '#F4D03F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.bannerGradient}
          >
            <Image
              source={{ uri: 'https://s.coze.cn/image/I_Imge4QBL4/' }}
              style={styles.bannerImage}
            />
            <View style={styles.bannerOverlay} />
            <View style={styles.bannerContent}>
              <Text style={styles.bannerTitle}>情人节限定</Text>
              <Text style={styles.bannerSubtitle}>定制专属浪漫花束</Text>
              <View style={styles.bannerTag}>
                <Text style={styles.bannerTagText}>活动时间：2月1日-2月14日</Text>
              </View>
            </View>
            <View style={styles.bannerBadge}>
              <Text style={styles.bannerBadgeText}>限时抢购</Text>
            </View>
          </LinearGradient>
        </View>

        {/* Recommended Flowers */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>推荐花束</Text>
            <Text style={styles.sectionSubtitle}>为您精心挑选</Text>
          </View>
          <View style={styles.flowersContainer}>
            {recommendedFlowers.map(renderRecommendedFlower)}
          </View>
        </View>

        {/* Coupons */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>优惠券</Text>
            <Text style={styles.sectionSubtitle}>限时领取</Text>
          </View>
          <View style={styles.couponsContainer}>
            {coupons.map(renderCoupon)}
          </View>
        </View>

        {/* Activity Rules */}
        <View style={styles.section}>
          <View style={styles.rulesCard}>
            <Text style={styles.rulesTitle}>活动规则</Text>
            <View style={styles.rulesList}>
              {activityRules.map((rule, index) => (
                <View key={index} style={styles.ruleItem}>
                  <Text style={styles.ruleBullet}>•</Text>
                  <Text style={styles.ruleText}>{rule}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Success Modal */}
      <Modal
        visible={isSuccessModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleSuccessModalClose}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={handleSuccessModalClose}
        >
          <View style={styles.modalContent}>
            <View style={styles.modalIcon}>
              <FontAwesome6 name="check" style={styles.checkIcon} />
            </View>
            <Text style={styles.modalTitle}>领取成功</Text>
            <Text style={styles.modalMessage}>{successMessage}</Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleSuccessModalClose}
            >
              <Text style={styles.modalButtonText}>确定</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default PromotionScreen;

