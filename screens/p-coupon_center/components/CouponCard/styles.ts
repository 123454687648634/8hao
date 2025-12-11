

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  couponCardContainer: {
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
  couponCard: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  couponCardUsed: {
    backgroundColor: '#F7FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E0',
    opacity: 0.7,
  },
  couponCardExpired: {
    backgroundColor: '#F7FAFC',
    borderWidth: 1,
    borderColor: '#CBD5E0',
    opacity: 0.5,
  },
  couponContent: {
    flexDirection: 'row',
  },
  couponDiscount: {
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 96,
  },
  couponDiscountUsed: {
    backgroundColor: '#A0AEC0',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 96,
  },
  couponDiscountExpired: {
    backgroundColor: '#A0AEC0',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 96,
  },
  discountContent: {
    alignItems: 'center',
  },
  discountValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  discountValueFreeShipping: {
    fontSize: 16,
  },
  discountUnitLarge: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  discountUnitSmall: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  couponInfo: {
    flex: 1,
    marginLeft: 16,
  },
  couponTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  couponDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  couponTime: {
    fontSize: 12,
    color: '#A0AEC0',
    marginBottom: 12,
  },
  useButton: {
    backgroundColor: '#E8B4B8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    alignSelf: 'flex-start',
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
  useButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusIcon: {
    marginRight: 8,
  },
  statusText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
});

