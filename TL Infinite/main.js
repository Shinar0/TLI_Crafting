var mode_selection = "craft";
var ember_selection = "Cultivation Ember";
var type_selection = "Claw";
var item_level = 87;
let selection = Claw_craft;
var number_of_prefixes = 0;
var number_of_suffixes = 0;
var number_of_affixes = number_of_prefixes + number_of_suffixes;
var myMin = 0;
var myMax = 0;
var myMin2 = 0;
var myMax2 = 0;
var myMin3 = 0;
var myMax3 = 0;
var range = 0;
var range2 = 0;
var range3 = 0;

function random_mod() {
  var mod_selection = [];
  var mod_selection_weight = [];
  var z = 0;
  for (i = 0; i < selection.length; i++) {
    if (
      selection[i].Ember == ember_selection &&
      item_level >= selection[i].Level
    ) {
      if (
        selection[i].Modifier_range.length == 0 &&
        selection[i].Type.length == 1
      ) {
        mod_selection[z] = ["T" + selection[i].Tier + selection[i].Modifier, i];
        mod_selection_weight[z] = selection[i].Weight;
        z++;
      } else if (
        selection[i].Modifier_range.length == 2 &&
        selection[i].Type.length == 1
      ) {
        myMin = selection[i].Modifier_range[0];
        myMax = selection[i].Modifier_range[1];
        mod_selected_range =
          Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
        mod_selection[z] = [
          "T" +
            selection[i].Tier +
            " " +
            mod_selected_range +
            selection[i].Type[0],
          i,
          mod_selected_range,
        ];
        mod_selection_weight[z] = selection[i].Weight;
        z++;
      } else if (
        selection[i].Modifier_range.length == 4 &&
        selection[i].Type.length == 2
      ) {
        myMin = selection[i].Modifier_range[0];
        myMax = selection[i].Modifier_range[1];
        myMin2 = selection[i].Modifier_range[2];
        myMax2 = selection[i].Modifier_range[3];
        range = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
        range2 = Math.floor(Math.random() * (myMax2 - myMin2 + 1)) + myMin2;
        mod_selection[z] = [
          "T" +
            selection[i].Tier +
            " " +
            range +
            selection[i].Type[0] +
            range2 +
            selection[i].Type[1],
          i,
          range,
          range2,
        ];
        mod_selection_weight[z] = selection[i].Weight;
        z++;
      } else if (
        selection[i].Modifier_range.length == 2 &&
        selection[i].Type.length == 2
      ) {
        myMin = selection[i].Modifier_range[0];
        myMax = selection[i].Modifier_range[1];
        mod_selected_range =
          Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
        mod_selection[z] = [
          "T" +
            selection[i].Tier +
            " " +
            selection[i].Type[0] +
            mod_selected_range +
            selection[i].Type[1],
          i,
          mod_selected_range,
        ];
        mod_selection_weight[z] = selection[i].Weight;
        z++;
      } else if (
        selection[i].Modifier_range.length == 4 &&
        selection[i].Type.length == 3
      ) {
        myMin = selection[i].Modifier_range[0];
        myMax = selection[i].Modifier_range[1];
        myMin2 = selection[i].Modifier_range[2];
        myMax2 = selection[i].Modifier_range[3];
        range = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
        range2 = Math.floor(Math.random() * (myMax2 - myMin2 + 1)) + myMin2;
        mod_selection[z] = [
          "T" +
            selection[i].Tier +
            " " +
            selection[i].Type[0] +
            range +
            selection[i].Type[1] +
            range2 +
            selection[i].Type[2],
          i,
          range,
          range2,
        ];
        mod_selection_weight[z] = selection[i].Weight;
        z++;
      } else if (
        selection[i].Modifier_range.length == 6 &&
        selection[i].Type.length == 3
      ) {
        myMin = selection[i].Modifier_range[0];
        myMax = selection[i].Modifier_range[1];
        myMin2 = selection[i].Modifier_range[2];
        myMax2 = selection[i].Modifier_range[3];
        myMin3 = selection[i].Modifier_range[4];
        myMax3 = selection[i].Modifier_range[5];
        range = Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
        range2 = Math.floor(Math.random() * (myMax2 - myMin2 + 1)) + myMin2;
        range3 = Math.floor(Math.random() * (myMax3 - myMin3 + 1)) + myMin3;
        mod_selection[z] = [
          "T" +
            selection[i].Tier +
            " " +
            range +
            selection[i].Type[0] +
            range2 +
            selection[i].Type[1] +
            range3 +
            selection[i].Type[2],
          i,
          range,
          range2,
          range3,
        ];
        mod_selection_weight[z] = selection[i].Weight;
        z++;
      }
    }
  }
  chosen_mod = chance.weighted(mod_selection, mod_selection_weight);
  console.log(mod_selection);
  console.log(mod_selection_weight);
  console.log(chosen_mod[0], chosen_mod[1], chosen_mod[2]);
}
