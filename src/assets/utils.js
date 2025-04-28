import { easyWords } from './words'

//function to grab random word
export function randomWord(){
    const randNum = Math.floor(Math.random() * easyWords.length);
    return easyWords[randNum]
}

export function getFarewellText(character) {
    const options = [
        `Let it go, ${character}`,
        `For the first time in forever, we say goodbye to ${character}`,
        `Some things never change, but sadly ${character} did`,
        `${character}, into the unknown you go`,
        `Love is an open door... and ${character} just walked out`,
        `Do you want to build a snowman, ${character}? Too late.`,
        `${character}, the cold never bothered you anyway`,
        `Reindeers are better than people... but not better than ${character}`,
        `Here we stand, in the light of day — goodbye, ${character}`,
        `Only an act of true love could save ${character}, but it's too late`,
        `All is found... except ${character}`,
        `${character}, show yourself one last time`
    ];

    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}