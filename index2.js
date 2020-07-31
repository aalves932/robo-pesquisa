const readline = require('readline-sync')
const Parser = require('rss-parser');

const TREND_URL = 'https://trends.google.com/trends/trendingsearches/daily/rss?geo=BR&category=t' 

async function start () {

    const content = {}
    content.searchTerm = await askAndReturnSearchTerm()  
    content.prefix = AskAndReturnPrefix()

    function AskAndReturnPrefix(){
        const prefixes = ['Quem e', 'O que e', 'A historia de ']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        return(selectedPrefixText)
    }

    async function askAndReturnSearchTerm() {
        const response = readline.question('Type a Wikipedia search term or G to fetch google trends: ')
        return (response.toUpperCase() === 'G') ?  await askAndReturnTrend() : response
    }

    async function askAndReturnTrend() {
        console.log('Please Wait...')
        const trends = await getGoogleTrends()
        const choice = readline.keyInSelect(trends, 'Choose your trend:')
    
        return trends[choice] 
      }
    
      async function getGoogleTrends () {
        const parser = new Parser()
        const trends = await parser.parseURL(TREND_URL)
        console.log(trends)
        return trends.items.map(({title}) => title)
    
      }	
      console.log(content)
}

start()	