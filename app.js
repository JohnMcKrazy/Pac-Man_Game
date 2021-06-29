document.addEventListener('DOMContentLoaded', () => {
    /////////////////////////////////////////////////

    const scoreDisplay = document.getElementById('score');
    const width = 28;
    let score = 0;
    const grid = document.querySelector('.grid');

    const layout = [
        1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1,
        0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 3, 1, 1, 1, 1, 0, 1, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 3, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        0, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 2, 2, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 0, 1, 1, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 0, 0,
        0, 4, 1, 2, 2, 2, 2, 2, 2, 1, 4, 0, 0, 0, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1,
        2, 2, 2, 2, 2, 2, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1,
        1, 1, 1, 1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1,
        1, 4, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0,
        0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1,
        1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1,
        0, 1, 1, 3, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 3, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0,
        1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
        1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
        1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
        1, 1, 1, 1, 1, 1, 1, 1, 1,
    ];

    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty

    // dibuja el tablero

    const squares = [];

    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            const square = document.createElement('div');
            grid.appendChild(square);
            squares.push(square);

            // agregar el layout
            if (layout[i] === 0) {
                squares[i].classList.add('pac-dot');
            } else if (layout[i] === 1) {
                squares[i].classList.add('wall');
            } else if (layout[i] === 2) {
                squares[i].classList.add('ghost-lair');
            } else if (layout[i] === 3) {
                squares[i].classList.add('power-pellet');
            }
        }
    }
    createBoard();

    // poner la posicion inicial de del personaje

    let pacmanCurrentIndex = 490;

    squares[pacmanCurrentIndex].classList.add('pac-man');

    // funcion para mover el pac-man

    function movePacman(e) {
        squares[pacmanCurrentIndex].classList.remove('pac-man');
        switch (e.keyCode) {
            case 37:
                if (
                    pacmanCurrentIndex % width !== 0 &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - 1].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex -= 1;

                if (squares[pacmanCurrentIndex - 1] === squares[363]) {
                    pacmanCurrentIndex = 391;
                }
                break;
            case 38:
                if (
                    pacmanCurrentIndex - width >= 0 &&
                    !squares[pacmanCurrentIndex - width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex - width].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex -= width;
                break;
            case 39:
                if (
                    pacmanCurrentIndex % width < width - 1 &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + 1].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex += 1;

                if (squares[pacmanCurrentIndex + 1] === squares[392]) {
                    pacmanCurrentIndex = 364;
                }
                break;
            case 40:
                if (
                    pacmanCurrentIndex + width < width * width &&
                    !squares[pacmanCurrentIndex + width].classList.contains('wall') &&
                    !squares[pacmanCurrentIndex + width].classList.contains('ghost-lair')
                )
                    pacmanCurrentIndex += width;
                break;
        }
        squares[pacmanCurrentIndex].classList.add('pac-man');

        // las funciones de desaparicion de puntos y scores se declaran dentro del movimiento de
        //(pac-man) por que es quien lo va a activar al pasar
        pacDotEaten();
        powerPalletEaten();
        checkForGameOver();
        checkForWin();
    }

    document.addEventListener('keyup', movePacman);
    // funcion para que desaparezcan los puntos al pasar pacman
    function pacDotEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
            score++;
            scoreDisplay.innerHTML = score;
            squares[pacmanCurrentIndex].classList.remove('pac-dot');
        }
    }
    // funcion para que desaparezcan los dulces al pasar pacman
    function powerPalletEaten() {
        if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
            score += 10;
            ghosts.forEach((ghost) => (ghost.isScared = true));
            setTimeout(unScaredGhost, 10000);
            squares[pacmanCurrentIndex].classList.remove('power-pellet');
        }
    }

    // funcion quita la caracteristica de fantasma que comen

    function unScaredGhost() {
        ghosts.forEach((ghost) => (ghost.isScared = false));
    }
    // la funcion de class genera un 'layout' para crear mas facilmente objetos a futuro
    class Ghost {
        constructor(className, startIndex, speed) {
            this.className = className;
            this.speed = speed;
            this.startIndex = startIndex;
            this.currentIndex = startIndex;

            this.isScared = false;
            this.timerID = NaN;
        }
    }
    // al colocar new y el nombre del 'class layout' se genera un nuevo objeto con los puntos de
    //acceso antes colocados
    const ghosts = [
        new Ghost('bluy', 348, 300),
        new Ghost('greeny', 376, 300),
        new Ghost('orangy', 351, 300),
        new Ghost('reddy', 379, 300),
    ];

    // se crea la funcion de ponerle 'nombre' al cuadro que corresponde a cada fantasma
    ghosts.forEach((ghost) => {
        //con este se declara la clase que le dara a cada cuadro para el css
        squares[ghost.currentIndex].classList.add(ghost.className);
        //con este se declara la clase que seleccionara javascript para dar las funciones
        squares[ghost.currentIndex].classList.add('ghost');
    });
    // le da el argumento de movimiento a cada elemento 'funcion de movimiento'
    ghosts.forEach((ghost) => moveGhost(ghost));
    // se crea la funcion de movimiento del fantasma
    function moveGhost(ghost) {
        //primero ponemos los argumentos que se cambiaran
        //(+1 para movimiento vertical hacia abajo)
        //(-1 para movimiento vertical hacia arriba)
        //(+width para movimiento horizontal hacia la derecha)
        //(-width para movimiento vertical hacia la izquierda)
        const directions = [-1, +1, width, -width];

        // se genera una variable con los argumentos que la funcion matematica utilizaran para el movimiento
        let direction = directions[Math.floor(Math.random() * directions.length)];

        // esta funcion declara las barreras de movimiento
        ghost.timerID = setInterval(function () {
            //declaramos - la posicion del cuadro 'ghost' + la direccion que a tomado
            //NO ESTA EN EN EL CUADRO DE nombre de classe 'wall' o 'ghost'
            // asi solo chocara con ellos sin pasarlos encima
            if (
                !squares[ghost.currentIndex + direction].classList.contains('wall') &&
                !squares[ghost.currentIndex + direction].classList.contains('ghost')
            ) {
                // aqui se declara que es lo que hara al moverse por los cuadros permitidos
                //hay que remover los nombres de classe--para que deje de moverse a esa direccion
                squares[ghost.currentIndex].classList.remove(ghost.className);
                squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost');

                // y cambiamos la direccion
                ghost.currentIndex += direction;
                // y se ponen las caracteristicas del fantasma una vez que este cambia de direcion

                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            }
            //de otra forma cambia de direccion
            else direction = directions[Math.floor(Math.random() * directions.length)];

            if (ghost.isScared) {
                squares[ghost.currentIndex].classList.add('scared-ghost');
            }

            if (ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
                squares[ghost.currentIndex].classList.remove(
                    ghost.className,
                    'ghost',
                    'scared-ghost'
                );
                ghost.currentIndex = ghost.startIndex;
                score += 100;
                squares[ghost.currentIndex].classList.add(ghost.className, 'ghost');
            }
            checkForGameOver();
        }, ghost.speed);
    }

    //funcion de chequeo de juego perdido

    function checkForGameOver() {
        
        //se declara que 'si pac-man "contiene" o "pasa" por un fantasma ("ghost") que no sea fantasma espantado ("scared-ghost") 
        // entonces se desplegara en el display del "score" un anuncio de que se perdio "GAME OVER!" y se para la funcion de movimientode "pac-man"
        // y se cambia el color del texto'
        if (
            squares[pacmanCurrentIndex].classList.contains('ghost') &&
            !squares[pacmanCurrentIndex].classList.contains('scared-ghost')
        ) {
            ghosts.forEach((ghost) => clearInterval(ghost.timerId));
            document.removeEventListener('keyup', movePacman);
            setTimeout(function () {
                scoreDisplay.style.color = 'red';
                scoreDisplay.innerHTML = 'game over!';
            }, 500);
        }
    }

    //funcion de cheque de juego ganado
    function checkForWin() {
        //se declara que al llegar a 274 puntos desplegados en el "display score" se manda un mensaje a tal diciendo que se gano el juego "YOU WIN!!"
        // y se para la funcion de movimientode "pac-man" y se cambia el color del texto'
        if (score === 274) {
            ghosts.forEach((ghost) => clearInterval(ghost.timerId));
            document.removeEventListener('keyup', movePacman);
            setTimeout(function () {
                scoreDisplay.style.color = 'aqua';
                scoreDisplay.innerHTML = 'you won!!';
            }, 500);
        }
    }
});
