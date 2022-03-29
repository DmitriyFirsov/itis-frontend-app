import React from 'react';
import { render } from '@testing-library/react';

import VisibilityButton from './index';

describe('VisibilityButton test', function () {
	const testCases = [true, false];
	test.each(testCases)('component with isHidden "%s" should correctly render', (isVisible) => {
		const { container } = render(<VisibilityButton isHidden={isVisible} />);
		expect(container).toMatchSnapshot();
	});
});
