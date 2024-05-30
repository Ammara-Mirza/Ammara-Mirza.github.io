document.addEventListener("DOMContentLoaded",function() {
    //Array of title data
    var necklaceData =[
        {title :"Gold necklace with a polished pearl", description: "price" , color: "#3C3840", imageUrl: "gold1.jpg"},
        {title :"Gold necklace and a bracelet", description: "price" , color: "#3C3840", imageUrl:"gold2.jpg"},
        {title :"Gold penant with chain",description: "price" , color: "#3C3840", imageUrl:"gold3.jpg"},
        {title :"Gold necklace",description: "price" , color: "#3C3840", imageUrl:"gold5.jpg"},

    ];
    // Array of earring and tops data
    var earringTopsData =[{title :"Gold necklace with a polished pearl", description: "price" , color: "#3C3840", imageUrl: "gold earring 1.jpg"},
    {title :"Gold necklace and a bracelet", description: "price" , color: "#3C3840", imageUrl:"gold earring 2.jpg"},
    {title :"Gold penant with chain",description: "price" , color: "#3C3840", imageUrl:"gold earring 3.jpg"},
    {title :"Gold necklace",description: "price" , color: "#3C3840", imageUrl:"gold earring 4.jpg"},

    ];



//function to create a single title
function createTile(tileData){
    var tile = document.createElement("div");
    tile.classList.add("tile");
    tile.style.backgroundColor =tileData.color;

    var image = document.createElement("img");
    image.src = tileData.imageUrl;
    image.alt = tileData.tile;

    var content =document.createElement("div");
    content.classList.add("content");

    var title = document.createElement("h2");
    title.textContent = tileData.title;
    
    var description = document.createElement("p");
    description.textContent = tileData.description;

    content.appendChild(title);
    content.appendChild(description);
    
    tile.appendChild(image);
    tile.appendChild(content);

    return tile;
}

// funtion for adding tiles to the container
function addTiles(tileData,containerId) {
    var container = document.getElementById(containerId);

    tileData.forEach(function(tileDataItem) {
        var tile = createTile(tileDataItem);
        container.appendChild(tile);
    });
}
// adding tiles to the container
addTiles(necklaceData,"necklace-container"),
addTiles(earringTopsData,"earring-tops-container")
});
 