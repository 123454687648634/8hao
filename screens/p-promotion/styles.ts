

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
  backButton: {
    padding: 8,
    marginLeft: -8,
  },
  backIcon: {
    fontSize: 20,
    color: '#2D3748',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  headerPlaceholder: {
    width: 40,
  },
  scrollView: {
    flex: 1,
  },
  bannerSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  bannerGradient: {
    borderRadius: 24,
    height: 192,
    position: 'relative',
    overflow: 'hidden',
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#FFFFFF',
    opacity: 0.9,
    marginBottom: 8,
  },
  bannerTag: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    alignSelf: 'flex-start',
  },
  bannerTagText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  bannerBadge: {
    position: 'absolute',
    top: 16,
    right: 16,
    backgroundColor: '#FF8A80',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  bannerBadgeText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  section: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  sectionSubtitle: {
    fontSize: 14,
    color: '#718096',
  },
  flowersContainer: {
    gap: 16,
  },
  flowerCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    flexDirection: 'row',
    overflow: 'hidden',
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
  flowerImage: {
    width: 128,
    height: 128,
  },
  flowerInfo: {
    flex: 1,
    padding: 16,
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
  flowerPriceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  flowerPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  flowerOriginalPrice: {
    fontSize: 14,
    color: '#A0AEC0',
    textDecorationLine: 'line-through',
  },
  discountBadge: {
    backgroundColor: '#FF8A80',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  discountText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  flowerFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  starIcon: {
    fontSize: 14,
    color: '#F4D03F',
    marginRight: 4,
  },
  ratingText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  customizeButton: {
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
        elevation: 4,
      },
    }),
  },
  customizeButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  couponsContainer: {
    gap: 16,
  },
  couponCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderColor: '#E8B4B8',
    borderStyle: 'dashed',
  },
  couponContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 16,
  },
  couponDiscount: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 80,
  },
  couponValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  couponCondition: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  couponInfo: {
    flex: 1,
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
    marginBottom: 4,
  },
  couponExpiry: {
    fontSize: 12,
    color: '#A0AEC0',
  },
  couponButton: {
    backgroundColor: '#E8B4B8',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  couponButtonClaimed: {
    backgroundColor: '#CBD5E0',
  },
  couponButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  couponButtonTextClaimed: {
    color: '#718096',
  },
  rulesCard: {
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
  rulesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 16,
  },
  rulesList: {
    gap: 12,
  },
  ruleItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  ruleBullet: {
    fontSize: 14,
    color: '#E8B4B8',
    marginTop: 1,
  },
  ruleText: {
    fontSize: 14,
    color: '#718096',
    flex: 1,
    lineHeight: 20,
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
    maxWidth: 320,
    width: '100%',
    alignItems: 'center',
  },
  modalIcon: {
    width: 64,
    height: 64,
    backgroundColor: 'rgba(168, 230, 207, 0.2)',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  checkIcon: {
    fontSize: 24,
    color: '#A8E6CF',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 8,
  },
  modalMessage: {
    fontSize: 14,
    color: '#718096',
    textAlign: 'center',
    marginBottom: 16,
  },
  modalButton: {
    backgroundColor: '#E8B4B8',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 12,
    width: '100%',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

