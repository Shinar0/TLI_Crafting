/* var Ember_selection = 0;
var result = $.csv.toObjects(claw.csv);

function rando() {
  var mod_selection = [];
  var mod_selection_weight = [];
  
  
  for (i=0;i<Embers[Ember_selection].Affixes.length;i++) {
    mod_selection[i] = i
    mod_selection_weight[i] = Embers[Ember_selection].Affixes[i].mod_weight
  }
  
  chosen_mod = chance.weighted(mod_selection, mod_selection_weight);

  var chosen_tier_mod_descriptions = [];
  var chosen_tier_weights = [];

  for(i=0; i<Embers[Ember_selection].Affixes[chosen_mod].Tiers.length; i++) {
    chosen_tier_mod_descriptions[i] = "T" + Embers[Ember_selection].Affixes[chosen_mod].Tiers[i].Tier + " " + Embers[Ember_selection].Affixes[chosen_mod].Tiers[i].mod_tier_prefix + Embers[Ember_selection].Affixes[chosen_mod].Tiers[i].mod_tier_range[Math.floor(Math.random()*Embers[Ember_selection].Affixes[chosen_mod].Tiers[i].mod_tier_range.length)] + Embers[Ember_selection].Affixes[chosen_mod].Affix_Name;
    chosen_tier_weights[i] = Embers[Ember_selection].Affixes[chosen_mod].Tiers[i].tier_weight
  };

  mod_outcome = chance.weighted(chosen_tier_mod_descriptions, chosen_tier_weights);
  
  console.log(mod_outcome); 
} */

const Claw_craft = [
  {
    Tier: 1,
    Modifier: "(8–10) mana restored on hit",
    Level: 85,
    Weight: 171,
    Ember: "Vigor Ember",
    Affix_Type: "Prefix",
  },
  {
    Tier: 2,
    Modifier: "Give this gear (11–12) - (13–15) Erosion Damage",
    Level: 80,
    Weight: 514,
    Ember: "Vigor Ember",
    Affix_Type: "Prefix",
  },
  {
    Tier: 3,
    Modifier: "1 - 5 added attack lightning damage per 12 dexterity",
    Level: 75,
    Weight: 1543,
    Ember: "Vigor Ember",
    Affix_Type: "Prefix",
  }
]

var test1 = Claw_craft[0].Modifier;
var regex = /\d+/g
var result = test1.match(regex);
var myMin = parseInt(result[0]);
var myMax = parseInt(result[1]);

var random_number = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

console.log(random_number);