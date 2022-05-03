import startCase from 'lodash/startCase';
import lowerCase from 'lodash/lowerCase';
import upperFirst from 'lodash/upperFirst';

export function statusToTitle(status) {
	return upperFirst(lowerCase(startCase(status)));
}
