

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
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
  scrollView: {
    flex: 1,
  },
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
  statusCard: {
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
  statusIconContainer: {
    width: 80,
    height: 80,
    backgroundColor: 'rgba(232, 180, 184, 0.1)',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  statusText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E8B4B8',
    marginBottom: 8,
  },
  statusDescription: {
    fontSize: 14,
    color: '#718096',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  orderNumberContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  orderNumber: {
    fontSize: 12,
    color: '#A0AEC0',
    marginLeft: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 24,
  },
  timeline: {
    position: 'relative',
  },
  timelineItem: {
    position: 'relative',
    paddingBottom: 24,
  },
  timelineContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  timelineDot: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    zIndex: 10,
  },
  timelineInfo: {
    flex: 1,
  },
  timelineTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 4,
  },
  timelineDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 4,
    lineHeight: 20,
  },
  timelineTime: {
    fontSize: 12,
    color: '#A0AEC0',
  },
  timelineLine: {
    position: 'absolute',
    left: 19,
    top: 40,
    bottom: 0,
    width: 2,
    backgroundColor: '#E2E8F0',
  },
  orderItems: {
    marginBottom: 16,
  },
  orderItem: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  orderItemImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 16,
  },
  orderItemInfo: {
    flex: 1,
  },
  orderItemName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 4,
  },
  orderItemDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
    lineHeight: 20,
  },
  orderItemFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  orderItemQuantity: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  orderItemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  priceSummary: {
    borderTopWidth: 1,
    borderTopColor: '#F7FAFC',
    paddingTop: 16,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  priceLabel: {
    fontSize: 14,
    color: '#718096',
  },
  priceValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3748',
  },
  discountValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#A8E6CF',
  },
  totalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
    paddingTop: 8,
    borderTopWidth: 1,
    borderTopColor: '#F7FAFC',
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
  },
  totalValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  deliveryInfo: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  deliveryIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(232, 180, 184, 0.1)',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    flexShrink: 0,
  },
  deliveryDetails: {
    flex: 1,
  },
  recipientInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  recipientName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginRight: 8,
  },
  recipientPhone: {
    fontSize: 14,
    color: '#718096',
  },
  deliveryAddress: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
  },
  bottomSpacing: {
    height: 100,
  },
  bottomActions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F7FAFC',
    padding: 16,
    flexDirection: 'row',
    gap: 12,
    ...Platform.select({
      ios: {
        paddingBottom: 34,
      },
      android: {
        paddingBottom: 16,
      },
    }),
  },
  contactButton: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  contactButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginLeft: 8,
  },
  modifyButton: {
    flex: 1,
    backgroundColor: '#F4D03F',
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#F4D03F',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  modifyButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#FF8A80',
    paddingVertical: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#FF8A80',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
    marginLeft: 8,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    marginHorizontal: 16,
    width: '100%',
    maxWidth: 320,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 24,
    lineHeight: 20,
  },
  modalActions: {
    flexDirection: 'row',
    gap: 12,
  },
  modalCancelButton: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalCancelText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
  },
  modalConfirmButton: {
    flex: 1,
    backgroundColor: '#FF8A80',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalConfirmText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  modalOkButton: {
    width: '100%',
    backgroundColor: '#E8B4B8',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  modalOkText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  successIconContainer: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(168, 230, 207, 0.1)',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
});

