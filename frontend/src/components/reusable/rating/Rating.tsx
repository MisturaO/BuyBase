import React, { useState } from 'react';

// import styles from './product.module.css';
import './rating.css';
import { Star } from '../icons';

const possibleValues = [1, 2, 3, 4, 5];
interface Props {
  stars: number;
}
const Rating: React.FC<Props> = ({ stars }) => {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  console.log(hover);
  return (
    <div className={` ratingWrapper `}>
      {possibleValues.map((rate, i) => (
        <Star
          key={`rating__${rate}${i}`}
          rate={rate}
          hovered={hover ? hover >= rate : false}
          onHover={setHover}
          onChange={setRating}
          selected={rating ? rating >= rate : stars ? stars >= rate : false}
        />
      ))}
    </div>
  );
};

export default Rating;
