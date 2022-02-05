let kylie;
let curry;
let travis;
let bitcoin;
let tesla;
let kylie1;
let curry1;
let tesla1;
let bitcoin1;
let travis1;
function preload() {
kylie = createImg('IMG_E1009.JPG', 'windowimage');
bitcoin = createImg('IMG_1015.JPG');
travis = createImg('IMG_1016.JPG');
tesla = createImg('IMG_1017.JPG');
  curry = createImg('IMG_1018.JPG');
kylie1 = createP('retired song writer and actress Ariana Gande announces engagment to long time boyfriend Brig Johnson. The two have been dating since 2024 and after 8 years have decided to officially announce their engagment. Surveys say Brig Johnson is still the "hottest" man alive.' );
curry1 = createP('Legendary basketball player stephen curry announces retirment. The 6x NBA Champion and 4x NBA MVP will go down as one of the greatest players to ever pivk up a basketball. Many reporters are shocked as the 41 year old superstar looked like he wasnt cooling down any time soon. ')
tesla1 = createP('After years of anticipation Tesla realeases fully electronic Semi Truck. The truck is not as powerful as many have hoped but is "strong enough to get th job done" Elon Musk tells KK. Many critics are saying to stay away and to stick with an old fashioned Kenworth. ');
bitcoin1 = createP('Bitcoin officially becomes new curreny of the United States. later in the year many companies announced they will only accept crypto payments leaving consumers with no other option. Thousands protest but will come to little result as cryptos have officially taken over.');
travis1 = createP('Artist Travis Scott announces his return to Metaverse, In 2020, The artist performed what is now known as the first mwtaverse concert in vintage game "fortnite." Scott announced his new concert early this week and is now set for July 6, 2032. One month from today.');


}
function setup() {
createCanvas(1920,1100);



}

function draw() {
background( 177, 156, 217);
textSize(75)
text('The Krabby Kronicle', 650, 100);
rect( 0, 152, 1920, 10)
 kylie.size(400,600)
kylie.position(770,220);
curry.position(225, 220);
  curry.size(200,300);
tesla.position(125, 675);
tesla.size(400, 300);
bitcoin.position(1400, 250);
bitcoin.size(300, 300);
travis.position(1360, 675);
travis.size (400, 300);
kylie1.style ('font-size', '18px');
kylie1.position (785,830);
kylie1.size (400, 200);
curry1.style ('font-size', '18px');
curry1.position (125, 525);
curry1.size (400,100);
tesla1.style ('font-size', '18px');
tesla1.position(125, 970);
tesla1.size(420, 50);
bitcoin1.style ('fotn-size', '18px')
bitcoin1.position(1360, 555);
bitcoin1.size(420, 100);
travis1.style('font-size', '18px')
travis1.position(1360, 970);
travis1.size(420,50);
}
