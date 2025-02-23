// Explanation of the concept
// Genetic algorithms are a useful tool for machine learning. One simple way to find a solution to a problem that would typically be too difficult to brute force is through algorithms such as these.

// For example, say our problem is, given the list [1,2,3,4,5,6,7,8,9,10], find a way to partition the list into two lists such that the sum of one list is 38 and the product of the other list is 210. You could of course brute force it, using the fact that you can find the divisors of 210. But say you have the list of numbers from 1 to 50! That makes it a lot more difficult, and if we are not looking for a sum or product that is actually possible, just close to a given number, it's even harder to do by brute force.

// Genetic algorithms are based on the idea that you can create a chromosome that represents a potential solution to your problem. One way of representing such a chromosome is with a binary string of digits. In our example, we could represent one chromosome as 0010010111, and decide that 0 means that the corresponding number is in the "sum" pile and 1 means it is in the "product" pile, so this chromosome gives us 1+2+4+5+7=19 and 3*6*8*9*10=12960. Not very close. But the point is that you can easily represent any potential solution as a binary string!

// Now, the key to a genetic algorithm is to generate many chromosomes, a large population, if you will. The "genetic" part of the name comes from the fact that we will, in a sense, let evolution bring our chromosomes as close as possible to our desired solution. So what we do is generate a population of random chromosomes. Then we calculate the fitness of those chromosomes in whatever way fits the problem. In our case, we want to minimize the absolute difference of the sum from the ideal sum and likewise for the product, so one way we can calculate a "score" of how good our estimate is is sqrt((chromosome sum - ideal sum)^2+(chromosome product - ideal product)^2). We want to, of course, maximize fitness, so the closer our score is to 0 (that is, the closer the chromosome is to ideal), the bigger the fitness is. So what we can do is let our fitness be 1/(score + 1); a fitness of 0 means it's nowhere near what we want, and a fitness of 1 means we have exactly the right answer!

// The evolution step involves taking a look at our population and selecting by fitness. This is done in a few steps:

// Select two chromosomes from our original population. This is not done purely randomly. This is done using what is called "roulette wheel selection", where the chances of picking a chromosome are proportional to its fitness! This means we are more likely to pick out chromosomes that are closer to our answer. Duplicate these chromosomes.
// With a probability p_c, a crossover occurs between these two new chromosomes. That means at some random bit along the length of the chromosome, we cut off the rest of the chromosome and switch it with the cut off part of the other one. In other words, say we have 01011010 and 11110110 and we crossover at the 3rd bit. This results in 010 10110 and 111 11010.
// With a probability p_m, a mutation can occur at every bit along each new chromosome; the mutation rate is typically very small.
// Add these two new chromosomes into our new population and repeat steps 1-3 until you have a new population the same size as the original one. For obvious reasons, this is easier if you start off with an even sized original population.
// Our goal here is to run the evolution process many times. Eventually, all the chromosomes in our population will have a fitness close to 1! When we feel we have done enough runs, that is the time to cut it off, find the chromosome with the highest fitness, and return that as the result.

// Your task
// We'll keep this task fairly simple. You will be given an outline of a GeneticAlgorithm class with a few methods. The crossover and mutate methods are self-explanatory: they take in two chromosomes or one and a probability (respectively) and return a crossed-over pair or a mutated chromosome. The generate method generates a random chromosome of a given length (use this in your run method to create a population). The select method will take a population and a corresponding list of fitnesses and return two chromosomes selected with the roulette wheel method. The run method will take a fitness function that accepts a chromosome and returns the fitness of that chromosome, the length of the chromosomes to generate (should be the same length as the goal chromosome), the crossover and mutation probabilities, and an optional number of iterations (default to 100). Make the population size whatever you want; 100 is a good number but anywhere between 50 and 1000 will work just fine (although the bigger, the slower). After the iterations are finished, the method returns the chromosome it deemed to be fittest. This fitness function will be preloaded (Helper.Fitness in C#)! What the test will do is generate a random binary string of 35 digits (a random Integer with 35 bits for Ruby), and your algorithm must discover that string! The fitness will be calculated in a way similar to above, where the score of a chromosome is the number of bits that differ from the goal string.

// The crossover probability we will use is 0.6 and the mutation probability we will use is 0.002. Now, since the chromosome length is small, 100 iterations should be enough to get the correct answer every time. The test fixture will run the algorithm 10 times on 10 different goal strings. If not all of them work, then you can try again and you'll probably be fine.

// Good luck and have fun!

// My Solution
var GeneticAlgorithm = function () {};

GeneticAlgorithm.prototype.generate = function(length) {
    let arr = [];
    for(let i=0;i<length;i++){
        arr.push(Math.floor(Math.random()*2))
    }
    return arr.join('');
};

GeneticAlgorithm.prototype.select = function(population, fitnesses) {
    let max_fitnesses = [];
    let max_ind = fitnesses.findIndex(e=>e==Math.max(...fitnesses));
    max_fitnesses.push(population[max_ind]);
    fitnesses[max_ind]=0;
    max_ind = fitnesses.findIndex(e=>e==Math.max(...fitnesses));
    max_fitnesses.push(population[max_ind]);
    return max_fitnesses
};

GeneticAlgorithm.prototype.mutate = function(chromosome, p) {
    for(let i=0;i<chromosome.length;i++){
        if(Math.random()<p){
            chromosome = chromosome.split('').map((e,j,ar)=>{if(j==i){return e=1-e}else{return e}}).join('')
        }
    }
    return chromosome;
};

GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2) {
    let index = Math.floor(Math.random()*(chromosome1.length-1))+1;
    chromosome_interim = chromosome1.slice(index);
    chromosome1 = chromosome1.slice(0,index).concat(chromosome2.slice(index));
    chromosome2 = chromosome2.slice(0,index).concat(chromosome_interim);
    return [chromosome1,chromosome2];
};

GeneticAlgorithm.prototype.run = function(fitness, length, p_c, p_m, iterations) {
    let best_two_chromosomes = [];
    let best_fit = [0,0];
    let population = [];
    let new_population = [];
    let fitness_arr = [];
    let new_fitness_arr = [];
    let population_num = 300;
    if(!iterations) iterations = 50;
    for(let i=0;i<population_num;i++){  // creating population
        let chromo = this.generate(length);
        population.push(chromo);
    };

    for(let i=0;i<population_num;i++){  // creating fitness array
        let fit = fitness(population[i]);
        fitness_arr.push(fit);
        if(fit==1) return population[i];
    };
    let j=0;
    while(j<iterations){
        j++
        if(best_fit[0]==1|| best_fit[1]==1) break;
        if(new_population.length>1 ){
            population = [...new_population];
            new_population = [];
            fitness_arr = [...new_fitness_arr];
            new_fitness_arr = [];
        };
        for(let i =0;i<population.length;i=i+2){  // creating new population
            best_two_chromosomes = this.select(population,fitness_arr);
            let best_two_chromosomes_in = [];
            best_fit = [fitness(best_two_chromosomes[0]),fitness(best_two_chromosomes[1])]
            if(best_fit[0]==1|| best_fit[1]==1) break;
            if(Math.random()<=p_c){
                best_two_chromosomes_in = this.crossover(best_two_chromosomes[0],best_two_chromosomes[1]);
            };
            if(Math.random()<=p_m){
                best_two_chromosomes[0] = this.mutate(best_two_chromosomes[0],1);
                best_two_chromosomes[1] = this.mutate(best_two_chromosomes[1],1);
            };
            let current_best_fit= [0,0]
            if(best_two_chromosomes_in[0]) current_best_fit=[fitness(best_two_chromosomes_in[0]),fitness(best_two_chromosomes_in[1])];
            if(current_best_fit[0]>best_fit[0]){
                new_population.push(best_two_chromosomes_in[0]);
                new_fitness_arr.push(current_best_fit[0])
                best_fit[0] = current_best_fit[0]
            }else{
                new_population.push(best_two_chromosomes[0]);
                new_fitness_arr.push(best_fit[0])
            }
            if(current_best_fit[1]>best_fit[1]){
                new_population.push(best_two_chromosomes_in[1]);
                new_fitness_arr.push(current_best_fit[1])
                best_fit[1] = current_best_fit[1]
            }else{
                new_population.push(best_two_chromosomes[1]);
                new_fitness_arr.push(best_fit[1])
            }
        };
    };
    console.log(best_fit)
    console.log(j)
    return best_fit[0]==1 ? best_two_chromosomes[0] : best_two_chromosomes[1]
};

// Solution
var GeneticAlgorithm = function () {};

function sum( array ){
  return array.reduce(function(result, number ){ return result + number;}, 0);
}
GeneticAlgorithm.prototype.generatePopulation = function(population, length ){
  var array = [];
  for( var x = 0; x < population; x++ ){
    array.push( this.generate(length));
  }
  return array;
}
GeneticAlgorithm.prototype.generate = function(length) {
  var result = [];
  for( var i = 0; i < length; i++ ){
    result.push(Math.round(Math.random()));
  }
  return result.join('');
};

GeneticAlgorithm.prototype.select = function(population, fitnesses) {
  var max =  sum(fitnesses)
  var random = Math.random() * max;
  var total = 0;
  var index = 0;
  while( total < random ){
    total += fitnesses[index++];    
  }
  return population[index-1];
};

GeneticAlgorithm.prototype.mutate = function(chromosome, p) {
  return chromosome.split('').map(function( bit ){
    return (Math.random() <= p) ? ((bit - 1) * - 1) : bit;
  }).join('');
};

GeneticAlgorithm.prototype.crossover = function(chromosome1, chromosome2) {
 var index = Math.ceil(Math.random()*(chromosome1.length-2));
 return chromosome1.substr(0, index) +  chromosome2.substr(index);
};



GeneticAlgorithm.prototype.run = function(fitness, length, p_c, p_m, iterations) {
  var population = this.generatePopulation( 10, length );

  while( population.map(fitness).indexOf(1) === -1 ){
    var nextPopulation = [];
    while( nextPopulation.length < population.length ){
      var chromosome1 = this.select(population, population.map(fitness));
      var chromosome2 = this.select(population, population.map(fitness));
      if( Math.random() < p_c ){
        var temp = this.crossover( chromosome1 ,  chromosome2 );
        chromosome1 = this.crossover( chromosome2 ,  chromosome1 );
        chromosome2 = temp;
      }
  
      chromosome1 = this.mutate(chromosome1, p_m);
      chromosome2 = this.mutate(chromosome2, p_m);
      
      nextPopulation.push( chromosome1 );
      nextPopulation.push( chromosome2 );
    }

    population = nextPopulation;
  }

  return population[population.map(fitness).indexOf(1)];
};