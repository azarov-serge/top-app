import React, { FC, Fragment, useRef, useState } from 'react';
import Image from 'next/image';
import cn from 'classnames';
import { declOfNum, priceRu } from '../../helpers/helpers';
import { Button, Divider, Card, Chip, Rating } from '../../ui-kit';
import { Review } from '../Review/Review';
import { ProductProps } from './Product.types';
import styles from './Product.module.css';
import { ReviewForm } from '../ReviewForm/ReviewForm';

export const Product: FC<ProductProps> = (props) => {
	const { className, product } = props;
	const [isReviewOpened, setIsReviewOpened] = useState<boolean>(false);
	const reviewRef = useRef<HTMLDivElement>(null);
	const scrollToReview = () => {
		setIsReviewOpened(true);
		reviewRef.current?.scrollIntoView({
			behavior: 'smooth',
			block: 'start',
		});
	};

	return (
		<div className={className}>
			<Card className={styles.product}>
				<div className={styles.logo}>
					<Image
						src={`${process.env.NEXT_PUBLIC_DOMAIN}${product.image}`}
						alt={product.title}
						width={70}
						height={70}
					/>
				</div>
				<div className={styles.title}>{product.title}</div>
				<div className={styles.price}>
					{priceRu(product.price)}
					{product.oldPrice && (
						<Chip className={styles.oldPrice} color="green">
							{priceRu(product.price - product.oldPrice)}
						</Chip>
					)}
				</div>
				<div className={styles.credit}>
					{priceRu(product.credit)}/<span className={styles.month}>мес</span>
				</div>
				<div className={styles.rating}>
					<Rating rating={product.reviewAvg ?? product.initialRating} />
				</div>
				<div className={styles.tags}>
					{product.categories.map((c) => (
						<Chip key={c} className={styles.category} color="ghost">
							{c}
						</Chip>
					))}
				</div>
				<div className={styles.priceTitle}>цена</div>
				<div className={styles.creditTitle}>кредит</div>
				<div className={styles.rateTitle}>
					<a href="#ref" onClick={scrollToReview}>
						{product.reviewCount}{' '}
						{declOfNum(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])}
					</a>
				</div>
				<Divider className={styles.hr} />
				<div className={styles.description}>{product.description}</div>
				<div className={styles.feature}>
					{product.characteristics.map((c) => (
						<div className={styles.characteristics} key={c.name}>
							<span className={styles.characteristicsName}>{c.name}</span>
							<span className={styles.characteristicsDots}></span>
							<span className={styles.characteristicsValue}>{c.value}</span>
						</div>
					))}
				</div>
				<div className={styles.advBlock}>
					{product.advantages && (
						<div className={styles.advantages}>
							<div className={styles.advTitle}>Преимущества</div>
							<div>{product.advantages}</div>
						</div>
					)}
					{product.disadvantages && (
						<div className={styles.disadvantages}>
							<div className={styles.advTitle}>Недостатки</div>
							<div>{product.disadvantages}</div>
						</div>
					)}
				</div>
				<Divider className={cn(styles.hr, styles.hr2)} />
				<div className={styles.actions}>
					<Button>Узнать подробнее</Button>
					<Button
						kind="ghost"
						arrow={isReviewOpened ? 'down' : 'right'}
						className={styles.reviewButton}
						onClick={() => setIsReviewOpened(!isReviewOpened)}
					>
						Читать отзывы
					</Button>
				</div>
			</Card>
			<Card
				color="blue"
				ref={reviewRef}
				className={cn(styles.reviews, {
					[styles.opened]: isReviewOpened,
					[styles.closed]: !isReviewOpened,
				})}
			>
				{product.reviews.map((review) => (
					<Fragment key={review._id}>
						<Review review={review} />
						<Divider />
					</Fragment>
				))}
				<ReviewForm productId={product._id} />
			</Card>
		</div>
	);
};
