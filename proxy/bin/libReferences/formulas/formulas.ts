import { readFileSync } from 'fs'
import * as prettier from 'prettier'

interface JsonFormula {
  id: string
  formula: {
    name: string
    description?: string
    arguments: Array<FormulaArgument>
    output?: FormulaOutput
  }
}

interface FormulaArgument {
  name: string
  type?: { type: string }
  formula: any
  description?: string
}

interface FormulaOutput {
  type: { type: string }
  description: string
}

export const includeFormulas = async (content: string) => {
  try {
    const formulas = await fetch('https://api.nordcraft.com/lib/formulas.json')
    const formulasJson = await formulas.json<Array<JsonFormula>>()
    const formulaTemplate = readFileSync(`${__dirname}/formula.md`, 'utf-8')
    const argumentsTemplate = readFileSync(
      `${__dirname}/arguments.md`,
      'utf-8',
    ).trim()
    const argumentTemplate = readFileSync(
      `${__dirname}/argument.md`,
      'utf-8',
    ).trim()
    const outputsTemplate = readFileSync(`${__dirname}/outputs.md`, 'utf-8')
    const updatedContent = `\
${content.trim()}

${formulasJson
  .map((formula) => {
    let formulaContent = formulaTemplate
      .replace('{{ name }}', formula.formula.name)
      .replace('{{ description }}', formula.formula.description ?? '')
    if (formula.formula.arguments.length > 0) {
      formulaContent += '\n' + argumentsTemplate + '\n'
      console.log('args for', formula.formula.name, formula.formula.arguments)
      formulaContent += formula.formula.arguments
        .map((arg) => {
          return argumentTemplate
            .replace('{{ name }}', arg.name)
            .replace('{{ type }}', arg.type?.type ?? '')
            .replace('{{ description }}', arg.description ?? '')
        })
        .join('\n')
    }
    if (formula.formula.output) {
      formulaContent +=
        '\n' +
        outputsTemplate
          .replace('{{ type }}', formula.formula.output.type.type ?? '')
          .replace(
            '{{ description }}',
            formula.formula.output.description ?? '',
          )
    }
    return formulaContent
  })
  .join('\n')}
`
    return await prettier.format(updatedContent, { parser: 'markdown' })
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error including formulas:', error)
    return content
  }
}
