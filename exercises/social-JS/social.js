var guitarPlayer = 
{
    name: "Aerosmith",
    age : 40,
    hobby: Dj,
    favoriteBands:[
        {
            name: "Nirvana",
            age: 34,
            musicType: "alternative",
            bandMembers:[{
                name: "kurt cobain",
                name: "Steve",
                name: "Alex",
            }],
            hobby:["play guitar","listen to the music"],
            favoriteFood:"Pad thai",
            emailAddress:"cobain@gmail.com",
            thePlayerInfo: function (){
                console.log("I like " + this.musicType );
            },
        },
        {
            name: "Iron maiden",
            age: 32,
            musicType: "alternative",
            bandMembers:["Giant","Demo","Pixie"],
            hobby:["Play drum","browsing"],
            favoriteFood:"Steak",
        },
        {
            name: "Guns and Roses",
            age: 45,
            musicType: "Rock",
            bandMembers:["Axl Rose","Slash","Andy"],
            hobby:["dance","singing"],
            favoriteFood:"Grill chicken",
        },
        {
            name: "Nazareth",
            age: 60,
            musicType: "Pop rock",
            bandMembers:["dhanny","buddy","leon"],
            hobby:["play bass","hiking"],
            favoriteFood:"Steam fish",
        }
    ]
};
    
guitarPlayer[0].thePlayerInfo();








    