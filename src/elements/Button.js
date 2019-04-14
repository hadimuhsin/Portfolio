import styled from 'styled-components';

export default styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5vh;

  width: 40%;
  font-size: 28px;
  line-height: 3;
  font-weight: bold;
  border-radius: 100px;
  background-image: linear-gradient(
    45deg,
    hsl(330, 100%, 63%),
    hsl(220, 100%, 54%)
  );
  color: var(--background-color);
  transition: box-shadow 342ms cubic-bezier(0.23, 1, 0.32, 1);

  :hover {
    box-shadow: 0px 9px 0 0 hsla(0, 0%, 17%, 1);
  }

  @media (max-width: 849px) {
    width: 85%;
    line-height: 2.7;
    font-size: 23px;
  }
`;
