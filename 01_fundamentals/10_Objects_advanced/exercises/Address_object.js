const address = {
    street: 5,
    city: 'Muzaffarpur',
    zipCode: 842004
}

function showAddress (address) {
    for (const key in address) {
        // console.log(key, address[key]);
        console.log(`${key} = ${address[key]}`);
    }
}

showAddress(address);