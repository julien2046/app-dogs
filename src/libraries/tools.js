export function formatObject (object) {
  const results = [];

  for (let prop in object) {

    if (!object[prop].length) {
      results.push(prop);
    }

    else {

      for (var i = 0; i < object[prop].length; i++) {
        results.push(`${prop} ${object[prop][i]}`);
      }
    }
  }

  return results;
}


export function transformResult (words) {
  let wordsSplited = words.split(" ");
  let wordsFinal = `${words}/`;

  if (wordsSplited.length > 1) {
    let wordsFormated = '';

    for (var i = 0; i < wordsSplited.length; i++) {
      wordsFormated += `${wordsSplited[i]}/`;
    }

    return wordsFormated;

  } else {
    return wordsFinal;
  }

}
