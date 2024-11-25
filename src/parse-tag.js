import lookup from 'void-elements'
const attrRE = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g

const headings = new Set(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])

export default function parseTag(tag) {
  const res = {
    blockType: 'tag',
    htmlType: '',
    type: '',
    name: '',
    voidElement: false,
    attrs: {},
    children: [],
  }

  const tagMatch = tag.match(/<\/?([^\s]+?)[/\s>]/)
  const tagName = tagMatch[1]
  if (tagMatch) {
    res.htmlType = tagName

    if (lookup[tagMatch[1]] || tag.charAt(tag.length - 2) === '/') {
      res.voidElement = true
    }

    // handle comment tag
    if (res.htmlType.startsWith('!--')) {
      const endIndex = tagName.indexOf('-->')

      return {
        result: {
          blockType: 'comment',
          comment: endIndex !== -1 ? tagName.slice(4, endIndex) : '',
        },
      }
    }
  }

  const reg = new RegExp(attrRE)
  let result = null
  for (;;) {
    result = reg.exec(tag)

    if (result === null) {
      break
    }

    if (!result[0].trim()) {
      continue
    }

    if (result[1]) {
      const attr = result[1].trim()
      let arr = [attr, '']

      if (attr.indexOf('=') > -1) {
        arr = attr.split('=')
      }

      res.attrs[arr[0]] = arr[1]
      reg.lastIndex--
    } else if (result[2]) {
      res.attrs[result[2]] = result[3].trim().substring(1, result[3].length - 1)
    }
  }

  // Divs
  if (tagName === 'div') {
    if (res.attrs?.class?.includes('summary-table')) {
      res.type = 'section'
      // res.type = 'directive'
      // res.name = 'list-table'
      // const listChild = {
      //   type: 'list',
      //   htmlType: 'fake-list',
      //   enumtype: 'unordered',
      //   children: [],
      //   voidElement: false,
      //   attrs: {},
      // }
      // res.children = [listChild]
      // return { result: res, newCurrentNode: listChild }
      return { result: res }
    } else if (res.attrs?.class?.includes('table-header')) {
    } else if (res.attrs?.class?.includes('header')) {
      res.type = 'section'
    } else {
      res.type = 'section'
    }
  } else if (tagName === 'span') {
    res.type = 'paragraph'
  } else if (tagName === 'a') {
    res.type = 'reference'
    res.refuri = res.attrs?.href
  } else if (headings.has(tagName)) {
    res.type = 'heading'
  } else {
    res.type = 'section'
  }

  return { result: res }
}
