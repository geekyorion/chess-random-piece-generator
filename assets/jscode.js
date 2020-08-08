var white = ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Pawn'];
var black = ['Rook', 'Knight', 'Bishop', 'Queen', 'King', 'Pawn'];

const generatePieces = (face) => {
    const pieces = [];
    const arr = face === 'White' ? white : black;
    for (let i = 0; i < 3; i++) {
        pieces.push(white[parseInt(Math.random() * (arr.length))]);
    }
    const markup = generateMarkup(face, pieces);
    document.getElementById(face.toLowerCase()).innerHTML = markup;
}

const generateMarkup = (face, pieces) => (
    `<div class="pieces">
        <div class="piece ${face.toLowerCase()}-piece" id="${face}-1">
            <div class="img ${face.toLowerCase()}-img"><img src="./assets/images/${face}-${pieces[0]}.png" alt="${face}-${pieces[0]}"></div>
            <div class="text"><span>${pieces[0]}</span></div>
        </div>
        <div class="piece ${face.toLowerCase()}-piece" id="${face}-2">
            <div class="img ${face.toLowerCase()}-img"><img src="./assets/images/${face}-${pieces[1]}.png" alt="${face}-${pieces[1]}"></div>
            <div class="text"><span>${pieces[1]}</span></div>
        </div>
        <div class="piece ${face.toLowerCase()}-piece" id="${face}-3">
            <div class="img ${face.toLowerCase()}-img"><img src="./assets/images/${face}-${pieces[2]}.png" alt="${face}-${pieces[2]}"></div>
            <div class="text"><span>${pieces[2]}</span></div>
        </div>
    </div>`
);
