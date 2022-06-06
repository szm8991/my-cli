import { describe, expect, it } from 'vitest';
import { isPathExisted, create50DayTemplate } from '../../src/commands';

describe('should', () => {
  it('exported', () => {
    expect(isPathExisted('src1')).toMatchInlineSnapshot('false');
    expect(create50DayTemplate('src1')).toMatchInlineSnapshot('undefined');
  });
});
