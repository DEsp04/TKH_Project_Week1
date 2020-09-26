function madlibs() {
  let player = prompt("Would you like Story One or Story Two?");

  if (player == "Story One" || player == "story one") {
    let adjective = prompt("type an adjective");
    let generalPlace = prompt("type a general place");
    let vehicleName = prompt("type a vehicle name");
    let nameGame = prompt("type the name of a game");
    let noun = prompt("type a plural noun");
    let verb = prompt("type an 'ing' verb");
    let verbTwo = prompt("type another 'ing' verb");
    let nameFood = prompt("type a food name (plural)");
    let sportName = prompt("type the name of a sport");
    let verbThree = prompt("type another 'ing' verb");
    let emotion = prompt("type an emotion");
    let number = prompt("number");

    let storyOne = `A vacation is when you take a trip to some ${adjective} place near an amazing ${generalPlace}. A good vacation place is one where you can ride ${vehicleName} or play ${nameGame} or go hunting for ${noun}. I like to spend my time ${verb} or ${verbTwo}. When parents go on a vacation, they spend their time eating three ${nameFood} a day. Usually, fathers play ${sportName}, and mothers spend their time ${verbThree}. Adults need vacations more than kids because adults are always very ${emotion} because they have to work ${number} hours every day all year just to afford their vacations!`;

    let pElement = document.createElement("p");
    pElement.textContent = storyOne;

    let divElement = document.getElementById("story");
    divElement.append(pElement);
  } else if (player == "Story Two" || player == "story two") {
    let adjective = prompt("type an adjective");
    let famousPlace = prompt("type a famous place");
    let noun = prompt("type a plural noun");
    let adjectiveTwo = prompt("type another adjective");
    let food = prompt("type a food (plural)");
    let emotion = prompt("type an emotion");
    let verb = prompt("type an 'ing' verb");
    let place = prompt("type a common place");
    let adjectiveThree = prompt("type another adjective");
    let nounTwo = prompt("type a noun");
    let adjectiveFour = prompt("type another adjective");
    let nounThree = prompt("type another noun");
    let family = prompt("type a family member");
    let adjectiveFive = prompt("type another adjective");

    let storyTwo = `Today we took a ${adjective} fieldtrip to ${famousPlace}. They're famous for making ${noun} and for cooking ${adjectiveTwo} ${food}. Eating all that food made me feel ${emotion}. Next we enjoyed the local tradition of ${verb} in the middle of the ${place}! Finally, we went shopping for souvenirs. I bought a ${adjectiveThree} ${nounTwo} for myself, and a ${adjectiveFour} ${nounThree} for my favorite ${family}. I'll definitely never forget this ${adjectiveFive} trip!`;

    let pElement = document.createElement("p");
    pElement.textContent = storyTwo;

    let divElement = document.getElementById("story");
    divElement.append(pElement);
  } else {
    madlibs();
  }
}

madlibs();
