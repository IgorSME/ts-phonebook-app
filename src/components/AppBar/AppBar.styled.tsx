import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  &.active {
    color: yellow;
    font-weight: bold;
  }
`;
