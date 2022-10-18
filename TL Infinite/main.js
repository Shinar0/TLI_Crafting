/* const randomizer = (values) => {
    let i, pickedValue,
            randomNr = Math.random(),
            threshold = 0;

    for (i = 0; i < values.length; i++) {
        if (values[i].probability === '*') {
            continue;
        }

        threshold += values[i].probability;
        if (threshold > randomNr) {
                pickedValue = values[i].value;
                break;
        }

        if (!pickedValue) {
            pickedValue = values.filter((value) => value.probability === '*');
        }
    }
    console.log(pickedValue, 'was picked!');
    console.log(Embers[0].Name)
    console.log(Embers[0].Affixes[2].Affix_Name)
    return pickedValue;
} */
var Ember_selection = 0;
function rando() {
  r = Math.floor(Math.random() * Embers[Ember_selection].Affixes.length);
  console.log(r);
  r2 = Math.floor(
    Math.random() * Embers[Ember_selection].Affixes[r].Tiers.length
  );
  console.log(r2);
  a = chance.weighted(
    [
      Embers[Ember_selection].Affixes[r].Tiers[0].mod_description,
      Embers[Ember_selection].Affixes[r].Tiers[1].mod_description,
      Embers[Ember_selection].Affixes[r].Tiers[2].mod_description,
    ],
    [
      Embers[Ember_selection].Affixes[r].Tiers[0].tier_weight,
      Embers[Ember_selection].Affixes[r].Tiers[1].tier_weight,
      Embers[Ember_selection].Affixes[r].Tiers[2].tier_weight,
    ]
  );
  console.log(a);
}
