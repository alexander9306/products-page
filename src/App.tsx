import './App.css';
import { Product } from './interfaces/product.interface';
import { Promotion } from './interfaces/promotion.interface';
import Products from './components/Products';

function App() {
  const products: Product[] = [
    {
      id: 1,
      title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
      price: 109.95,
      image:
        'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    },
    {
      id: 2,
      title: 'Mens Casual Premium Slim Fit T-Shirts ',
      price: 22.3,
      image:
        'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
    },
    {
      id: 3,
      title: 'Mens Cotton Jacket',
      price: 55.99,
      image:
        'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    },
    {
      id: 4,
      title: 'Mens Casual Slim Fit',
      price: 15.99,
      image:
        'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    },
    {
      id: 5,
      title:
        'John Hardy Women’s Legends Naga Gold & Silver Dragon Station Chain Bracelet',
      price: 695,
      image:
        'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg',
    },
  ];

  const promotions: Promotion[] = [
    { productId: 2, discount: 5 },
    { productId: 1, discount: 30.4 },
    { productId: 5, discount: 300 },
    { productId: 2, discount: 20 },
    { productId: 7, discount: 40 },
  ];

  return (
    <main>
      <Products products={products} promotions={promotions} />
    </main>
  );
}

export default App;
