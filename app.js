const alertCases = 10000;
let currentCountries = ["spain", "portugal", "france", "italy"];
let url = `https://corona.lmao.ninja/v3/covid-19/countries/${currentCountries.toString()}`;

function dateFormatter(value) {
    var d = new Date(value);
    return d.toLocaleString();
}

function cellStyle(value, row, index) {
    if (value > alertCases) {
        return {
            classes: 'bg-warning'
        }
    }

    return {
        classes: ''
    }
}

function addCountry(e) {
    var $table = $('#table')
    e.preventDefault()

    let newCountry = (document.querySelector('#next-country').value).toLowerCase();
    if (!findMatches(newCountry)) {
        currentCountries.push(newCountry);
        url = `https://corona.lmao.ninja/v3/covid-19/countries/${currentCountries.toString()}`;
        $table.bootstrapTable('refresh', {
            url: url
        })
    }
    document.querySelector('#next-country').value = '';
}

/*   function findMatches(wordToMatch){
    return currentCountries.filter(country => {
    const regex = new RegExp(wordToMatch, 'gi');

    newCountry.push(country.match(regex));
    return newCountry;
  });
  }  */


function findMatches(wordToMatch) {
    let substring = wordToMatch;

    const match = currentCountries.find(element => {
        if (element.includes(substring)) {
            return true;
        }
    });

    if (match !== undefined) {
        return true
    }
}