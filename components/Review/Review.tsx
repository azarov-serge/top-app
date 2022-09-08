import cn from 'classnames';
import UserIcon from '../../assets/icons/user.svg';
import { Rating } from '../../ui-kit';
import { ReviewProps } from './Review.types';
import styles from './Review.module.css';

export const Review = ({
	review,
	className,
	...props
}: ReviewProps): JSX.Element => {
	const { name, title, description, createdAt, rating } = review;
	return (
		<div className={cn(styles.review, className)} {...props}>
			<UserIcon className={styles.user} />
			<div className={styles.title}>
				<span className={styles.name}>{name}:</span>&nbsp;&nbsp;
				<span>{title}</span>
			</div>
			<div className={styles.date}>
				{(new Date(createdAt)).toLocaleDateString()}
			</div>
			<div className={styles.rating}>
				<Rating rating={rating} />
			</div>
			<div className={styles.description}>{description}</div>
		</div>
	);
};
