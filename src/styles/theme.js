/**
 * This file stores all shared variables for styling
 */

import {Platform} from 'react-native';

const theme = {
  /**
   * Text
   */
  TEXT_COLOR: '#9aa1b2',
  H1_FONT: Platform.OS === 'web' ? 40 : 25,

  /**
   * Button
   */
  BUTTON_BASE_COLOR: '#2a2e38',
  BUTTON_HOVE: '#353a46',

  /**
   * Spacing
   */
  MARGIN_DEFAULT: 16,
  MARGIN_SMALL: 8,
  DEFAULT_PADDING: 16,
  ALIGN_JUSTIFY_CENTER: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default theme;
