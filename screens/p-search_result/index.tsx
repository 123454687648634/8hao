

import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Modal, ScrollView, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface FlowerItem {
  id: string;
  name: string;
  category: string;
  color: string;
  price: number;
  rating: number;
  sales: number;
  isNew: boolean;
  image: string;
}

interface FilterState {
  categories: string[];
  colors: string[];
}

type SortType = 'default' | 'price-low' | 'price-high' | 'sales' | 'new';

const mockFlowers: FlowerItem[] = [
  {
    id: '1',
    name: '经典红玫瑰束',
    category: '玫瑰',
    color: '红色',
    price: 168,
    rating: 4.9,
    sales: 1250,
    isNew: false,
    image: 'https://s.coze.cn/image/INrwGVJ4irI/'
  },
  {
    id: '2',
    name: '清新白百合束',
    category: '百合',
    color: '白色',
    price: 128,
    rating: 4.8,
    sales: 890,
    isNew: false,
    image: 'https://s.coze.cn/image/YwtjAZTCZvE/'
  },
  {
    id: '3',
    name: '粉玫瑰浪漫束',
    category: '玫瑰',
    color: '粉色',
    price: 148,
    rating: 4.7,
    sales: 650,
    isNew: false,
    image: 'https://s.coze.cn/image/pNlsuNKqJDQ/'
  },
  {
    id: '4',
    name: '阳光向日葵束',
    category: '向日葵',
    color: '黄色',
    price: 99,
    rating: 4.6,
    sales: 420,
    isNew: false,
    image: 'https://s.coze.cn/image/FGv56ufHxo4/'
  },
  {
    id: '5',
    name: '优雅郁金香束',
    category: '郁金香',
    color: '紫色',
    price: 118,
    rating: 4.8,
    sales: 380,
    isNew: false,
    image: 'https://s.coze.cn/image/fvrcT2PwUio/'
  },
  {
    id: '6',
    name: '感恩康乃馨束',
    category: '康乃馨',
    color: '粉色',
    price: 88,
    rating: 4.5,
    sales: 720,
    isNew: false,
    image: 'https://s.coze.cn/image/KOpWCUl6uzw/'
  },
  {
    id: '7',
    name: '新品紫玫瑰束',
    category: '玫瑰',
    color: '紫色',
    price: 188,
    rating: 4.9,
    sales: 120,
    isNew: true,
    image: 'https://s.coze.cn/image/oURzAIOkba8/'
  },
  {
    id: '8',
    name: '香槟玫瑰束',
    category: '玫瑰',
    color: '粉色',
    price: 158,
    rating: 4.7,
    sales: 290,
    isNew: false,
    image: 'https://s.coze.cn/image/9LsVP-ZYY48/'
  }
];

const categoryOptions = ['玫瑰', '百合', '康乃馨', '郁金香', '向日葵'];
const colorOptions = ['红色', '白色', '粉色', '黄色', '紫色'];

