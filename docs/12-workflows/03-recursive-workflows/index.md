---
title: Recursive workflows
description: toddle docs
---

# Recursive workflows
There are scenarios where you need to iterate over a list of items and execute a workflow for each of those items. Or you might want to create a countdown timer. For these scenarios, you can create recursive workflows. A recursive workflow is a workflow that calls itself (conditionally). For example, for a countdown you could create a workflow that decreases a variable, waits for some time and then calls itself again until the value reaches 0.

@@@ example
componentUrl: https://docs_examples.toddle.site/.toddle/custom-element/example-recursive-workflows.js
editorUrl: https://toddle.dev/projects/docs_examples/branches/main/components/example-recursive-workflows?rightpanel=style&canvas-width=1211&mode=design&canvas-height=800
height: 10rem

Click on the [kbd]Start[kbd] button to start the timer. It will count down to 0.
@@@

::: warning
Make sure you have a break condition, sleep timers or other measures in place so that the workflow does not call itself infinitely and cause an endless loop.
:::