

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
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
  backButton: {
    marginRight: 16,
    padding: 8,
    marginLeft: -8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  tabSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    gap: 12,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#E8B4B8',
  },
  tabButtonInactive: {
    backgroundColor: '#F7FAFC',
  },
  tabButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  tabButtonTextActive: {
    color: '#FFFFFF',
  },
  tabButtonTextInactive: {
    color: '#718096',
  },
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
  },
  couponList: {
    paddingBottom: 32,
    gap: 16,
  },
  emptyStateContainer: {
    alignItems: 'center',
    paddingVertical: 64,
  },
  emptyStateIcon: {
    width: 96,
    height: 96,
    backgroundColor: '#F7FAFC',
    borderRadius: 48,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  emptyStateTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 8,
  },
  emptyStateDescription: {
    fontSize: 14,
    color: '#718096',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
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
  },
  modalConfirmButton: {
    backgroundColor: '#E8B4B8',
    paddingHorizontal: 24,
    paddingVertical: 12,
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
  modalConfirmButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
});

