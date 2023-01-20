import React from "react";
import ProductList from "../Components/ProductList";
import Sidebar from "../Components/Sidebar";
import styled from "styled-components";

export const ProductListPage = () => {
  return (
    <>
      <div style={{ backgroundColor: "#ececec" }}>
        <DivWrapper>
          <FilterWrapper>
            <Sidebar />
          </FilterWrapper>
          <BooksListWrapper>
            <ProductList />
          </BooksListWrapper>
        </DivWrapper>
      </div>
    </>
  );
};

const DivWrapper = styled.div`
  display: flex;
  gap: 20px;
`;
const FilterWrapper = styled.div`
  width: 20%;
  margin-left: 30px;
  margin-top: 100px;
`;
const BooksListWrapper = styled.div`
  width: 80%;
`;
