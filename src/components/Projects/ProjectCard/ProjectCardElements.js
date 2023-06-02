import styled from "styled-components";

export const Card = styled.div`
  display:inline-flex;
  flex-wrap:wrap;
  flex-direction:row;
  width: 400px;
  height: 550px;
  margin-left:40px;
  margin-bottom:30px;
  background-color: white;
  padding-bottom:20px;
  padding-right:20px;
  padding-left:20px;
  padding-top:20px;
  box-shadow: 0 3px 3px 0 rgba(0,0,0,.15);
  border-radius:10px;

  // flex-wrap: wrap;
  // flex-direction: row;
  border-bottom: 1px solid rgb(0, 0, 0);
  padding-bottom: 2rem;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    border-bottom: 0;
    padding-bottom: 0;
  }
`;

export const CardLeft = styled.div`
  background: #151418;
  border-radius: 5px;
  padding: 5px;
  justify-self: center;

  img {
    border-radius: 3px;
    height: auto;
  }
`;

export const CardRight = styled.div`
  // display: flex;
  // flex-direction: column;
  // flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  h4 {
    font-size: 1.5rem;
    font-weight: 400;
  }

  p {
    font-weight: 400;
    max-width: 400px;
    margin-top: 10px;
    margin-bottom: 1rem;
    color: rgba(0, 0, 0, 0.815);
    text-align: center;

    @media (min-width: 992px) {
      text-align: start;
    }
  }
  @media (min-width: 992px) {
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

export const Stack = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  .stackTitle {
    font-weight: 500;
    margin-right: 10px;
    font-size: 17px;
  }

  .tags {
    font-size: 15px;
    font-weight: 400;
  }
`;

export const BtnGroup = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
`;
