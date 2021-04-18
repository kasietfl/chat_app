import tinycolor from "tinycolor2";

const getCorrectIndex = number => {
    return number > 255 ? 255 : number < 0 ? 0 : number; 
}

export default hash => {
    const [r, g, b] = hash
        .substr(hash.length-3)
        .split('')
        .map(char => getCorrectIndex(char.charCodeAt(0)));
    const color = tinycolor({ r, g, b})
    .lighten(15)
    .saturate(15)
    .toHexString();
    return color;
};