import React from "react";
import { Tabs, } from "antd";
import styled from "styled-components";
import ChonGhe from "./chonGhe/ChonGhe";
import KetQuaDatVe from "./ketQuaDatVe/KetQuaDatVe";

export default function Ticket() {
  return (
    <Container
      className="DatVe"
      style={{
        backgroundImage: `url( '/IMG/bg-1.jpg')`,
      }}
    >
      <div
        className="pt-20 px-10 lg:p-20  "
      >
        <Tabs
          items={[
            {
              label: (
                <span className="font-bold uppercase sm:text-lg text-color4">
                  01-Chọn ghế
                </span>
              ),
              key: 1,
              children: <ChonGhe />,
            },
            {
              label: (
                <span className="font-bold uppercase sm:text-lg text-color4">
                  02-Kết quả đặt vé
                </span>
              ),
              key: 2,
              children: <KetQuaDatVe />,
            },
          ]}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  &.Ticket {
    .ant-tabs-top > .ant-tabs-nav {
      box-shadow: 0 3px 5px 0 #0000002e;
      padding: 5px;
    }
    .ant-tabs-tab.ant-tabs-tab-active .ant-tabs-tab-btn {
      color: #f59e0b;
    }
    .ant-tabs-ink-bar {
      background-color: #f59e0b;
    }
    .ant-tabs-tab:hover {
      color: #f59e0b;
    }
   
  }
`;
