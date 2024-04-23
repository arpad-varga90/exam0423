// Task: Reverse Words in a Sentence
// Write a function `reverseWords(sentence)` that takes a sentence as input and returns the sentence with the order of the words reversed.
// The words in the sentence should retain their original character order, but the sequence of words in the sentence should be reversed.

// Constraints:
// - Words are separated by spaces, and the sentence may contain leading or trailing spaces.
// - Consider only spaces as word separators (no punctuation splitting).
export function reverseWords(sentence) {
  const words = sentence.trim().split(" ");
  let result = "";
  for (let i = words.length - 1; i > -1; i--) {
    if (words[i] !== "") {
      result += ` ${words[i]}`;
    }
  }
  return result.trim();
}

// Task: Word Frequency Counter
// Given a string of text, write a function `wordFrequency` that counts the
// frequency of each unique word in the text. The function should return an
// object where the keys are the unique words and the values are the counts
// of each word. The comparison of words should be case-insensitive.

// Additional instructions:
// - Words are separated by spaces, and the text may contain punctuation.
// - The function should not count punctuation as part of the words.
// - Return the result with words in lowercase.

function filterPunctuation(word) {
  let result = "";

  for (const letter of word) {
    const asciiLetter = letter.charCodeAt(0);
    if (asciiLetter > 96 && asciiLetter < 123) {
      result += letter;
    }
  }
  return result;
}

export function wordFrequency(text) {
  let result = {};
  if (text.length === 0) {
    return result;
  }
  const words = text.toLowerCase().split(" ");
  const noSpaces = words.filter((word) =>  word !== "");
  const noPunctuations = noSpaces.map((word) => {
    return filterPunctuation(word);
  });
  const noDuplicates = new Set([...noPunctuations]);

  for (const noDup of noDuplicates) {
    let counter = 0;
    for (const word of noPunctuations) {
      if (word === noDup) {
        counter++;
      }
      result[noDup] = counter;
    }
  }
  return result;
}

// Task: Top N Frequent Words
// Write a function `topNFrequentWords(text, n)` that finds the top `n` most frequent words in a given text.
// The function should return an array of tuples where each tuple contains a word and its frequency,
// sorted in descending order of frequency. If two words have the same frequency, they should be sorted alphabetically.

// Constraints:
// - Text is case-insensitive.
// - Words are separated by spaces, and the text may contain punctuation.
// - Ignore punctuation, and consider only alphabetic characters for word separation.
export function topNFrequentWords(text, n) {
  const words = text
    .toLowerCase()
    .split(" ")
    .sort((aWord, bWord) => {
      return aWord.localeCompare(bWord);
    });
  const noDuplicates = new Set([...words]);

  for (let i = 0; i < noDuplicates.length; i++) {
    let different = noDuplicates[i];
    const word = noDuplicates[i];
    if (different !== word) {
    }
    const result = words.filter((w) => w.includes(word));
    console.log(result.length);
  }
  return result;
}

//console.log(wordFrequency("Apple banana apple Banana APPLE BANANA"));
