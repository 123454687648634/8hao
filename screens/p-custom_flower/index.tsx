

import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Alert, Image, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome5, FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface FlowerMaterial {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface SizeOption {
  id: string;
  name: string;
  price: number;
  description: string;
  icon: string;
  iconColor: string;
}

interface PackageOption {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface GiftOption {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
}

interface ThemeRecommendation {
  flowers: string[];
  size: string;
  package: string;
}

const CustomFlowerScreen: React.FC = () => {
  const router = useRouter();
  const params = useLocalSearchParams();

  // 模拟数据
  const flowerMaterials: FlowerMaterial[] = [
    { id: '1', name: '红玫瑰', price: 30, description: '爱情、热情', image: 'https://s.coze.cn/image/PjP1gHamQuc/' },
    { id: '2', name: '白百合', price: 25, description: '纯洁、高雅', image: 'https://s.coze.cn/image/zuk-BU4Cea8/' },
    { id: '3', name: '康乃馨', price: 15, description: '感恩、母爱', image: 'https://s.coze.cn/image/BpTPKVwscLQ/' },
    { id: '4', name: '向日葵', price: 20, description: '阳光、希望', image: 'https://s.coze.cn/image/IYcbIBoPaw4/' },
    { id: '5', name: '郁金香', price: 28, description: '优雅、高贵', image: 'https://s.coze.cn/image/cHSlo0YNNUA/' },
    { id: '6', name: '绣球花', price: 35, description: '浪漫、梦幻', image: 'https://s.coze.cn/image/HqIT75OLg64/' },
  ];

  const sizeOptions: SizeOption[] = [
    { id: 'mini', name: '迷你款', price: 50, description: '3-5枝，小巧精致', icon: 'flower', iconColor: '#E8B4B8' },
    { id: 'standard', name: '标准款', price: 100, description: '8-12枝，经典大方', icon: 'gift', iconColor: '#F4D03F' },
    { id: 'luxury', name: '豪华款', price: 180, description: '15-20枝，奢华大气', icon: 'crown', iconColor: '#FF8A80' },
  ];

  const packageOptions: PackageOption[] = [
    { id: 'classic', name: '经典简约', price: 20, image: 'https://s.coze.cn/image/fO5zYyPdqVY/' },
    { id: 'romantic', name: '浪漫粉色', price: 25, image: 'https://s.coze.cn/image/Rp9IjO6vHMw/' },
    { id: 'elegant', name: '优雅白色', price: 30, image: 'https://s.coze.cn/image/mMvUbWDEhfg/' },
  ];

  const giftOptions: GiftOption[] = [
    { id: 'chocolate', name: '精美巧克力', price: 45, description: '进口巧克力礼盒', image: 'https://s.coze.cn/image/r5ukJwy6f28/' },
    { id: 'doll', name: '可爱玩偶', price: 35, description: '毛绒玩具公仔', image: 'https://s.coze.cn/image/6vBpc-j7_CU/' },
    { id: 'candle', name: '香薰蜡烛', price: 55, description: '天然大豆蜡烛', image: 'https://s.coze.cn/image/tTzt2DYD4Ow/' },
    { id: 'perfume', name: '迷你香水', price: 65, description: '名牌香水小样', image: 'https://s.coze.cn/image/9kNCnJqC8Wg/' },
  ];

  const themeOptions = [
    { id: 'all', name: '全部' },
    { id: 'birthday', name: '生日祝福' },
    { id: 'love', name: '爱情表白' },
    { id: 'thanks', name: '感恩感谢' },
    { id: 'festival', name: '节日庆典' },
  ];

  const themeRecommendations: Record<string, ThemeRecommendation> = {
    birthday: { flowers: ['向日葵', '绣球花'], size: 'standard', package: 'romantic' },
    love: { flowers: ['红玫瑰', '郁金香'], size: 'luxury', package: 'romantic' },
    thanks: { flowers: ['康乃馨', '白百合'], size: 'standard', package: 'elegant' },
    festival: { flowers: ['红玫瑰', '绣球花'], size: 'luxury', package: 'classic' },
  };

  // 状态管理
  const [selectedFlowers, setSelectedFlowers] = useState<FlowerMaterial[]>([]);
  const [selectedSize, setSelectedSize] = useState<SizeOption>(sizeOptions[0]);
  const [selectedPackage, setSelectedPackage] = useState<PackageOption>(packageOptions[0]);
  const [selectedGifts, setSelectedGifts] = useState<GiftOption[]>([]);
  const [greetingText, setGreetingText] = useState<string>('');
  const [selectedTheme, setSelectedTheme] = useState<string>('all');
  const [fontStyle, setFontStyle] = useState<string>('default');
  const [fontColor, setFontColor] = useState<string>('black');
  const [isPreviewOverlayVisible, setIsPreviewOverlayVisible] = useState<boolean>(false);

  // 计算总价
  const calculateTotalPrice = (): number => {
    const flowersTotal = selectedFlowers.reduce((sum, flower) => sum + flower.price, 0);
    const giftsTotal = selectedGifts.reduce((sum, gift) => sum + gift.price, 0);
    return flowersTotal + selectedSize.price + selectedPackage.price + giftsTotal;
  };

  // 生成预览标题和描述
  const generatePreviewContent = () => {
    let title = `${selectedSize.name}`;
    let description = `${selectedSize.name}，${selectedPackage.name}包装`;
    
    if (selectedFlowers.length > 0) {
      const flowerNames = selectedFlowers.map(f => f.name).join('、');
      title = `${flowerNames}花束`;
      description = `${flowerNames}，${selectedSize.name}，${selectedPackage.name}包装`;
    }
    
    if (greetingText) {
      description += `，贺卡："${greetingText.substring(0, 10)}${greetingText.length > 10 ? '...' : ''}"`;
    }
    
    return { title, description };
  };

  // 获取预览图片
  const getPreviewImage = (): string => {
    if (selectedFlowers.length > 0) {
      return selectedFlowers[0].image;
    }
    return 'https://s.coze.cn/image/Rloc1tsaUAs/';
  };

  // 处理返回按钮
  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  // 处理主题选择
  const handleThemeSelect = (themeId: string) => {
    setSelectedTheme(themeId);
    
    if (themeRecommendations[themeId]) {
      applyThemeRecommendation(themeRecommendations[themeId]);
    }
  };

  // 应用主题推荐
  const applyThemeRecommendation = (recommendation: ThemeRecommendation) => {
    // 重置所有选择
    setSelectedFlowers([]);
    setSelectedGifts([]);
    
    // 选择推荐花材
    const recommendedFlowers = flowerMaterials.filter(flower => 
      recommendation.flowers.includes(flower.name)
    );
    setSelectedFlowers(recommendedFlowers);
    
    // 选择推荐尺寸
    const recommendedSize = sizeOptions.find(size => size.id === recommendation.size);
    if (recommendedSize) {
      setSelectedSize(recommendedSize);
    }
    
    // 选择推荐包装
    const recommendedPackage = packageOptions.find(pkg => pkg.id === recommendation.package);
    if (recommendedPackage) {
      setSelectedPackage(recommendedPackage);
    }
  };

  // 处理花材选择
  const handleFlowerToggle = (flower: FlowerMaterial) => {
    setSelectedFlowers(prev => {
      const isSelected = prev.some(f => f.id === flower.id);
      if (isSelected) {
        return prev.filter(f => f.id !== flower.id);
      } else {
        return [...prev, flower];
      }
    });
  };

  // 处理尺寸选择
  const handleSizeSelect = (size: SizeOption) => {
    setSelectedSize(size);
  };

  // 处理包装选择
  const handlePackageSelect = (pkg: PackageOption) => {
    setSelectedPackage(pkg);
  };

  // 处理礼品选择
  const handleGiftToggle = (gift: GiftOption) => {
    setSelectedGifts(prev => {
      const isSelected = prev.some(g => g.id === gift.id);
      if (isSelected) {
        return prev.filter(g => g.id !== gift.id);
      } else {
        return [...prev, gift];
      }
    });
  };

  // 处理预览点击
  const handlePreviewPress = () => {
    setIsPreviewOverlayVisible(!isPreviewOverlayVisible);
  };

  // 处理加入购物车
  const handleAddToCart = () => {
    if (selectedFlowers.length === 0) {
      Alert.alert('提示', '请至少选择一种花材');
      return;
    }

    const customFlowerData = {
      flowers: selectedFlowers,
      size: selectedSize,
      package: selectedPackage,
      gifts: selectedGifts,
      greetingText: greetingText,
      fontStyle: fontStyle,
      fontColor: fontColor,
      totalPrice: calculateTotalPrice(),
    };

    console.log('添加到购物车:', customFlowerData);
    Alert.alert('成功', '已添加到购物车！');
    router.push('/p-cart');
  };

  // 处理立即购买
  const handleBuyNow = () => {
    if (selectedFlowers.length === 0) {
      Alert.alert('提示', '请至少选择一种花材');
      return;
    }

    const customFlowerData = {
      flowers: selectedFlowers,
      size: selectedSize,
      package: selectedPackage,
      gifts: selectedGifts,
      greetingText: greetingText,
      fontStyle: fontStyle,
      fontColor: fontColor,
      totalPrice: calculateTotalPrice(),
    };

    console.log('跳转到订单确认页:', customFlowerData);
    router.push('/p-order_confirm');
  };

  // 初始化页面
  useEffect(() => {
    // 如果有传入的花材ID，预选择该花材
    if (params.material_id) {
      const materialMap: Record<string, string> = {
        '1': '红玫瑰',
        '2': '白百合',
        '3': '康乃馨',
        '4': '向日葵',
        '5': '郁金香',
        '6': '绣球花',
      };
      
      const flowerName = materialMap[params.material_id as string];
      if (flowerName) {
        const flower = flowerMaterials.find(f => f.name === flowerName);
        if (flower) {
          setSelectedFlowers([flower]);
        }
      }
    }
  }, [params.material_id]);

  const { title: previewTitle, description: previewDescription } = generatePreviewContent();

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>花束定制</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 花束预览区 */}
        <View style={styles.previewSection}>
          <View style={styles.previewCard}>
            <TouchableOpacity 
              style={styles.previewContainer} 
              onPress={handlePreviewPress}
              activeOpacity={0.8}
            >
              <Image 
                source={{ uri: getPreviewImage() }} 
                style={styles.previewImage}
                resizeMode="cover"
              />
              {isPreviewOverlayVisible && (
                <View style={styles.previewOverlay}>
                  <FontAwesome6 name="eye" size={24} color="#FFFFFF" />
                  <Text style={styles.previewOverlayText}>点击查看3D效果</Text>
                </View>
              )}
            </TouchableOpacity>
            <Text style={styles.previewTitle}>{previewTitle}</Text>
            <Text style={styles.previewDescription}>{previewDescription}</Text>
          </View>
        </View>

        {/* 主题风格筛选 */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>主题风格</Text>
            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              style={styles.themeScrollView}
              contentContainerStyle={styles.themeScrollContent}
            >
              {themeOptions.map((theme) => (
                <TouchableOpacity
                  key={theme.id}
                  style={[
                    styles.themeButton,
                    selectedTheme === theme.id && styles.themeButtonSelected
                  ]}
                  onPress={() => handleThemeSelect(theme.id)}
                  activeOpacity={0.8}
                >
                  <Text style={[
                    styles.themeButtonText,
                    selectedTheme === theme.id && styles.themeButtonTextSelected
                  ]}>
                    {theme.name}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>

        {/* 花材选择 */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>选择花材</Text>
              <Text style={styles.selectedCount}>已选 {selectedFlowers.length} 种</Text>
            </View>
            <View style={styles.flowerGrid}>
              {flowerMaterials.map((flower) => {
                const isSelected = selectedFlowers.some(f => f.id === flower.id);
                return (
                  <TouchableOpacity
                    key={flower.id}
                    style={[
                      styles.flowerItem,
                      isSelected && styles.flowerItemSelected
                    ]}
                    onPress={() => handleFlowerToggle(flower)}
                    activeOpacity={0.8}
                  >
                    <Image 
                      source={{ uri: flower.image }} 
                      style={styles.flowerImage}
                      resizeMode="cover"
                    />
                    <Text style={styles.flowerName}>{flower.name}</Text>
                    <Text style={styles.flowerDescription}>{flower.description}</Text>
                    <View style={styles.flowerFooter}>
                      <Text style={styles.flowerPrice}>¥{flower.price}/枝</Text>
                      {isSelected && (
                        <FontAwesome5 name="check-circle" size={16} color="#E8B4B8" />
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* 花束尺寸 */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>花束尺寸</Text>
            <View style={styles.sizeList}>
              {sizeOptions.map((size) => {
                const isSelected = selectedSize.id === size.id;
                return (
                  <TouchableOpacity
                    key={size.id}
                    style={[
                      styles.sizeItem,
                      isSelected && styles.sizeItemSelected
                    ]}
                    onPress={() => handleSizeSelect(size)}
                    activeOpacity={0.8}
                  >
                    <View style={styles.sizeLeft}>
                      <View style={[styles.sizeIcon, { backgroundColor: `${size.iconColor}1A` }]}>
                        <FontAwesome6 name={size.icon} size={20} color={size.iconColor} />
                      </View>
                      <View style={styles.sizeInfo}>
                        <Text style={styles.sizeName}>{size.name}</Text>
                        <Text style={styles.sizeDescription}>{size.description}</Text>
                      </View>
                    </View>
                    <View style={styles.sizeRight}>
                      <Text style={styles.sizePrice}>¥{size.price}</Text>
                      {isSelected && (
                        <FontAwesome5 name="check-circle" size={16} color="#E8B4B8" />
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* 包装风格 */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>包装风格</Text>
            <View style={styles.packageGrid}>
              {packageOptions.map((pkg) => {
                const isSelected = selectedPackage.id === pkg.id;
                return (
                  <TouchableOpacity
                    key={pkg.id}
                    style={[
                      styles.packageItem,
                      isSelected && styles.packageItemSelected
                    ]}
                    onPress={() => handlePackageSelect(pkg)}
                    activeOpacity={0.8}
                  >
                    <Image 
                      source={{ uri: pkg.image }} 
                      style={styles.packageImage}
                      resizeMode="cover"
                    />
                    <Text style={styles.packageName}>{pkg.name}</Text>
                    <View style={styles.packageFooter}>
                      <Text style={styles.packagePrice}>¥{pkg.price}</Text>
                      {isSelected && (
                        <FontAwesome5 name="check-circle" size={16} color="#E8B4B8" />
                      )}
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* 贺卡定制 */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>贺卡定制</Text>
            <TextInput
              style={styles.greetingInput}
              placeholder="请输入您想表达的祝福语..."
              placeholderTextColor="#A0AEC0"
              value={greetingText}
              onChangeText={setGreetingText}
              multiline
              textAlignVertical="top"
            />
            <View style={styles.fontOptions}>
              <View style={styles.fontOption}>
                <Text style={styles.fontLabel}>字体</Text>
                <TouchableOpacity style={styles.fontSelect}>
                  <Text style={styles.fontSelectText}>默认字体</Text>
                  <FontAwesome6 name="chevron-down" size={12} color="#718096" />
                </TouchableOpacity>
              </View>
              <View style={styles.fontOption}>
                <Text style={styles.fontLabel}>颜色</Text>
                <TouchableOpacity style={styles.fontSelect}>
                  <Text style={styles.fontSelectText}>黑色</Text>
                  <FontAwesome6 name="chevron-down" size={12} color="#718096" />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={styles.greetingNote}>贺卡免费，个性化文字让心意更特别</Text>
          </View>
        </View>

        {/* 附加礼品 */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>附加礼品</Text>
              <Text style={styles.selectedCount}>已选 {selectedGifts.length} 种</Text>
            </View>
            <View style={styles.giftGrid}>
              {giftOptions.map((gift) => {
                const isSelected = selectedGifts.some(g => g.id === gift.id);
                return (
                  <TouchableOpacity
                    key={gift.id}
                    style={[
                      styles.giftItem,
                      isSelected && styles.giftItemSelected
                    ]}
                    onPress={() => handleGiftToggle(gift)}
                    activeOpacity={0.8}
                  >
                    <Image 
                      source={{ uri: gift.image }} 
                      style={styles.giftImage}
                      resizeMode="cover"
                    />
                    <View style={styles.giftInfo}>
                      <Text style={styles.giftName}>{gift.name}</Text>
                      <Text style={styles.giftDescription}>{gift.description}</Text>
                      <Text style={styles.giftPrice}>¥{gift.price}</Text>
                    </View>
                    {isSelected && (
                      <FontAwesome5 name="check-circle" size={16} color="#E8B4B8" />
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
        </View>

        {/* 价格明细 */}
        <View style={styles.section}>
          <View style={styles.sectionCard}>
            <Text style={styles.sectionTitle}>价格明细</Text>
            <View style={styles.priceList}>
              <View style={styles.priceItem}>
                <Text style={styles.priceLabel}>花材费用</Text>
                <Text style={styles.priceValue}>¥{selectedFlowers.reduce((sum, flower) => sum + flower.price, 0)}</Text>
              </View>
              <View style={styles.priceItem}>
                <Text style={styles.priceLabel}>花束尺寸</Text>
                <Text style={styles.priceValue}>¥{selectedSize.price}</Text>
              </View>
              <View style={styles.priceItem}>
                <Text style={styles.priceLabel}>包装费用</Text>
                <Text style={styles.priceValue}>¥{selectedPackage.price}</Text>
              </View>
              <View style={styles.priceItem}>
                <Text style={styles.priceLabel}>附加礼品</Text>
                <Text style={styles.priceValue}>¥{selectedGifts.reduce((sum, gift) => sum + gift.price, 0)}</Text>
              </View>
              <View style={styles.priceDivider} />
              <View style={styles.totalPriceItem}>
                <Text style={styles.totalPriceLabel}>总计</Text>
                <Text style={styles.totalPriceValue}>¥{calculateTotalPrice()}</Text>
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
          style={styles.addToCartButton} 
          onPress={handleAddToCart}
          activeOpacity={0.8}
        >
          <FontAwesome5 name="shopping-bag" size={16} color="#2D3748" />
          <Text style={styles.addToCartButtonText}>加入购物车</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.buyNowButton} 
          onPress={handleBuyNow}
          activeOpacity={0.8}
        >
          <FontAwesome6 name="credit-card" size={16} color="#FFFFFF" />
          <Text style={styles.buyNowButtonText}>立即购买</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CustomFlowerScreen;

