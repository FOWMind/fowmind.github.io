import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
::-webkit-scrollbar {
  width: 15px;
  height: 15px;
}

::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.scroll.trackBg};
}

::-webkit-scrollbar-thumb {
  border: 4px solid transparent;
  border-radius: 10px;
  background-clip: content-box;
  background-color: ${({ theme }) => theme.scroll.handlerBg};
}

::-webkit-scrollbar-thumb:hover {
  background-color: ${({ theme }) => theme.scroll.handlerBgHover};
}
`;
