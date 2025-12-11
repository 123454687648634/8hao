

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import SettingItem from './components/SettingItem';
import ConfirmModal from './components/ConfirmModal';
import SuccessToast from './components/SuccessToast';
import styles from './styles';

const SettingsScreen = () => {
  const router = useRouter();
  const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
  const [isSuccessToastVisible, setIsSuccessToastVisible] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    icon: '',
    color: '',
    title: '',
    message: '',
    onConfirm: () => {},
  });
  const [toastMessage, setToastMessage] = useState('');
  const [cacheSize, setCacheSize] = useState('128.5 MB');

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  const handleAccountSecurityPress = () => {
    console.log('跳转到账户与安全页面');
    // 注释：此功能需要跳转到账户安全页面，在原型阶段仅做UI展示
  };

  const handleNotificationSettingPress = () => {
    console.log('跳转到通知设置页面');
    // 注释：此功能需要跳转到通知设置页面，在原型阶段仅做UI展示
  };

  const handleClearCachePress = () => {
    showConfirmModal(
      'broom',
      '#A8E6CF',
      '清除缓存',
      '确定要清除应用缓存吗？这将释放存储空间。',
      () => {
        // 模拟清除缓存
        setTimeout(() => {
          setCacheSize('0 MB');
          showSuccessToast('缓存清除成功');
        }, 1000);
      }
    );
  };

  const handleAboutUsPress = () => {
    console.log('跳转到关于我们页面');
    // 注释：此功能需要跳转到关于我们页面，在原型阶段仅做UI展示
  };

  const handlePrivacyPolicyPress = () => {
    console.log('跳转到隐私政策页面');
    // 注释：此功能需要跳转到隐私政策页面，在原型阶段仅做UI展示
  };

  const handleLogoutPress = () => {
    showConfirmModal(
      'right-from-bracket',
      '#FF8A80',
      '确认退出',
      '确定要退出当前账户吗？',
      () => {
        // 模拟退出登录
        setTimeout(() => {
          console.log('退出登录成功');
          // 注释：此功能需要跳转到登录页面，在原型阶段仅做UI展示
          router.replace('/p-home');
        }, 500);
      }
    );
  };

  const showConfirmModal = (icon: string, color: string, title: string, message: string, onConfirm: () => void) => {
    setModalConfig({
      icon,
      color,
      title,
      message,
      onConfirm,
    });
    setIsConfirmModalVisible(true);
  };

  const hideConfirmModal = () => {
    setIsConfirmModalVisible(false);
  };

  const showSuccessToast = (message: string) => {
    setToastMessage(message);
    setIsSuccessToastVisible(true);
    setTimeout(() => {
      setIsSuccessToastVisible(false);
    }, 3000);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={handleBackPress}>
          <FontAwesome6 name="arrow-left" size={20} color="#2D3748" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>设置</Text>
        <View style={styles.headerPlaceholder} />
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 账户安全设置 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <SettingItem
              icon="shield-halved"
              iconColor="#E8B4B8"
              title="账户与安全"
              subtitle="密码、手机号等"
              onPress={handleAccountSecurityPress}
              showBorder={true}
            />
            <SettingItem
              icon="bell"
              iconColor="#F4D03F"
              title="通知设置"
              subtitle="推送、消息提醒"
              onPress={handleNotificationSettingPress}
              showBorder={false}
            />
          </View>
        </View>

        {/* 应用设置 */}
        <View style={styles.section}>
          <View style={styles.card}>
            <SettingItem
              icon="broom"
              iconColor="#A8E6CF"
              title="清除缓存"
              subtitle="清理应用缓存数据"
              onPress={handleClearCachePress}
              rightText={cacheSize}
              showBorder={true}
            />
            <SettingItem
              icon="circle-info"
              iconColor="#FF8A80"
              title="关于我们"
              subtitle="版本信息、团队介绍"
              onPress={handleAboutUsPress}
              showBorder={true}
            />
            <SettingItem
              icon="file-contract"
              iconColor="#E8B4B8"
              title="隐私政策"
              subtitle="用户协议、隐私条款"
              onPress={handlePrivacyPolicyPress}
              showBorder={false}
            />
          </View>
        </View>

        {/* 退出登录 */}
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogoutPress}>
            <FontAwesome6 name="right-from-bracket" size={16} color="#FF8A80" style={styles.logoutIcon} />
            <Text style={styles.logoutText}>退出登录</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* 确认弹窗 */}
      <ConfirmModal
        visible={isConfirmModalVisible}
        icon={modalConfig.icon}
        color={modalConfig.color}
        title={modalConfig.title}
        message={modalConfig.message}
        onConfirm={() => {
          modalConfig.onConfirm();
          hideConfirmModal();
        }}
        onCancel={hideConfirmModal}
      />

      {/* 成功提示 */}
      <SuccessToast
        visible={isSuccessToastVisible}
        message={toastMessage}
      />
    </SafeAreaView>
  );
};

export default SettingsScreen;

