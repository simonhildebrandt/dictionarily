import { toArray, find, has, deserialize, traverse } from '@kamilmielnik/trie';

export { toArray, find, has, deserialize, traverse };

export async function download() {
  const response = await fetch('https://dictionarily-6d1a5.web.app/wordsets/sowpods.trie');
  return deserialize(await response.text());
}
