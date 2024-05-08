// Utilities
import styled from "styled-components";

// Styles
import variables from './variables.module.scss';


export const Wrapper = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  color: ${variables.black};
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Title = styled.div`
  font-weight: ${variables['font-bold']};
`;

export const Content = styled.div`
  gap: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ContentTitle = styled.div`
  gap: 1rem;
  width: 50%;
  display: flex;
  padding: 1rem;
  min-width: 20rem;
  align-items: center;
  border-radius: 2rem;
  margin-bottom: 1rem;
  font-weight: ${variables['font-semibold']};
  border-left: 1px solid ${variables['bright-green']};
  border-bottom: 1px solid ${variables['bright-green']};
  box-shadow: ${variables['box-shadow-1']} -5px 5px, ${variables['box-shadow-2']} -10px 10px, ${variables['box-shadow-3']} -15px 15px, ${variables['box-shadow-4']} -20px 20px, ${variables['box-shadow-5']} -25px 25px;
`;

export const ContentItem = styled.div`
  gap: 0.5rem;
  display: flex;
  align-items: start;
`

export const ContentItemContainer = styled.div`
  gap: 0.25rem;
  display: flex;
  flex-direction: column;
`