function segita1(angka) {
  let hasil = '';
  for (let i = 1; i <= angka; i++) {
    for (let j = 1; j <= angka - i; j++) {
      hasil += ' ';
    }
    for (let h = 1; h < 2 * i; h++) {
      hasil += '*';
    }
    hasil += '\n';
  }
  return hasil;
}

function segita2(angka) {
  let hasil = '';
  for (let i = 1; i <= angka; i++) {
    for (let j = 1; j <= angka - i; j++) {
      hasil += ' ';
    }
    for (let h = 1; h < 2 * i; h++) {
      hasil += '*';
    }
    hasil += '\n';
  }
  return hasil;
}


function segita3(angka) {
  let hasil = '';
  for (let i = 0; i < angka; i++) {
    for (let j = 0; j < i; j++) {
      hasil += '* ';
    }
    hasil += '\n';
  }
  return hasil;
}

console.log(segita1(9));
console.log(segita2(9));
console.log(segita3(9));

