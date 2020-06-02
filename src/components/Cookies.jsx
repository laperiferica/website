import React from 'react';
import styled from 'styled-components';
import { Link, FormattedMessage } from 'gatsby-plugin-intl';
import { useCookies } from 'react-cookie';

const StyledCookie = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1101;
`;

const StyledBox = styled.div`
  background-color: #b902bf;
  color: white;
  padding: 16px;
  margin: 0 0;
  display: grid;
  grid-template-columns: 5fr 1fr;
  @media only screen and (max-width: 750px) {
    & {
      grid-template-columns: 1fr;
    }
  }
  grid-gap: 16px;
  justify-content: space-between;
`;

const StyledText = styled.div`
  a {
    color: white;
    font-weight: bold;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }
`;

const StyledButton = styled.div`
  justify-self: end;
  color: white;
  a {
    cursor: pointer;
    color: white;
  }
  @media only screen and (max-width: 750px) {
    & {
      justify-self: start;
    }
  }
`;

const key = 'cookie-laperiferica';

const Cookies = () => {
  const [cookie, setCookie] = useCookies([key]);
  const acceptCookie = () => {
    setCookie(key, 'accepted', { path: '/' });
  };
  console.log(cookie);
  return (
    <>
      {!cookie[key] || cookie[key] !== 'accepted' ? (
        <StyledCookie>
          <StyledBox>
            <StyledText>
              <FormattedMessage
                id={'We use cookies to improve your experience on our website.'}
              />{' '}
              <FormattedMessage
                id={'By browsing our site you accept the use of cookies.'}
              />{' '}
              <FormattedMessage
                id={'Read more about our {link}.'}
                values={{
                  link: (
                    <Link to="/cookies-policy">
                      <FormattedMessage id={'Cookies Policy'} />
                    </Link>
                  ),
                }}
              />
            </StyledText>
            <StyledButton>
              <a onClick={() => acceptCookie()}>
                <FormattedMessage id={'Accept'} />
              </a>
            </StyledButton>
          </StyledBox>
        </StyledCookie>
      ) : (
        ''
      )}
    </>
  );
};

export default Cookies;
