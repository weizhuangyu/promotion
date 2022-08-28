/**
 {
  value: '1',
  label: '节点1',
  children: [
    {
      value: '2',
      label: '节点1-1',
      children: [
        {
          value: '3', label: '节点1-1-1'
        }
      ],
    },
    {
    value: '4',
      label: '节点1-2',
    }
  ],
  {
    value: '5',
    label: '节点5',
  }
}

转化成扁平的item Array
[
  { value: 1, label: '节点1' },
  { value: 2, parentId: 1, label: '节点1-1' },
  { value: 3, parentId: 2, label: '节点1-1-1' },
  { value: 4, parentId: 1, label: '节点1-2’ }
]
 */

function flatten(obj) {
	const resultArr = [];

	function flat(item, parentId) {
		const { value, label, children } = item || {};
		if (!parentId) {
			resultArr.push({ value, label });
		} else {
			resultArr.push({ value, label, parentId });
		}

		if (children) {
			for (let i = 0; i < children.length; i++) {
				flat(children[i], value);
			}
		}
	}

	flat(obj, null);

	return resultArr;

}

console.log(flatten({
	value: '1',
	label: '节点1',
	children: [
		{
			value: '2',
			label: '节点1-1',
			children: [
				{
					value: '3',
					label: '节点1-1-1'
				}
			],
		},
		{
			value: '4',
			label: '节点1-2',
		}
	]
}))
