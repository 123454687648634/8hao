

import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, FlatList, Dimensions, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const { width: screenWidth } = Dimensions.get('window');

interface BannerItem {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  gradientColors: [string, string, ...string[]];
}

interface HotFlowerItem {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
  rating: number;
  materialId: string;
}

interface SaleItem {
  id: string;
  image: string;
  title: string;
  price: number;
  originalPrice: number;
  materialId: string;
}

interface ReviewItem {
  id: string;
  userName: string;
  userAvatar: string;
  rating: number;
  content: string;
  timeAgo: string;
}

const HomeScreen: React.FC = () => {
  const router = useRouter();
  const [searchText, setSearchText] = useState('');
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [countdownTime, setCountdownTime] = useState('02:15:30');
  const [isLoading, setIsLoading] = useState(false);
  
  const bannerScrollViewRef = useRef<ScrollView>(null);
  const countdownIntervalRef = useRef<number | null>(null);
  const bannerIntervalRef = useRef<number | null>(null);

  const bannerData: BannerItem[] = [
    {
      id: '1',
      image: 'https://s.coze.cn/image/GUYVTjmdE50/',
      title: '情人节限定',
      subtitle: '定制专属浪漫花束',
      gradientColors: ['#E8B4B8', '#F4D03F'],
    },
    {
      id: '2',
      image: 'https://s.coze.cn/image/atukqSFkVIo/',
      title: '母亲节特惠',
      subtitle: '感恩母爱，鲜花传情',
      gradientColors: ['#A8E6CF', '#E8B4B8'],
    },
  ];

  const hotFlowerData: HotFlowerItem[] = [
    {
      id: '1',
      image: 'https://s.coze.cn/image/7hiaK1t_eKQ/',
      title: '经典红玫瑰束',
      description: '11朵红玫瑰，象征热烈的爱情',
      price: 168,
      rating: 4.9,
      materialId: '1',
    },
    {
      id: '2',
      image: 'https://s.coze.cn/image/7ET2kbY9YK4/',
      title: '清新百合束',
      description: '6朵白百合，纯洁高雅',
      price: 128,
      rating: 4.8,
      materialId: '2',
    },
  ];

  const saleData: SaleItem[] = [
    {
      id: '1',
      image: 'https://s.coze.cn/image/YMXptjLLox8/',
      title: '特价康乃馨',
      price: 88,
      originalPrice: 128,
      materialId: '3',
    },
    {
      id: '2',
      image: 'https://s.coze.cn/image/VoSCgFXlPyU/',
      title: '阳光向日葵',
      price: 99,
      originalPrice: 158,
      materialId: '4',
    },
    {
      id: '3',
      image: 'https://s.coze.cn/image/3PfVQqxL6qc/',
      title: '优雅郁金香',
      price: 118,
      originalPrice: 168,
      materialId: '5',
    },
  ];

  const reviewData: ReviewItem[] = [
    {
      id: '1',
      userName: '小雨',
      userAvatar: 'https://s.coze.cn/image/yzhqYk4rN74/',
      rating: 5.0,
      content: '花束很新鲜，包装精美，配送也很及时，女朋友非常喜欢！',
      timeAgo: '2天前',
    },
    {
      id: '2',
      userName: '张先生',
      userAvatar: 'https://s.coze.cn/image/-N6hj1Ha09I/',
      rating: 4.8,
      content: '定制的母亲节花束很满意，妈妈收到很开心，客服态度也很好。',
      timeAgo: '1周前',
    },
  ];

  useEffect(() => {
    startCountdown();
    startBannerAutoScroll();

    return () => {
      if (countdownIntervalRef.current) {
        clearInterval(countdownIntervalRef.current);
      }
      if (bannerIntervalRef.current) {
        clearInterval(bannerIntervalRef.current);
      }
    };
  }, []);

  const startCountdown = () => {
    countdownIntervalRef.current = setInterval(() => {
      setCountdownTime(prevTime => {
        const [hours, minutes, seconds] = prevTime.split(':').map(Number);
        let totalSeconds = hours * 3600 + minutes * 60 + seconds - 1;
        
        if (totalSeconds < 0) totalSeconds = 0;
        
        const newHours = Math.floor(totalSeconds / 3600);
        const newMinutes = Math.floor((totalSeconds % 3600) / 60);
        const newSeconds = totalSeconds % 60;
        
        return `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}:${newSeconds.toString().padStart(2, '0')}`;
      });
    }, 1000);
  };

  const startBannerAutoScroll = () => {
    bannerIntervalRef.current = setInterval(() => {
      const nextIndex = (currentBannerIndex + 1) % bannerData.length;
      setCurrentBannerIndex(nextIndex);
      bannerScrollViewRef.current?.scrollTo({
        x: nextIndex * screenWidth,
        animated: true,
      });
    }, 5000);
  };

  const handleBannerScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(contentOffsetX / screenWidth);
    setCurrentBannerIndex(index);
  };

  const handleSearchPress = () => {
    router.push('/p-search_result');
  };

  const handleNotificationPress = () => {
    router.push('/p-user_center');
  };

  const handleCartPress = () => {
    router.push('/p-cart');
  };

  const handleCustomFlowerPress = () => {
    router.push('/p-custom_flower');
  };

  const handleFlowerKnowledgePress = () => {
    router.push('/p-knowledge');
  };

  const handleFestivalPromotionPress = () => {
    router.push('/p-promotion');
  };

  const handleSameDayDeliveryPress = () => {
    router.push('/p-home');
  };

  const handleHotFlowerPress = (materialId: string) => {
    router.push(`/p-flower_detail?material_id=${materialId}`);
  };

  const handleViewMoreHotPress = () => {
    router.push('/p-search_result?category=hot');
  };

  const handleSaleItemPress = (materialId: string) => {
    router.push(`/p-flower_detail?material_id=${materialId}`);
  };

  const handleViewMoreSalePress = () => {
    router.push('/p-search_result?category=sale');
  };

  const handleNewArrivalPress = () => {
    router.push('/p-flower_detail?material_id=6');
  };

  const handleViewMoreNewPress = () => {
    router.push('/p-search_result?category=new');
  };

  const handleViewMoreReviewsPress = () => {
    router.push('/p-order_evaluation');
  };

  const handleBuyNowPress = () => {
    router.push('/p-flower_detail?material_id=6');
  };

  const renderBannerItem = ({ item }: { item: BannerItem }) => (
    <View style={styles.bannerSlide}>
      <LinearGradient
        colors={item.gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.bannerGradient}
      >
        <Image source={{ uri: item.image }} style={styles.bannerImage} />
        <View style={styles.bannerOverlay} />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>{item.title}</Text>
          <Text style={styles.bannerSubtitle}>{item.subtitle}</Text>
        </View>
      </LinearGradient>
    </View>
  );

  const renderHotFlowerItem = ({ item }: { item: HotFlowerItem }) => (
    <TouchableOpacity
      style={styles.hotFlowerCard}
      onPress={() => handleHotFlowerPress(item.materialId)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.image }} style={styles.hotFlowerImage} />
      <View style={styles.hotFlowerContent}>
        <Text style={styles.hotFlowerTitle}>{item.title}</Text>
        <Text style={styles.hotFlowerDescription}>{item.description}</Text>
        <View style={styles.hotFlowerFooter}>
          <Text style={styles.hotFlowerPrice}>¥{item.price}</Text>
          <View style={styles.ratingContainer}>
            <FontAwesome6 name="star" size={12} color="#F4D03F" solid />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderSaleItem = ({ item }: { item: SaleItem }) => (
    <TouchableOpacity
      style={styles.saleItem}
      onPress={() => handleSaleItemPress(item.materialId)}
      activeOpacity={0.8}
    >
      <Image source={{ uri: item.image }} style={styles.saleItemImage} />
      <Text style={styles.saleItemTitle}>{item.title}</Text>
      <View style={styles.salePriceContainer}>
        <Text style={styles.salePrice}>¥{item.price}</Text>
        <Text style={styles.saleOriginalPrice}>¥{item.originalPrice}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderReviewItem = ({ item }: { item: ReviewItem }) => (
    <View style={styles.reviewItem}>
      <Image source={{ uri: item.userAvatar }} style={styles.reviewAvatar} />
      <View style={styles.reviewContent}>
        <View style={styles.reviewHeader}>
          <Text style={styles.reviewUserName}>{item.userName}</Text>
          <View style={styles.reviewRatingContainer}>
            <FontAwesome6 name="star" size={12} color="#F4D03F" solid />
            <Text style={styles.reviewRatingText}>{item.rating}</Text>
          </View>
        </View>
        <Text style={styles.reviewText}>{item.content}</Text>
        <Text style={styles.reviewTime}>{item.timeAgo}</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <TouchableOpacity style={styles.searchInputWrapper} onPress={handleSearchPress}>
            <FontAwesome6 name="magnifying-glass" size={14} color="#A0AEC0" style={styles.searchIcon} />
            <Text style={styles.searchPlaceholder}>搜索花材、花语...</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.headerIcons}>
          <TouchableOpacity style={styles.iconButton} onPress={handleNotificationPress}>
            <FontAwesome6 name="bell" size={20} color="#2D3748" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={handleCartPress}>
            <FontAwesome6 name="bag-shopping" size={20} color="#2D3748" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 轮播图 */}
        <View style={styles.bannerSection}>
          <ScrollView
            ref={bannerScrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleBannerScroll}
            scrollEventThrottle={16}
            style={styles.bannerContainer}
          >
            {bannerData.map((item) => renderBannerItem({ item }))}
          </ScrollView>
          <View style={styles.bannerDots}>
            {bannerData.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.bannerDot,
                  index === currentBannerIndex && styles.bannerDotActive,
                ]}
              />
            ))}
          </View>
        </View>

        {/* 功能入口区 */}
        <View style={styles.functionSection}>
          <View style={styles.functionCard}>
            <View style={styles.functionGrid}>
              <TouchableOpacity
                style={styles.functionItem}
                onPress={handleCustomFlowerPress}
                activeOpacity={0.8}
              >
                <View style={[styles.functionIconContainer, styles.primaryIconBg]}>
                  <FontAwesome6 name="palette" size={20} color="#E8B4B8" />
                </View>
                <Text style={styles.functionText}>花束定制</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.functionItem}
                onPress={handleFlowerKnowledgePress}
                activeOpacity={0.8}
              >
                <View style={[styles.functionIconContainer, styles.secondaryIconBg]}>
                  <FontAwesome6 name="book-open" size={20} color="#F4D03F" />
                </View>
                <Text style={styles.functionText}>花艺知识</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.functionItem}
                onPress={handleFestivalPromotionPress}
                activeOpacity={0.8}
              >
                <View style={[styles.functionIconContainer, styles.accentIconBg]}>
                  <FontAwesome6 name="gift" size={20} color="#FF8A80" />
                </View>
                <Text style={styles.functionText}>节日专题</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.functionItem}
                onPress={handleSameDayDeliveryPress}
                activeOpacity={0.8}
              >
                <View style={[styles.functionIconContainer, styles.tertiaryIconBg]}>
                  <FontAwesome6 name="truck-fast" size={20} color="#A8E6CF" />
                </View>
                <Text style={styles.functionText}>当日达</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* 热门推荐区 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>热门推荐</Text>
            <TouchableOpacity onPress={handleViewMoreHotPress}>
              <Text style={styles.viewMoreText}>查看更多</Text>
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={hotFlowerData}
            renderItem={renderHotFlowerItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.hotFlowerRow}
            scrollEnabled={false}
          />
        </View>

        {/* 限时促销区 */}
        <View style={styles.section}>
          <View style={styles.saleCard}>
            <View style={styles.saleHeader}>
              <View style={styles.saleHeaderLeft}>
                <Text style={styles.sectionTitle}>限时抢购</Text>
                <View style={styles.countdownContainer}>
                  <Text style={styles.countdownLabel}>距结束</Text>
                  <Text style={styles.countdownTimer}>{countdownTime}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={handleViewMoreSalePress}>
                <Text style={styles.viewMoreText}>更多</Text>
              </TouchableOpacity>
            </View>
            
            <FlatList
              data={saleData}
              renderItem={renderSaleItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.saleList}
            />
          </View>
        </View>

        {/* 新品上市区 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>新品上市</Text>
            <TouchableOpacity onPress={handleViewMoreNewPress}>
              <Text style={styles.viewMoreText}>查看更多</Text>
            </TouchableOpacity>
          </View>
          
          <TouchableOpacity
            style={styles.newArrivalCard}
            onPress={handleNewArrivalPress}
            activeOpacity={0.8}
          >
            <Image
              source={{ uri: 'https://s.coze.cn/image/hL6iqkZyTNo/' }}
              style={styles.newArrivalImage}
            />
            <View style={styles.newArrivalContent}>
              <Text style={styles.newArrivalTitle}>梦幻绣球花束</Text>
              <Text style={styles.newArrivalDescription}>进口绣球，色彩丰富，层次分明</Text>
              <View style={styles.newArrivalFooter}>
                <Text style={styles.newArrivalPrice}>¥228</Text>
                <TouchableOpacity style={styles.buyButton} onPress={handleBuyNowPress}>
                  <Text style={styles.buyButtonText}>立即购买</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>

        {/* 用户评价区 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>用户评价</Text>
            <TouchableOpacity onPress={handleViewMoreReviewsPress}>
              <Text style={styles.viewMoreText}>查看更多</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.reviewCard}>
            <FlatList
              data={reviewData}
              renderItem={renderReviewItem}
              keyExtractor={(item) => item.id}
              scrollEnabled={false}
              contentContainerStyle={styles.reviewList}
            />
          </View>
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

