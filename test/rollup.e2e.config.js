export default [
	{
		input: `${__dirname}/e2e/node/index.js`,
		output: [
			{
				format: 'umd',
				name: 'THREE',
				file: `${__dirname}/e2e/node/index.cjs.js`,
				indent: '\t'
			}
		]
	},
];
