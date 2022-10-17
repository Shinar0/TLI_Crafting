const randomizer = (values) => {
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
            //nothing found based on probability value, so pick element marked with wildcard
            pickedValue = values.filter((value) => value.probability === '*');
        }
    }
    console.log(pickedValue, 'was picked!');
    console.log(Embers[0].Name)
    console.log(Embers[0].Affixes[2].Affix_Name)
    return pickedValue;
}