import TrieModule from '@kamilmielnik/trie';
import fs from 'fs';

const { fromArray, Trie, serialize } = TrieModule;

const fromFile = (filepath) => {
  const file = fs.readFileSync(filepath, 'utf-8');
  // Assuming file contains 1 word per line
  const words = file.split(/\r?\n/).filter(Boolean);
  const node = fromArray(words);
  return node;
};

const toFile = (filepath, trie) => {
  const serialized = serialize(trie);
  fs.writeFileSync(filepath, serialized);
};

const trie = fromFile("dictionaries/sowpods.txt");
console.log(trie)
toFile("wordsets/sowpods.trie", trie);
