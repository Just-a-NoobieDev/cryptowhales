import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border-collapse: collapse;
  border-top: 1px solid #ddd;

  td,
  th {
    border-bottom: 1px solid #ddd;
    padding: 8px;
  }

  th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: left;
  }

  td > img {
    width: 30px;
    height: 30px;
  }

  .rank,
  .score,
  .year,
  .trade,
  .url {
    text-align: center;
  }

  .score {
    .box {
      margin-left: auto;
      margin-right: auto;
      width: 50px;
      height: 30px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      color: #fff;
      &.green {
        background: #3ace3a;
      }

      &.orange {
        background: #ffc04d;
      }
    }
  }

  .url {
    a {
      padding: 10px;
      svg {
        vertical-align: middle;
      }
    }
    a:hover {
      background: #5b7fff;
      color: #fff;
    }
  }

  .name {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

export const ExchangeContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  overflow-x: auto;
`;
