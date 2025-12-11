

export type OrderStatus = 'all' | 'pending' | 'processing' | 'shipping' | 'completed' | 'cancelled';

export interface OrderItem {
  name: string;
  image: string;
  quantity: number;
  price: string;
}

export interface Order {
  id: string;
  time: string;
  status: Exclude<OrderStatus, 'all'>;
  statusText: string;
  totalAmount: string;
  items: OrderItem[];
}

export interface StatusTabsProps {
  currentFilter: OrderStatus;
  onFilterChange: (filter: OrderStatus) => void;
}

export interface OrderCardProps {
  order: Order;
  onPress: () => void;
  onCancelOrder: () => void;
  onPayOrder: () => void;
  onContactService: () => void;
  onTrackOrder: () => void;
  onBuyAgain: () => void;
  onEvaluateOrder: () => void;
}

