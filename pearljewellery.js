document.addEventListener("DOMContentLoaded",function() {
    //Array of title data
    var necklaceData =[
        {title :"Pearl Necklace three-strands", description: "price" , color: "#3C3840", imageUrl: "pearlnecklace1 - Copy.jpg"},
        {title :"Pearl Necklace two-strands", description: "price" , color: "#3C3840", imageUrl:"pearlnecklace2.jpg"},
        {title :"Pearl Neacklace with Diamonds",description: "price" , color: "#3C3840", imageUrl:"pearlnecklace3.jpg"},
        {title :"Pearl Necklace leaf Design",description: "price" , color: "#3C3840", imageUrl:"pearlnecklace4.jpg"},

    ];

    // Array of earring and tops data
    var earringTopsData =[
    {title :"FreshWater Pearls Earrings", description: "price" , color: "#3C3840", imageUrl:"pearlearring1.jpg"},
    {title :"Leaf Design Tops", description: "price" , color: "#3C3840", imageUrl:"pearlearring2.jpg"},
    {title :"Floral Design Tops",description: "price" , color: "#3C3840", imageUrl:"pearlearring3.jpg"},
    {title :"Vintage Sterling Silver Tops",description: "price" , color: "#3C3840", imageUrl:"pearlearring4.jpg"},

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
 