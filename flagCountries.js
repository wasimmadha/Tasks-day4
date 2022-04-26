fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(result => {
        for (let i in result) {
            link = ((result[i]['flags']['png']));
            console.log("Name: ", result[i]['name']['common'])
            console.log("Region: ", result[i]['region'])
            console.log("Subregion: ", result[i]['subregion'])
            console.log("Population:", result[i]['population'])
            console.log('\n')
            console.log('%c ', `font-size:800px; background:url(${link}) no-repeat;`);
            
        }

    })

    