

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 16,
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  orderInfo: {
    flex: 1,
  },
  orderIdRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  orderIdLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
  },
  orderTime: {
    fontSize: 12,
    color: '#718096',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    fontSize: 14,
    fontWeight: '600',
  },
  statusPending: {
    color: '#F4D03F',
  },
  statusProcessing: {
    color: '#E8B4B8',
  },
  statusShipping: {
    color: '#A8E6CF',
  },
  statusCompleted: {
    color: '#48BB78',
  },
  statusCancelled: {
    color: '#A0AEC0',
  },
  itemsContainer: {
    marginBottom: 16,
    gap: 12,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  itemQuantity: {
    fontSize: 12,
    color: '#718096',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2D3748',
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  amountContainer: {
    alignItems: 'flex-end',
  },
  itemCount: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 4,
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  actionButtonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  primaryButton: {
    backgroundColor: '#E8B4B8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
  secondaryButton: {
    backgroundColor: '#F7FAFC',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  secondaryButtonText: {
    color: '#718096',
    fontSize: 14,
    fontWeight: '600',
  },
});

