// Check surroundings
const check_surr = (i, j, p) => {
  if (matrix[i][j] == 1 && !visits[i][j]) {
    visits[i][j] = 1
    p.push([i, j])
    if (i < len - 1) {
      check_surr(i + 1, j, p)
    }
    if (i > 0) {
      check_surr(i - 1, j, p)
    }
    if (j < len - 1) {
      check_surr(i, j + 1, p)
    }
    if (j > 0) {
      check_surr(i, j - 1, p)
    }
  }
}

const matrix = [
	[0, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 1],
	[0, 1, 0, 0, 1, 1],
	[0, 1, 1, 0, 0, 0],
	[0, 0, 0, 0, 1, 1]
]
const len = matrix[0].length

// Create visits matrix
let visits = []

for (i = 0; i < len; i++) {
  visits[i] = [];
  for (j = 0; j < len; j++) {
    visits[i][j] = 0;
  }
}



const groups = []

for(let i = 0; i < len; i++) {
  for(let j = 0; j < len; j++) {
    if(matrix[i][j]  && visits[i][j] == 0) {
      let group = []
      check_surr(i, j, group)
      groups.push(group)
    }
  }
}


console.log(groups)