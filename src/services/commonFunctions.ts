import { RFPercentage } from 'react-native-responsive-fontsize'
import { Dimensions } from 'react-native'
import { path } from 'ramda'

export {
  heightPercentageToDP as perfectHeight,
  widthPercentageToDP as perfectWidth,
} from 'react-native-responsive-screen'

export const screenWidth = Dimensions.get('window').width
export const screenHeight = Dimensions.get('window').height

const viewPortSize = { width: screenWidth, height: screenHeight }

export const perfectFont = (value: number): number =>
  RFPercentage((value / viewPortSize.height) * 100)


export const convertToEnglishNumbers = (numbers) => {
  return numbers.replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
    .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))
}