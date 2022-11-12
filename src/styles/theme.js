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
   * Spacing
   */
  DEFAULT_PADDING: 16,
  ALIGN_JUSTIFY_CENTER: {
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default theme;
