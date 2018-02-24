let photos = ["./photo1.JPG", "./photo.JPG", "IMG_9075.JPG","IMG_8709.JPG","IMG_7045.JPG","IMG_6341.JPG","IMG_6331.JPG","IMG_0783.JPG","IMG_0428 2.jpg","IMG_0423 2.jpg","IMG_0362.JPG","IMG_0051.JPG","IMG_3160.JPG","IMG_1980.JPG","IMG_0003.JPG","IMG_0113.JPG","IMG_0410.jpg","IMG_0427.jpg","IMG_0429.jpg","IMG_0497.jpg","IMG_0506.jpg","IMG_1050.JPG","IMG_1056.JPG","IMG_1061.JPG","IMG_1106.JPG","IMG_1111.JPG","IMG_1114.PNG","IMG_1121.PNG","IMG_1130.JPG","IMG_1131.PNG","IMG_1137.PNG","IMG_2994.JPG","IMG_6117.JPG","IMG_6319.JPG","IMG_6322.JPG","IMG_8025.JPG"];
let songSrc = ["./futile.mp3", "./TIALTNGO.mp3", "./milk.mp3", "./aboutme.mp3", "./honey.mp3", "./shooting.mp3", "./summer.mp3", "./us.mp3", "./zula.mp3"];
let songtitles = ["Futile Devices", "There is a Light That Never Goes Out", "Milk", "You're the Best Thing About Me", "Dip you in Honey", "Shooting Stars", "Smells Like Summer", "Us", "Song for Zula"];
let memories = [
  "When we went to Wow donuts like 4 times but every time we went it was closed because they lie about their hours on their website. But the drive was still fun.",
  "Late night drives to Hurtz while we jam out to our indie bops playlist and you show me new songs that make me smile",
  "Going to the ballet with you and having to wait for 4000 hours before they figured out how to work very basic technology and let us watch these russians dance, and then we got free tickets which we still haven't used. But I'd never seen such a beautiful performance.",
  "When we were apart over christmas break and you sent me the picture of you around the christmas tree when you were a little gerber and you had that cute red dress on with your hair up and it made me smile and miss you so much",
  "When you first bought me my blue pants and then we got all dressed up with the white shirt and you paraded me around the dorm and made me give you a fashion show and I looked effing good <3",
  "When we found out that we could order pizza from pizzaria testa over the phone and we bought one and sat outside in my truck in the cold weather and ate it together while listening to our indie bops",
  "Going to turtle creek and taking the perfect portrait picture by the water on the first try, that was amazing. Say the word and I'll take you back there and we can walk around and take photos together baby",
  "Every time we would pass a shen yun billboard and we would rush to see who could say that they wanted to go first and that we already had tickets to go",
  "When we first discovered that we both love fun run and then we made each other re-download it so we could play together and now we play all the time, especially with Kat and Grace.",
  "Our trip to Ikea that I'd never been to before and it was fun trying to pronounce all of the names of weird stuff and picking out furniture we would want when we live together.",
  "Sitting in bed and watching the olympics or How I Met Your Mother or Grey's Anatomy or This is Us or Shane or Tati or Newsroom (ugh miss newsroom) or any of our other shows",
  "When we were playing mini golf and we lost a ball and so we both played with the same one for the rest of the night. Also, I miss putt putt, we should go again soon please.",
  "When I was going fourth floor in the bathroom and you were in the study hall and you knocked on the wall and I knocked back <3 So romantic",
  "When we played rocket league in the back of my truck in the park, and even though it wasn't as comfortable as we thought, there was still a pretty girl and a pretty sunset that I loved <3",
  "When we were talking about how we eat gummy worms weird in the car and those guys jumped out of their car and started dancing while their car was still moving on the highway.",
  "When we sat in the courtyard of the dorm and it was just that right temp that we like where it's cold but the sun is on us so that warms us back up and we just laid down on the benches and talked before I had to leave for physics",
  "When we were driving back to UTD and you sat next to me in the front seat of my truck and the sunset was the most beautiful one we've ever seen and so we took pictures and I imitated the radio announcer",
  "When You, Kat, Grace, and I all went to see pitch perfect 3 and I had never seen it before but it was really funny and then we ended up watching the other two by ourselves because I wanted to see them",
  "Doing sparklers with you in Grace's dorm at midnight on new years eve and setting off the fire alarm and then I got all paranoid that we were going to get carbon monoxide poisoning so I started googling like you do",
  "Bringing a picnic up to the top of Mount Bonnell and letting you fly the drone and take videos of us and the river while snacking on the french toast that we made in the morning with your delicious cream cheese <3",
  "When I surprised you coming up over Christmas and I pulled up outside your house and I asked you to look outside the window but you looked out the wrong one like 4 times until you finally saw me <3", 
  "When you bought me a shirt that would match my blue pants and the beef jerky and deoderant and swedish fish and socks all for valentines day because you love me and we sat in the back of your car and talked and all the gifts were so thoughtful",
  "Chasing after a comet cab together even though we both know that it's going to pull away when we get 4 steps away from it even though we are waving, like what the heck",
  "When we had to drive to the brookdale down the street to take a picture for that school project that I put off until the day before, but you didn't mind and you liked helping me finish it",
  "Whenever I bought the vinyl for arcade fire and I sent you the video of me playing it but you didn't get it, you just thought it was plugged into my phone so I had to basically explain that I bought it, but you bought it too so you had to return yours.",
  "When I sent you the flowers whenever we were apart with the sweet quote from catcher in the rye that you really liked and how you put the flowers in your living room where everyone could see them",
  "When you brought me the letters and the coupon for 2 free star wars viewings even though I know you don't like star wars, that was really sweet you wanted to do something like that for me babe",
  "When we went ice skating together in the mall and we just kept going around and around in circles holding hands and you would laugh at me because of how I waddled whenever we were off of the ice and how we were pros and everyone else kept falling down",
]
let lyrics = [
  "\"The radio's been playing all our songs\"",
  "\"Some say love is a burning thing\"",
  "\"Our love is deeper than the oceans of water\"",
  "\"I want to love you madly, I want to love you now\"",
  "\"You'll drive in my car, Just tell me we are going somewhere\"",
  "\"But god I loved those days we couldn't get out of bed, Left your taste in my mouth, all your words in my head\"",
  "\"Yeah my shirt looks so good, When it's just hanging off your back\"",
  "\"In December drinking horchata, I'd look psychotic in a balaclava\"",
  "\"I love my friends, I love my friends, We got each other, don't need no others\"",
  "\"She is something to behold, Elegant and bold; She is electricity, Running to my soul\"",
  "\"As I ran to your heart to be near, And we kissed as the sky fell in, Holding you close\"",
  "\"I kissed her face and kissed her head, And dreamed of all the different ways, I had to make her glow\"",
  "\"Sweeeeeeeeeeeeeeeeeeet Diiiiiiisspooooooooosiiiiiitiooooon\"",
  "\"I'm never gonna let you go, even when it's easy\"",
  "\"Here comes a feeling you thought you'd forgotten\"",
  "\"You've got to burn and burn just to feel alive\"",
  "\"Our love has grown so old\"",
  "\"You had a thing for me, you can feel how I feel\"",
  "\"I'm in love with a shooting star, when she falls, I'll be waiting\"",
  "\"A feeling so startling, I don't know what I should do\"",
  "\"Then I see you, you're walking across the campus\"",
  "\"How am I supposed to pretend, that I never want to see you again\"",
  "\"Every night my mind is running aroudn her\"",
  "\"All I need to do is be struck by your electric love\"",
  "\"You make my heart beat like the rain\"",
]

