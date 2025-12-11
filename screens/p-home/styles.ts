

import { StyleSheet, Dimensions, Platform } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  
  // 顶部导航栏
  header: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
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
  
  searchContainer: {
    flex: 1,
    marginRight: 16,
  },
  
  searchInputWrapper: {
    backgroundColor: '#F7FAFC',
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  searchIcon: {
    marginRight: 8,
  },
  
  searchPlaceholder: {
    fontSize: 14,
    color: '#A0AEC0',
    flex: 1,
  },
  
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  
  iconButton: {
    position: 'relative',
    padding: 8,
  },
  
  badge: {
    position: 'absolute',
    top: 2,
    right: 2,
    backgroundColor: '#FF8A80',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'bold',
  },
  
  // 滚动视图
  scrollView: {
    flex: 1,
  },
  
  // 轮播图
  bannerSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  
  bannerContainer: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  
  bannerSlide: {
    width: screenWidth - 32,
    height: 192,
  },
  
  bannerGradient: {
    flex: 1,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'relative',
  },
  
  bannerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  
  bannerOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  
  bannerContent: {
    position: 'absolute',
    bottom: 24,
    left: 24,
  },
  
  bannerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 4,
  },
  
  bannerSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  
  bannerDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    gap: 8,
  },
  
  bannerDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E2E8F0',
  },
  
  bannerDotActive: {
    backgroundColor: '#E8B4B8',
  },
  
  // 功能入口区
  functionSection: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  
  functionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  
  functionGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  functionItem: {
    alignItems: 'center',
    flex: 1,
  },
  
  functionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  
  primaryIconBg: {
    backgroundColor: 'rgba(232, 180, 184, 0.1)',
  },
  
  secondaryIconBg: {
    backgroundColor: 'rgba(244, 208, 63, 0.1)',
  },
  
  accentIconBg: {
    backgroundColor: 'rgba(255, 138, 128, 0.1)',
  },
  
  tertiaryIconBg: {
    backgroundColor: 'rgba(168, 230, 207, 0.1)',
  },
  
  functionText: {
    fontSize: 14,
    color: '#2D3748',
    fontWeight: '500',
    textAlign: 'center',
  },
  
  // 通用section样式
  section: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  
  viewMoreText: {
    fontSize: 14,
    color: '#E8B4B8',
    fontWeight: '500',
  },
  
  // 热门推荐
  hotFlowerRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  
  hotFlowerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    width: (screenWidth - 48) / 2,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  
  hotFlowerImage: {
    width: '100%',
    height: 128,
  },
  
  hotFlowerContent: {
    padding: 16,
  },
  
  hotFlowerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  
  hotFlowerDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  
  hotFlowerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  hotFlowerPrice: {
    fontSize: 18,
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
    color: '#A0AEC0',
  },
  
  // 限时促销
  saleCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  
  saleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  
  saleHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  
  countdownContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  
  countdownLabel: {
    fontSize: 14,
    color: '#718096',
  },
  
  countdownTimer: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF8A80',
  },
  
  saleList: {
    paddingRight: 16,
  },
  
  saleItem: {
    width: 128,
    marginRight: 16,
  },
  
  saleItemImage: {
    width: '100%',
    height: 80,
    borderRadius: 12,
    marginBottom: 8,
  },
  
  saleItemTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 4,
  },
  
  salePriceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  
  salePrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  
  saleOriginalPrice: {
    fontSize: 12,
    color: '#A0AEC0',
    textDecorationLine: 'line-through',
  },
  
  // 新品上市
  newArrivalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    gap: 16,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  
  newArrivalImage: {
    width: 96,
    height: 96,
    borderRadius: 12,
  },
  
  newArrivalContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  
  newArrivalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  
  newArrivalDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  
  newArrivalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  
  newArrivalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  
  buyButton: {
    backgroundColor: '#E8B4B8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#E8B4B8',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  
  buyButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  
  // 用户评价
  reviewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  
  reviewList: {
    gap: 16,
  },
  
  reviewItem: {
    flexDirection: 'row',
    gap: 12,
  },
  
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  
  reviewContent: {
    flex: 1,
  },
  
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  
  reviewUserName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
  },
  
  reviewRatingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  
  reviewRatingText: {
    fontSize: 14,
    color: '#718096',
  },
  
  reviewText: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
    lineHeight: 20,
  },
  
  reviewTime: {
    fontSize: 12,
    color: '#A0AEC0',
  },
  
  // 底部间距
  bottomSpacing: {
    height: 100,
  },
});

