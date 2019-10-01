import colors from '../constants/colors.json'

const ColorService = {
  getRandomInt: function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  },
  getColor: function getColor() {
    return colors[this.getRandomInt(colors.length)].hex;
  }
};

export default ColorService;
