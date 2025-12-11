

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
  
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
  },
  
  headerPlaceholder: {
    width: 40,
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
  
  card: {
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
  
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 16,
  },
  
  // 订单商品信息
  orderItemContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  
  flowerImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  
  orderItemInfo: {
    flex: 1,
  },
  
  flowerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  
  flowerDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  
  priceQuantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  flowerPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  
  flowerQuantity: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  
  // 星级评分
  starRatingContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  
  starButton: {
    padding: 4,
  },
  
  overallRatingContainer: {
    alignItems: 'center',
    marginBottom: 16,
  },
  
  ratingText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#718096',
  },
  
  ratingTextActive: {
    color: '#E8B4B8',
  },
  
  // 评价内容输入框
  reviewTextInput: {
    height: 128,
    padding: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    fontSize: 16,
    color: '#2D3748',
    textAlignVertical: 'top',
  },
  
  textInputFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 8,
  },
  
  optionalText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  
  charCount: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  
  charCountWarning: {
    color: '#FF8A80',
  },
  
  // 图片上传
  uploadDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 16,
  },
  
  imagePreviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  
  imagePreviewContainer: {
    position: 'relative',
    width: 80,
    height: 80,
  },
  
  imagePreview: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  
  removeImageButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: 20,
    height: 20,
    backgroundColor: '#FF8A80',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  uploadArea: {
    width: 80,
    height: 80,
    borderWidth: 2,
    borderColor: '#CBD5E0',
    borderStyle: 'dashed',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7FAFC',
  },
  
  uploadText: {
    fontSize: 12,
    color: '#A0AEC0',
    marginTop: 4,
  },
  
  // 配送服务评分
  deliveryRatingContainer: {
    gap: 16,
  },
  
  deliveryRatingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  deliveryRatingLabel: {
    fontSize: 16,
    color: '#2D3748',
  },
  
  // 底部提交按钮
  bottomSpacing: {
    height: 100,
  },
  
  submitSection: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F7FAFC',
    padding: 16,
    paddingBottom: Platform.select({
      ios: 34,
      android: 16,
    }),
  },
  
  submitButton: {
    backgroundColor: '#E8B4B8',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
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
  
  submitButtonDisabled: {
    backgroundColor: '#CBD5E0',
    ...Platform.select({
      ios: {
        shadowOpacity: 0,
      },
      android: {
        elevation: 0,
      },
    }),
  },
  
  submitButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  
  // 成功弹窗
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
  },
  
  successIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(168, 230, 207, 0.2)',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  
  modalDescription: {
    fontSize: 14,
    color: '#718096',
    textAlign: 'center',
    marginBottom: 24,
    lineHeight: 20,
  },
  
  modalButton: {
    backgroundColor: '#E8B4B8',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  
  modalButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

