function sameLetter(name, testname) {
    let count = 0;
    let a = 0;
    for (let i = 0; i < testname.length; i++) {
        for (let j = a; j < name.length; j++) {
            if (testname.toLowerCase()[i] === name.toLowerCase()[j]) {
                count++;
                a = j + 1;
                break;
            }
        }
    }
    return count;
}

function findName(myarr, name) {
    let newarr = [];
    if (name.length >= 2) {
        myarr.forEach(value => {
            newarr.push(sameLetter(value, name) / value.length);
        });
        const maxcount = Math.max(...newarr);
        if (maxcount * myarr[newarr.indexOf(maxcount)].length >= 2) {
            return myarr[newarr.indexOf(maxcount)];
        }
    }
    return "Not Found";
}
const names = ['Ayten', 'Aydan', 'Aysen', 'Qezenfer', 'esmer', 'Qelender', 'elsad', 'Gulten', 'Elvin', 'Pervin', 'Anar'];
console.log(findName(names, 'evin'));
console.log(findName(names, 'prvin'));
console.log(findName(names, 'abbb'));
console.log(findName(names, 'Qender'));
console.log(findName(names, 'ayt'));
console.log(findName(names, 'elsed'));
console.log(findName(names, 'Wjk'));

