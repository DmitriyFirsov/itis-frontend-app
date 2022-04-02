import Button from 'components/form/inputs/Button';
import { StyledImage } from './components';

import EditImg from './images/pen.png';
import RemoveImg from './images/trash-bin.png';
import DiscardImg from './images/discard.png';
import AcceptImg from './images/accept.png';

export const ButtonInEditMode = ({ onAcceptClick, onDiscardClick, isDisableAccept }) => (
	<>
		<Button
			disabled={isDisableAccept}
			onClick={(event) => {
				onAcceptClick(event);
			}}
		>
			<StyledImage src={AcceptImg} alt="presentation" />
		</Button>
		<Button onClick={onDiscardClick}>
			<StyledImage src={DiscardImg} alt="presentation" />
		</Button>
	</>
);

export const ButtonInShowMode = ({ editClick, removeClick }) => (
	<>
		<Button onClick={editClick}>
			<StyledImage src={EditImg} alt="presentation" />
		</Button>
		<Button onClick={removeClick}>
			<StyledImage src={RemoveImg} alt="presentation" />
		</Button>
	</>
);
