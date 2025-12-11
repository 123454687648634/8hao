

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  tabsWrapper: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 8,
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
  tabsContainer: {
    gap: 8,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    minWidth: 60,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#E8B4B8',
  },
  tabButtonInactive: {
    backgroundColor: '#F7FAFC',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  tabTextActive: {
    color: '#FFFFFF',
  },
  tabTextInactive: {
    color: '#718096',
  },
});

