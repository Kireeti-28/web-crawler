const { normilazeUrl } = require('./crawl.js');
const { test, expect } = require('@jest/globals');

test('normalizeUrl strip protocol 1', () => {
  const input = 'https://blog.boot.dev/path';
  const actual = normilazeUrl(input);
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected);
})

test('normalizeUrl strip protocol 2', () => {
  const input = 'http://blog.boot.dev/path';
  const actual = normilazeUrl(input);
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected);
})

test('normalizeUrl strip trailing slashes', () => {
  const input = 'https://blog.boot.dev/path/';
  const actual = normilazeUrl(input);
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected);
})

test('normalizeUrl capitals', () => {
  const input = 'https://Blog.Boot.dev/path/';
  const actual = normilazeUrl(input);
  const expected = 'blog.boot.dev/path'
  expect(actual).toEqual(expected);
})