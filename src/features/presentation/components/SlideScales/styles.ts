import {StyleSheet} from 'react-native';

import Colors from '@app/ui/colors';
import Spaces from '@ui/spaces';
import Fonts from '@app/constants/fonts';

const styles = StyleSheet.create({
  main: {
    paddingVertical: Spaces.space6,
  },
  sliders: {
    gap: Spaces.space6,
    marginBottom: Spaces.space7,
  },
  sliderTitle: {
    fontFamily: Fonts.manropeSemiBold,
    fontSize: 14,
    color: Colors.black100,
    marginBottom: Spaces.space3,
  },
  sliderWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spaces.space2,
  },
  sliderContainer: {
    flex: 1,
  },
  sliderTextMinMax: {
    fontFamily: Fonts.manropeRegular,
    color: Colors.black100,
    fontSize: 16,
  },
  sliderThumb: {
    width: 32,
    height: 32,
    backgroundColor: '#5E60CE',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  sliderThumbText: {
    color: 'white',
    fontFamily: Fonts.rFDewiBold,
    fontSize: 16,
  },
  sliderTrack: {
    height: 4,
    backgroundColor: Colors.black25,
  },
  minimumTrack: {
    backgroundColor: '#5E60CE',
  },
  sliderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sliderFooterText: {
    fontFamily: Fonts.manropeRegular,
    fontSize: 12,
    color: Colors.black50,
  },
});

export default styles;
