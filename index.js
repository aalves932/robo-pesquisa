const readline = require('readline-sync')

function start(){

    const content = {}
    content.searchTerm = AskAndReturnSearchTerm()
    content.prefix = AskAndReturnPrefix()

    function AskAndReturnSearchTerm(){
        return readline.question('Digite o termo a ser procurado: ')
    }

    function AskAndReturnPrefix(){
        const prefixes = ['Quem e', 'O que e', 'A historia de ']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]

        console.log(prefixes[selectedPrefixIndex])
        return(selectedPrefixText)
    }

    console.log(content)
}

start()