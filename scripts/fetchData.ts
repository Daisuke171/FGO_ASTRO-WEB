const API_URL = "https://api.atlasacademy.io/nice/NA/servant/";

export async function fetchData(url: string) {
    const servants = [];

    for (let i = 1; i <= 10; i++) {
        const api = url + i;
        const response = await fetch(api);

        if (!response.ok) {
            throw new Error(`Failed to fetch servant ${i}`);
        }

        const data = await response.json();
        
        servants.push(data);
    }

    return servants;
}


const DATA = await fetchData(API_URL);
console.log(DATA[0].name);
console.log(DATA[1].name);


function createCard(data: any, index: number){
    const card = document.createElement("div");
    card.innerHTML = `
        <h1>${data[index].name}</h1>
        <img class="servant-img" src="https://static.atlasacademy.io/NA/CharaGraph/${data[index].id}/${data[index].id}a@1.png"" alt="Servant's portrait">
        <img class="servant-frame" src="/public/frames/CardFrame.png" alt="Servant's frame">
    `
    return card;
}


function render(){
    const container = document.getElementById("fate-go-card-container");
    container!.innerHTML = "";

    for(let i=0; i<10; i++){
        const card = createCard(DATA, i);
        container!.appendChild(card);
    }

    
}

render();