

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, Modal, Alert, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface CartItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  isSelected: boolean;
  customizations: {
    size: string;
    packaging: string;
    card: string;
  };
}

const CartScreen = () => {
  const router = useRouter();
  
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: '经典红玫瑰束',
      description: '11朵红玫瑰，象征热烈的爱情',
      price: 168,
      quantity: 1,
      image: 'https://s.coze.cn/image/T7q5wPi7msw/',
      isSelected: false,
      customizations: {
        size: '标准',
        packaging: '经典红色',
        card: '生日快乐',
      },
    },
    {
      id: '2',
      name: '清新百合束',
      description: '6朵白百合，纯洁高雅',
      price: 128,
      quantity: 1,
      image: 'https://s.coze.cn/image/NyG7d4qQIJs/',
      isSelected: true,
      customizations: {
        size: '迷你',
        packaging: '简约白色',
        card: '感谢有你',
      },
    },
    {
      id: '3',
      name: '特价康乃馨束',
      description: '12朵粉色康乃馨，温馨感恩',
      price: 88,
      quantity: 2,
      image: 'https://s.coze.cn/image/wBHSl0QL9a8/',
      isSelected: false,
      customizations: {
        size: '标准',
        packaging: '温馨粉色',
        card: '妈妈我爱你',
      },
    },
  ]);

  const [isEditMode, setIsEditMode] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isBatchDeleteModalVisible, setIsBatchDeleteModalVisible] = useState(false);
  const [currentDeleteItemId, setCurrentDeleteItemId] = useState<string | null>(null);

  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  const handleEditPress = useCallback(() => {
    setIsEditMode(!isEditMode);
  }, [isEditMode]);

  const handleItemSelect = useCallback((itemId: string) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, isSelected: !item.isSelected } : item
      )
    );
  }, []);

  const handleSelectAll = useCallback(() => {
    const allSelected = cartItems.every(item => item.isSelected);
    setCartItems(prevItems =>
      prevItems.map(item => ({ ...item, isSelected: !allSelected }))
    );
  }, [cartItems]);

  const handleQuantityChange = useCallback((itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  }, []);

  const handleDeleteItem = useCallback((itemId: string) => {
    setCurrentDeleteItemId(itemId);
    setIsDeleteModalVisible(true);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    if (currentDeleteItemId) {
      setCartItems(prevItems =>
        prevItems.filter(item => item.id !== currentDeleteItemId)
      );
      setCurrentDeleteItemId(null);
    }
    setIsDeleteModalVisible(false);
  }, [currentDeleteItemId]);

  const handleCancelDelete = useCallback(() => {
    setCurrentDeleteItemId(null);
    setIsDeleteModalVisible(false);
  }, []);

  const handleDeleteSelected = useCallback(() => {
    const selectedItems = cartItems.filter(item => item.isSelected);
    if (selectedItems.length > 0) {
      setIsBatchDeleteModalVisible(true);
    }
  }, [cartItems]);

  const handleConfirmBatchDelete = useCallback(() => {
    setCartItems(prevItems =>
      prevItems.filter(item => !item.isSelected)
    );
    setIsBatchDeleteModalVisible(false);
  }, []);

  const handleCancelBatchDelete = useCallback(() => {
    setIsBatchDeleteModalVisible(false);
  }, []);

  const handleCheckout = useCallback(() => {
    const selectedItems = cartItems.filter(item => item.isSelected);
    if (selectedItems.length === 0) {
      Alert.alert('提示', '请选择要结算的商品');
      return;
    }

    const cartItemsParam = encodeURIComponent(JSON.stringify(selectedItems));
    router.push(`/p-order_confirm?cart_items=${cartItemsParam}`);
  }, [cartItems, router]);

  const handleGoShopping = useCallback(() => {
    router.push('/p-home');
  }, [router]);

  const calculateTotal = useCallback(() => {
    return cartItems
      .filter(item => item.isSelected)
      .reduce((total, item) => total + item.price * item.quantity, 0);
  }, [cartItems]);

  const getSelectedCount = useCallback(() => {
    return cartItems.filter(item => item.isSelected).length;
  }, [cartItems]);

  const isAllSelected = useCallback(() => {
    return cartItems.length > 0 && cartItems.every(item => item.isSelected);
  }, [cartItems]);

  const renderCartItem = useCallback((item: CartItem) => (
    <View key={item.id} style={styles.cartItem}>
      <View style={styles.cartItemContent}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={() => handleItemSelect(item.id)}
        >
          <View style={[styles.checkbox, item.isSelected && styles.checkboxSelected]}>
            {item.isSelected && (
              <FontAwesome6 name="check" size={12} color="#FFFFFF" />
            )}
          </View>
        </TouchableOpacity>

        <Image source={{ uri: item.image }} style={styles.productImage} />

        <View style={styles.productInfo}>
          <Text style={styles.productName}>{item.name}</Text>
          <Text style={styles.productDescription}>{item.description}</Text>

          <View style={styles.customizationsContainer}>
            <Text style={styles.customizationText}>尺寸：{item.customizations.size}</Text>
            <Text style={styles.customizationText}>包装：{item.customizations.packaging}</Text>
            <Text style={styles.customizationText}>贺卡：{item.customizations.card}</Text>
          </View>

          <View style={styles.priceQuantityRow}>
            <Text style={styles.price}>¥{item.price}</Text>

            <View style={styles.quantityControls}>
              <TouchableOpacity
                style={[
                  styles.quantityButton,
                  item.quantity <= 1 && styles.quantityButtonDisabled,
                ]}
                onPress={() => handleQuantityChange(item.id, item.quantity - 1)}
                disabled={item.quantity <= 1}
              >
                <FontAwesome6 name="minus" size={12} color={item.quantity <= 1 ? '#A0AEC0' : '#718096'} />
              </TouchableOpacity>

              <Text style={styles.quantityText}>{item.quantity}</Text>

              <TouchableOpacity
                style={[styles.quantityButton, styles.quantityButtonIncrease]}
                onPress={() => handleQuantityChange(item.id, item.quantity + 1)}
              >
                <FontAwesome6 name="plus" size={12} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteItem(item.id)}
        >
          <FontAwesome6 name="trash" size={18} color="#A0AEC0" />
        </TouchableOpacity>
      </View>
    </View>
  ), [handleItemSelect, handleQuantityChange, handleDeleteItem]);

  const renderEmptyCart = () => (
    <View style={styles.emptyCartContainer}>
      <View style={styles.emptyCartContent}>
        <FontAwesome6 name="bag-shopping" size={60} color="#FFFFFF" />
        <Text style={styles.emptyCartTitle}>购物车空空如也</Text>
        <Text style={styles.emptyCartDescription}>快去挑选你喜欢的花束吧</Text>
        <TouchableOpacity style={styles.goShoppingButton} onPress={handleGoShopping}>
          <Text style={styles.goShoppingButtonText}>去逛逛</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>购物车</Text>
        <TouchableOpacity onPress={handleEditPress}>
          <Text style={styles.editButton}>{isEditMode ? '完成' : '编辑'}</Text>
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <ScrollView style={styles.mainContent} showsVerticalScrollIndicator={false}>
        {cartItems.length > 0 ? (
          <View style={styles.cartItemsContainer}>
            {cartItems.map(renderCartItem)}
          </View>
        ) : (
          renderEmptyCart()
        )}
      </ScrollView>

      {/* Bottom Bar */}
      {cartItems.length > 0 && (
        <View style={styles.bottomBar}>
          <View style={styles.bottomBarContent}>
            <View style={styles.bottomBarLeft}>
              <TouchableOpacity style={styles.selectAllContainer} onPress={handleSelectAll}>
                <View style={[styles.selectAllCheckbox, isAllSelected() && styles.selectAllCheckboxSelected]}>
                  {isAllSelected() && (
                    <FontAwesome6 name="check" size={12} color="#FFFFFF" />
                  )}
                </View>
                <Text style={styles.selectAllText}>全选</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleDeleteSelected}>
                <Text style={styles.deleteSelectedText}>删除</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.bottomBarRight}>
              <View style={styles.totalContainer}>
                <Text style={styles.totalLabel}>合计</Text>
                <Text style={styles.totalPrice}>¥{calculateTotal()}</Text>
              </View>
              <TouchableOpacity
                style={[
                  styles.checkoutButton,
                  getSelectedCount() === 0 && styles.checkoutButtonDisabled,
                ]}
                onPress={handleCheckout}
                disabled={getSelectedCount() === 0}
              >
                <Text style={styles.checkoutButtonText}>结算({getSelectedCount()})</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}

      {/* Delete Modal */}
      <Modal
        visible={isDeleteModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancelDelete}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>删除商品</Text>
            <Text style={styles.modalDescription}>确定要删除这个商品吗？</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalCancelButton} onPress={handleCancelDelete}>
                <Text style={styles.modalCancelButtonText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalConfirmButton} onPress={handleConfirmDelete}>
                <Text style={styles.modalConfirmButtonText}>删除</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Batch Delete Modal */}
      <Modal
        visible={isBatchDeleteModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCancelBatchDelete}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>批量删除</Text>
            <Text style={styles.modalDescription}>确定要删除选中的商品吗？</Text>
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.modalCancelButton} onPress={handleCancelBatchDelete}>
                <Text style={styles.modalCancelButtonText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalConfirmButton} onPress={handleConfirmBatchDelete}>
                <Text style={styles.modalConfirmButtonText}>删除</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default CartScreen;

