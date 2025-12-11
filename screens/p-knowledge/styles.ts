

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    textAlign: 'center',
  },
  headerPlaceholder: {
    width: 36,
  },
  categoryNav: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F7FAFC',
  },
  categoryNavContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  categoryTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  categoryTabActive: {
    backgroundColor: '#E8B4B8',
  },
  categoryTabInactive: {
    backgroundColor: '#F7FAFC',
  },
  categoryTabText: {
    fontSize: 14,
    fontWeight: '500',
  },
  categoryTabTextActive: {
    color: '#FFFFFF',
  },
  categoryTabTextInactive: {
    color: '#718096',
  },
  mainContent: {
    flex: 1,
  },
  contentContainer: {
    padding: 16,
    gap: 16,
  },
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 32,
  },
  loadingSpinner: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#F3F3F3',
    borderTopColor: '#E8B4B8',
    borderRadius: 10,
  },
  loadingText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#718096',
  },
  errorContainer: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
  errorText: {
    marginTop: 16,
    fontSize: 16,
    color: '#718096',
    marginBottom: 16,
  },
  retryButton: {
    backgroundColor: '#E8B4B8',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 12,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
  },
  // 图文教程样式
  tutorialCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
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
  tutorialImage: {
    width: '100%',
    height: 160,
  },
  tutorialContent: {
    padding: 16,
  },
  tutorialTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  tutorialDescription: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
    marginBottom: 12,
  },
  tutorialFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tutorialDate: {
    fontSize: 12,
    color: '#A0AEC0',
  },
  tutorialViews: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  tutorialViewsText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  // 花语百科样式
  languageCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
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
  languageImage: {
    width: 64,
    height: 64,
    borderRadius: 12,
    marginRight: 16,
  },
  languageContent: {
    flex: 1,
  },
  languageTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  languageMeaning: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  languageDescription: {
    fontSize: 12,
    color: '#A0AEC0',
    lineHeight: 16,
  },
  // 季节推荐样式
  seasonCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
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
  seasonImage: {
    width: '100%',
    height: 160,
  },
  seasonContent: {
    padding: 16,
  },
  seasonTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  seasonDescription: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
    marginBottom: 12,
  },
  seasonTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  seasonTag: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  seasonTagText: {
    fontSize: 12,
    fontWeight: '500',
  },
  // 节日指南样式
  festivalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
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
  festivalImage: {
    width: '100%',
    height: 160,
  },
  festivalContent: {
    padding: 16,
  },
  festivalTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 8,
  },
  festivalDescription: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
    marginBottom: 12,
  },
  festivalFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  festivalDate: {
    fontSize: 12,
    color: '#A0AEC0',
  },
  festivalTag: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  festivalTagText: {
    fontSize: 14,
    fontWeight: '500',
  },
});

