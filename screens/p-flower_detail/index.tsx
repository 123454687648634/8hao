

import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

const { width: screenWidth } = Dimensions.get('window');

interface FlowerData {
  id: string;
  name: string;
  price: string;
  rating: string;
  reviewCount: number;
  description: string;
  images: string[];
  tags: string[];
  flowerLanguage: string;
}

const FlowerDetailScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const scrollViewRef = useRef<ScrollView>(null);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  // 模拟花材数据
  const flowerData: Record<string, FlowerData> = {
    '1': {
      id: '1',
      name: '经典红玫瑰束',
      price: '¥168',
      rating: '4.9',
      reviewCount: 128,
      description: '精选A级红玫瑰，每一朵都经过精心挑选，花型饱满，色泽鲜艳。象征着热烈、真挚的爱情，是表达心意的最佳选择。适合情人节、纪念日等重要场合。',
      images: [
        'https://s.coze.cn/image/x_b9l1p_ZrQ/',
        'https://s.coze.cn/image/h0MHT5zXA2M/',
        'https://s.coze.cn/image/jisXT40j92M/'
      ],
      tags: ['爱情', '浪漫', '经典'],
      flowerLanguage: '红玫瑰代表着热情、爱情、浪漫和美丽。在西方文化中，红玫瑰是爱情的象征，常被用来表达深深的爱意和真挚的情感。11朵红玫瑰代表"一生一世只爱你一个人"。'
    },
    '2': {
      id: '2',
      name: '清新百合束',
      price: '¥128',
      rating: '4.8',
      reviewCount: 96,
      description: '精选优质白百合，花型优雅，香气清新。象征着纯洁、高雅和祝福，是表达美好祝愿的理想选择。适合婚礼、生日、乔迁等场合。',
      images: [
        'https://s.coze.cn/image/tsyjrHxnoT0/',
        'https://s.coze.cn/image/habSTneM69k/',
        'https://s.coze.cn/image/LoSXPXYmRVI/'
      ],
      tags: ['纯洁', '高雅', '祝福'],
      flowerLanguage: '白百合象征着纯洁、高雅和神圣。在基督教文化中，百合代表着圣母玛利亚的纯洁。送给朋友或亲人，表达对其纯洁品格的赞美和美好祝愿。'
    },
    '3': {
      id: '3',
      name: '特价康乃馨束',
      price: '¥88',
      rating: '4.7',
      reviewCount: 156,
      description: '优质康乃馨，色彩丰富，花型饱满。象征着母爱、感恩和尊敬，是母亲节和表达感谢的最佳选择。',
      images: [
        'https://s.coze.cn/image/XDG8O52BL8g/',
        'https://s.coze.cn/image/IIhjN7q0mrI/',
        'https://s.coze.cn/image/aYsRPhBMW9c/'
      ],
      tags: ['母爱', '感恩', '特价'],
      flowerLanguage: '康乃馨是母爱之花，代表着温馨、慈爱和感恩。不同颜色的康乃馨有不同的寓意，粉色代表母爱，红色代表热情，白色代表纯洁的爱。'
    }
  };

  const materialId = (params.material_id as string) || '1';
  const currentFlower = flowerData[materialId] || flowerData['1'];

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleSharePress = () => {
    Alert.alert('分享', '分享功能需要调用系统分享API');
  };

  const handleCustomSamePress = () => {
    router.push(`/p-custom_flower?material_id=${materialId}`);
  };

  const handleAddToCartPress = async () => {
    setIsLoading(true);
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 1000));
      Alert.alert('成功', '已加入购物车');
    } catch (error) {
      Alert.alert('错误', '加入购物车失败，请重试');
    } finally {
      setIsLoading(false);
    }
  };

  const handleScroll = (event: any) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const newIndex = Math.round(scrollPosition / screenWidth);
    if (newIndex !== currentImageIndex) {
      setCurrentImageIndex(newIndex);
    }
  };

  const handleIndicatorPress = (index: number) => {
    setCurrentImageIndex(index);
    scrollViewRef.current?.scrollTo({
      x: index * screenWidth,
      animated: true,
    });
  };

  const renderImageIndicator = (index: number) => (
    <TouchableOpacity
      key={index}
      style={[
        styles.indicator,
        index === currentImageIndex ? styles.activeIndicator : styles.inactiveIndicator
      ]}
      onPress={() => handleIndicatorPress(index)}
    />
  );

  const renderFlowerTag = (tag: string, index: number) => (
    <View key={index} style={styles.tag}>
      <Text style={styles.tagText}>{tag}</Text>
    </View>
  );

  const renderCareMethod = (
    imageUrl: string,
    title: string,
    description: string,
    index: number
  ) => (
    <View key={index} style={styles.careMethodItem}>
      <Image source={{ uri: imageUrl }} style={styles.careMethodImage} />
      <View style={styles.careMethodContent}>
        <Text style={styles.careMethodTitle}>{title}</Text>
        <Text style={styles.careMethodDescription}>{description}</Text>
      </View>
    </View>
  );

  const careMethods = [
    {
      image: 'https://s.coze.cn/image/sBl6onzijGI/',
      title: '修剪花茎',
      description: '收到花束后，斜剪花茎45度，增加吸水面积'
    },
    {
      image: 'https://s.coze.cn/image/8H1kQlT5nLg/',
      title: '更换清水',
      description: '每天更换清水，保持水质清洁，延长花期'
    },
    {
      image: 'https://s.coze.cn/image/Kt8KF4oWb1c/',
      title: '避免阳光直射',
      description: '放置在阴凉通风处，避免阳光直射和空调出风口'
    },
    {
      image: 'https://s.coze.cn/image/QZhFyEu5v-c/',
      title: '去除多余叶片',
      description: '去除浸入水中的叶片，防止腐烂污染水质'
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>花材详情</Text>
        <TouchableOpacity style={styles.headerButton} onPress={handleSharePress}>
          <FontAwesome5 name="share-alt" size={20} color="#2D3748" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 图片轮播区 */}
        <View style={styles.imageSection}>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onScroll={handleScroll}
            scrollEventThrottle={16}
            style={styles.imageContainer}
          >
            {currentFlower.images.map((imageUrl, index) => (
              <Image
                key={index}
                source={{ uri: imageUrl }}
                style={styles.flowerImage}
                resizeMode="cover"
              />
            ))}
          </ScrollView>
          
          {/* 图片指示器 */}
          <View style={styles.indicatorContainer}>
            {currentFlower.images.map((_, index) => renderImageIndicator(index))}
          </View>
        </View>

        {/* 花材信息区 */}
        <View style={styles.flowerInfoSection}>
          <View style={styles.flowerBasicInfo}>
            <Text style={styles.flowerName}>{currentFlower.name}</Text>
            <View style={styles.flowerPriceRatingRow}>
              <Text style={styles.flowerPrice}>{currentFlower.price}</Text>
              <View style={styles.ratingContainer}>
                <FontAwesome6 name="star" size={14} color="#F4D03F" solid />
                <Text style={styles.ratingText}>{currentFlower.rating}</Text>
                <Text style={styles.reviewCountText}>({currentFlower.reviewCount}评价)</Text>
              </View>
            </View>
          </View>
          
          {/* 花材标签 */}
          <View style={styles.tagsContainer}>
            {currentFlower.tags.map((tag, index) => renderFlowerTag(tag, index))}
          </View>
          
          {/* 花材描述 */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionText}>{currentFlower.description}</Text>
          </View>
        </View>

        {/* 花语区 */}
        <View style={styles.flowerLanguageSection}>
          <View style={styles.sectionHeader}>
            <View style={styles.sectionIconContainer}>
              <FontAwesome6 name="heart" size={16} color="#E8B4B8" />
            </View>
            <Text style={styles.sectionTitle}>花语寓意</Text>
          </View>
          
          <View style={styles.flowerLanguageContent}>
            <Text style={styles.flowerLanguageTitle}>红玫瑰的花语</Text>
            <Text style={styles.flowerLanguageText}>{currentFlower.flowerLanguage}</Text>
          </View>
        </View>

        {/* 养护方法区 */}
        <View style={styles.careSection}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionIconContainer, styles.careIconContainer]}>
              <FontAwesome6 name="seedling" size={16} color="#A8E6CF" />
            </View>
            <Text style={styles.sectionTitle}>养护方法</Text>
          </View>
          
          <View style={styles.careMethodsContainer}>
            {careMethods.map((method, index) => 
              renderCareMethod(method.image, method.title, method.description, index)
            )}
          </View>
        </View>

        {/* 配送说明区 */}
        <View style={styles.deliverySection}>
          <View style={styles.sectionHeader}>
            <View style={[styles.sectionIconContainer, styles.deliveryIconContainer]}>
              <FontAwesome5 name="shipping-fast" size={16} color="#FF8A80" />
            </View>
            <Text style={styles.sectionTitle}>配送服务</Text>
          </View>
          
          <View style={styles.deliveryServicesContainer}>
            <View style={styles.deliveryServiceCard}>
              <FontAwesome6 name="clock" size={20} color="#E8B4B8" style={styles.deliveryServiceIcon} />
              <Text style={styles.deliveryServiceTitle}>当日达</Text>
              <Text style={styles.deliveryServiceDescription}>4小时内送达</Text>
            </View>
            
            <View style={styles.deliveryServiceCard}>
              <FontAwesome5 name="shield-alt" size={20} color="#A8E6CF" style={styles.deliveryServiceIcon} />
              <Text style={styles.deliveryServiceTitle}>新鲜保证</Text>
              <Text style={styles.deliveryServiceDescription}>专业保鲜配送</Text>
            </View>
          </View>
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* 底部操作栏 */}
      <View style={styles.bottomActions}>
        <TouchableOpacity 
          style={styles.customSameButton} 
          onPress={handleCustomSamePress}
          disabled={isLoading}
        >
          <FontAwesome6 name="palette" size={16} color="#FFFFFF" style={styles.buttonIcon} />
          <Text style={styles.customSameButtonText}>定制同款</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.addToCartButton} 
          onPress={handleAddToCartPress}
          disabled={isLoading}
        >
          <FontAwesome5 name="shopping-bag" size={16} color="#E8B4B8" style={styles.buttonIcon} />
          <Text style={styles.addToCartButtonText}>加入购物车</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default FlowerDetailScreen;

