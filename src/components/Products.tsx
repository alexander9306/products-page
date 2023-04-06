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
    const discounted = total > 0;

    return {
      price: discounted ? total : price,
      discounted,
    };
  }

  const productList = !isPromotionApplied
    ? products
    : products.map((product) => {
        const foundPromotion = promotions.find(
          (promotion) => promotion.productId === product.id
        );

        return {
          ...product,
          ...(foundPromotion &&
            calculateDiscount(
              product.price,
              foundPromotion.discount
            )),
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
            <div>
              <img src={product.image} alt={product.title} />
              {product.discounted && <span>Special Offer</span>}
            </div>
            <p>{product.title}</p>
            <p>
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
              }).format(product.price)}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}

export default Products;
