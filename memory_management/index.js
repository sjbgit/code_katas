/**
 * @constructor Creates a new memory manager for the provided array.
 * @param {memory} An array to use as the backing memory.
 */
function MemoryManager(memory){
	this.memory = memory;
	this.currentEndIndex = 0;
	console.log(this.memory);

}

/**
 * Allocates a block of memory of requested size.
 * @param {number} size - The size of the block to allocate.
 * @returns {number} A pointer which is the index of the first location in the allocated block.
 * @throws If it is not possible to allocate a block of the requested size.
 */
MemoryManager.prototype.allocate = function(size){
	if (this.currentEndIndex + size > this.memory.length) {
		throw Error('failed to allocate');
	}

	var index = this.currentEndIndex;
	this.currentEndIndex += size;
	return index;
};

/**
 * Releases a previously allocated block of memory.
 * @param {number} pointer - The pointer to the block to release.
 * @throws If the pointer does not point to an allocated block.
 */
MemoryManager.prototype.release = function(pointer){

};

/**
 * Reads the value at the location identified by pointer
 * @param {number} pointer - The location to read.
 * @returns {number} The value at that location.
 * @throws If pointer is in unallocated memory.
 */
MemoryManager.prototype.read = function(pointer){
	//check if pointer is mapped?
	if (pointer >= this.memory.length) {
		throw Error('unable to read');
	}

	return this.memory[pointer];
}

/**
 * Writes a value to the location identified by pointer
 * @param {number} pointer - The location to write to.
 * @param {number} value - The value to write.
 * @throws If pointer is in unallocated memory.
 */
MemoryManager.prototype.write = function(pointer, value){
	if (pointer >= this.memory.length) {
		throw Error('unable to write');
	}

	this.memory[pointer] = value;
}

MemoryManager.prototype.output = function() {
	console.log(this);
}


var array = new Array(16);
var memoryManager = new MemoryManager(array);
var pointer = memoryManager.allocate(8);
var expected = 'a',
    actual;
memoryManager.write(pointer, expected);
actual = memoryManager.read(pointer);

console.log('Pointer: ' + pointer);
console.log('Actual: ' + actual);


var expected1 = 'b';
var pointer1 = memoryManager.allocate(3);
memoryManager.write(pointer1, expected1);
var actual1 = memoryManager.read(pointer1);

var expected2 = 'c';
var pointer2 = memoryManager.allocate(4);
memoryManager.write(pointer2, expected2);
var actual2 = memoryManager.read(pointer2);


memoryManager.output();

//console.log(array);