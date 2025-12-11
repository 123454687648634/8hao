

import React, { useCallback } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { StatusTabsProps, OrderStatus } from '../../types';
import styles from './styles';

const statusOptions: { key: OrderStatus; label: string }[] = [
  { key: 'all', label: '全部' },
  { key: 'pending', label: '待支付' },
  { key: 'processing', label: '待制作' },
  { key: 'shipping', label: '待配送' },
  { key: 'completed', label: '已完成' },
  { key: 'cancelled', label: '已取消' },
];

const StatusTabs: React.FC<StatusTabsProps> = ({
  currentFilter,
  onFilterChange,
}) => {
  const handleTabPress = useCallback((status: OrderStatus) => {
    onFilterChange(status);
  }, [onFilterChange]);

  const renderTab = useCallback((option: { key: OrderStatus; label: string }) => {
    const isActive = currentFilter === option.key;
    
    return (
      <TouchableOpacity
        key={option.key}
        style={[
          styles.tabButton,
          isActive ? styles.tabButtonActive : styles.tabButtonInactive
        ]}
        onPress={() => handleTabPress(option.key)}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.tabText,
            isActive ? styles.tabTextActive : styles.tabTextInactive
          ]}
        >
          {option.label}
        </Text>
      </TouchableOpacity>
    );
  }, [currentFilter, handleTabPress]);

  return (
    <View style={styles.container}>
      <View style={styles.tabsWrapper}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabsContainer}
        >
          {statusOptions.map(renderTab)}
        </ScrollView>
      </View>
    </View>
  );
};

export default StatusTabs;

