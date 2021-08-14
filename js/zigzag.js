var convert = function(s, numRows) {
    let row = 0
    let col = 0
    let direction = 1
    let res = []
    if (numRows === 1)
        return s
    s.split('').forEach(c => {
        if (! res[row]) { res[row] = []; }
        res[row][col] = c;
        if (row < numRows -1   && direction === 1) {
            row += direction
        } else if (row > 0 && direction == -1) {
            row += direction
            col += 1
        }
        else if ( row === numRows  -1 || row === 0) {
            direction *= -1;
            if( direction == -1 ) col+=1
            row += direction
        }

    })
    let str = ''
    res.forEach(row => {
      for (let i=0; i< row.length; i++ ) {
          if (row[i]) str+=row[i]
          else row[i]=' '
      }
    })
    return str
};

console.log(convert('abcdefghijklmnop', 1))