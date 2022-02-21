import styled from 'styled-components';
import { motion } from 'framer-motion';
import { LogoSVG, BurgerSVG } from './IconSVG';

export const Container = styled.div`
  position: sticky; // aqui se eu deixar fixed, eu não consigo scrollar, então deixo em sticky p consegui o scroll
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 1.25rem;
  min-height: 3.25rem;
`;

export const Logo = styled(LogoSVG)`
  height: 1.0625rem;
  cursor: pointer;
`;

export const Burger = styled(BurgerSVG)`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  padding-right: 0.3125rem;
`;

export const Footer = styled(motion.footer)`
  position: sticky;
  bottom: 0;
  left: 0;
  right: 0;

  > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;

    li:first-child {
      margin-left: 2.5rem;
    }

    > li {
      list-style: none;
      font-size: 0.875rem;

      & + li {
        margin: 0.625rem 0 0;
      }

      > a {
        text-decoration: none;
        color: #393c41;

        &:hover {
          color: #000;
        }
      }
    }

    margin-bottom: 30px;
  }

  @media (min-width: 600px) {
    padding-top: 0.625rem;

    ul {
      flex-direction: row;

      li + li {
        margin: 0 0 0 1.875rem;
      }
    }
  }
`;
