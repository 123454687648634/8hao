

import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  
  // 顶部导航栏
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  headerButton: {
    padding: 8,
    marginHorizontal: -8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
  },
  
  // 滚动视图
  scrollView: {
    flex: 1,
  },
  
  // 图片轮播区
  imageSection: {
    position: 'relative',
  },
  imageContainer: {
    height: 320,
  },
  flowerImage: {
    width: screenWidth,
    height: 320,
  },
  indicatorContainer: {
    position: 'absolute',
    bottom: 16,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  activeIndicator: {
    backgroundColor: '#FFFFFF',
    opacity: 1,
  },
  inactiveIndicator: {
    backgroundColor: '#FFFFFF',
    opacity: 0.5,
  },
  
  // 花材信息区
  flowerInfoSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
  },
  flowerBasicInfo: {
    marginBottom: 16,
  },
  flowerName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 8,
  },
  flowerPriceRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  flowerPrice: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#718096',
  },
  reviewCountText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  
  // 标签
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 16,
  },
  tag: {
    backgroundColor: 'rgba(232, 180, 184, 0.1)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  tagText: {
    fontSize: 14,
    color: '#E8B4B8',
  },
  
  // 描述
  descriptionContainer: {
    marginBottom: 16,
  },
  descriptionText: {
    fontSize: 16,
    color: '#718096',
    lineHeight: 24,
  },
  
  // 通用section样式
  flowerLanguageSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    marginTop: 16,
  },
  careSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    marginTop: 16,
  },
  deliverySection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
    backgroundColor: '#FFFFFF',
    marginTop: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionIconContainer: {
    width: 32,
    height: 32,
    backgroundColor: 'rgba(232, 180, 184, 0.1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  careIconContainer: {
    backgroundColor: 'rgba(168, 230, 207, 0.1)',
  },
  deliveryIconContainer: {
    backgroundColor: 'rgba(255, 138, 128, 0.1)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
  },
  
  // 花语内容
  flowerLanguageContent: {
    backgroundColor: 'rgba(232, 180, 184, 0.05)',
    borderRadius: 16,
    padding: 16,
  },
  flowerLanguageTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  flowerLanguageText: {
    fontSize: 16,
    color: '#718096',
    lineHeight: 24,
  },
  
  // 养护方法
  careMethodsContainer: {
    gap: 16,
  },
  careMethodItem: {
    flexDirection: 'row',
    gap: 16,
  },
  careMethodImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  careMethodContent: {
    flex: 1,
    justifyContent: 'center',
  },
  careMethodTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  careMethodDescription: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
  },
  
  // 配送服务
  deliveryServicesContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  deliveryServiceCard: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'rgba(232, 180, 184, 0.05)',
    borderRadius: 16,
  },
  deliveryServiceIcon: {
    marginBottom: 8,
  },
  deliveryServiceTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  deliveryServiceDescription: {
    fontSize: 14,
    color: '#718096',
  },
  
  // 底部操作栏
  bottomSpacing: {
    height: 100,
  },
  bottomActions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F7FAFC',
    ...Platform.select({
      ios: {
        paddingBottom: 34, // iPhone底部安全区域
      },
      android: {
        paddingBottom: 16,
      },
    }),
  },
  customSameButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8B4B8',
    paddingVertical: 16,
    borderRadius: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#E8B4B8',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  customSameButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  addToCartButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#E8B4B8',
    paddingVertical: 16,
    borderRadius: 16,
  },
  addToCartButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E8B4B8',
  },
  buttonIcon: {
    marginRight: 8,
  },
});

