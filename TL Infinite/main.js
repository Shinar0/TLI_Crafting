var Ember_selection = 0;
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
}

console.log(result);