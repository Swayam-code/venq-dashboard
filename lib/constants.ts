// Navigation menu items
export const NAVIGATION_ITEMS = {
  GENERAL: [
    { name: 'Home', path: '/', icon: 'Home' },
    { name: 'Portfolio', path: '/portfolio', icon: 'LineChart' },
    { name: 'Wallet', path: '/wallet', icon: 'Wallet' },
  ],
  PRODUCTS: [
    { name: 'Invest', path: '/invest', icon: 'TrendingUp' },
    { name: 'Trade', path: '/trade', icon: 'BarChart2' },
    { name: 'Fractional Investment Group', path: '/fig', icon: 'PieChart' },
    { name: 'SolutionVentures', path: '/solutions', icon: 'Users' },
  ],
  ANALYTICS: [
    { name: 'Transactions', path: '/transactions', icon: 'RefreshCw' },
    { name: 'Order History', path: '/history', icon: 'Clock' },
    { name: 'Reports', path: '/reports', icon: 'FileText' },
  ],
};

// Investment summary data
export const INVESTMENT_SUMMARY = [
  {
    title: 'MCA',
    subtitle: 'Regulated',
    icon: 'Building',
  },
  {
    title: '₹5000',
    subtitle: 'Minimum Investment',
    icon: 'CreditCard',
  },
  {
    title: 'HIGH',
    subtitle: 'Liquidity',
    icon: 'TrendingUp',
  },
];

// Account creation steps
export const ACCOUNT_STEPS = [
  { id: 1, title: 'Account Creation', completed: true },
  { id: 2, title: 'Complete KYC', completed: false },
  { id: 3, title: 'Make your first investment', completed: false },
];