// oppgave 4

function square(i) {
        return i * i
    }

    function third(i) {
        return i * i * i
    }
function getRow(i) {
    let s = '<tr> '                       // tr starter en "table row"
    
    s += '<td>' + i + '</td>'         // en celle som viser selve tallet 
    s += '<td>' + square(i) + '</td>' // en celle som viser kvadratet
    s += '<td>' + third(i) + '</td>'  // en celle som viser tredje potens
    s += '</tr>'
    return s
}
function writeTable() {
        document.write('<table>')
        for (let i = 0; i < 100; i++) {
            document.write(getRow(i))
        }
        document.write('</table>')
    }