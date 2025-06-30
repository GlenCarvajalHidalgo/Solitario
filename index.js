
const cardsValues = [
    { id: '0', value: 1 , color: 'red', kind: 'heart', image: './imgs/A-Corazon.png'},
    { id: '1', value: 1 , color: 'red', kind: 'diamond', image: './imgs/A-Diamante.png'},
    { id: '2', value: 1 , color: 'black', kind: 'arrow', image: './imgs/A-Flecha.png'},
    { id: '3', value: 1 , color: 'black', kind: 'clover', image: './imgs/A-Trebol.png'},

    { id: '4', value: 2, color: 'red', kind: 'heart', image: './imgs/2-Corazon.png'},
    { id: '5', value: 2, color: 'red', kind: 'diamond', image: './imgs/2-Diamante.png'},
    { id: '6', value: 2, color: 'black', kind: 'arrow', image: './imgs/2-Flecha.png'},
    { id: '7', value: 2, color: 'black', kind: 'clover', image: './imgs/2-Trebol.png'},

    { id: '8', value: 3, color: 'red', kind: 'heart', image: './imgs/3-Corazon.png'},
    { id: '9', value: 3, color: 'red', kind: 'diamond', image: './imgs/3-Diamante.png'},
    { id: '10', value: 3, color: 'black', kind: 'arrow', image: './imgs/3-Flecha.png'},
    { id: '11', value: 3, color: 'black', kind: 'clover', image: './imgs/3-Trebol.png'},
    
    { id: '12', value: 4, color: 'red', kind: 'heart', image: './imgs/4-Corazon.png'},
    { id: '13', value: 4, color: 'red', kind: 'diamond', image: './imgs/4-Diamante.png'},
    { id: '14', value: 4, color: 'black', kind: 'arrow', image: './imgs/4-Flecha.png'},
    { id: '15', value: 4, color: 'black', kind: 'clover', image: './imgs/4-Trebol.png'},
    
    { id: '16', value: 5, color: 'red', kind: 'heart', image: './imgs/5-Corazon.png'},
    { id: '17', value: 5, color: 'red', kind: 'diamond', image: './imgs/5-Diamante.png'},
    { id: '18', value: 5, color: 'black', kind: 'arrow', image: './imgs/5-Flecha.png'},
    { id: '19', value: 5, color: 'black', kind: 'clover', image: './imgs/5-Trebol.png'},
    
    { id: '20', value: 6, color: 'red', kind: 'heart', image: './imgs/6-Corazon.png'},
    { id: '21', value: 6, color: 'red', kind: 'diamond', image: './imgs/6-Diamante.png'},
    { id: '22', value: 6, color: 'black', kind: 'arrow', image: './imgs/6-Flecha.png'},
    { id: '23', value: 6, color: 'black', kind: 'clover', image: './imgs/6-Trebol.png'},
    
    { id: '24', value: 7, color: 'red', kind: 'heart', image: './imgs/7-Corazon.png'},
    { id: '25', value: 7, color: 'red', kind: 'diamond', image: './imgs/7-Diamante.png'},
    { id: '26', value: 7, color: 'black', kind: 'arrow', image: './imgs/7-Flecha.png'},
    { id: '27', value: 7, color: 'black', kind: 'clover', image: './imgs/7-Trebol.png'},
    
    { id: '28', value: 8, color: 'red', kind: 'heart', image: './imgs/8-Corazon.png'},
    { id: '29', value: 8, color: 'red', kind: 'diamond', image: './imgs/8-Diamante.png'},
    { id: '30', value: 8, color: 'black', kind: 'arrow', image: './imgs/8-Flecha.png'},
    { id: '31', value: 8, color: 'black', kind: 'clover', image: './imgs/8-Trebol.png'},
    
    { id: '32', value: 9, color: 'red', kind: 'heart', image: './imgs/9-Corazon.png'},
    { id: '33', value: 9, color: 'red', kind: 'diamond', image: './imgs/9-Diamante.png'},
    { id: '34', value: 9, color: 'black', kind: 'arrow', image: './imgs/9-Flecha.png'},
    { id: '35', value: 9, color: 'black', kind: 'clover', image: './imgs/9-Trebol.png'},
    
    { id: '36', value: 10, color: 'red', kind: 'heart', image: './imgs/10-Corazon.png'},
    { id: '37', value: 10, color: 'red', kind: 'diamond', image: './imgs/10-Diamante.png'},
    { id: '38', value: 10, color: 'black', kind: 'arrow', image: './imgs/10-Flecha.png'},
    { id: '39', value: 10, color: 'black', kind: 'clover', image: './imgs/10-Trebol.png'},
    
    { id: '40', value: 11, color: 'red', kind: 'heart', image: './imgs/J-Corazon.png'},
    { id: '41', value: 11, color: 'red', kind: 'diamond', image: './imgs/J-Diamante.png'},
    { id: '42', value: 11, color: 'black', kind: 'arrow', image: './imgs/J-Flecha.png'},
    { id: '43', value: 11, color: 'black', kind: 'clover', image: './imgs/J-Trebol.png'},
    
    { id: '44', value: 12, color: 'red', kind: 'heart', image: './imgs/Q-Corazon.png'},
    { id: '45', value: 12, color: 'red', kind: 'diamond', image: './imgs/Q-Diamante.png'},
    { id: '46', value: 12, color: 'black', kind: 'arrow', image: './imgs/Q-Flecha.png'},
    { id: '47', value: 12, color: 'black', kind: 'clover', image: './imgs/Q-Trebol.png'},
    
    { id: '48', value: 13, color: 'red', kind: 'heart', image: './imgs/K-Corazon.png'},
    { id: '49', value: 13, color: 'red', kind: 'diamond', image: './imgs/K-Diamante.png'},
    { id: '50', value: 13, color: 'black', kind: 'arrow', image: './imgs/K-Flecha.png'},
    { id: '51', value: 13, color: 'black', kind: 'clover', image: './imgs/K-Trebol.png'},

    { id: '52', value: 14, color: '', kind: '', image: ''},
    { id: '53', value: 0, color: '', kind: 'heartdiamondarrowclover', image: ''},
];//Contiene todos los valores de cada carta. Contains all the values of each card

