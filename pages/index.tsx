import React, { FC, useState } from 'react';
import { Button, Chip, Paragraph, Rating, Title } from '../components';

const Home: FC = (): JSX.Element => {
	const [testRating, setTestRating] = useState(4);
	return (
		<>
			<Title level="1">Hello world</Title>
			<Paragraph size="l">Large</Paragraph>
			<Paragraph>Medium</Paragraph>
			<Paragraph size="s">Small</Paragraph>
			<Button
				arrow="down"
				onClick={() => {
					console.log('++++ setTestRating', 1);
					setTestRating(1);
				}}
			>
				Button
			</Button>
			<Button
				kind="ghost"
				onClick={() => {
					console.log('++++ setTestRating', 4);
					setTestRating(4);
				}}
				arrow="right"
			>
				Button
			</Button>
			<Chip>Small</Chip>
			<Chip size="m" color="red">
				Medium Red
			</Chip>
			<Chip color="green"> Small Green</Chip>
			<Chip color="gray">Small Grey</Chip>
			<Rating
				className="rating"
				isEditable={true}
				rating={testRating}
				setRating={setTestRating}
			/>
		</>
	);
};

export default Home;
