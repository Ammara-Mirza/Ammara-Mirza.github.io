document.addEventListener("DOMContentLoaded",function() {
    //Array of title data
    var necklaceData =[
        {title :"Alexanderite Pendant", description: "price" , color: "#3C3840", imageUrl:"AlexaderitePendant.jpg"},
        {title :"Amethyst Pendant", description: "price" , color: "#3C3840", imageUrl:"AmethystPendant.jpg"},
        {title :"Emerald Necklace", description: "price" , color: "#3C3840", imageUrl:"EmeraldNecklace.jpg"},
        {title :"Sapphire Necklace", description: "price" , color: "#3C3840", imageUrl:"SapphireNecklace.jpg"},

    ];
    // Array of earring and tops data
    var earringTopsData =[
    {title :"Opal Ring", description: "price" , color: "#3C3840", imageUrl:"OpalRing.jpg"},
    {title :"Ruby Ring", description: "price" , color: "#3C3840", imageUrl:"RubyRing.jpg"},
    {title :"Lavender Amethyst Ring", description: "price" , color: "#3C3840", imageUrl:"LavenderAmethystRing.jpg"},
    {title :"Amethyst Ring", description: "price" , color: "#3C3840", imageUrl:"AmethystRings.jpg"},

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
 