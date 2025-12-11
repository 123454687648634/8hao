

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
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
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

  // 订单金额显示区
  amountSection: {
    paddingHorizontal: 16,
    paddingVertical: 32,
  },
  amountCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
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
  amountLabel: {
    fontSize: 18,
    color: '#718096',
    marginBottom: 8,
  },
  amountValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 16,
  },
  securityBadge: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  securityText: {
    fontSize: 14,
    color: '#718096',
    marginLeft: 8,
  },

  // 支付方式选择区
  paymentMethodsSection: {
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 16,
  },
  paymentMethodsList: {
    gap: 12,
  },
  paymentMethodCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    borderWidth: 2,
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
  paymentMethodSelected: {
    borderColor: '#E8B4B8',
    backgroundColor: 'rgba(232, 180, 184, 0.05)',
  },
  paymentMethodUnselected: {
    borderColor: '#E2E8F0',
    backgroundColor: '#FFFFFF',
  },
  paymentMethodContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  paymentMethodLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  paymentMethodIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  paymentMethodInfo: {
    flex: 1,
  },
  paymentMethodTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 2,
  },
  paymentMethodSubtitle: {
    fontSize: 14,
    color: '#718096',
  },
  radioButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonSelected: {
    borderColor: '#E8B4B8',
    backgroundColor: '#E8B4B8',
  },
  radioButtonUnselected: {
    borderColor: '#CBD5E0',
    backgroundColor: '#FFFFFF',
  },
  radioButtonInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#FFFFFF',
  },

  // 订单信息摘要
  orderSummarySection: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  orderSummaryCard: {
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
  orderSummaryTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 12,
  },
  orderSummaryContent: {
    gap: 8,
  },
  orderSummaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderSummaryLabel: {
    fontSize: 14,
    color: '#718096',
  },
  orderSummaryValue: {
    fontSize: 14,
    color: '#2D3748',
  },
  orderSummaryDiscount: {
    fontSize: 14,
    color: '#A8E6CF',
  },
  orderSummaryDivider: {
    height: 1,
    backgroundColor: '#F7FAFC',
    marginVertical: 4,
  },
  orderSummaryTotalLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3748',
  },
  orderSummaryTotalValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2D3748',
  },

  // 底部操作栏
  bottomSpacing: {
    height: 120,
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
  confirmButton: {
    backgroundColor: '#E8B4B8',
    borderRadius: 16,
    paddingVertical: 16,
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
  confirmButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  // 模态框样式
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 16,
    alignItems: 'center',
    minWidth: 280,
  },
  loadingSpinner: {
    width: 32,
    height: 32,
    borderWidth: 4,
    borderColor: '#E8B4B8',
    borderTopColor: 'transparent',
    borderRadius: 16,
    marginBottom: 12,
  },
  loadingText: {
    fontSize: 16,
    color: '#2D3748',
  },
  toastModal: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 16,
    alignItems: 'center',
    minWidth: 280,
  },
  successIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#A8E6CF',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  failureIcon: {
    width: 64,
    height: 64,
    backgroundColor: '#FF8A80',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  toastTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  toastMessage: {
    fontSize: 14,
    color: '#718096',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  toastButton: {
    backgroundColor: '#E8B4B8',
    borderRadius: 12,
    paddingHorizontal: 24,
    paddingVertical: 8,
  },
  toastButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  toastButtonRow: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  toastButtonSecondary: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  toastButtonSecondaryText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3748',
  },
});

