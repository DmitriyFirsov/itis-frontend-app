import React from 'react';

import { Label, RadioContainer, RadioInput } from "./components";

export default function RadioButton({ value, options, onSelect }) {
	return (
		<RadioContainer>
			{options.map(({ id, name }) => {
				return (
					<Label key={id}>
						<RadioInput type={'radio'} value={id} onSelect={onSelect} checked={value === id} /> <div>{name}</div>
					</Label>
				);
			})}
		</RadioContainer>
	);
}
