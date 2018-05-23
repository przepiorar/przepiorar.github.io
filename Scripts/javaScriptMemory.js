const memoryGame = {
    tileCount: 16,
    tileOnRow: 4,
    gameBoard: '',
    divScore: '',
    tiles: [],
    tilesSelected: [],
    tilesFinded: [],
    moveCount: 0,
    pairsCount: 0,
    canTake: true,
    imgs: ['memory/ship.png', 'memory/plane.png', 'memory/car.png', 'memory/tractor.png',
		'memory/tank.png', 'memory/jacht.png', 'memory/tram.png', 'memory/train.png'],

    start: function () {
        this.gameBoard = document.querySelector('.game-board');
        this.gameBoard.innerHTML = '';
        this.divScore = document.querySelector('.game-score');
        this.divScore.innerHTML = '';

        this.tiles = [];
        this.tilesSelected = [];
        this.tilesFinded = [];
        this.moveCount = 0;
        this.pairsCount = 0;

        //przypisujemy kafelkom obrazki
        for (let i = 0; i < this.tileCount / 2; i++) {
            this.tiles.push(i);
            this.tiles.push(i);
        }

        for (let i = 1; i < this.tileCount; i++) {
            var swap = Math.floor(Math.random() * i);
            var tmp = this.tiles[i];
            this.tiles[i] = this.tiles[swap];
            this.tiles[swap] = tmp;
        }

        for (let i = 0; i < this.tileCount; i++) {
            const tile = document.createElement('div');
            tile.classList.add("game-during");
            this.gameBoard.appendChild(tile);

            tile.dataset.cardType = this.tiles[i];
            tile.dataset.index = i;
            //wstawienie nowego diva
            console.log(4 + (tile.offsetWidth + 4) * (i % this.tileOnRow))
            tile.style.left = 4 + (tile.offsetWidth + 8) * (i % this.tileOnRow) + 'px'
            tile.style.top = 4 + (tile.offsetHeight + 8) * (Math.floor(i / this.tileOnRow)) + 'px';

            tile.addEventListener('click', this.clickTile.bind(this));
        }
    },

    clickTile: function (x) {
        if (this.canTake) {
            var didWas = false;
            for (var i = 0; i < 2 * this.pairsCount; i++) {
                if (x.target.dataset.index === this.tilesFinded[i].dataset.index)
                { didWas = true; }
            }
            if (!didWas) {
                if (!this.tilesSelected[0] || (this.tilesSelected[0].dataset.index !== x.target.dataset.index)) {
                    this.tilesSelected.push(x.target);
                    x.target.style.backgroundImage = 'url(' + this.imgs[x.target.dataset.cardType] + ')';
                }

                if (this.tilesSelected.length === 2) {
                    this.canTake = false;

                    if (this.tilesSelected[0].dataset.cardType === this.tilesSelected[1].dataset.cardType) {
                        setTimeout(this.saveTiles.bind(this), 400);
                    } else {
                        setTimeout(this.undoTiles.bind(this), 400);
                    }

                    this.moveCount++;
                    this.divScore.innerHTML = this.moveCount;
                }
            }
        }
    },

    saveTiles: function () {
        this.tilesFinded.push(this.tilesSelected[1]);
        this.tilesFinded.push(this.tilesSelected[0]);

        this.canTake = true;
        this.tilesSelected = [];

        this.pairsCount++;
        if (this.pairsCount >= this.tileCount / 2) {
            this.divScore.innerHTML = 'Wygrana! - Ilość ruchów: ' + this.moveCount;
        }
    },

    undoTiles: function () {
        this.tilesSelected[0].style.backgroundImage = '';
        this.tilesSelected[1].style.backgroundImage = '';

        this.tilesSelected = [];
        this.canTake = true;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.game-start').addEventListener('click', function () {
        memoryGame.start();
    });
});