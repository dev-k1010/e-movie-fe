import { Select } from "antd"
import styled from "styled-components"

const SelectHomeTool = styled(Select)
  `
  .ant-select-selector  {
    border: none !important ;
    background-color: inherit !important;
    box-shadow: none !important;
  }
    &:hover .ant-select-selector {
        border: none !important;
    }

    &.ant-select-focused .ant-select-selector,
    .ant-select-selector:focus,
    .ant-select-selector:active {
        border: none !important;
    }
 
  `
export { SelectHomeTool }