export default function SearchResultScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const [currentResults, setCurrentResults] = useState<FlowerItem[]>([]);
  const [filteredResults, setFilteredResults] = useState<FlowerItem[]>([]);
  const [currentFilters, setCurrentFilters] = useState<FilterState>({
    categories: [],
    colors: []
  });
  const [currentSort, setCurrentSort] = useState<SortType>('default');
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);
  const [isColorDropdownVisible, setIsColorDropdownVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (params.keyword && typeof params.keyword === 'string') {
      setSearchKeyword(params.keyword);
      performSearch(params.keyword);
    }
  }, [params.keyword]);

  const performSearch = (keyword: string) => {
    setIsLoading(true);
    
    // 模拟搜索延迟
    setTimeout(() => {
      const results = mockFlowers.filter(flower => 
        flower.name.toLowerCase().includes(keyword.toLowerCase()) ||
        flower.category.toLowerCase().includes(keyword.toLowerCase()) ||
        flower.color.toLowerCase().includes(keyword.toLowerCase())
      );
      
      setCurrentResults(results);
      applyFiltersAndSort(results, currentFilters, currentSort);
      setIsLoading(false);
    }, 300);
  };

  const applyFiltersAndSort = (results: FlowerItem[], filters: FilterState, sortType: SortType) => {
    let filtered = [...results];
    
    // 应用筛选
    if (filters.categories.length > 0) {
      filtered = filtered.filter(flower => 
        filters.categories.includes(flower.category)
      );
    }
    
    if (filters.colors.length > 0) {
      filtered = filtered.filter(flower => 
        filters.colors.includes(flower.color)
      );
    }
    
    // 应用排序
    switch (sortType) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'sales':
        filtered.sort((a, b) => b.sales - a.sales);
        break;
      case 'new':
        filtered.sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      default:
        break;
    }
    
    setFilteredResults(filtered);
  };

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/p-home');
    }
  };

  const handleSearchPress = () => {
    if (searchKeyword.trim()) {
      performSearch(searchKeyword.trim());
    }
  };

  const handleSortPress = (sortType: SortType) => {
    setCurrentSort(sortType);
    applyFiltersAndSort(currentResults, currentFilters, sortType);
  };

  const handleCategoryFilterToggle = (category: string) => {
    const newCategories = currentFilters.categories.includes(category)
      ? currentFilters.categories.filter(c => c !== category)
      : [...currentFilters.categories, category];
    
    const newFilters = { ...currentFilters, categories: newCategories };
    setCurrentFilters(newFilters);
    applyFiltersAndSort(currentResults, newFilters, currentSort);
  };

  const handleColorFilterToggle = (color: string) => {
    const newColors = currentFilters.colors.includes(color)
      ? currentFilters.colors.filter(c => c !== color)
      : [...currentFilters.colors, color];
    
    const newFilters = { ...currentFilters, colors: newColors };
    setCurrentFilters(newFilters);
    applyFiltersAndSort(currentResults, newFilters, currentSort);
  };

  const handleClearFilters = () => {
    const newFilters = { categories: [], colors: [] };
    setCurrentFilters(newFilters);
    applyFiltersAndSort(currentResults, newFilters, currentSort);
  };

  const handleRemoveFilter = (type: 'categories' | 'colors', value: string) => {
    const newFilters = {
      ...currentFilters,
      [type]: currentFilters[type].filter(item => item !== value)
    };
    setCurrentFilters(newFilters);
    applyFiltersAndSort(currentResults, newFilters, currentSort);
  };

  const handleFlowerItemPress = (flowerId: string) => {
    router.push(`/p-flower_detail?material_id=${flowerId}`);
  };

  const handleBrowseHotPress = () => {
    router.push('/p-home');
  };

  const renderFlowerItem = ({ item, index }: { item: FlowerItem; index: number }) => (
    <TouchableOpacity
      style={[styles.flowerItem, index % 2 === 1 && styles.flowerItemRight]}
      onPress={() => handleFlowerItemPress(item.id)}
      activeOpacity={0.8}
    >
      <View style={styles.flowerImageContainer}>
        <View style={styles.flowerImagePlaceholder}>
          <FontAwesome6 name="image" size={24} color="#A0AEC0" />
        </View>
      </View>
      <View style={styles.flowerInfo}>
        <Text style={styles.flowerName} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.flowerCategory} numberOfLines={1}>
          {item.category} · {item.color}
        </Text>
        <View style={styles.flowerPriceRating}>
          <Text style={styles.flowerPrice}>¥{item.price}</Text>
          <View style={styles.ratingContainer}>
            <FontAwesome6 name="star" size={12} color="#F4D03F" solid />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
        {item.isNew && (
          <View style={styles.newBadge}>
            <Text style={styles.newBadgeText}>新品</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const renderFilterModal = (
    visible: boolean,
    onClose: () => void,
    title: string,
    options: string[],
    selectedOptions: string[],
    onToggle: (option: string) => void
  ) => (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableOpacity style={styles.modalOverlay} onPress={onClose} activeOpacity={1}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>{title}</Text>
            <TouchableOpacity onPress={onClose}>
              <FontAwesome6 name="xmark" size={20} color="#718096" />
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.modalOptions}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                style={styles.modalOption}
                onPress={() => onToggle(option)}
              >
                <View style={styles.checkboxContainer}>
                  <View style={[
                    styles.checkbox,
                    selectedOptions.includes(option) && styles.checkboxSelected
                  ]}>
                    {selectedOptions.includes(option) && (
                      <FontAwesome6 name="check" size={12} color="#FFFFFF" />
                    )}
                  </View>
                  <Text style={styles.optionText}>{option}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </TouchableOpacity>
    </Modal>
  );

  const renderSelectedFilterTag = (type: 'categories' | 'colors', value: string, index: number) => (
    <View key={`${type}-${value}-${index}`} style={[
      styles.filterTag,
      type === 'categories' ? styles.categoryTag : styles.colorTag
    ]}>
      <Text style={styles.filterTagText}>{value}</Text>
      <TouchableOpacity
        style={styles.filterTagRemove}
        onPress={() => handleRemoveFilter(type, value)}
      >
        <FontAwesome6 name="xmark" size={10} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        
        <View style={styles.searchContainer}>
          <View style={styles.searchInputWrapper}>
            <FontAwesome6 name="magnifying-glass" size={14} color="#A0AEC0" style={styles.searchIcon} />
            <TextInput
              style={styles.searchInput}
              placeholder="搜索花材、花语..."
              placeholderTextColor="#A0AEC0"
              value={searchKeyword}
              onChangeText={setSearchKeyword}
              onSubmitEditing={handleSearchPress}
              returnKeyType="search"
            />
            <TouchableOpacity style={styles.searchButton} onPress={handleSearchPress}>
              <Text style={styles.searchButtonText}>搜索</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* 筛选和排序区域 */}
      <View style={styles.filterSection}>
        {/* 排序选项 */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sortScrollView}>
          <View style={styles.sortOptions}>
            <TouchableOpacity
              style={[styles.sortTab, currentSort === 'default' && styles.sortTabActive]}
              onPress={() => handleSortPress('default')}
            >
              <Text style={[styles.sortTabText, currentSort === 'default' && styles.sortTabTextActive]}>
                默认
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sortTab, currentSort === 'price-low' && styles.sortTabActive]}
              onPress={() => handleSortPress('price-low')}
            >
              <Text style={[styles.sortTabText, currentSort === 'price-low' && styles.sortTabTextActive]}>
                价格↓
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sortTab, currentSort === 'price-high' && styles.sortTabActive]}
              onPress={() => handleSortPress('price-high')}
            >
              <Text style={[styles.sortTabText, currentSort === 'price-high' && styles.sortTabTextActive]}>
                价格↑
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sortTab, currentSort === 'sales' && styles.sortTabActive]}
              onPress={() => handleSortPress('sales')}
            >
              <Text style={[styles.sortTabText, currentSort === 'sales' && styles.sortTabTextActive]}>
                销量
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.sortTab, currentSort === 'new' && styles.sortTabActive]}
              onPress={() => handleSortPress('new')}
            >
              <Text style={[styles.sortTabText, currentSort === 'new' && styles.sortTabTextActive]}>
                新品
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        
        {/* 筛选选项 */}
        <View style={styles.filterOptions}>
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => {
              setIsCategoryDropdownVisible(true);
              setIsColorDropdownVisible(false);
            }}
          >
            <Text style={styles.filterButtonText}>花材种类</Text>
            <FontAwesome6 name="chevron-down" size={12} color="#2D3748" />
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => {
              setIsColorDropdownVisible(true);
              setIsCategoryDropdownVisible(false);
            }}
          >
            <Text style={styles.filterButtonText}>颜色</Text>
            <FontAwesome6 name="chevron-down" size={12} color="#2D3748" />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.clearButton} onPress={handleClearFilters}>
            <Text style={styles.clearButtonText}>清除</Text>
          </TouchableOpacity>
        </View>
        
        {/* 已选筛选条件 */}
        {(currentFilters.categories.length > 0 || currentFilters.colors.length > 0) && (
          <View style={styles.selectedFilters}>
            {currentFilters.categories.map((category, index) =>
              renderSelectedFilterTag('categories', category, index)
            )}
            {currentFilters.colors.map((color, index) =>
              renderSelectedFilterTag('colors', color, index)
            )}
          </View>
        )}
      </View>

      {/* 搜索结果区域 */}
      <View style={styles.mainContent}>
        {/* 搜索结果统计 */}
        <View style={styles.searchStats}>
          <Text style={styles.searchStatsText}>
            找到 <Text style={styles.resultCount}>{filteredResults.length}</Text> 个相关结果
          </Text>
        </View>
        
        {/* 搜索结果列表 */}
        {filteredResults.length > 0 ? (
          <FlatList
            data={filteredResults}
            renderItem={renderFlowerItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            columnWrapperStyle={styles.flowerRow}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.flowerList}
          />
        ) : (
          <View style={styles.noResults}>
            <View style={styles.noResultsIcon}>
              <FontAwesome6 name="magnifying-glass" size={48} color="#A0AEC0" />
            </View>
            <Text style={styles.noResultsTitle}>暂无搜索结果</Text>
            <Text style={styles.noResultsSubtitle}>试试其他关键词或浏览热门花材</Text>
            <TouchableOpacity style={styles.browseHotButton} onPress={handleBrowseHotPress}>
              <Text style={styles.browseHotButtonText}>浏览热门</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* 筛选弹窗 */}
      {renderFilterModal(
        isCategoryDropdownVisible,
        () => setIsCategoryDropdownVisible(false),
        '花材种类',
        categoryOptions,
        currentFilters.categories,
        handleCategoryFilterToggle
      )}
      
      {renderFilterModal(
        isColorDropdownVisible,
        () => setIsColorDropdownVisible(false),
        '颜色',
        colorOptions,
        currentFilters.colors,
        handleColorFilterToggle
      )}
    </SafeAreaView>
  );
}

