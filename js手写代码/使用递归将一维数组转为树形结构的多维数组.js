/**
 *
//{
    'id':'1',
    'value':'1',
    'child':{
    'id':'2',
    'value':'2',
    'child':[
        {
        'id':'3',
        'value':'3'
        },
        {
        'id':'4',
        'value':'4'
        }]
    }
}
 */

function listConvertTree (list, pid, fieldName) { // 生成树结构
	const result = []
	for (let i = 0; i < list.length; i++) {
		if (list[i].parentId === pid) {
			const obj = list[i];
			const temp = listConvertTree(list, list[i].id, fieldName)
			if (temp.length > 0) {
				obj[fieldName] = temp
			}
			result.push(obj)
		}
	}
	return result
}

console.log(JSON.stringify(listConvertTree([
	{'id':'1','value':'1','parentId':''},
	{'id':'2','value':'2','parentId':'1'},
	{'id':'3','value':'3','parentId':'2'},
	{'id':'4','value':'4','parentId':'2'},
],'','child'), null, 2));
