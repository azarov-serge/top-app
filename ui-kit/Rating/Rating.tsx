import React, {
	ForwardedRef,
	forwardRef,
	Fragment,
	KeyboardEvent,
	useEffect,
	useState,
} from 'react';
import cn from 'classnames';
import StarIcon from '../../assets/icons/star.svg';
import { RatingProps } from './Rating.types';

import styles from './Rating.module.css';

const MAX_Rating = 5;

export const Rating = forwardRef(
	(props: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
		const {
			error,
			isEditable = false,
			rating,
			setRating,
			...restProps
		} = props;

		const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
			new Array(MAX_Rating).fill(<></>)
		);

		useEffect(() => {
			constructRating(rating);
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, [rating]);

		const changeRating = (currentRating: number) => {
			isEditable && constructRating(currentRating);
		};

		const setCurrentRating = (currentRating: number) => {
			if (!isEditable || !setRating) {
				return;
			}

			setRating(currentRating);
		};

		const handleSpace = (
			currentRating: number,
			evt: KeyboardEvent<HTMLSpanElement>
		) => {
			if (evt.code !== 'Space') {
				return;
			}

			setCurrentRating(currentRating);
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
						onClick={() => setCurrentRating(index + 1)}
						onMouseEnter={() => changeRating(index + 1)}
						onMouseLeave={() => changeRating(rating)}
						onKeyDown={(evt: KeyboardEvent<HTMLSpanElement>) =>
							handleSpace(index + 1, evt)
						}
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
				{error && <span className={styles.errorMessage}>{error.message}</span>}
			</div>
		);
	}
);
