

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  containerWithBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#F7FAFC',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 14,
    color: '#718096',
  },
  rightContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightText: {
    fontSize: 14,
    color: '#718096',
  },
});

