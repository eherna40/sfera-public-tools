import styled from 'styled-components'

const ColorCube = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid white;
  background-color: ${(props) => props.bgColor};
  margin: 5px 10px;
`

const InputRangeWrapper = styled.div`
  input[type='range'] {
    /* fix for FF unable to apply focus style bug  */
    background: transparent;

    /*required for proper track sizing in FF*/
    width: 300px;
  }

  input[type='range']::-moz-range-track {
    width: 300px;
    height: 2px;
    background: #d2eaeb;
    border: none;
    border-radius: 3px;
  }

  input[type='range']::-moz-range-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #009b8b;
  }

  /*hide the outline behind the border*/
  input[type='range']:-moz-focusring {
    outline-offset: -1px;
  }

  input[type='range']:focus::-moz-range-track {
    background: #009b8b;
  }
`
export { ColorCube, InputRangeWrapper }
