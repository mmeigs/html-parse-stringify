import HTML from '../src/index.js'
import summaryHTML from './summary-html.js'
import * as fs from 'fs/promises'

const runTest = () => {
  const parsedAST = HTML.parse(summaryHTML)
  fs.writeFile('./test-parse.json', parsedAST)
}

runTest()
