import {
  indigo800,
  indigo900,
  indigo700,
  blueSapphire,
  metallicSeaweed,
  lightBlue500,
  grey900,
  babyPowder,
  grey400,
  darkBlack
} from 'material-ui/styles/colors'
import { fade } from 'material-ui/utils/colorManipulator'
import spacing from 'material-ui/styles/spacing'
import zIndex from 'material-ui/styles/zIndex'

export default {
  spacing,
  zIndex: zIndex,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: darkBlack,
    primary2Color: indigo800,
    primary3Color: indigo700,
    accent1Color: blueSapphire,
    accent2Color: metallicSeaweed,
    accent3Color: lightBlue500,
    textColor: grey900,
    alternateTextColor: babyPowder,
    canvasColor: babyPowder,
    borderColor: grey400,
    disabledColor: fade(darkBlack, 0.3),
    pickerHeaderColor: blueSapphire
  }
}
