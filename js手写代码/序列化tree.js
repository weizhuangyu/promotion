/**
 *## 笔试
1. 序列化tree

const tree = [{
  name: '第一章',
  children: [
    {
      name: '第一节‘,
      children: [
        {
          name: '第一小节'
        },
        {
          name: '第二小节'
        }
      ]
    },
    {
      name: '第二节‘,
      children: [
        {
          name: '第一小节'
        },
        {
          name: '第二小节'
        }
      ]
    }
  ]
}]
输出
[
  '(1)第一章',
  '(1.1)第一节',
  '(1.1.1)第一小节',
  '(1.1.2)第二小节',
  '(1.2)第二节',
  '(1.2.1)第一小节',
  '(1.2.2)第二小节'
]
 */

function serialize(tree, prefix, output) {
	output = output || []
	prefix = prefix ? prefix : ''
	tree.forEach((item, index) => {
		const tempPrefix = `${prefix}${index + 1}.`
		output.push(`(${tempPrefix.slice(0, -1)})${item.name}`)
		const children = item.children
		if (typeof children === 'object') {
			serialize(children, tempPrefix, output)
		}
	})
	return output
}

console.log(serialize(
	[{
		name: '第一章',
		children: [
			{
				name: '第一节',
				children: [
					{
						name: '第一小节'
					},
					{
						name: '第二小节'
					}
				]
			},
			{
				name: '第二节',
				children: [
					{
						name: '第一小节'
					},
					{
						name: '第二小节'
					}
				]
			}
		]
	}]
))