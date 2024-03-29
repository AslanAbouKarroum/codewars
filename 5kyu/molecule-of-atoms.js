// For a given chemical formula represented by a string, count the number of atoms of each element contained in the molecule and return an object (associative array in PHP, Dictionary<string, int> in C#, Map<String,Integer> in Java).

// For example:

// var water = 'H2O';
// parseMolecule(water); // return {H: 2, O: 1}

// var magnesiumHydroxide = 'Mg(OH)2';
// parseMolecule(magnesiumHydroxide); // return {Mg: 1, O: 2, H: 2}

// var fremySalt = 'K4[ON(SO3)2]2';
// parseMolecule(fremySalt); // return {K: 4, O: 14, N: 2, S: 4}
// As you can see, some formulas have brackets in them. The index outside the brackets tells you that you have to multiply count of each atom inside the bracket on this index. For example, in Fe(NO3)2 you have one iron atom, two nitrogen atoms and six oxygen atoms.

// Note that brackets may be round, square or curly and can also be nested. Index after the braces is optional.

// Solution
function parseMolecule(formula) {
    var group, tokens, tokenExp = /([{(\[]|[})\]]|[A-Z][a-z]?)(\d*)/g, stack = [[]];
    while (tokens = tokenExp.exec(formula)) {
      tokens[2] = tokens[2] || 1;
      if (/^[A-Z]/.test(tokens[1])) {
        while (tokens[2]--) stack.push(stack.pop().concat([tokens[1]]));
      } else if (/[{\(\[]/.test(tokens[1])) {
        stack.push([]);
      } else {
        group = stack.pop();
        while (tokens[2]--) stack.push(stack.pop().concat(group))
      }
    }
    return stack[0].reduce(function (count, x) {
      count[x] = (count[x] || 0) + 1;
      return count;
    }, {});
  }