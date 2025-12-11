

import React, { useState, useRef } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Image, Alert, Modal, Platform, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

interface UploadedImage {
  id: number;
  uri: string;
}

interface OrderData {
  flowerName: string;
  flowerDescription: string;
  flowerPrice: string;
  flowerQuantity: string;
  flowerImage: string;
}

const OrderEvaluationScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();
  const orderId = params.order_id as string || 'default';

  // 状态管理
  const [overallRating, setOverallRating] = useState<number>(0);
  const [deliverySpeedRating, setDeliverySpeedRating] = useState<number>(0);
  const [packagingQualityRating, setPackagingQualityRating] = useState<number>(0);
  const [flowerFreshnessRating, setFlowerFreshnessRating] = useState<number>(0);
  const [reviewContent, setReviewContent] = useState<string>('');
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([]);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  // 模拟订单数据
  const mockOrderData: Record<string, OrderData> = {
    'order123': {
      flowerName: '经典红玫瑰束',
      flowerDescription: '11朵红玫瑰，象征热烈的爱情',
      flowerPrice: '¥168',
      flowerQuantity: '×1',
      flowerImage: 'https://s.coze.cn/image/J2TajzDAZHA/'
    },
    'order456': {
      flowerName: '清新百合束',
      flowerDescription: '6朵白百合，纯洁高雅',
      flowerPrice: '¥128',
      flowerQuantity: '×1',
      flowerImage: 'https://s.coze.cn/image/sEnywUa0CYQ/'
    },
    'default': {
      flowerName: '经典红玫瑰束',
      flowerDescription: '11朵红玫瑰，象征热烈的爱情',
      flowerPrice: '¥168',
      flowerQuantity: '×1',
      flowerImage: 'https://s.coze.cn/image/rH-8O8yPaqA/'
    }
  };

  const orderData = mockOrderData[orderId] || mockOrderData['default'];

  // 评分文字映射
  const ratingTexts: Record<number, string> = {
    1: '很不满意',
    2: '不满意',
    3: '一般',
    4: '满意',
    5: '非常满意'
  };

  // 检查是否可以提交
  const canSubmit = overallRating > 0 && 
                   deliverySpeedRating > 0 && 
                   packagingQualityRating > 0 && 
                   flowerFreshnessRating > 0;

  // 处理返回
  const handleGoBack = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  // 处理星级评分
  const handleStarRatingPress = (rating: number, type: 'overall' | 'delivery' | 'packaging' | 'freshness') => {
    switch (type) {
      case 'overall':
        setOverallRating(rating);
        break;
      case 'delivery':
        setDeliverySpeedRating(rating);
        break;
      case 'packaging':
        setPackagingQualityRating(rating);
        break;
      case 'freshness':
        setFlowerFreshnessRating(rating);
        break;
    }
  };

  // 处理图片上传
  const handleImageUpload = async () => {
    if (uploadedImages.length >= 3) {
      Alert.alert('提示', '最多只能上传3张图片');
      return;
    }

    try {
      // 请求相册权限
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('权限不足', '需要访问相册权限才能上传图片');
        return;
      }

      // 选择图片
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsMultipleSelection: true,
        quality: 0.8,
        selectionLimit: 3 - uploadedImages.length,
      });

      if (!result.canceled && result.assets) {
        const newImages: UploadedImage[] = result.assets.map((asset, index) => ({
          id: Date.now() + index,
          uri: asset.uri,
        }));
        setUploadedImages(prev => [...prev, ...newImages]);
      }
    } catch (error) {
      Alert.alert('错误', '上传图片失败，请重试');
    }
  };

  // 删除图片
  const handleRemoveImage = (imageId: number) => {
    setUploadedImages(prev => prev.filter(img => img.id !== imageId));
  };

  // 处理提交评价
  const handleSubmitReview = async () => {
    if (!canSubmit) return;

    setIsSubmitting(true);

    try {
      // 模拟提交过程
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 显示成功弹窗
      setShowSuccessModal(true);
    } catch (error) {
      Alert.alert('错误', '提交失败，请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  // 处理成功弹窗确定
  const handleSuccessModalConfirm = () => {
    setShowSuccessModal(false);
    handleGoBack();
  };

  // 渲染星级评分
  const renderStarRating = (
    currentRating: number, 
    onRatingPress: (rating: number) => void, 
    size: number = 24
  ) => {
    return (
      <View style={styles.starRatingContainer}>
        {[1, 2, 3, 4, 5].map((rating) => (
          <TouchableOpacity
            key={rating}
            onPress={() => onRatingPress(rating)}
            style={styles.starButton}
          >
            <FontAwesome6
              name="star"
              size={size}
              color={rating <= currentRating ? '#F4D03F' : '#E2E8F0'}
              solid={rating <= currentRating}
            />
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  // 渲染图片预览
  const renderImagePreviews = () => {
    return (
      <View style={styles.imagePreviewGrid}>
        {uploadedImages.map((image) => (
          <View key={image.id} style={styles.imagePreviewContainer}>
            <Image source={{ uri: image.uri }} style={styles.imagePreview} />
            <TouchableOpacity
              style={styles.removeImageButton}
              onPress={() => handleRemoveImage(image.id)}
            >
              <FontAwesome6 name="xmark" size={12} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        ))}
        
        {uploadedImages.length < 3 && (
          <TouchableOpacity style={styles.uploadArea} onPress={handleImageUpload}>
            <FontAwesome6 name="plus" size={24} color="#A0AEC0" />
            <Text style={styles.uploadText}>添加图片</Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleGoBack}>
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>评价订单</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 订单商品信息 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <View style={styles.orderItemContainer}>
              <Image source={{ uri: orderData.flowerImage }} style={styles.flowerImage} />
              <View style={styles.orderItemInfo}>
                <Text style={styles.flowerName}>{orderData.flowerName}</Text>
                <Text style={styles.flowerDescription}>{orderData.flowerDescription}</Text>
                <View style={styles.priceQuantityRow}>
                  <Text style={styles.flowerPrice}>{orderData.flowerPrice}</Text>
                  <Text style={styles.flowerQuantity}>{orderData.flowerQuantity}</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* 整体评分 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>整体评分</Text>
            <View style={styles.overallRatingContainer}>
              {renderStarRating(overallRating, (rating) => handleStarRatingPress(rating, 'overall'))}
            </View>
            <Text style={[
              styles.ratingText,
              overallRating > 0 && styles.ratingTextActive
            ]}>
              {overallRating > 0 ? ratingTexts[overallRating] : '点击星星进行评分'}
            </Text>
          </View>
        </View>

        {/* 评价内容 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>评价内容</Text>
            <TextInput
              style={styles.reviewTextInput}
              placeholder="分享您的购买体验，帮助其他用户做出更好的选择..."
              placeholderTextColor="#A0AEC0"
              multiline
              value={reviewContent}
              onChangeText={setReviewContent}
              maxLength={500}
            />
            <View style={styles.textInputFooter}>
              <Text style={styles.optionalText}>选填，但您的评价对我们很重要</Text>
              <Text style={[
                styles.charCount,
                reviewContent.length > 450 && styles.charCountWarning
              ]}>
                {reviewContent.length}/500
              </Text>
            </View>
          </View>
        </View>

        {/* 图片上传 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>上传图片</Text>
            <Text style={styles.uploadDescription}>最多可上传3张图片，展示花束的实际效果</Text>
            {renderImagePreviews()}
          </View>
        </View>

        {/* 配送服务评分 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <Text style={styles.sectionTitle}>配送服务</Text>
            
            <View style={styles.deliveryRatingContainer}>
              <View style={styles.deliveryRatingRow}>
                <Text style={styles.deliveryRatingLabel}>配送速度</Text>
                {renderStarRating(deliverySpeedRating, (rating) => handleStarRatingPress(rating, 'delivery'), 20)}
              </View>
              
              <View style={styles.deliveryRatingRow}>
                <Text style={styles.deliveryRatingLabel}>包装质量</Text>
                {renderStarRating(packagingQualityRating, (rating) => handleStarRatingPress(rating, 'packaging'), 20)}
              </View>
              
              <View style={styles.deliveryRatingRow}>
                <Text style={styles.deliveryRatingLabel}>花材新鲜度</Text>
                {renderStarRating(flowerFreshnessRating, (rating) => handleStarRatingPress(rating, 'freshness'), 20)}
              </View>
            </View>
          </View>
        </View>

        {/* 底部间距 */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* 底部提交按钮 */}
      <View style={styles.submitSection}>
        <TouchableOpacity
          style={[
            styles.submitButton,
            !canSubmit && styles.submitButtonDisabled
          ]}
          onPress={handleSubmitReview}
          disabled={!canSubmit || isSubmitting}
        >
          <Text style={styles.submitButtonText}>
            {isSubmitting ? '提交中...' : '提交评价'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* 成功提示弹窗 */}
      <Modal
        visible={showSuccessModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <View style={styles.successIconContainer}>
              <FontAwesome6 name="check" size={24} color="#A8E6CF" />
            </View>
            <Text style={styles.modalTitle}>评价提交成功</Text>
            <Text style={styles.modalDescription}>感谢您的评价，这将帮助我们提供更好的服务</Text>
            <TouchableOpacity style={styles.modalButton} onPress={handleSuccessModalConfirm}>
              <Text style={styles.modalButtonText}>确定</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default OrderEvaluationScreen;

