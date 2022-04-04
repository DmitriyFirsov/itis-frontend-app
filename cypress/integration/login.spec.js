import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../src/constants/authKeys';

describe('login', () => {
	it('login success patch', () => {
		cy.visit('/login');
		cy.get('input[id=login]').type('john.smith@example.com');
		cy.get('input[id=password]').type('Password1234!');
		cy.get('button[type=submit]').click();
		cy.location('pathname').should('eq', '/');
		cy.should(() => {
			expect(localStorage.getItem(ACCESS_TOKEN)).not.eq(null);
			expect(localStorage.getItem(REFRESH_TOKEN)).not.eq(null);
		});
		cy.contains('Logout').click();
		cy.location('pathname').should('eq', '/login');
		cy.should(() => {
			expect(localStorage.getItem(ACCESS_TOKEN)).eq(null);
			expect(localStorage.getItem(REFRESH_TOKEN)).eq(null);
		});
	});
});
