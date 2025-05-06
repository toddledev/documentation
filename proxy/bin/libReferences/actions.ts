interface JsonAction {
  id: string
  action: {
    name: string
    description: string
    arguments: Array<ActionArgument>
    output?: ActionOutput
  }
}

interface ActionArgument {
  name: string
  type?: { type: string }
  action: any
  description: string
}

interface ActionOutput {
  type: { type: string }
  description: string
}

export const includeActions = async (content: string) => {
  try {
    const actions = await fetch('https://api.nordcraft.com/lib/actions.json')
    const actionsJson = await actions.json<Array<JsonAction>>()
    const updatedContent = `\
${content}

${actionsJson
  .map((action) => {
    return `## ${action.action.name}

${action.action.description}${getArguments(action.action.arguments)}${getOutput(action.action.output)}
`
  })
  .join('\n')}`
    return updatedContent
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error including actions:', error)
    return content
  }
}

const getArguments = (args: Array<ActionArgument>) => {
  if (args.length === 0) {
    return ''
  }
  let content = '\n### Arguments\n'
  content += '| Name | Type | Description |\n'
  content += '| ---- | ---- | ----------- |\n'
  args.forEach((arg) => {
    content += `| ${arg.name} | ${arg.type?.type} | ${arg.description} |\n`
  })
  return content
}

const getOutput = (output?: ActionOutput) => {
  if (!output) {
    return ''
  }
  let content = '\n### Output\n'
  content += '| Type | Description |\n'
  content += '| ---- | ----------- |\n'
  content += `| ${output.type?.type} | ${output.description} |\n`
  return content
}
