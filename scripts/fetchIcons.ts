function fetchIcons(){
    const servantClassIcon = [];

    for (let i = 1; i <= 11; i++) { ///CLASS
        for(let j=1; j<=3; j++){ ///RARITY
            const img = `https://static.atlasacademy.io/JP/ClassIcons/class${j}_${i}.png`

            const data = img;
            
            servantClassIcon.push(data);
        
        }
    }
    for(let j=1; j<=4; j++){ ///BEAST SERVANT
        let img = `https://static.atlasacademy.io/JP/ClassIcons/class${j}_33.png`
        
        if(j==4){///BEAST
            img = `https://static.atlasacademy.io/JP/ClassIcons/class0_31.png`
        }

        const data = img;
        servantClassIcon.push(data);
    }
    for(let j=1; j<=3; j++){ /// ? CLASS
        let img;

        img = `https://static.atlasacademy.io/JP/ClassIcons/class${j}_97.png`

        const data = img;
            
        servantClassIcon.push(data);
    }
    for(let j=1; j=3; j++){ ///pretender
        const img = `https://static.atlasacademy.io/JP/ClassIcons/class${j}_28.png`

        const data = img;
            
        servantClassIcon.push(data);
    }
    
    ///seguir con los demas y verificar que esten todos 
    /// https://static.atlasacademy.io/JP/ClassIcons/class3_25.png FOREIGNER
    /// https://static.atlasacademy.io/JP/ClassIcons/class3_10.png ALTER EGO YA ESTA PERO PONER TODAS LAS EXTRAS UN MISMO FOR
    /// https://static.atlasacademy.io/JP/ClassIcons/class3_23.png MOON CANCER

    ///linkear todo con ID o hacer diccionario (name: id)
    // SABER
    // LANCER
    // ARCHER
    // ASSASSIN
    // RIDER
    // CASTER
    // BERSERKER
    // RULER
    // AVENGER
    // MOON CANCER
    // FOREIGNER
    // PRETENDER
    // ALTER EGO
    // SHIELDER
    // BEAST

    return servantClassIcon;
}

function createCard(data: any, index: number){
    const card = document.createElement("div");
    card.innerHTML = `

        
    `
    return card;
}

function render(){
    const container = document.getElementById("fate-go-card-container");
    container!.innerHTML = "";

    
}