const marksValues = [
    {x: 90, y: 91, cards: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]},
    {x: 260, y: 91, cards: []},
    {x: 561, y: 91, cards: []},
    {x: 718, y: 91, cards: []},
    {x: 875, y: 91, cards: []},
    {x: 1032, y: 91, cards: []},
    {x: 90, y: 339, cards: []},
    {x: 247, y: 339, cards: []},
    {x: 404, y: 339, cards: []},
    {x: 561, y: 339, cards: []},
    {x: 718, y: 339, cards: []},
    {x: 875, y: 339, cards: []},
    {x: 1032, y: 339, cards: []},
];//Contiene las posiciones de las pilas y los id las cartas que se almacenan en esa pila. Contains the positions of the piles and the id's cards being stacked in that pile

const startButton = document.getElementById('startbtn');//Start button
startButton.addEventListener('click', function(){

    startButton.style.display = 'none';

    var movements = 0;//Cantidad de movimientos. Amount of movements
    var xAxis = 90;//Posisión de la carta en el eje X. Position of the card in the x-axis
    var yAxis = 90;//Posisión de la carta en el eje Y. Position of the card in the y-axis
    var arrayPop = 0;//Contiene el indice del palo donde estuvo la carta actual. Contains the index of the suit where the current card was
    var dragging = false;//Dice si una carta esta siendo movida. Says if a card is being moved
    var moving;//Contiene la función que mueve la carta actual sobre el lienso. Contains the function that moves the current card over the canvas
    var zIndex = 1;//Contiene el indice de la carta actual siendo transladada. Contains the index of the current card being drawn

    var movementsHTML = document.getElementById('movements');
    var cards = document.getElementsByClassName('card');//Obtener todas las cartas. Get all the cards

    //Añadir los eventos a las cartas. Adding the events of the cards
    for (let i = 0; i < cards.length; i++) {
        
        //Al precionar una carta se guarda la posision actual y se crea el evento del movimiento. When a card is pressed, the current position is saved and the movement event is created
        cards[i].addEventListener('mousedown', function(event){

            //Si la carta no esta al reverso... If the card is not face down...
            if (cards[i].value != '0'){
                dragging = true;
                const rect = cards[i].getBoundingClientRect();
                const marginX = Math.round(event.clientX - rect.left);//Contiene el margen entre el puntero y el borde izquierdo de la carta. Contains the margin between the pointer and the left border of the card
                const marginY = Math.round(event.clientY - rect.top);//Contiene el margen entre el puntero y el borde superior de la carta. Contains the margin between the pointer and the upper border of the card

                //Saber en que casilla esta ubicada la carta. Knowing in which cell the card is located
                for (let z = 0; z < marksValues.length; z++) {
                    
                    if(marksValues[z].cards.includes(cards[i].id)){
                        arrayPop = z;
                        xAxis = marksValues[z].x;
                        yAxis = marksValues[z].y;
                        break;
                    }
                }

                const startIndex = marksValues[arrayPop].cards.findIndex(element=>element==cards[i].id);//Indice de la primera carta arrastrada. Index of the first card dragged
                const endIndex = marksValues[arrayPop].cards.length;//Indice de la ultima carta arrastrada. Index of the last card dragged
                //Agregar estilo. Add style
                for (let z = startIndex; z < endIndex; z++) {
                    cards[marksValues[arrayPop].cards[z]].style.boxShadow = '15px 15px 5px rgba(0, 0, 0, 0.5)';
                    cards[marksValues[arrayPop].cards[z]].style.zIndex = zIndex++;
                }

                //Mover las cartas por el lienzo. Move the cards over the canvas
                cards[i].addEventListener('mousemove', moving = function(event){

                    const x = event.clientX - marginX - 8;//Contiene la posición X en la que debe de estar la carta. Contains the X position where the card should be
                    const y = event.clientY - marginY - 8;//Contiene la posición Y en la que debe de estar la carta. Contains the Y position where the card should be
                    for (let z = startIndex; z < endIndex; z++) {
                        cards[marksValues[arrayPop].cards[z]].style.transform = 'translate3d('+x+'px, '+(y+((z-startIndex)*35))+'px, 0px)';
                    }
                }, false);
            }
            else{
                //Si la carta al reverso esta en el mazo... IF the card faced down is in the deck...
                if(marksValues[0].cards.includes(+cards[i].id) || marksValues[0].cards.includes(cards[i].id)){

                    marksValues[0].cards.splice(marksValues[0].cards.findIndex(element=>element==cards[i].id), 1);//Eliminar la carta del lado derecho. Delete the card from the right side
                    marksValues[1].cards.push(cards[i].id);//Agregar la carta al lado izquierdo. Add the card to the left side
                    cards[i].style.zIndex = zIndex++;
                    cards[i].childNodes[1].setAttribute('src', cardsValues[i].image);
                    cards[i].style.transition = '0.15s';
                    cards[i].style.transform = 'translate3d(260px, 91px, 0px)';
                    setTimeout(() => {
                        cards[i].style.transition = 'none';
                    }, 200);
                    cards[i].value = '1';
                    movementsHTML.textContent = ++movements;
                }
            }
        }, false);

        //Detener el movimiento. Stop the movement
        cards[i].addEventListener('mouseup', function(event){

            //Si la carta ha sido arrastrada... If the card has been dragged...
            if(cards[i].value != '0' && dragging){
                dragging = false;
                let cardIndex = marksValues[arrayPop].cards.findIndex(element=>element==cards[i].id);//Contiene el indice de la carta del array donde estaba la carta. Contains the index of the card in the array where the card was
                let arrayLength = marksValues[arrayPop].cards.length;//Contiene el largo del array donde estava la carta. Contains the length of the array where the card was
                var arrayAdd = arrayPop;//Contiene el indice de la pila a agregar la carta. Contains the index of the pile to add the card.
                let marginCards = 0;//Contiene el margen entre cartas. Contains the margin between cards.
                arrayPop<6?marginCards=0:marginCards=35;

                cards[i].removeEventListener('mousemove', moving, false);
        
                //Saber en que casilla fue dejada la carta y si es permitido que se quede ahi. Know in which cell the card was left and if it is allowed to stay there
                for (let z = 2; z < 6; z++) {
        
                    if((event.clientX >= marksValues[z].x && event.clientX <= marksValues[z].x + 128) && 
        
                    (event.clientY >= marksValues[z].y && event.clientY <= marksValues[z].y + 170) && 
        
                    (cardsValues[cards[i].id].value > cardsValues[marksValues[z].cards[marksValues[z].cards.length-1]??53].value) &&
        
                    (cardsValues[cards[i].id].value < cardsValues[marksValues[z].cards[marksValues[z].cards.length-1]??53].value+2) && 
        
                    (cardsValues[marksValues[z].cards[marksValues[z].cards.length-1]??53].kind.includes(cardsValues[cards[i].id].kind)) &&

                    (cardIndex==arrayLength-1)){
        
                        marginCards = 0;
                        arrayAdd = z;

                        marksValues[arrayPop].cards.pop();

                        if(cardIndex > 0 && arrayPop > 2){
                            const backCardID = marksValues[arrayPop].cards[cardIndex-1];
                            cards[backCardID].childNodes[1].setAttribute('src', cardsValues[backCardID].image);
                            cards[backCardID].value = '1';
                        }

                        marksValues[z].cards.push(cards[i].id);
                        xAxis = marksValues[z].x;
                        yAxis = marksValues[z].y;
                        break;
                    }
                }
                //Saber en que casilla fue dejada la carta y si es permitido que se quede ahi. Know in which cell the card was left and if it is allowed to stay there
                for (let z = 6; z < marksValues.length; z++) {
        
                    if((event.clientX >= marksValues[z].x && event.clientX <= marksValues[z].x + 128) && 
        
                    (event.clientY >= marksValues[z].y && event.clientY <= marksValues[z].y + (170 + marksValues[z].cards.length * 35)) && 
        
                    (cardsValues[cards[i].id].value < cardsValues[marksValues[z].cards[marksValues[z].cards.length-1]??52].value) && 
        
                    (cardsValues[cards[i].id].value > cardsValues[marksValues[z].cards[marksValues[z].cards.length-1]??52].value-2) && 
        
                    (cardsValues[cards[i].id].color != cardsValues[marksValues[z].cards[marksValues[z].cards.length-1]??52].color)){

                        marginCards = 35;
                        arrayAdd = z;

                        if(cardIndex > 0 && arrayPop > 2){
                            const backCardID = marksValues[arrayPop].cards[cardIndex-1];
                            cards[backCardID].childNodes[1].setAttribute('src', cardsValues[backCardID].image);
                            cards[backCardID].value = '1';
                        }

                        for (let p = cardIndex; p < arrayLength; p++) {
                            marksValues[z].cards.push(marksValues[arrayPop].cards.splice(cardIndex, 1)[0]);
                        }
                        xAxis = marksValues[z].x;
                        yAxis = marksValues[z].y;
                        break;
                    }
                }

                Move(arrayAdd, cards[i].id, marginCards);

                if(arrayAdd!=arrayPop){
                    movementsHTML.textContent = ++movements;
                }
                if(marksValues[2].cards.length == 13 && marksValues[3].cards.length == 13 && marksValues[4].cards.length == 13 && marksValues[5].cards.length == 13){
                    alert('Winer!');
                }
            }

        }, false);

        //En caso de que el mouse se salga de la carta mietras es arrastrada, se detiene el movimiento... In case the mouse leaves the card while it's being dragged, the movement is stopped...
        cards[i].addEventListener('mouseleave', function(event){

            if(dragging){ 
                dragging = false;
                cards[i].removeEventListener('mousemove', moving, false);
                let marginCards = 0;//Contiene el margen entre cartas. Contains the margin between cards.
                arrayPop<6?marginCards=0:marginCards=35;

                Move(arrayPop, cards[i].id, marginCards);
            }
        }, false);
    }
    //Mueve las cartas a la posición correcta. Moves the cards to the correct position
    function Move(arrayIndex, cardId, marginCards){
        cardIndex = marksValues[arrayIndex].cards.findIndex(element=>element==cardId);
        arrayLength = marksValues[arrayIndex].cards.length;

        for (let z = cardIndex; z < arrayLength; z++) {

            cards[marksValues[arrayIndex].cards[z]].style.transition = '0.3s';
            cards[marksValues[arrayIndex].cards[z]].style.boxShadow = '4px 4px 5px rgba(0, 0, 0, 0.5)';
            cards[marksValues[arrayIndex].cards[z]].style.transform = 'translate3d('+xAxis+'px, '+(yAxis+(z*marginCards))+'px, 0px)';
            setTimeout(() => {
                cards[marksValues[arrayIndex].cards[z]].style.transition = 'none';
            }, 300);
        }
    }

    //Mover las cartas hacia las columnas de forma aleatoria. Move the cards to the columns randomly
    let randNumbers = [];//Contiene los indices de las cartas ya movidas. Contains the index of the cards already moved.
    for (let i = 6; i < 13; i++) {
        for (let z = 6; z <= i; z++) {
            
            let rand = Math.floor(Math.random()*52);//Indice de alguna carta. Index of some card
            while(randNumbers.includes(rand)){
                rand = Math.floor(Math.random()*52);
            }
            randNumbers.push(rand);

            if(z<i){
                cards[rand].childNodes[1].setAttribute('src', './imgs/Reverso.png');
                cards[rand].value = '0';
            }

            cards[rand].style.transition = '0.4s';
            cards[rand].style.transform = 'translate3d('+marksValues[i].x+'px, '+(marksValues[i].y + marksValues[i].cards.length * 35)+'px, 0px)';
            setTimeout(() => {
                cards[rand].style.transition = 'none';
            }, 400);
            marksValues[i].cards.push(cards[rand].id);
            cards[rand].style.zIndex = zIndex++;
            marksValues[0].cards.splice(marksValues[0].cards.findIndex(element=>element==rand), 1);
        }
    }

    //Mover las cartas descubiertas hacia la izquierda. Move the uncovered cards to the left
    document.getElementById('mark1').addEventListener('click', function(){
        
        for (let i = marksValues[1].cards.length-1; i >= 0; i--) {

            cards[marksValues[1].cards[i]].style.transition = '0.15s';
            cards[marksValues[1].cards[i]].style.transform = 'translate3d(90px, 91px, 0px)';
            cards[marksValues[1].cards[i]].childNodes[1].setAttribute('src', './imgs/Reverso.png');
            cards[marksValues[1].cards[i]].value = '0';
            cards[marksValues[1].cards[i]].style.zIndex = zIndex++;
            marksValues[0].cards.push(marksValues[1].cards[i]);
            marksValues[1].cards.pop();
            setTimeout(() => {
                cards[marksValues[0].cards[i]].style.transition = 'none';
            }, 200);
        }
    }, false);

    //Desordenar las cartas. Suffle the cards
    for (let i = 0; i < marksValues[0].cards.length; i++) {
        cards[marksValues[0].cards[i]].childNodes[1].setAttribute('src', './imgs/Reverso.png');
        cards[marksValues[0].cards[i]].value = '0';
        cards[marksValues[0].cards[i]].style.zIndex = Math.floor(Math.random()*24+1);
    }

    //Relog. Clock
    const timer = document.getElementById('timer');
    let interval;
    let time = 0;
    let seconds;
    let minutes;
    let hours;

    interval = setInterval(() => {
        time += 1;
        seconds = time % 60;
        hours = Math.floor(time/3600);
        minutes = Math.floor(time/60)-hours*60;
        timer.textContent = (hours<10?'0'+hours:hours)+':'+(minutes<10?'0'+minutes:minutes)+':'+(seconds<10?'0'+seconds:seconds);
    }, 1000);

}, false);
