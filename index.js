const main = document.createElement('main');

const randomize = (pieces = "RNBQKBNR") => {
	const l = pieces.length;
	const s = new Set();
	const res = [];
	while (s.size < l) {
		const r = Math.floor(Math.random() * l);
		if (s.has(r)) continue;
		s.add(r);
		res.push(pieces[r]);
	}
	return res;
}

const makeLI = (inner) => {
	const li = document.createElement('li');
	li.innerHTML = inner;
	return li;
}

const chessSide = (color) => {
	const side = document.createElement('div');
	side.className = `side ${color}`;
	side.innerHTML = `
		<h2>${color}</h2>
	`;
	const ul = document.createElement('ul');
	for (const p of randomize()) {
		ul.appendChild(makeLI(p));
	}
	side.appendChild(ul);
	return side;
}

for (const c of "white black red".split(" ")) {
	main.appendChild(chessSide(c));
}

document.body.appendChild(main);
