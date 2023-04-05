import './Products.css';
import { useState } from 'react';
import { Product } from '../interfaces/product.interface';
import { Promotion } from '../interfaces/promotion.interface';

interface ProductsProp {
  products: Product[];
  promotions: Promotion[];
}

function Products({ products, promotions }: ProductsProp) {
  const [isPromotionApplied, setIsPromotionApplied] = useState(false);

  function calculateDiscount(price: number, discount: number) {
    const total = price - discount;
    return total < 0 ? price : total;
  }

  const productList = !isPromotionApplied
    ? products
    : products.map((product) => {
        const foundPromotion = promotions.find(
          (promotion) => promotion.productId === product.id
        );

        return {
          ...product,
          ...(foundPromotion && {
            price: calculateDiscount(
              product.price,
              foundPromotion.discount
            ),
          }),
        };
      });

  return (
    <>
      <section>
        <h2>Products</h2>
        <button onClick={() => setIsPromotionApplied(true)}>
          Apply Promotions
        </button>
      </section>
      <section>
        {productList.map((product) => (
          <article key={product.id}>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.price}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default Products;
