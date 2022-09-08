import React, { FC, useState } from 'react';
import { GetStaticProps } from 'next';
import axios from 'axios';
import {
	Button,
	Chip,
	Input,
	Paragraph,
	Rating,
	Textarea,
	Title,
} from '../ui-kit';
import { withLayout } from '../hocs/withLayout';
import { IMenuItem } from '../interfaces/menu.interface';
import { url } from '../helpers/url';

interface HomeProps extends Record<string, unknown> {
	menu: IMenuItem[];
	firstCategory: number;
}

const Home: FC<HomeProps> = (props): JSX.Element => {
	const { menu } = props;
	const [testRating, setTestRating] = useState(4);
	return (
		<>
			<ul>
				{menu.map((item) => (
					<li key={item._id.secondCategory}>{item._id.secondCategory}</li>
				))}
			</ul>
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
			<Chip color="grey">Small Grey</Chip>
			<Rating
				className="rating"
				isEditable={true}
				rating={testRating}
				setRating={setTestRating}
			/>
			<Input placeholder="Enter text" />
			<Textarea placeholder="Enter text" />
		</>
	);
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const { data: menu } = await axios.post<IMenuItem[]>(url.topPage.find, {
		firstCategory,
	});

	return {
		props: {
			menu,
			firstCategory,
		},
	};
};
