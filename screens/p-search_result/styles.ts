

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  
  // 顶部导航栏
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
    padding: 8,
    marginRight: 12,
    marginLeft: -8,
  },
  
  searchContainer: {
    flex: 1,
  },
  
  searchInputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7FAFC',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  
  searchIcon: {
    marginRight: 12,
  },
  
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#2D3748',
  },
  
  searchButton: {
    marginLeft: 12,
  },
  
  searchButtonText: {
    fontSize: 14,
    color: '#E8B4B8',
    fontWeight: '500',
  },
  
  // 筛选和排序区域
  filterSection: {
    backgroundColor: '#FFFFFF',
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
  
  sortScrollView: {
    marginBottom: 12,
  },
  
  sortOptions: {
    flexDirection: 'row',
    gap: 8,
  },
  
  sortTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
    backgroundColor: '#F7FAFC',
  },
  
  sortTabActive: {
    backgroundColor: '#E8B4B8',
  },
  
  sortTabText: {
    fontSize: 14,
    color: '#718096',
    fontWeight: '500',
  },
  
  sortTabTextActive: {
    color: '#FFFFFF',
  },
  
  filterOptions: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#F7FAFC',
    borderRadius: 12,
    gap: 8,
  },
  
  filterButtonText: {
    fontSize: 14,
    color: '#2D3748',
  },
  
  clearButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
  },
  
  clearButtonText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  
  selectedFilters: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  
  filterTag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    gap: 8,
  },
  
  categoryTag: {
    backgroundColor: '#E8B4B8',
  },
  
  colorTag: {
    backgroundColor: '#F4D03F',
  },
  
  filterTagText: {
    fontSize: 12,
    color: '#FFFFFF',
  },
  
  filterTagRemove: {
    padding: 2,
  },
  
  // 搜索结果区域
  mainContent: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  
  searchStats: {
    marginBottom: 16,
  },
  
  searchStatsText: {
    fontSize: 14,
    color: '#718096',
  },
  
  resultCount: {
    color: '#E8B4B8',
    fontWeight: '500',
  },
  
  // 花材列表
  flowerList: {
    paddingBottom: 20,
  },
  
  flowerRow: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  
  flowerItem: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 8,
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
  
  flowerItemRight: {
    marginRight: 0,
    marginLeft: 8,
  },
  
  flowerImageContainer: {
    height: 128,
    backgroundColor: '#F7FAFC',
  },
  
  flowerImagePlaceholder: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  flowerInfo: {
    padding: 16,
  },
  
  flowerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginBottom: 4,
  },
  
  flowerCategory: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 8,
  },
  
  flowerPriceRating: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  
  flowerPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E8B4B8',
  },
  
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  
  ratingText: {
    fontSize: 14,
    color: '#A0AEC0',
  },
  
  newBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#FF8A80',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  
  newBadgeText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  
  // 无结果状态
  noResults: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 64,
  },
  
  noResultsIcon: {
    width: 96,
    height: 96,
    backgroundColor: '#F7FAFC',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  
  noResultsTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#2D3748',
    marginBottom: 8,
  },
  
  noResultsSubtitle: {
    fontSize: 14,
    color: '#718096',
    marginBottom: 16,
    textAlign: 'center',
  },
  
  browseHotButton: {
    backgroundColor: '#E8B4B8',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 12,
  },
  
  browseHotButtonText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  
  // 筛选弹窗
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '70%',
  },
  
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2D3748',
  },
  
  modalOptions: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  
  modalOption: {
    paddingVertical: 12,
  },
  
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#E2E8F0',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  checkboxSelected: {
    backgroundColor: '#E8B4B8',
    borderColor: '#E8B4B8',
  },
  
  optionText: {
    fontSize: 16,
    color: '#2D3748',
  },
});

