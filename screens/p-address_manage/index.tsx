

import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TouchableOpacity, TextInput, Modal, Alert, RefreshControl, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface AddressData {
  id: string;
  name: string;
  phone: string;
  region: string;
  detail: string;
  isDefault: boolean;
}

interface FormData {
  name: string;
  phone: string;
  region: string;
  detail: string;
  isDefault: boolean;
}

const AddressManagePage: React.FC = () => {
  const router = useRouter();
  
  // 地址数据状态
  const [addressList, setAddressList] = useState<AddressData[]>([
    {
      id: '1',
      name: '张小美',
      phone: '138****8888',
      region: '北京市朝阳区',
      detail: '北京市朝阳区建国门外大街1号国贸大厦A座2801室',
      isDefault: true,
    },
    {
      id: '2',
      name: '李大明',
      phone: '139****6666',
      region: '上海市浦东新区',
      detail: '上海市浦东新区陆家嘴环路1000号恒生银行大厦50楼',
      isDefault: false,
    },
    {
      id: '3',
      name: '王妈妈',
      phone: '136****9999',
      region: '广东省深圳市南山区',
      detail: '广东省深圳市南山区科技园南区粤海街道深圳湾科技生态园10栋A座1502室',
      isDefault: false,
    },
  ]);

  // 弹窗状态
  const [isAddressModalVisible, setIsAddressModalVisible] = useState(false);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);
  
  // 表单状态
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    region: '',
    detail: '',
    isDefault: false,
  });
  
  // 编辑状态
  const [currentEditingId, setCurrentEditingId] = useState<string | null>(null);
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);

  // 返回按钮处理
  const handleBackPress = useCallback(() => {
    if (router.canGoBack()) {
      router.back();
    }
  }, [router]);

  // 下拉刷新
  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    // 模拟刷新延迟
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

  // 打开添加地址弹窗
  const handleOpenAddAddressModal = useCallback(() => {
    setFormData({
      name: '',
      phone: '',
      region: '',
      detail: '',
      isDefault: false,
    });
    setCurrentEditingId(null);
    setIsAddressModalVisible(true);
  }, []);

  // 打开编辑地址弹窗
  const handleOpenEditAddressModal = useCallback((addressId: string) => {
    const addressData = addressList.find(addr => addr.id === addressId);
    if (addressData) {
      setFormData({
        name: addressData.name,
        phone: addressData.phone,
        region: addressData.region,
        detail: addressData.detail,
        isDefault: addressData.isDefault,
      });
      setCurrentEditingId(addressId);
      setIsAddressModalVisible(true);
    }
  }, [addressList]);

  // 关闭地址弹窗
  const handleCloseAddressModal = useCallback(() => {
    setIsAddressModalVisible(false);
    setCurrentEditingId(null);
  }, []);

  // 显示删除确认弹窗
  const handleShowDeleteConfirm = useCallback((addressId: string) => {
    setDeleteTargetId(addressId);
    setIsDeleteModalVisible(true);
  }, []);

  // 关闭删除确认弹窗
  const handleCloseDeleteConfirm = useCallback(() => {
    setIsDeleteModalVisible(false);
    setDeleteTargetId(null);
  }, []);

  // 确认删除地址
  const handleConfirmDelete = useCallback(() => {
    if (!deleteTargetId) return;

    setAddressList(prevList => {
      const updatedList = prevList.filter(addr => addr.id !== deleteTargetId);
      
      // 如果删除的是默认地址，设置第一个地址为默认
      const deletedAddress = prevList.find(addr => addr.id === deleteTargetId);
      if (deletedAddress?.isDefault && updatedList.length > 0) {
        updatedList[0].isDefault = true;
      }
      
      return updatedList;
    });

    handleCloseDeleteConfirm();
    showSuccessToast('地址删除成功');
  }, [deleteTargetId, handleCloseDeleteConfirm]);

  // 设置默认地址
  const handleSetDefaultAddress = useCallback((addressId: string) => {
    setAddressList(prevList =>
      prevList.map(addr => ({
        ...addr,
        isDefault: addr.id === addressId,
      }))
    );
    showSuccessToast('默认地址设置成功');
  }, []);

  // 保存地址
  const handleSaveAddress = useCallback(() => {
    // 表单验证
    if (!formData.name.trim()) {
      Alert.alert('提示', '请输入收件人姓名');
      return;
    }
    if (!formData.phone.trim()) {
      Alert.alert('提示', '请输入联系电话');
      return;
    }
    if (!formData.region.trim()) {
      Alert.alert('提示', '请选择所在地区');
      return;
    }
    if (!formData.detail.trim()) {
      Alert.alert('提示', '请输入详细地址');
      return;
    }

    if (currentEditingId) {
      // 编辑地址
      setAddressList(prevList => {
        const updatedList = prevList.map(addr =>
          addr.id === currentEditingId
            ? { ...formData, id: currentEditingId }
            : addr
        );
        
        // 如果设置为默认，更新其他地址
        if (formData.isDefault) {
          updatedList.forEach(addr => {
            if (addr.id !== currentEditingId) {
              addr.isDefault = false;
            }
          });
        }
        
        return updatedList;
      });
      showSuccessToast('地址修改成功');
    } else {
      // 添加新地址
      const newAddress: AddressData = {
        ...formData,
        id: Date.now().toString(),
      };

      setAddressList(prevList => {
        const updatedList = [...prevList, newAddress];
        
        // 如果新地址设为默认，更新其他地址
        if (formData.isDefault) {
          updatedList.forEach(addr => {
            if (addr.id !== newAddress.id) {
              addr.isDefault = false;
            }
          });
        }
        
        return updatedList;
      });
      showSuccessToast('地址添加成功');
    }

    handleCloseAddressModal();
  }, [formData, currentEditingId, handleCloseAddressModal]);

  // 显示成功提示
  const showSuccessToast = useCallback((message: string) => {
    setToastMessage(message);
    setIsSuccessToastVisible(true);
    setTimeout(() => {
      setIsSuccessToastVisible(false);
    }, 3000);
  }, []);

  // 渲染地址项
  const renderAddressItem = useCallback((address: AddressData) => (
    <TouchableOpacity
      key={address.id}
      style={styles.addressItem}
      activeOpacity={0.7}
    >
      <View style={styles.addressHeader}>
        <View style={styles.addressInfo}>
          <Text style={styles.addressName}>{address.name}</Text>
          <Text style={styles.addressPhone}>{address.phone}</Text>
          {address.isDefault && (
            <View style={styles.defaultBadge}>
              <Text style={styles.defaultBadgeText}>默认</Text>
            </View>
          )}
        </View>
        {!address.isDefault && (
          <TouchableOpacity
            style={styles.setDefaultButton}
            onPress={() => handleSetDefaultAddress(address.id)}
          >
            <Text style={styles.setDefaultButtonText}>设为默认</Text>
          </TouchableOpacity>
        )}
      </View>
      
      <Text style={styles.addressDetail}>{address.detail}</Text>
      
      <View style={styles.addressActions}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() => handleOpenEditAddressModal(address.id)}
        >
          <Text style={styles.editButtonText}>编辑</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleShowDeleteConfirm(address.id)}
        >
          <Text style={styles.deleteButtonText}>删除</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  ), [handleSetDefaultAddress, handleOpenEditAddressModal, handleShowDeleteConfirm]);

  // 渲染空状态
  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <View style={styles.emptyIconContainer}>
        <FontAwesome6 name="location-dot" size={32} color="#A0AEC0" />
      </View>
      <Text style={styles.emptyTitle}>暂无收货地址</Text>
      <Text style={styles.emptySubtitle}>添加收货地址，让鲜花准时送达</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={handleBackPress}
        >
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>地址管理</Text>
      </View>

      {/* 主要内容区域 */}
      <ScrollView
        style={styles.content}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            colors={['#E8B4B8']}
            tintColor="#E8B4B8"
          />
        }
      >
        <View style={styles.addressListSection}>
          {addressList.length > 0 ? (
            <View style={styles.addressList}>
              {addressList.map(renderAddressItem)}
            </View>
          ) : (
            renderEmptyState()
          )}
        </View>
      </ScrollView>

      {/* 底部添加按钮 */}
      <View style={styles.addAddressContainer}>
        <TouchableOpacity
          style={styles.addAddressButton}
          onPress={handleOpenAddAddressModal}
          activeOpacity={0.8}
        >
          <FontAwesome6 name="plus" size={16} color="#FFFFFF" />
          <Text style={styles.addAddressButtonText}>添加新地址</Text>
        </TouchableOpacity>
      </View>

      {/* 添加/编辑地址弹窗 */}
      <Modal
        visible={isAddressModalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseAddressModal}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalContent}>
            {/* 弹窗头部 */}
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>
                {currentEditingId ? '编辑地址' : '添加新地址'}
              </Text>
              <TouchableOpacity
                style={styles.closeModalButton}
                onPress={handleCloseAddressModal}
              >
                <FontAwesome6 name="xmark" size={20} color="#A0AEC0" />
              </TouchableOpacity>
            </View>

            {/* 表单 */}
            <View style={styles.formContainer}>
              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>收件人姓名 *</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder="请输入收件人姓名"
                  value={formData.name}
                  onChangeText={(text) => setFormData(prev => ({ ...prev, name: text }))}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>联系电话 *</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder="请输入联系电话"
                  value={formData.phone}
                  onChangeText={(text) => setFormData(prev => ({ ...prev, phone: text }))}
                  keyboardType="phone-pad"
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>所在地区 *</Text>
                <TextInput
                  style={styles.formInput}
                  placeholder="请选择省市区"
                  value={formData.region}
                  onChangeText={(text) => setFormData(prev => ({ ...prev, region: text }))}
                />
              </View>

              <View style={styles.formGroup}>
                <Text style={styles.formLabel}>详细地址 *</Text>
                <TextInput
                  style={[styles.formInput, styles.formTextArea]}
                  placeholder="请输入详细地址（如街道、门牌号、楼层等）"
                  value={formData.detail}
                  onChangeText={(text) => setFormData(prev => ({ ...prev, detail: text }))}
                  multiline={true}
                  numberOfLines={3}
                  textAlignVertical="top"
                />
              </View>

              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={() => setFormData(prev => ({ ...prev, isDefault: !prev.isDefault }))}
              >
                <View style={[styles.checkbox, formData.isDefault && styles.checkboxChecked]}>
                  {formData.isDefault && (
                    <FontAwesome6 name="check" size={12} color="#FFFFFF" />
                  )}
                </View>
                <Text style={styles.checkboxLabel}>设为默认地址</Text>
              </TouchableOpacity>

              {/* 表单底部按钮 */}
              <View style={styles.formActions}>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={handleCloseAddressModal}
                >
                  <Text style={styles.cancelButtonText}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.saveButton}
                  onPress={handleSaveAddress}
                >
                  <Text style={styles.saveButtonText}>保存地址</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      {/* 删除确认弹窗 */}
      <Modal
        visible={isDeleteModalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={handleCloseDeleteConfirm}
      >
        <View style={styles.deleteModalBackdrop}>
          <View style={styles.deleteModalContent}>
            <Text style={styles.deleteModalTitle}>删除地址</Text>
            <Text style={styles.deleteModalMessage}>
              确定要删除这个收货地址吗？删除后无法恢复。
            </Text>
            <View style={styles.deleteModalActions}>
              <TouchableOpacity
                style={styles.deleteModalCancelButton}
                onPress={handleCloseDeleteConfirm}
              >
                <Text style={styles.deleteModalCancelButtonText}>取消</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteModalConfirmButton}
                onPress={handleConfirmDelete}
              >
                <Text style={styles.deleteModalConfirmButtonText}>删除</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* 成功提示 */}
      {isSuccessToastVisible && (
        <View style={styles.successToast}>
          <FontAwesome6 name="circle-check" size={16} color="#FFFFFF" />
          <Text style={styles.successToastText}>{toastMessage}</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

export default AddressManagePage;

