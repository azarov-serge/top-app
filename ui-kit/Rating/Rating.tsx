import React, {
	ForwardedRef,
	forwardRef,
	Fragment,
	KeyboardEvent,
	useEffect,
	useRef,
	useState,
} from 'react';
import cn from 'classnames';
import StarIcon from '../../assets/icons/star.svg';
import { RatingProps } from './Rating.types';

import styles from './Rating.module.css';

const MAX_RATING = 5;

export const Rating = forwardRef(
	(props: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
		const {
			error,
			isEditable = false,
			rating,
			setRating,
			tabIndex,
			...restProps
		} = props;

		const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
			new Array(MAX_RATING).fill(<></>)
		);

		const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

		useEffect(() => {
			constructRating(rating);
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [rating, tabIndex]);

		const changeRating = (currentRating: number) => {
			isEditable && constructRating(currentRating);
		};

		const setCurrentRating = (currentRating: number) => {
			if (!isEditable || !setRating) {
				return;
			}

			setRating(currentRating);
		};

		const handleKey = (evt: KeyboardEvent<HTMLSpanElement>) => {
			if (!isEditable || !setRating) {
				return;
			}
			if (evt.code === 'ArrowRight' || evt.code === 'ArrowUp') {
				if (!rating) {
					setRating(1);
				} else {
					evt.preventDefault();
					setRating(rating < MAX_RATING ? rating + 1 : MAX_RATING);
				}
				ratingArrayRef.current[rating]?.focus();
			}
			if (evt.code == 'ArrowLeft' || evt.code == 'ArrowDown') {
				evt.preventDefault();
				setRating(rating > 1 ? rating - 1 : 1);
				ratingArrayRef.current[rating - 2]?.focus();
			}
		};

		const computeFocus = (currentRaiting: number, index: number): number => {
			if (!isEditable) {
				return -1;
			}
			if (!rating && index == 0) {
				return tabIndex ?? 0;
			}
			if (currentRaiting === index + 1) {
				return tabIndex ?? 0;
			}
			return -1;
		};

		const constructRating = (currentRating: number) => {
			const updatedArray = ratingArray.map((_: JSX.Element, index: number) => {
				const starClassName = cn(styles.star, {
					[styles.filled]: index < currentRating,
					[styles.editable]: isEditable,
				});
				return (
					<span
						className={starClassName}
						ref={(ref) => ratingArrayRef.current?.push(ref)}
						tabIndex={computeFocus(rating, index)}
						onClick={() => setCurrentRating(index + 1)}
						onMouseEnter={() => changeRating(index + 1)}
						onMouseLeave={() => changeRating(rating)}
						onKeyDown={handleKey}
						role={isEditable ? 'slider' : ''}
						aria-invalid={error ? true : false}
						aria-valuenow={rating}
						aria-valuemax={5}
						aria-label={isEditable ? 'Укажите рейтинг' : 'рейтинг' + rating}
						aria-valuemin={1}
					>
						<StarIcon tabIndex={isEditable ? 0 : -1} />
					</span>
				);
			});

			setRatingArray(updatedArray);
		};

		return (
			<div
				{...restProps}
				ref={ref}
				className={cn(styles.ratingWrapper, {
					[styles.error]: error,
				})}
			>
				{ratingArray.map((item, index) => (
					<Fragment key={index}>{item}</Fragment>
				))}
				{error && (
					<span role="alert" className={styles.errorMessage}>
						{error.message}
					</span>
				)}
			</div>
		);
	}
);
