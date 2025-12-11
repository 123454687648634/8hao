

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface SettingItemProps {
  icon: string;
  iconColor: string;
  title: string;
  subtitle: string;
  onPress: () => void;
  rightText?: string;
  showBorder: boolean;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  iconColor,
  title,
  subtitle,
  onPress,
  rightText,
  showBorder,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, showBorder && styles.containerWithBorder]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.leftContent}>
        <View style={[styles.iconContainer, { backgroundColor: `${iconColor}1A` }]}>
          <FontAwesome6 name={icon} size={16} color={iconColor} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <View style={styles.rightContent}>
        {rightText ? (
          <Text style={styles.rightText}>{rightText}</Text>
        ) : (
          <FontAwesome6 name="chevron-right" size={14} color="#A0AEC0" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;

