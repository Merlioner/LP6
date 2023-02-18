let r
grup = ['ОПЗ-16', 'ОПЗ-26', 'ОПЗ-28', 'ОПЗ-36', 'КН-46'];
grup.push('КН-56');
grup.unshift('ОПЗ-18');
grup[0] = 'ОПЗ-8';
for (var i=0; i<grup.length; i++){
    console.log(grup[i]);
    } console.log(i);

grup.shift();
console.log(grup);

grup.pop();
for (var i=0; i<grup.length; i++){
        console.log(grup[i]);
        } console.log(i);

grup.push('ЗВ-15', 'ЗВ-25', 'ЗВ-35');
console.log(grup);
console.log(grup[0]);
console.log(grup[2]);

arr = [
    [1,2],
    [3,4],
    [5,6],
];
console.log(arr);
console.log(arr[0][0]);
console.log(arr[2][1]);