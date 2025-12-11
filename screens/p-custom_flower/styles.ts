

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  
  // 顶部导航栏
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  backButton: {
    padding: 8,
    marginLeft: -8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },

  // 滚动视图
  scrollView: {
    flex: 1,
  },

  // 通用section样式
  section: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
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
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  selectedCount: {
    fontSize: 14,
    color: '#718096',
  },

  // 预览区域
  previewSection: {
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  previewCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
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
  previewContainer: {
    width: 192,
    height: 192,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
  },
  previewImage: {
    width: '100%',
    height: '100%',
  },
  previewOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  previewOverlayText: {
    color: '#FFFFFF',
    fontSize: 14,
    marginTop: 8,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 4,
  },
  previewDescription: {
    fontSize: 14,
    color: '#718096',
    textAlign: 'center',
  },

  // 主题风格
  themeScrollView: {
    flexGrow: 0,
  },
  themeScrollContent: {
    paddingRight: 16,
  },
  themeButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    marginRight: 12,
  },
  themeButtonSelected: {
    backgroundColor: '#E8B4B8',
  },
  themeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#718096',
  },
  themeButtonTextSelected: {
    color: '#FFFFFF',
  },

  // 花材选择
  flowerGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  flowerItem: {
    width: '30%',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
  },
  flowerItemSelected: {
    borderColor: '#E8B4B8',
    backgroundColor: 'rgba(232, 180, 184, 0.05)',
  },
  flowerImage: {
    width: '100%',
    height: 64,
    borderRadius: 8,
    marginBottom: 8,
  },
  flowerName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 4,
  },
  flowerDescription: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 8,
  },
  flowerFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  flowerPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },

  // 花束尺寸
  sizeList: {
    gap: 12,
  },
  sizeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 16,
  },
  sizeItemSelected: {
    borderColor: '#E8B4B8',
    backgroundColor: 'rgba(232, 180, 184, 0.05)',
  },
  sizeLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  sizeIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  sizeInfo: {
    flex: 1,
  },
  sizeName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 2,
  },
  sizeDescription: {
    fontSize: 14,
    color: '#718096',
  },
  sizeRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sizePrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E8B4B8',
    marginRight: 8,
  },

  // 包装风格
  packageGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  packageItem: {
    width: '30%',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 12,
  },
  packageItemSelected: {
    borderColor: '#E8B4B8',
    backgroundColor: 'rgba(232, 180, 184, 0.05)',
  },
  packageImage: {
    width: '100%',
    height: 64,
    borderRadius: 8,
    marginBottom: 8,
  },
  packageName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 8,
  },
  packageFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  packagePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },

  // 贺卡定制
  greetingInput: {
    height: 96,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 12,
    fontSize: 14,
    color: '#2D3748',
    marginBottom: 12,
  },
  fontOptions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  fontOption: {
    flex: 1,
  },
  fontLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#718096',
    marginBottom: 4,
  },
  fontSelect: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 8,
    padding: 8,
  },
  fontSelectText: {
    fontSize: 14,
    color: '#2D3748',
  },
  greetingNote: {
    fontSize: 14,
    color: '#E8B4B8',
    fontWeight: '500',
    textAlign: 'center',
  },

  // 附加礼品
  giftGrid: {
    gap: 12,
  },
  giftItem: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    padding: 12,
  },
  giftItemSelected: {
    borderColor: '#E8B4B8',
    backgroundColor: 'rgba(232, 180, 184, 0.05)',
  },
  giftImage: {
    width: 48,
    height: 48,
    borderRadius: 8,
    marginRight: 12,
  },
  giftInfo: {
    flex: 1,
  },
  giftName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 2,
  },
  giftDescription: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 2,
  },
  giftPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },

  // 价格明细
  priceList: {
    gap: 12,
  },
  priceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 14,
    color: '#718096',
  },
  priceValue: {
    fontSize: 14,
    color: '#2D3748',
  },
  priceDivider: {
    height: 1,
    backgroundColor: '#E2E8F0',
    marginVertical: 4,
  },
  totalPriceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 4,
  },
  totalPriceLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  totalPriceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E8B4B8',
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
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F7FAFC',
    gap: 12,
  },
  addToCartButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    paddingVertical: 12,
    borderRadius: 16,
    gap: 8,
  },
  addToCartButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
  },
  buyNowButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8B4B8',
    paddingVertical: 12,
    borderRadius: 16,
    gap: 8,
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
  buyNowButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

