

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 80,
  },
  toast: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#A8E6CF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
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
  icon: {
    marginRight: 8,
  },
  message: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
});

