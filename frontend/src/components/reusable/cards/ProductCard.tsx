import styles from './productcard.module.css';
import { Rating } from '../rating';
import { ProductDisplay } from '../../../types';
import { formatCurrency, getDiscount } from '../../../utils/utils';

interface Props {
  product: ProductDisplay;
}
const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardImageWrapper}>
        <span className={styles.cardBadge}>{product.tag}</span>
        <img
          src={product.image}
          alt={product.product_title}
          className={styles.cardImage}
        />
      </div>
      <div className={styles.cardInfoWrapper}>
        <div className={styles.cardProductInfoWrapper}>
          <span>{product.stock} Items in stock</span>
          <h3>{product.product_title}</h3>
          <div className={styles.cardStarsWrapper}>
            <Rating stars={product.rating} />
            <span>{product.comments} comments</span>
          </div>
        </div>
        <div>
          <span className={styles.cardProductPrice}>
            {product.discount
              ? formatCurrency(getDiscount(product.price, product.discount))
              : formatCurrency(product.price)}
          </span>
          {product.discount && (
            <span className={styles.cardProductDiscount}>
              {formatCurrency(product.price)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
