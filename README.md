# `@manicjs/mcp`

Official Manic plugin for exposing MCP endpoints and tools.

## Documentation

- Website: [manicjs.tech](https://www.manicjs.tech/)
- Plugin docs: [manicjs.tech/docs/framework/plugins/mcp](https://www.manicjs.tech/docs/framework/plugins/mcp)

## Install

```bash
bun add @manicjs/mcp
```

## Usage

```ts
import { defineConfig } from 'manicjs/config';
import { mcp } from '@manicjs/mcp';

export default defineConfig({
  plugins: [mcp()],
});
```

## License

GPL-3.0
