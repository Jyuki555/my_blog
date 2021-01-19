import React from "react";
import styled from "styled-components";

type Product = {
  title: string;
  url: string;
  detail: string;
};

const productList: Product[] = [
  {
    title: "たすスケジュール",
    url:
      "https://images.ctfassets.net/1onbsimlancg/6dhhSsQpG551YkAh0xgZxm/e0228c56bfd36cc1e2a648dde1be7b00/____________________________2021-01-19_21.54.43.png",
    detail:
      "大学の課題を提出し忘れることが多々あったので、提出課題の管理アプリを開発した。現在は大学の利用規約により停止中....",
  },
  {
    title: "今日の献立",
    url:
      "https://images.ctfassets.net/1onbsimlancg/5Was5BEgvay7A22T6EYOpS/205c0c20ba8402f1fbadd1a5deb5e7f1/____________________________2021-01-19_22.22.19.png",
    detail:
      "コロナの影響で家にいることが増えたので料理を覚えようと考え材料からレシピを選択できるアプリケーションを作成した。琉球料理や健康料理、おせち料理などレシピの種類は豊富である。",
  },
];

const ProductContainer: React.FC = () => {
  return (
    <Container>
      {productList.map((product, idx) => (
        <Content key={idx}>
          <Image src={product.url} />
          <Title>{product.title}</Title>
          <Detail>{product.detail}</Detail>
        </Content>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(345px, 1fr));
  justify-items: center;
  gap: 1.25em;
  row-gap: 4em;
`;

const Content = styled.article`
  display: flex;
  max-width: 400px;
  flex-direction: column;
  padding: 0px 8px
  border: solid 1px black;
`;

const Image = styled.img`
  height: 230px;
  border-radius: 0.5em;
`;

const Title = styled.h2`
  margin: 8px auto;
  font-size: 2.25em;
  font-family: impact;
  font-weight: bold;
  letter-spacing: 2.5px;
  color: #313a46;
`;

const Detail = styled.p`
  font-size: 1.025em;
  letter-spacing: 2px;
  line-height: 1.5;
  color: #333333;
`;

export default ProductContainer;
