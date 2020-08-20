import styled from 'styled'
import posed from 'react-pose'
import { opacify } from 'polished'

export const AnimatedContainer = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)',
    background: opacify(-0.2, 'black'),
  },
  hover: {
    scale: 1.075,
    transition: {
      type: 'spring',
      stiffness: 200,
      velocity: 2.5,
      damping: 25,
    },
    boxShadow: '0 1px 5px rgba(0, 0, 0, 0.3)',
    background: opacify(-0.1, 'black'),
  },
  press: {
    scale: 1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)',
    background: opacify(0, 'black'),
  },
})

export const ClusterContainer = styled(AnimatedContainer)`
  display: flex;
  position: relative;
  padding: 4px 8px;
  border-radius: 8px;
  &:hover {
    cursor: zoom-in;
  }
`

export const Indicator = styled.div`
  background: ${(p) => opacify(-0.1, p.color)};
  border: 2px solid ${(p) => p.color};
  height: 8px;
  width: 8px;
  border-radius: 50%;
  margin: 0 4px 4px;
`

export const IndicatorNumber = styled.p`
  font-size: 0.6rem;
  font-weight: bold;
  line-height: 1.2;
  color: white;
  margin: 0 4px;
  padding: 0;
`

export const generateColorMap = (leaves) => {
  let colorMap = {}
  leaves.forEach((leaf) => {
    if (!colorMap[leaf.props.children.props.color]) {
      colorMap[leaf.props.children.props.color] = 1
    } else {
      colorMap[leaf.props.children.props.color]++
    }
  })
  return colorMap
}
