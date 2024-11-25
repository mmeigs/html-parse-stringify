import parseTag from './parse-tag.js'

const tagRE = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g
const whitespaceRE = /^\s*$/

// re-used obj for quick lookups of components
const empty = Object.create(null)

export default function parse(html, options) {
  options || (options = {})
  options.components || (options.components = empty)
  const result = []
  const arr = []
  let current
  let level = -1
  let inComponent = false
  let tableRows = null
  let inTable = false

  // handle text at top level
  // if (html.indexOf('<') !== 0) {
  //   var end = html.indexOf('<');
  //   const content = end === -1 ? html : html.substring(0, end);
  //   if (content !== '\n' && content !== '')

  //   result.push({
  //     type: 'text',
  //     content: end === -1 ? html : html.substring(0, end),
  //   })
  // }

  html.replace(tagRE, function (tag, index) {
    if (inComponent) {
      if (tag !== '</' + current.htmlType + '>') {
        return
      } else {
        inComponent = false
      }
    }
    const isOpen = tag.charAt(1) !== '/'
    const isComment = tag.startsWith('<!--')
    const start = index + tag.length
    const nextChar = html.charAt(start)
    let parent

    if (isComment) {
      // ???
      return
      const comment = parseTag(tag)

      // if we're at root, push new base node
      if (level < 0) {
        result.push(comment)
        return result
      }
      parent = arr[level]
      parent.children.push(comment)
      return result
    }

    if (isOpen) {
      level++

      const { result: parseResult, newCurrentNode } = parseTag(tag)
      current = newCurrentNode ?? parseResult
      if (current.blockType === 'tag' && options.components[current.htmlType]) {
        current.blockType = 'component'
        inComponent = true
      }

      if (
        !current.voidElement &&
        !inComponent &&
        nextChar &&
        nextChar !== '<'
      ) {
        const textContent = html.slice(start, html.indexOf('<', start))
        if (textContent !== '\n' && textContent !== '') {
          current.children.push({
            blockType: 'text',
            type: 'paragraph',
            content: html.slice(start, html.indexOf('<', start)),
            children: [
              {
                type: 'text',
                value: textContent,
              },
            ],
          })
        }
      }

      // if we're at root, push new base node
      if (level === 0) {
        result.push(parseResult)
      }

      parent = arr[level - 1]

      if (parent) {
        parent.children.push(parseResult)
      }

      arr[level] = parseResult

      if (newCurrentNode) {
        level++
        arr[level] = newCurrentNode
      }

      current = parseResult
    }

    // TODO: look in here to see if I should use parseResult or current
    if (!isOpen || current.voidElement) {
      if (
        level > -1 &&
        (current.voidElement || current.htmlType === tag.slice(2, -1))
      ) {
        level--
        // move current up a level to match the end tag
        current = level === -1 ? result : arr[level]
      }
      if (!inComponent && nextChar !== '<' && nextChar) {
        // trailing text node
        // if we're at the root, push a base text node. otherwise add as
        // a child to the current node.
        parent = level === -1 ? result : arr[level].children

        // calculate correct end of the content slice in case there's
        // no tag after the text node.
        const end = html.indexOf('<', start)
        let content = html.slice(start, end === -1 ? undefined : end)
        // if a node is nothing but whitespace, collapse it as the spec states:
        // https://www.w3.org/TR/html4/struct/text.html#h-9.1
        if (whitespaceRE.test(content)) {
          content = ' '
        }
        // don't add whitespace-only text nodes if they would be trailing text nodes
        // or if they would be leading whitespace-only text nodes:
        //  * end > -1 indicates this is not a trailing text node
        //  * leading node is when level is -1 and parent has length 0
        if ((end > -1 && level + parent.length >= 0) || content !== ' ') {
          if (content !== '' && content !== ' ' && content !== '\n') {
            parent.push({
              type: 'text',
              content: content,
            })
          }
        }
      }
    }
  })

  return result
}
