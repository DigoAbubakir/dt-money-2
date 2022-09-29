import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  max-width: 300px;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${(porps) => porps.theme["gray-800"]};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ContentButton = styled.div`
   margin-top: 3rem;
   display: flex;
   align-items: center;
   justify-content: space-between;

  button {
    height: 50px;
    border: 0;
    background: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    padding: 0 1.25rem;
    border-radius: 6px;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme["green-700"]};
      transition: 0.2s;
    }
  }
`;

export const TextContent = styled.div`
   margin-top: 3rem;
   text-align: start;
   font-size: 1rem;
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};
`;
