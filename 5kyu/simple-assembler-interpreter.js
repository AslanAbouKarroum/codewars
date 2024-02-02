// This is the first part of this kata series. Second part is here.

// We want to create a simple interpreter of assembler which will support the following instructions:

// mov x y - copies y (either a constant value or the content of a register) into register x
// inc x - increases the content of the register x by one
// dec x - decreases the content of the register x by one
// jnz x y - jumps to an instruction y steps away (positive means forward, negative means backward, y can be a register or a constant), but only if x (a constant or a register) is not zero
// Register names are alphabetical (letters only). Constants are always integers (positive or negative).

// Note: the jnz instruction moves relative to itself. For example, an offset of -1 would continue at the previous instruction, while an offset of 2 would skip over the next instruction.

// The function will take an input list with the sequence of the program instructions and will execute them. The program ends when there are no more instructions to execute, then it returns a dictionary (a table in COBOL) with the contents of the registers.

// Also, every inc/dec/jnz on a register will always be preceeded by a mov on the register first, so you don't need to worry about uninitialized registers.

// Example
// ["mov a 5"; "inc a"; "dec a"; "dec a"; "jnz a -1"; "inc a"]

// visualized:

// mov a 5
// inc a
// dec a
// dec a
// jnz a -1
// inc a
// The above code will:

// set register a to 5,
// increase its value by 1,
// decrease its value by 2,
// then decrease its value until it is zero (jnz a -1 jumps to the previous instruction if a is not zero)
// and then increase its value by 1, leaving register a at 1
// So, the function should return:

// Map("a"->1)

// SOlution
const asm = {};

init = () => {
  asm.ip = 0;
  asm.regs = {};
}

asm.code = {
  mov: (x, y) => asm.regs[x] = isNaN(+y) ? +asm.regs[y] : +y,
  inc: (x) => asm.regs[x]++,
  dec: (x) => asm.regs[x]--,
  jnz: (x, y) => (asm.regs[x] !== 0 ? asm.ip += +y - 1 : false)
};

function simple_assembler(program) {
  init();
  let params = [];
  
  while (asm.ip < program.length) {
    params = program[asm.ip].split(' ');
    asm.code[params[0]].apply(null, params.slice(1));
    
    asm.ip++;
  }
  
  return asm.regs;
}

// Solution

function simple_assembler(program) {
	
	var reg = {};
	
	var regOrValue = (n) => n.match(/[a-z]/) ? reg[n] : +n;
	
	var ops = {
		'mov' : (a,b) => {reg[a] = regOrValue(b); return 1;},
		'inc' : (a,b) => {reg[a]++; return 1;},
		'dec' : (a,b) => {reg[a]--; return 1;},
		'jnz' : (a,b) => {return regOrValue(a) != 0 ? +b : 1;}
	};
	
	var ip = 0;
	while(ip < program.length) {
		var [op, a, b] = program[ip].split(' ');
		ip += ops[op](a, b);
	}
	
	return reg;
}

// Solution
function simple_assembler(program) {
	const mem = {}
	for (let i = 0; i < program.length; ++i) {
		const [op, reg, val] = program[i].split(" ")
		if (op === "mov") {
			mem[reg] = isNaN(val) ? mem[val] : +val
		} else if (op === "inc") {
			mem[reg] = (mem[reg] || 0) + 1
		} else if (op === "dec") {
			mem[reg] = (mem[reg] || 0) - 1
		} else if (op === "jnz") {
			if (mem[reg] !== 0) {
				i += val - 1
			}
		}
	}
	return mem
}

// SOlution
function simple_assembler(program) {
    let p = parseInt, regs = {}, funcs = {
      'mov': (a, b) => {isNaN(p(b)) ? regs[a] = regs[b] : regs[a] = p(b)},
      'inc': (a) => {regs[a]++;},
      'dec': (a) => {regs[a]--;},
      'jnz': (a, b) => isNaN(p(a)) ? ((regs[a] !== 0) ? p(b) : 1) : ((p(a) !== 0) ? p(b) : 1)
    }
    for (let index = 0; index < program.length;){
      let commands = program[index].split(' ')
      index += funcs[commands[0]](commands[1], commands[2]) || 1;
    }
    return regs;
  }