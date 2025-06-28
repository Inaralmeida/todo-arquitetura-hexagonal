import { HomeContainer, Subtitle, Title } from "./homePage.style";

export const HomePage = () => {
  return (
    <HomeContainer>
      <Title>Bem-vindo ao Todo App</Title>
      <Subtitle>
        Uma aplicação moderna construída com React, TypeScript e Styled
        Components, seguindo os princípios da Arquitetura Hexagonal e DDD.
      </Subtitle>
    </HomeContainer>
  );
};

export default HomePage;
