// https://markodenic.com/css-tips/

import styled from 'styled-components'

export default function App() {
  return (
    <>
      <div className="h-20" />
      <Tooltip data-tooltip="My tooltip">Layout</Tooltip>
    </>
  )
}

const Tooltip = styled.div`
  position: relative;
  border-bottom: 1px dotted black;

  &:before {
    content: attr(data-tooltip);
    position: absolute;
    width: 100px;
    background-color: #062b45;
    color: #fff;
    text-align: center;
    padding: 10px;
    line-height: 1.2;
    border-radius: 6px;
    z-index: 1;
    opacity: 0;
    transition: opacity 0.6s;
    bottom: 125%;
    left: 50%;
    margin-left: -60px;
    font-size: 0.75em;
    visibility: hidden;
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 75%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    opacity: 0;
    transition: opacity 0.6s;
    border-color: #062b45 transparent transparent transparent;
    visibility: hidden;
  }

  &:hover:before,
  &:hover:after {
    opacity: 1;
    visibility: visible;
  }
`