var now = new Date();
var fullDaysSinceEpoch = Math.floor(now/8.64e7);

audio = new Audio(songSrc[0]);

$( "#container1" ).hide();
$( "#container2" ).hide();
$( "#container3" ).hide();

$( "#button1" ).on( "click", function( event ) {
  $( "#container1" ).show();
  $( "#container2" ).hide();
  $( "#container3" ).hide();
});

$( "#button2" ).on( "click", function( event ) {
  $( "#container1" ).hide();
  $( "#container2" ).show();
  $( "#container3" ).hide();
});

$( "#button3" ).on( "click", function( event ) {
  $( "#container1" ).hide();
  $( "#container2" ).hide();
  $( "#container3" ).show();
});
  
$("#playButton").on( "click", function( event ) {
  if(audio.paused) {
    audio.play(); 
    $("#playIcon").removeClass("fa fa-play");
    $("#playIcon").addClass("fa fa-pause");
  } else {
    audio.pause();
    $("#playIcon").removeClass("fa fa-pause");
    $("#playIcon").addClass("fa fa-play");
  }
});

function pauseAudioAndUpdateSource() {
  audio.pause();
  $("#songTitle").text(songtitles[fullDaysSinceEpoch%songtitles.length]);
  audio.src = (songSrc[fullDaysSinceEpoch%songSrc.length]);
  $("#playIcon").removeClass("fa fa-pause");
  $("#playIcon").addClass("fa fa-play");
}

$('#question').on("click", function(event) {
  $('#infoPage').toggleClass('showAlert');
})

$("#memoryTitle").text(memories[(fullDaysSinceEpoch+1)%memories.length]);
$("#lyricTitle").text(lyrics[(fullDaysSinceEpoch+1)%lyrics.length]);
document.getElementById("circularImage").src=photos[(fullDaysSinceEpoch+1)%(photos.length)];
pauseAudioAndUpdateSource();