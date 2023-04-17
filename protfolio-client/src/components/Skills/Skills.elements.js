import styled from 'styled-components';
import { IoMdStar } from 'react-icons/io/index';
import { HiOutlineChip } from 'react-icons/hi/index';

const convertHexToRgb = (hexColorWithHash) => {
  let hexColor = hexColorWithHash.match(/[\d|A-F|a-f]{2}/g);
  return hexColor.map((item) => parseInt(item, 16));
};

export const SkillstMain = styled.div`
  padding: ${({ theme }) => theme.padding};
  background-color: ${({ theme }) => theme.colors.lighter};
  display: flex;
  flex-direction: column;
`;

export const HeadLine = styled.h2.attrs(({ theme }) => ({}))`
  color: ${({ theme }) => theme.colors.blue};
  align-self: center;
`;

export const Chip = styled(HiOutlineChip).attrs(({ size, theme }) => ({
  size: size || theme.icons.title,
}))`
  color: ${({ theme }) => theme.colors.blue};
  align-self: center;
`;

export const Star = styled(IoMdStar).attrs(({ size, theme }) => ({
  size: size || theme.icons.defaultSize,
}))`
  color: ${({ theme }) => theme.colors.white};
  flex: 0 0 35%;
`;

export const SkillContent = styled.div`
  flex: 0 0 20%;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: ${({ theme }) => {
    const [r, g, b] = convertHexToRgb(theme.colors.lightBlue);
    return `rgba(${r}, ${g}, ${b}, 0.5)`;
  }};
  border: 1px solid ${({ theme }) => theme.colors.lightBlue};
  margin: 2px;
`;

export const SkillsList = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-content: stretch;
`;

export const SkillText = styled.label`
  color: ${({ theme }) => theme.colors.white};
`;

export const SkillItem = ({ children }) => {
  return (
    <>
      <SkillContent>
        <Star />
        <SkillText> {children}</SkillText>
      </SkillContent>
    </>
  );
};
