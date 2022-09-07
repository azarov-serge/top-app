import React, {FC} from 'react';
import CheckIcon from '../../assets/icons/check.svg';
import { AdvantagesProps } from './Advantages.types';
import styles from './Advantages.module.css';

export const Advantages: FC<AdvantagesProps> = (props) => {
	const { items } = props;
	return (
		<>
			{items.map((advantage) => (
				<div key={advantage._id} className={styles.advantage}>
					<CheckIcon />
					<div className={styles.title}>{advantage.title}</div>
					<hr className={styles.vline} />
					<div>{advantage.description}</div>
				</div>
			))}
		</>
	);
};
