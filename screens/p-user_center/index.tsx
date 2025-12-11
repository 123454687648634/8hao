

import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { FontAwesome6 } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';

const UserCenterScreen = () => {
  const router = useRouter();
  const [pendingOrdersCount, setPendingOrdersCount] = useState(3);

  const handleMyOrdersPress = () => {
    router.push('/p-order_history');
  };

  const handleMyAddressesPress = () => {
    router.push('/p-address_manage');
  };

  const handleMyCouponsPress = () => {
    router.push('/p-coupon_center');
  };

  const handleSettingsPress = () => {
    router.push('/p-settings');
  };

  const handleAboutUsPress = () => {
    console.log('跳转到关于我们页面');
    // 注释：关于我们页面暂不在当前页面列表中，仅做UI展示
  };

  const handleHelpFeedbackPress = () => {
    console.log('跳转到帮助与反馈页面');
    // 注释：帮助与反馈页面暂不在当前页面列表中，仅做UI展示
  };

  const handleUserAvatarPress = () => {
    console.log('点击用户头像，编辑个人资料');
    // 注释：个人资料编辑页面暂不在当前页面列表中，仅做UI展示
  };

  const handleUserInfoPress = () => {
    console.log('点击用户信息，编辑个人资料');
    // 注释：个人资料编辑页面暂不在当前页面列表中，仅做UI展示
  };

  const handleEditProfilePress = () => {
    console.log('点击编辑资料按钮');
    // 注释：个人资料编辑页面暂不在当前页面列表中，仅做UI展示
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 顶部导航栏 */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>我的</Text>
      </View>

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* 用户信息卡片 */}
        <View style={styles.userProfileSection}>
          <LinearGradient
            colors={['#E8B4B8', '#F4D03F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.profileHeader}
          >
            <View style={styles.userInfoRow}>
              <TouchableOpacity style={styles.userAvatarButton} onPress={handleUserAvatarPress}>
                <Image
                  source={{ uri: 'https://s.coze.cn/image/SmZLHSaK6EA/' }}
                  style={styles.userAvatar}
                />
                <View style={styles.cameraIconContainer}>
                  <FontAwesome6 name="camera" size={12} color="#FFFFFF" />
                </View>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.userInfoButton} onPress={handleUserInfoPress}>
                <Text style={styles.userName}>小雨</Text>
                <Text style={styles.userId}>ID: 88888888</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.editProfileButton} onPress={handleEditProfilePress}>
                <FontAwesome6 name="pen" size={16} color="#FFFFFF" />
              </TouchableOpacity>
            </View>
            
            {/* 统计数据 */}
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>12</Text>
                <Text style={styles.statLabel}>订单</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>5</Text>
                <Text style={styles.statLabel}>优惠券</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statValue}>4.9</Text>
                <Text style={styles.statLabel}>评分</Text>
              </View>
            </View>
          </LinearGradient>
        </View>

        {/* 功能菜单 */}
        <View style={styles.menuSection}>
          {/* 我的订单 */}
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem} onPress={handleMyOrdersPress}>
              <View style={styles.menuItemLeft}>
                <View style={[styles.menuIconContainer, styles.primaryIconContainer]}>
                  <FontAwesome6 name="bag-shopping" size={18} color="#E8B4B8" />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuTitle}>我的订单</Text>
                  <Text style={styles.menuSubtitle}>查看所有订单</Text>
                </View>
              </View>
              <View style={styles.menuItemRight}>
                {pendingOrdersCount > 0 && (
                  <View style={styles.pendingOrdersBadge}>
                    <Text style={styles.pendingOrdersText}>{pendingOrdersCount}</Text>
                  </View>
                )}
                <FontAwesome6 name="chevron-right" size={14} color="#A0AEC0" />
              </View>
            </TouchableOpacity>
          </View>

          {/* 我的地址 */}
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem} onPress={handleMyAddressesPress}>
              <View style={styles.menuItemLeft}>
                <View style={[styles.menuIconContainer, styles.secondaryIconContainer]}>
                  <FontAwesome6 name="location-dot" size={18} color="#F4D03F" />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuTitle}>我的地址</Text>
                  <Text style={styles.menuSubtitle}>管理收货地址</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#A0AEC0" />
            </TouchableOpacity>
          </View>

          {/* 我的优惠券 */}
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem} onPress={handleMyCouponsPress}>
              <View style={styles.menuItemLeft}>
                <View style={[styles.menuIconContainer, styles.tertiaryIconContainer]}>
                  <FontAwesome6 name="ticket" size={18} color="#A8E6CF" />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuTitle}>我的优惠券</Text>
                  <Text style={styles.menuSubtitle}>5张可用</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#A0AEC0" />
            </TouchableOpacity>
          </View>

          {/* 账户设置 */}
          <View style={styles.menuCard}>
            <TouchableOpacity style={styles.menuItem} onPress={handleSettingsPress}>
              <View style={styles.menuItemLeft}>
                <View style={[styles.menuIconContainer, styles.accentIconContainer]}>
                  <FontAwesome6 name="gear" size={18} color="#FF8A80" />
                </View>
                <View style={styles.menuTextContainer}>
                  <Text style={styles.menuTitle}>设置</Text>
                  <Text style={styles.menuSubtitle}>账户安全、通知设置</Text>
                </View>
              </View>
              <FontAwesome6 name="chevron-right" size={14} color="#A0AEC0" />
            </TouchableOpacity>
          </View>

          {/* 帮助与支持 */}
          <View style={styles.menuCard}>
            <View style={styles.helpMenuContainer}>
              <TouchableOpacity style={[styles.menuItem, styles.helpMenuItemTop]} onPress={handleAboutUsPress}>
                <View style={styles.menuItemLeft}>
                  <View style={[styles.menuIconContainer, styles.primaryIconContainer]}>
                    <FontAwesome6 name="circle-info" size={18} color="#E8B4B8" />
                  </View>
                  <View style={styles.menuTextContainer}>
                    <Text style={styles.menuTitle}>关于我们</Text>
                    <Text style={styles.menuSubtitle}>了解8号花坊</Text>
                  </View>
                </View>
                <FontAwesome6 name="chevron-right" size={14} color="#A0AEC0" />
              </TouchableOpacity>
              
              <View style={styles.menuDivider} />
              
              <TouchableOpacity style={[styles.menuItem, styles.helpMenuItemBottom]} onPress={handleHelpFeedbackPress}>
                <View style={styles.menuItemLeft}>
                  <View style={[styles.menuIconContainer, styles.secondaryIconContainer]}>
                    <FontAwesome6 name="circle-question" size={18} color="#F4D03F" />
                  </View>
                  <View style={styles.menuTextContainer}>
                    <Text style={styles.menuTitle}>帮助与反馈</Text>
                    <Text style={styles.menuSubtitle}>常见问题、意见反馈</Text>
                  </View>
                </View>
                <FontAwesome6 name="chevron-right" size={14} color="#A0AEC0" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserCenterScreen;

