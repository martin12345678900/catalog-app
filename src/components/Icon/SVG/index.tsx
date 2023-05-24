import React from 'react'

import SvgBase, {
  Circle,
  Ellipse,
  G,
  Text,
  TSpan,
  TextPath,
  Path,
  Polygon,
  Polyline,
  Line,
  Rect,
  Use,
  Image,
  Symbol,
  Defs,
  LinearGradient,
  RadialGradient,
  Stop,
  ClipPath,
  Pattern,
  Mask
} from 'react-native-svg'

interface SVGDataProps {
  type: string
  attrs: {
    width: string
    height: string
    viewBox: string
    fill: string
  }
  childs: {
    attrs: {
      fillRule?: string
      clipRule?: string
      d?: string
      fill?: string
    }
    type: string
  }[]
}

interface SVGProps {
  data: SVGDataProps
  style: any
  onPress?: () => void
}

// @ts-ignore
const SVG: React.FC<SVGProps> = ({ data = null, style, onPress }) => {
  if (data === null) {
    console.error('SVG - Not a valid data prop!')
    return
  }

  const TagTypes = {
    Circle,
    Ellipse,
    G,
    Text,
    TSpan,
    TextPath,
    Path,
    Polygon,
    Polyline,
    Line,
    Rect,
    Use,
    Image,
    Symbol,
    Defs,
    LinearGradient,
    RadialGradient,
    Stop,
    ClipPath,
    Pattern,
    Mask
  }

  // SVG Support Components
  const supportedTagTypes = Object.keys(TagTypes)

  // Check SVG color input
  const isValidColor = (color: string) => {
    const c = color !== 'none' ? color.toLowerCase() : false
    return c && c !== '#fff' && c !== '#ffffff' && c !== 'white'
  }

  const parseTransform = (a: any) => {
    const b: any = {}

    for (const i in (a = a.match(/(\w+\((\-?\d+\.?\d*e?\-?\d*\s?)+\))+/g))) {
      const c = a[i].match(/[\w\.\-]+/g)
      b[c.shift()] = c.join(',')
    }

    return b
  }

  const renderSvgChilds = (childs: any[], color: string) =>
    childs.map((child, i) => {
      // don't render if not supported tag type
      if (!supportedTagTypes.includes(child.type)) {
        return null
      }
      // @ts-ignore
      const Node = TagTypes[child.type]
      let currentAttrs = { ...child.attrs }

      // parse transforms
      if (currentAttrs.transform) {
        currentAttrs = {
          ...currentAttrs,
          transform: parseTransform(currentAttrs.transform)
        }
      }

      // make edges thicker dynamically
      currentAttrs.strokeWidth = 1.5

      // apply custom color to stroke
      if (typeof color === 'string') {
        // apply custom color to stroke
        if (currentAttrs.stroke && isValidColor(currentAttrs.stroke)) {
          currentAttrs.stroke = color
        }
        // apply custom color to fill
        if (currentAttrs.fill && isValidColor(currentAttrs.fill)) {
          currentAttrs.fill = color
        }
      }

      // apply custom color to stroke
      if (typeof pathColor === 'string') {
        // apply custom color to stroke
        if (
          currentAttrs.stroke &&
          (currentAttrs.stroke === '#fff' || currentAttrs.stroke === 'white')
        ) {
          currentAttrs.stroke = pathColor
        }
        // apply custom color to fill
        if (
          currentAttrs.fill &&
          (currentAttrs.fill === '#fff' || currentAttrs.fill === 'white')
        ) {
          currentAttrs.fill = pathColor
        }
      }

      // don't render hidden elements
      if (currentAttrs.display === 'none') {
        return null
      }

      return (
        <Node {...currentAttrs} key={`node-${i + 1}`}>
          {child.childs && child.childs.length
            ? renderSvgChilds(child.childs, color)
            : null}
        </Node>
      )
    })

  const { color, width, height, pathColor, ...customStyle } = style
  // avoid render on invalid Svg definition
  if (!data.type || data.type !== 'Svg') {
    return null
  }

  const isEmpty = (obj: object) => Object.keys(obj).length === 0

  // extract custom styles
  const styles = isEmpty(customStyle) ? customStyle : { style: customStyle }
  // Svg props
  const svgProps = data.attrs || {}

  // overwrite height and width if provided
  if (width) {
    svgProps.width = width
  }

  if (height) {
    svgProps.height = height
  }

  return (
    <SvgBase {...styles} {...svgProps} onPress={onPress}>
      {renderSvgChilds(data.childs, color)}
    </SvgBase>
  )
}

export default SVG
