interface JsonFormula {
  id: string
  formula: {
    name: string
    description: string
    arguments: Array<FormulaArgument>
    output?: FormulaOutput
  }
}

interface FormulaArgument {
  name: string
  type?: { type: string }
  formula: any
  description: string
}

interface FormulaOutput {
  type: { type: string }
  description: string
}

export const includeFormulas = async (content: string) => {
  try {
    const formulas = await fetch('https://api.nordcraft.com/lib/formulas.json')
    const formulasJson = await formulas.json<Array<JsonFormula>>()
    const updatedContent = `\
${content}

${formulasJson
  .map((formula) => {
    return `## ${formula.formula.name}

${formula.formula.description}${getArguments(formula.formula.arguments)}${getOutput(formula.formula.output)}
`
  })
  .join('\n')}`
    return updatedContent
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error including formulas:', error)
    return content
  }
}

const getArguments = (args: Array<FormulaArgument>) => {
  if (args.length === 0) {
    return ''
  }
  let content = '\n\n### Arguments\n\n'
  content += '| Name | Type | Description |\n'
  content += '| ---- | ---- | ----------- |\n'
  args.forEach((arg) => {
    content += `| ${arg.name} | ${arg.type?.type} | ${arg.description} |\n`
  })
  return content
}

const getOutput = (output?: FormulaOutput) => {
  if (!output) {
    return ''
  }
  let content = '\n\n### Output\n\n'
  content += '| Type | Description |\n'
  content += '| ---- | ----------- |\n'
  content += `| ${output.type?.type} | ${output.description} |\n`
  return content
}
