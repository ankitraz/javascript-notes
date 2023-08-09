const day = 'wednesday'

switch (day) {
    case 'monday':
        console.log(`Plan course structure`);
        console.log('Go to coding meetup.');
        break;

    case 'tuesday':
        console.log('Prepare theory videos.');
        break;
    case 'wednesday':
    case 'thrusday': 
        console.log('Write code examples.');
        break
    case 'friday':
        console.log('Record videos');
        break
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break
    default:
        console.log('Not a valid day!');
}