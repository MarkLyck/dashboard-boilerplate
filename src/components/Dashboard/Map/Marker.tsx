import React from 'react'
import styled from 'styled'
import { opacify } from 'polished'
import posed from 'react-pose'
// import { animatePopupIn } from 'common/animations/popup'

const AnimatedCircle = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    transform: 'scale(1)',
    boxShadow: (p) => `0 0 0 ${opacify(-1, p.color)}`,
    background: (p) => opacify(-0.4, p.color),
  },
  hover: {
    transition: {
      type: 'spring',
      stiffness: 200,
      velocity: 10,
      damping: 10,
    },
    transform: 'scale(1.3)',
    boxShadow: (p) => `0 1px 8px ${opacify(-0.3, p.color)}`,
    background: (p) => opacify(-0.1, p.color),
  },
  press: {
    transform: 'scale(1)',
    boxShadow: (p) => `0px 2px 5px ${opacify(-0.9, p.color)}`,
    background: (p) => p.color,
  },
})

export const AnimatedMarkerItem = styled(AnimatedCircle)`
  border-radius: 50%;
  border: 2px solid ${(p) => p.color};
  height: 18px;
  width: 18px;
  &:hover {
    cursor: pointer;
  }
`

const LabelTooltip = styled.span`
  display: none;
  background: rgba(255, 255, 255, 1);
  padding: 6px 12px;
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translate(-50%, 0);
  white-space: nowrap;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  font-size: 1rem;
  &::after {
    position: absolute;
    bottom: -5px;
    left: 50%;
    transform: translate(-50%, 0);
    content: '';
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid white;
  }
`

const Container = styled.div`
  position: relative;

  ${LabelTooltip} {
    display: ${(props: any) => (props.isSelected ? 'block' : 'none')};
  }

  &:hover {
    ${LabelTooltip} {
      display: block;
      ${(props: any) => (props.isSelected ? 'animation: none;' : '')}
    }
  }
`

const MarkerItem = ({ point, color, selectedId, setCenter, renderSite }) => {
  const handleSiteRender = () => {
    renderSite(point)
    window.setTimeout(() => {
      setCenter([point.lon, point.lat])
    }, 0)
  }

  return (
    <Container isSelected={point.id === selectedId} key={point.id}>
      {point.name ? <LabelTooltip>{point.name}</LabelTooltip> : null}
      <AnimatedMarkerItem onClick={handleSiteRender} color={color} />
    </Container>
  )
}

export default MarkerItem
