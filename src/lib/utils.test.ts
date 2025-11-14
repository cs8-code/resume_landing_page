import { describe, it, expect } from 'vitest';
import { cn } from './utils';

describe('cn', () => {
  it('merges class names', () => {
    expect(cn('a', 'b')).toBe('a b');
  });

  it('handles falsy values', () => {
    expect(cn('a', false && 'b', undefined, null, 'c')).toBe('a c');
  });
});
