import React from 'react'
import styled from 'styled-components'
import wind from '../images/iconsSVG/wind.svg'

const ImageTag = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    object-fit: cover;
  `

const WindIcon = ({ windDir }) => (
  <ImageTag src={wind} windDir={windDir} alt="wind" />
)

export default WindIcon
