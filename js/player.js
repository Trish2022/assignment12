class Jukebox {
    constructor(albums) {
        this.albums = [];
    }
    addAlbum = function(album) {
        this.albums.push(album);
    }
    favoriteAlbum = function() {
        let max = -1, fav;
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played;
                fav = this.albums[i];
            }
        }
        return fav.display();
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
        this.played = 0;
    }
    play = function() {
        this.played += 1;
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`;
    }
}

var jbox = new Jukebox();
const album1 = new Album('Operation Ivy', 'Energy');
const album2 = new Album('Blink 182', 'Dude Ranch');
const album3 = new Album('New Found Glory', 'Sticks and Stones');

jbox.addAlbum(album1);
jbox.addAlbum(album2);
jbox.addAlbum(album3);

album1.play();
album2.play();
album2.play();
album2.play();
album2.play();
album2.play();
album3.play();

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`);



// In Lab 19 you created a music player application using object-oriented programming techniques. The downside to this application is that it was for the most part, static. Albums were added manually in code, albums were added to the player manually in code, and the albums were also played manually in code. Your job in this assignment will be to do a minimal rewrite of the application that allows the user to pick an artist/album from a drop down menu on a web page and then click a play button to play the actual album. Every time the play button is clicked, you need to keep track of which albums are being played and how often. There should be a button on the screen that reads “Show my favorite album”. When the user clicks this button, it should show the user’s favorite album based on how many times it’s been played. When building the application, keep the following in mind:
// 1.	Store artists/albums within an array
// 2.	Bind that array to the drop down menu on the web page
// 3.	In code, iterate through the array and programmatically create new Album class instances based on each album within the array. You’ll also need to add these instances to the player.
// 4.	Add a play button to the web page. When the user selects an artist/album from the drop down menu and clicks the play button, the play() method should be called for that album. This will track that album as being played.
// 5.	When the user clicks the “show my favorite album” button, the favoriteAlbum() method should be called and the user’s favorite album based on number of plays should be displayed in the web page.
