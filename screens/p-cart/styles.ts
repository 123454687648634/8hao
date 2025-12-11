

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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  editButton: {
    fontSize: 14,
    fontWeight: '500',
    color: '#E8B4B8',
  },
  mainContent: {
    flex: 1,
    paddingBottom: 100,
  },
  cartItemsContainer: {
    padding: 16,
  },
  cartItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
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
  cartItemContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
  },
  checkboxContainer: {
    marginTop: 8,
    marginRight: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxSelected: {
    backgroundColor: '#E8B4B8',
    borderColor: '#E8B4B8',
  },
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  customizationsContainer: {
    backgroundColor: '#F7FAFC',
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
  },
  customizationText: {
    fontSize: 12,
    color: '#718096',
    marginBottom: 2,
  },
  priceQuantityRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: '#F7FAFC',
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityButtonDisabled: {
    opacity: 0.5,
  },
  quantityButtonIncrease: {
    backgroundColor: '#E8B4B8',
  },
  quantityText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginHorizontal: 16,
    minWidth: 24,
    textAlign: 'center',
  },
  deleteButton: {
    padding: 8,
    marginLeft: 8,
  },
  emptyCartContainer: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartContent: {
    backgroundColor: '#E8B4B8',
    borderRadius: 24,
    padding: 32,
    alignItems: 'center',
    width: '100%',
    maxWidth: 320,
  },
  emptyCartTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyCartDescription: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 24,
  },
  goShoppingButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 12,
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
  goShoppingButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#E8B4B8',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F7FAFC',
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: Platform.select({
      ios: 34,
      android: 16,
    }),
  },
  bottomBarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  bottomBarLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectAllContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  selectAllCheckbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#D1D5DB',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginRight: 8,
  },
  selectAllCheckboxSelected: {
    backgroundColor: '#E8B4B8',
    borderColor: '#E8B4B8',
  },
  selectAllText: {
    fontSize: 14,
    color: '#2D3748',
  },
  deleteSelectedText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FF8A80',
  },
  bottomBarRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  totalContainer: {
    alignItems: 'flex-end',
    marginRight: 16,
  },
  totalLabel: {
    fontSize: 14,
    color: '#718096',
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  checkoutButton: {
    backgroundColor: '#E8B4B8',
    borderRadius: 16,
    paddingHorizontal: 32,
    paddingVertical: 12,
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
  checkoutButtonDisabled: {
    opacity: 0.5,
  },
  checkoutButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
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
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 8,
  },
  modalDescription: {
    fontSize: 16,
    color: '#718096',
    marginBottom: 24,
  },
  modalButtons: {
    flexDirection: 'row',
  },
  modalCancelButton: {
    flex: 1,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
    marginRight: 12,
  },
  modalCancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
  },
  modalConfirmButton: {
    flex: 1,
    backgroundColor: '#FF8A80',
    borderRadius: 12,
    paddingVertical: 12,
    alignItems: 'center',
  },
  modalConfirmButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

