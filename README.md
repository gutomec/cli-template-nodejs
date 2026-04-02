# cli-template-nodejs

Production-grade CLI boilerplate using oclif and TypeScript.

## Features

- **oclif Framework**: Enterprise-grade CLI framework with best-in-class practices
- **TypeScript**: Full type safety and modern language features
- **Testing**: Vitest configuration with coverage reporting
- **Code Quality**: ESLint and Prettier pre-configured
- **CI/CD**: GitHub Actions workflows for test and lint
- **Documentation**: Comprehensive README and examples
- **Publishing**: Ready for npm publishing with versioning

## Quick Start

### Prerequisites

- Node.js 18+
- npm 7+

### Installation & Development

```bash
# Install dependencies
npm install

# Build TypeScript
npm run build

# Run tests
npm test

# Run linting
npm run lint

# Format code
npm run format

# Type checking
npm run type-check
```

## Project Structure

```
cli-template-nodejs/
├── src/
│   ├── index.ts              # Main entry point
│   ├── commands/             # CLI commands
│   │   └── hello.ts          # Example command
│   └── utils/                # Shared utilities (optional)
├── test/
│   ├── commands/             # Command tests
│   │   └── hello.test.ts     # Example test
│   └── conftest.py           # Test configuration
├── .github/
│   └── workflows/            # GitHub Actions CI/CD
│       ├── test.yml          # Test workflow
│       └── lint.yml          # Linting workflow
├── package.json              # Dependencies and scripts
├── tsconfig.json             # TypeScript config
├── .eslintrc.json            # ESLint config
├── .prettierrc                # Prettier config
└── README.md                 # This file
```

## Available Commands

### `hello`

A simple greeting command to demonstrate CLI functionality.

```bash
npm run build
node dist/index.js hello --name "Your Name"
# Output: Hello from cli-template-nodejs!
```

### Development Scripts

| Script | Purpose |
|--------|---------|
| `npm run build` | Compile TypeScript to JavaScript |
| `npm test` | Run test suite with Vitest |
| `npm run test:coverage` | Generate coverage reports |
| `npm run lint` | Check code with ESLint |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run type-check` | TypeScript type checking |

## Testing

Tests are written with Vitest and should cover:
- Unit tests for utilities
- Command execution tests
- Integration tests for workflows

Run tests with coverage:

```bash
npm run test:coverage
```

## CI/CD Workflows

The template includes two GitHub Actions workflows:

### `test.yml`
- Runs on: Windows, macOS, Linux
- Tests: Node 18, 20, 22
- Coverage: Vitest coverage reporting

### `lint.yml`
- ESLint code quality checks
- TypeScript strict mode validation
- Prettier formatting verification

## Publishing to npm

### One-time Setup

1. Create an npm account at https://npmjs.com
2. Set up OIDC token for GitHub Actions:
   - https://docs.npmjs.com/creating-and-viewing-access-tokens#creating-automation-tokens
3. Configure GitHub repository secrets

### Publishing

```bash
npm version patch  # or minor/major
git push origin main --tags
# GitHub Actions will publish to npm automatically
```

## Extending the Template

### Adding New Commands

1. Create new file in `src/commands/`
2. Follow the pattern in `src/commands/hello.ts`
3. Write tests in `test/commands/`
4. Update documentation

### Adding Dependencies

```bash
npm install --save your-package     # Production dependency
npm install --save-dev your-package # Development dependency
```

## Troubleshooting

### Build errors with TypeScript

- Clear the dist directory: `rm -rf dist`
- Reinstall dependencies: `rm -rf node_modules && npm install`
- Check Node version: `node --version` (should be 18+)

### Test failures

- Run tests in watch mode: `npm test -- --watch`
- Check test output carefully
- Verify test fixtures are correct

### GitHub Actions failures

- Check Actions tab in GitHub
- Review build logs for specific errors
- Ensure all dependencies are in package.json

## Best Practices

- Keep commands focused and single-purpose
- Write tests for all new commands
- Use TypeScript strict mode
- Follow ESLint rules
- Document public APIs
- Pin dependency versions in production

## License

MIT - See LICENSE file for details

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Write or update tests
5. Ensure all tests pass
6. Submit a pull request

## Resources

- [oclif Documentation](https://oclif.io)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vitest Guide](https://vitest.dev)
- [Node.js Best Practices](https://nodejs.org/en/docs/guides/nodejs-performance/)
