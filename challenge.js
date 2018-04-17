// Check surroundings
const check_surroundings = (y, x, p) => {
	if (matrix[y][x] && !visits[y][x]) {
		visits[y][x] = 1
		p.push([y, x])
		if (y < height - 1) {
		  	check_surroundings(y + 1, x, p)
		}
		if (y > 0) {
		  	check_surroundings(y - 1, x, p)
		}
		if (x < width - 1) {
		  	check_surroundings(y, x + 1, p)
		}
		if (x > 0) {
		  	check_surroundings(y, x - 1, p)
		}
	}
}

// Get groups
const find_groups = () => {
	const result = []
	for(let y = 0; y < height; y++) {
		for(let x = 0; x < width; x++) {
			if (matrix[y][x] && !visits[y][x]) {
				let group = []
				check_surroundings(y, x, group)
				if(group.length > 1)
					result.push(group)
			}
		}
	}
	return result
}

// Create visits matrix
const create_visits = () => {
	const visits = []

	for (y = 0; y < height; y++) {
		visits[y] = [];
		for (x = 0; x < width; x++) {
		  visits[y][x] = 0;
		}
	}
	return visits
}

const fs = require('fs');

if (process.argv.length !== 3) {
    console.log("USAGE: node index.js FILE_NAME");
    return;
}

const fileName = process.argv[2];
const matrix = JSON.parse(fs.readFileSync(fileName));

const width = matrix[0].length
const height = matrix.length

// Create visits matrix
const visits = create_visits()
const result = find_groups()

console.log(result)

