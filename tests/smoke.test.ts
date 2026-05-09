import { describe, expect, it } from 'bun:test';
import { mcp } from '../src/index';

describe('@manicjs/mcp', () => {
  it('creates a plugin descriptor', () => {
    const plugin = mcp();
    expect(plugin.name).toBe('@manicjs/mcp');
    expect(typeof plugin.configureServer).toBe('function');
  });
});
