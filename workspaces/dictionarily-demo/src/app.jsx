import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { deserialize, find, toArray, traverse } from '@kamilmielnik/trie';
import { Flex, Input } from '@chakra-ui/react'



function Explore({trie}) {
  const [results, setResults] = useState(null);

  useEffect(() => {
    const start = new Date().valueOf();
    const words = [];
    traverse(trie, node => {
      if (node.prefix.length == 7) words.push(node.prefix);
    }, {wordsOnly: true});
    const end = new Date().valueOf();
    console.log(end - start, words);
  }, []);


  const [value, setValue] = useState("");
  const updateValue = event => {
    const newValue = event.target.value;
    setValue(newValue);
    setResults(toArray(find(trie, newValue), {prefix: newValue, wordsOnly: true}));
  };


  return <Flex direction="column">
    <Input value={value} onChange={updateValue}/>
    <Flex>{JSON.stringify(results)}</Flex>
  </Flex>
}


export default function App() {
  const [trie, setTrie] = useState(null);

  useEffect(() => {
    axios.get('wordsets/sowpods.trie')
    .then(result => setTrie(deserialize(result.data)))
  }, []);

  return trie ? <Explore trie={trie}/> : 'loading';
}

