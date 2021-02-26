function sameLetter(name, testname) {
    let count = 0;
    let a = 0;
    for (let i = 0; i < name.length; i++) {
        for (let j = a; j < testname.length; j++) {
            if (name.toLowerCase()[i] === testname.toLowerCase()[j]) {
                count++;
                a = i + 1;
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
            newarr.push(sameLetter(value, name));
        });
        const maxcount = Math.max(...newarr);
        if (maxcount >= 2) {
            return myarr[newarr.indexOf(maxcount)];
        }
    }
    return "Not Found";
}
const names = ['Ayten', 'Aydan', 'Aysen', 'Gulten', 'Elvin', 'Pervin', 'Anar'];
console.log(findName(names, 'ervin'));
console.log(findName(names, 'a'));
console.log(findName(names, 'aa'));
console.log(findName(names, 'Afs'));
console.log(findName(names, 'Gten'));

