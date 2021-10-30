import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import StockSelector from "components/StockSelector/StockSelector";
import styled from "styled-components";

export const AddStockButton = styled(AddIcon)`
  float: right;
  margin-top: 7px;
  font-weight: bold;
  font-size: 28px !important;
  cursor: pointer;
`;

export const DeletedStockButton = styled(DeleteIcon)`
  float: right;
  margin-top: 7px;
  font-weight: bold;
  font-size: 28px !important;
  cursor: pointer;
  color: #f43c3c;
`;

export const AutoCompleteStockSelector = styled(StockSelector)`
  border-radius: 12px !important;
  width: auto !important;
`;

export const PickStocks = styled.div`
  border: 2px dashed #dee0e0;
  border-radius: 12px;
  padding: 0px 27px;
  line-height: 40px;
  margin-bottom: 5px;
  &:focus-within {
    border: 2px solid #1f40f4;
  }
`;
