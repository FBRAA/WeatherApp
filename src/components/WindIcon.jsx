import React from 'react'
import styled from 'styled-components'
import wind from '../images/iconsSVG/wind.svg'

const WindIcon = ({ windDir }) => {
  const ImageTag = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  `
  return (
    <ImageTag src={wind} windDir={windDir} alt="lule" />
  )
}

export default WindIcon
