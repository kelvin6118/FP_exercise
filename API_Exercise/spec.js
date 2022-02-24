//add necessary links laterj
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../API_Exercise/index.html'), 'utf8');

describe('index.html', () => {
    beforeEach(() => {
        document.documentElement.innerHTML = html
    })
});

    test('has a form', () => {
        const indexform = document.querySelector('#inputform')
        expect(indexform.toBeTruthy())
    })

    // test('provide input to the message field', () => {
    //     expect(document.querySelector('messaqqqqgeBox').
    // })
