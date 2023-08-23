document.addEventListener('DOMContentLoaded', function() { //loads the html page before running
    const boxIds = ['box1', 'box2', 'box3', 'box4', 'box5', 'box6']; //creates a list of the boxes
    const numbers = [1, 1, 2, 2, 3, 3]; //creates a list of all the numbers being used as the box ids
    const resetButton = document.getElementById('resetButton'); //gets the reset button

    let lastTwoBoxes = []; //makes an empty list to put the last two clicked box ids in

    function shuffleArray(array) { //function to shuffle the boxes with their ids
        for (let i = array.length - 1; i > 0; i--) { 
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    shuffleArray(numbers);

    resetButton.addEventListener('click', function(){
        location.reload();
    })

    boxIds.forEach(function(id, index) {
        const box = document.getElementById(id);

        box.addEventListener('click', function() {

            if (numbers[index] === 1) {
                box.style.backgroundImage = "url('dog.JPG')";
                box.style.backgroundRepeat = 'no-repeat';
                box.style.backgroundSize = 'cover';
            }

            if (numbers[index] === 2) {
                box.style.backgroundImage = "url('bunny.JPG')";
                box.style.backgroundRepeat = 'no-repeat';
                box.style.backgroundSize = 'cover';
            }

            if (numbers[index] === 3) {
                box.style.backgroundImage = "url('bee.JPG')";
                box.style.backgroundRepeat = 'no-repeat';
                box.style.backgroundSize = 'cover';
            }

            lastTwoBoxes.push(box);
            if (lastTwoBoxes.length > 2) {
                lastTwoBoxes.shift();
            }

            if (lastTwoBoxes.length === 2) {
                if (numbers[index] !== numbers[boxIds.indexOf(lastTwoBoxes[0].id)]) {
                    setTimeout(function() {
                        lastTwoBoxes[0].style.backgroundImage = "none";
                        lastTwoBoxes[1].style.backgroundImage = "none";
                        lastTwoBoxes = [];
                    }, 1000);
                } else {
                    lastTwoBoxes = [];
                }
            }

        });
    });
});