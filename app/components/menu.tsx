import { LineChart, Home, ShoppingCart, Users } from 'lucide-react';
import Link from 'next/link';

type IMenuIcons = 'home' | 'shopping-cart' | 'users' | 'line-chart' | '';
type IRoutes = '/' | '/customers' | '/products' | '/orders' | '/analytics';

interface MenuItemProps {
  text: string;
  route: IRoutes;
  icon: IMenuIcons;
}

export function LinkMenu({
  text = '',
  route = '/',
  icon = 'home',
}: MenuItemProps) {
  const iconComponents: Record<IMenuIcons, any> = {
    'shopping-cart': ShoppingCart,
    home: Home,
    users: Users,
    'line-chart': LineChart,
    '': Home,
  };

  const IconComponent = iconComponents[icon];

  return (
    <Link
      href={route}
      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
      <IconComponent className="h-4 w-4" />
      {text}
    </Link>
  );
}
