import HTML from '../src/index.js'
import summaryHTML from './summary-html.js'
import smallHTML from './small-html.js'
import * as fs from 'fs/promises'

const runTest = () => {
  const parsedAST = HTML.parse(smallHTML)
  fs.writeFile('./maybe-screwed-up.json', JSON.stringify(parsedAST))
}

runTest()
