function DLinkedNode  () {
	this.key = null;
	this.value = null;
	this.prev = null
	this.next = null;
}

class LRUCache {
	constructor(capacity) {
		this.capacity = capacity
		this.size = 0
		this.cache = new Map()
		this.head = new DLinkedNode()
		this.tail = new DLinkedNode()
		this.head.next = this.tail
		this.tail.next = this.head
	}

	addNode(node) {
		const head = this.head
		const next = this.head.next
		node.prev = head
		node.next = next
		head.next = node
		next.prev = node
	}

	removeNode(node) {
		const prev = node.prev
		const next = node.next
		prev.next = next
		next.prev = prev
	}

	moveToHead(node) {
		this.removeNode(node)
		this.addNode(node)
	}

	popTail() {
		const node = this.tail.prev
		this.removeNode(node)
		// 需要删除缓存用
		return node
	}

	put(key, value) {
		const node = new DLinkedNode()
		node.key = key
		node.value = value
		const cacheNode = this.cache.get(key)
		if (!cacheNode) {
			this.addNode(node)
			this.cache.set(key, node)
			this.size++
			if (this.size > this.capacity) {
				const tailNode = this.popTail()
				this.size--
				this.cache.delete(tailNode.key)
			}
		} else {
			cacheNode.value = value
			this.moveToHead(cacheNode)
		}
	}

	get(key) {
		const node = this.cache.get(key)
		if (node) {
			this.moveToHead(node)
			return node.value
		}
		return -1
	}
}

var lruCache = new LRUCache(2)
lruCache.put(2, 1)
lruCache.put(1, 1)
lruCache.put(2, 3)
lruCache.put(4, 1)
console.log(lruCache.get(1))
console.log(lruCache.get(2))
console.log(lruCache.get(4))