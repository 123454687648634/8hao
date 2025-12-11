

import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  
  // 顶部导航栏
  header: {
    flexDirection: 'row',
    alignItems: 'center',
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
  backButton: {
    padding: 8,
    marginLeft: -8,
    marginRight: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  
  // 主要内容区域
  content: {
    flex: 1,
  },
  addressListSection: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    paddingBottom: 100, // 为底部按钮留出空间
  },
  addressList: {
    gap: 16,
  },
  
  // 地址项
  addressItem: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
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
  addressHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  addressInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  addressName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3748',
    marginRight: 12,
  },
  addressPhone: {
    fontSize: 14,
    color: '#718096',
  },
  defaultBadge: {
    backgroundColor: '#E8B4B8',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 12,
  },
  defaultBadgeText: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  setDefaultButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  setDefaultButtonText: {
    fontSize: 14,
    color: '#E8B4B8',
    fontWeight: '500',
  },
  addressDetail: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
    marginBottom: 16,
  },
  addressActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  editButtonText: {
    fontSize: 14,
    color: '#E8B4B8',
    fontWeight: '500',
  },
  deleteButton: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  deleteButtonText: {
    fontSize: 14,
    color: '#A0AEC0',
    fontWeight: '500',
  },
  
  // 空状态
  emptyState: {
    alignItems: 'center',
    paddingVertical: 64,
  },
  emptyIconContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#F7FAFC',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 14,
    color: '#A0AEC0',
    marginBottom: 4,
  },
  emptySubtitle: {
    fontSize: 12,
    color: '#A0AEC0',
  },
  
  // 底部添加按钮
  addAddressContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#F7FAFC',
    padding: 16,
    paddingBottom: Platform.select({
      ios: 34, // iPhone底部安全区域
      android: 16,
    }),
  },
  addAddressButton: {
    backgroundColor: '#E8B4B8',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    borderRadius: 16,
    gap: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#E8B4B8',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  addAddressButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  
  // 弹窗样式
  modalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: Platform.select({
      ios: 34,
      android: 24,
    }),
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
  },
  closeModalButton: {
    padding: 8,
    marginRight: -8,
  },
  
  // 表单样式
  formContainer: {
    gap: 16,
  },
  formGroup: {
    gap: 8,
  },
  formLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#2D3748',
  },
  formInput: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    color: '#2D3748',
    backgroundColor: '#FFFFFF',
  },
  formTextArea: {
    height: 80,
    paddingTop: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  checkboxChecked: {
    backgroundColor: '#E8B4B8',
    borderColor: '#E8B4B8',
  },
  checkboxLabel: {
    fontSize: 14,
    color: '#2D3748',
  },
  formActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 8,
  },
  cancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#E8B4B8',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#E8B4B8',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  
  // 删除确认弹窗
  deleteModalBackdrop: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteModalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: 320,
    maxWidth: '90%',
  },
  deleteModalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 8,
  },
  deleteModalMessage: {
    fontSize: 14,
    color: '#718096',
    lineHeight: 20,
    marginBottom: 24,
  },
  deleteModalActions: {
    flexDirection: 'row',
    gap: 12,
  },
  deleteModalCancelButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteModalCancelButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2D3748',
  },
  deleteModalConfirmButton: {
    flex: 1,
    backgroundColor: '#FF8A80',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteModalConfirmButtonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  
  // 成功提示
  successToast: {
    position: 'absolute',
    top: 80,
    left: '50%',
    transform: [{ translateX: -100 }],
    backgroundColor: '#48BB78',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 16,
    gap: 8,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  successToastText: {
    fontSize: 14,
    color: '#FFFFFF',
    fontWeight: '500',
  },
});

