import styled from '@emotion/styled';

export const Button = styled.button`
  text-align: center;
  margin: 0 auto 1.5rem;
  line-height: 3rem;
  border-radius: 8px;
  padding: 1rem;
  font-size: 2rem;
  color: white;
  background-image: linear-gradient(
    45deg,
    #845ec2,
    #d65db1,
    #ff6f91,
    #ff9671,
    #ffc75f,
    #f9f871
  );
  background-size: 300%;
  background-position: left;
  transition: background-position 1s;
  cursor: pointer;
  box-shadow: 2px 6px 8px 0 rgba(73, 34, 34, 0.35),
    2px 6px 12px 0 rgba(0, 0, 0, 0.4);
  outline: none;
  &:hover,
  &:focus {
    background-position: right;
    text-decoration: none;
  }
`;

export const ButtonAlt = styled.button`
  padding: 0rem;
  outline: none;
  text-decoration: none;
  width: 100%;
  font-size: 2rem;
  color: white;
  line-height: 3rem;
  border: 1px solid white;
  background-image: linear-gradient(
    45deg,
    rgb(16, 86, 126) 0%,
    rgb(16, 86, 126) 12.5%,
    rgb(16, 108, 128) 12.5%,
    rgb(16, 108, 128) 25%,
    rgb(17, 131, 129) 25%,
    rgb(17, 131, 129) 37.5%,
    rgb(17, 153, 131) 37.5%,
    hsl(170, 80%, 33%) 50%,
    rgb(17, 176, 133) 50%,
    rgb(17, 176, 133) 62.5%,
    rgb(17, 198, 135) 62.5%,
    hsl(159, 84%, 42%) 75%,
    rgb(18, 221, 136) 75%,
    rgb(18, 221, 136) 87.5%,
    rgb(18, 243, 138) 87.5%,
    rgb(18, 243, 138) 100%
  );
`;

export const ModalOverlay = styled.div`
  background: rgba(9, 9, 26, 0.8);
  position: absolute;
  height: 100vh;
  width: 100vw;
  z-index: 99;
  filter: blur(20px);
`;

export const Form = styled.form`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #119983;
  padding: 4rem;
  border-radius: 12px;
  box-shadow: -20px 15px 10px rgba(13, 156, 106, 0.25);
  z-index: 99;
  & > h1 {
    color: white;
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

export const Label = styled.label`
  color: rgba(255, 255, 255, 0.6);
  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > input,
  & > textarea {
    color: #119983;
    font-weight: bold;
    line-height: 1.5rem;
    width: 300px;
    margin: 0.5rem;
  }
`;
