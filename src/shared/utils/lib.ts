export const findTags = (text: string) => {
  const tags = text.split(' ').filter((word) => word.startsWith('#'))

  const tagFiltered = tags.filter((tag, id) => tags.indexOf(tag) === id)

  return tagFiltered
}

export const highlightingTags = (text: string | null) => {
  if (!text) return ''

  const tags = findTags(text)

  const newText = text
    .split(' ')
    .map((word) => {
      if (tags.includes(word)) {
        word = `<span>${word}</span>`
      }
      return word
    })
    .join(' ')

  return newText
}
/*
if (tags.includes(word)) {
      console.log(word)
      word = '1'
      console.log(word)
    }
*/
