/**
 * less global variable
 */

import { resolve } from 'node:path'

export function generateModifyVars() {
  return {
    // reference:  Avoid repeated references
    hack: `true; @import (reference) "${resolve('src/design/config.less')}";`,
  }
}
