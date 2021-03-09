import React, { memo, forwardRef } from 'react'
import Icon from '../src/Icon'

const svgPaths16 = [
  'M15 0a1 1 0 01.993.883L16 1v14a1 1 0 01-.883.993L15 16h-3a1 1 0 01-.117-1.993L12 14h2V2h-2a1 1 0 01-.993-.883L11 1a1 1 0 01.883-.993L12 0h3zM4 0a1 1 0 01.117 1.993L4 2H2v12h2a1 1 0 01.993.883L5 15a1 1 0 01-.883.993L4 16H1a1 1 0 01-.993-.883L0 15V1A1 1 0 01.883.007L1 0h3zm1.61 5c.514 0 .962.212 1.343.637.382.425.573.997.573 1.716 0 .838-.258 1.588-.773 2.252-.514.663-1.327 1.2-2.437 1.609v-.465l.233-.095a3.09 3.09 0 001.274-1.017c.366-.505.55-1.03.55-1.577a.478.478 0 00-.057-.26c-.018-.037-.043-.056-.074-.056s-.08.025-.149.075c-.198.142-.446.214-.744.214-.36 0-.675-.145-.944-.433A1.453 1.453 0 014 6.572c0-.422.155-.79.465-1.102.31-.313.692-.47 1.144-.47zm4.474 0c.514 0 .963.212 1.344.637.381.425.572.997.572 1.716 0 .838-.257 1.588-.772 2.252-.515.663-1.327 1.2-2.437 1.609v-.465l.233-.095a3.09 3.09 0 001.274-1.017c.366-.505.549-1.03.549-1.577a.478.478 0 00-.056-.26c-.019-.037-.044-.056-.075-.056-.03 0-.08.025-.149.075-.198.142-.446.214-.744.214-.36 0-.674-.145-.944-.433a1.453 1.453 0 01-.405-1.028c0-.422.155-.79.466-1.102.31-.313.691-.47 1.144-.47z',
]
const svgPaths20 = [
  'M19 0a1 1 0 01.993.883L20 1v18a1 1 0 01-.883.993L19 20h-4a1 1 0 01-.117-1.993L15 18h3V2h-3a1 1 0 01-.993-.883L14 1a1 1 0 01.883-.993L15 0h4zM5 0a1 1 0 01.117 1.993L5 2H2v16h3a1 1 0 01.993.883L6 19a1 1 0 01-.883.993L5 20H1a1 1 0 01-.993-.883L0 19V1A1 1 0 01.883.007L1 0h4zm2.012 6c.643 0 1.203.266 1.68.797.477.53.715 1.246.715 2.145a4.472 4.472 0 01-.965 2.814c-.644.83-1.66 1.5-3.047 2.011v-.581l.26-.104a3.87 3.87 0 001.624-1.285c.457-.632.686-1.29.686-1.971 0-.148-.023-.256-.07-.326-.023-.047-.054-.07-.093-.07-.038 0-.1.031-.186.093-.248.179-.558.268-.93.268-.45 0-.843-.18-1.18-.541A1.817 1.817 0 015 7.965c0-.527.194-.986.581-1.378A1.934 1.934 0 017.011 6zm5.593 0c.643 0 1.203.266 1.68.797.477.53.715 1.246.715 2.145a4.472 4.472 0 01-.965 2.814c-.644.83-1.659 1.5-3.047 2.011v-.581l.26-.104a3.87 3.87 0 001.624-1.285c.457-.632.686-1.29.686-1.971 0-.148-.023-.256-.07-.326-.023-.047-.054-.07-.093-.07-.038 0-.1.031-.186.093-.248.179-.558.268-.93.268-.45 0-.843-.18-1.18-.541a1.817 1.817 0 01-.506-1.285c0-.527.194-.986.581-1.378A1.934 1.934 0 0112.604 6z',
]

export const ArrayStringIcon = memo(
  forwardRef(function ArrayStringIcon(props, ref) {
    return (
      <Icon
        svgPaths16={svgPaths16}
        svgPaths20={svgPaths20}
        ref={ref}
        name="array-string"
        {...props}
      />
    )
  })
)
