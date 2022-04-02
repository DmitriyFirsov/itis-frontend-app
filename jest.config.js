module.exports = {
	clearMocks: true,
	collectCoverage: true,
	coverageDirectory: 'coverage',
	coverageProvider: 'v8',
	testEnvironment: 'jsdom',
	coverageReporters: ['text'],
	testMatch: ['<rootDir>/src/**/*.test.{js,jsx}'],
	collectCoverageFrom: ['<rootDir>/src/**/*.{js,jsx}'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.js']
};
