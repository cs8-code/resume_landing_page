import { describe, it, expect } from 'vitest';
import { isValidEmail } from '../lib/validation';

describe('isValidEmail', () => {
  it('validates correct emails', () => {
    expect(isValidEmail('user@example.com')).toBe(true);
  });

  it('invalidates incorrect emails', () => {
    expect(isValidEmail('invalid@')).toBe(false);
    expect(isValidEmail('invalid@domain')).toBe(false);
    expect(isValidEmail('invalid')).toBe(false);
  });
});
