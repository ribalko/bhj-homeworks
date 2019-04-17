function getHole( index ) {
    return document.getElementById('hole' + index);
}

for (let i = 1; i < 9; i++) {
    elementHole = getHole( i );
    elementHole.addEventListener("click", function() {
      if ( elementHole.className.includes( 'hole_has-mole' ) ) {
        console.log("впоймал!");
      }
    });
}

