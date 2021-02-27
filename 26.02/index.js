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
    let newarr2 = [];
    let indexesofMax = [];
    let maxcount = 0;
    if (name.length >= 2) {
        myarr.forEach(value => {
            newarr.push((sameLetter(value, name) / name.length));
        });
        const maxletter = Math.max(...newarr);

        newarr.forEach((value, index) => {
            if (value === maxletter) {
                indexesofMax.push(index);
                maxcount++;
            }
        });

        if (maxcount > 1) {
            indexesofMax.forEach(value => {
                newarr2.push((newarr[value] * name.length) / myarr[value].length);
            });

            const maxletter2 = Math.max(...newarr2);
            if (maxletter2 * myarr[indexesofMax[newarr2.indexOf(maxletter2)]].length >= 2) {
                return myarr[indexesofMax[newarr2.indexOf(maxletter2)]];
            }

        }
        if (maxletter * name.length >= 2) {
            return myarr[newarr.indexOf(maxletter)];
        }
    }
    return "Not Found";
}
const names = ['Ayten', 'Aydan', 'Aysen', 'Qezenfer', 'esmer', 'Qelender', 'elsad', 'merdan', 'melek', 'Elvin', 'Pervin', 'melekxanim'];
console.log(findName(names, 'evin'));
console.log(findName(names, 'prvin'));
console.log(findName(names, 'abbb'));
console.log(findName(names, 'Qender'));
console.log(findName(names, 'Qezder'));
console.log(findName(names, 'ayt'));
console.log(findName(names, 'elsed'));
console.log(findName(names, 'Merder'));
console.log(findName(names, 'melkxnm'));

