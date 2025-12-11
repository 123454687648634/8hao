

import React from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import styles from './styles';

interface ConfirmModalProps {
  visible: boolean;
  icon: string;
  color: string;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  visible,
  icon,
  color,
  title,
  message,
  onConfirm,
  onCancel,
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onCancel}
    >
      <TouchableOpacity style={styles.overlay} onPress={onCancel} activeOpacity={1}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.modalContent} activeOpacity={1}>
            <View style={styles.content}>
              <View style={[styles.iconContainer, { backgroundColor: `${color}1A` }]}>
                <FontAwesome6 name={icon} size={24} color={color} />
              </View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.message}>{message}</Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
                  <Text style={styles.cancelButtonText}>取消</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.confirmButton, { backgroundColor: color }]} onPress={onConfirm}>
                  <Text style={styles.confirmButtonText}>确认</Text>
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

export default ConfirmModal;

