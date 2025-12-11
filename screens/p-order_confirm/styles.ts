

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
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 16,
  },
  
  // 订单商品列表
  orderItemsList: {
    gap: 16,
  },
  orderItemContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  orderItemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  orderItemDetails: {
    flex: 1,
  },
  orderItemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  orderItemDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  orderItemSpecs: {
    gap: 4,
    marginBottom: 12,
  },
  orderItemSpec: {
    fontSize: 14,
    color: '#718096',
  },
  orderItemPriceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderItemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  orderItemQuantity: {
    fontSize: 14,
    color: '#718096',
  },
  orderItemDivider: {
    height: 1,
    backgroundColor: '#F7FAFC',
    marginVertical: 16,
  },
  
  // 配送信息
  deliveryAddressButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    marginBottom: 24,
  },
  deliveryAddressLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  deliveryAddressIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(232, 180, 184, 0.1)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deliveryAddressInfo: {
    flex: 1,
  },
  deliveryAddressNameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 4,
  },
  deliveryAddressName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
  },
  deliveryAddressPhone: {
    fontSize: 14,
    color: '#718096',
  },
  deliveryAddressText: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
  },
  
  // 配送时间
  deliveryTimeSection: {
    gap: 12,
  },
  deliveryTimeTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
  },
  deliveryTimeOptions: {
    flexDirection: 'row',
    gap: 12,
  },
  deliveryTimeOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  deliveryTimeOptionSelected: {
    backgroundColor: '#E8B4B8',
    borderColor: '#E8B4B8',
  },
  deliveryTimeOptionText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#718096',
  },
  deliveryTimeOptionTextSelected: {
    color: '#FFFFFF',
  },
  
  // 支付方式
  paymentOptions: {
    gap: 12,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  paymentOptionSelected: {
    borderColor: '#E8B4B8',
    backgroundColor: 'rgba(232, 180, 184, 0.05)',
  },
  paymentOptionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  paymentOptionIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paymentOptionText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
  },
  
  // 费用明细
  costDetails: {
    gap: 12,
  },
  costDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  costDetailLabel: {
    fontSize: 14,
    color: '#718096',
  },
  costDetailValue: {
    fontSize: 14,
    color: '#2D3748',
  },
  costDetailDiscount: {
    fontSize: 14,
    color: '#07C160',
  },
  costDetailDivider: {
    height: 1,
    backgroundColor: '#F7FAFC',
    marginVertical: 4,
  },
  costDetailTotalLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
  },
  costDetailTotalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  
  // 优惠券
  couponButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  couponLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  couponIcon: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(244, 208, 63, 0.1)',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponInfo: {
    gap: 2,
  },
  couponTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
  },
  couponDescription: {
    fontSize: 14,
    color: '#718096',
  },
  
  // 底部操作栏
  bottomSpacing: {
    height: 100,
  },
  bottomAction: {
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
  bottomAmountRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 12,
  },
  bottomAmountLabel: {
    fontSize: 14,
    color: '#718096',
  },
  bottomAmountValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  submitButton: {
    backgroundColor: '#E8B4B8',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
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
        shadowColor: '#CBD5E0',
        shadowOpacity: 0.2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});

