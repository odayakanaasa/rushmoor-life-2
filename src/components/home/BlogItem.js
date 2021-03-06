import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

import media from '../../css/media';

const Wrapper = styled.div`
  display: flex;
  padding: 2em;
  margin-right: 2em;
  flex-direction: column;
  flex-basis: 50%;
  background-color: ${props => props.theme.bulletin.backgrounds.wrapper};

  @media (${media.tablet}) {
    padding-right: 0;
    flex-basis: 100%;
    margin-right: 0;
  }
`;

const Title = styled.h2`
  color: ${props => props.theme.bulletin.colors.title};
  background-color: ${props => props.theme.bulletin.backgrounds.wrapper};
  // border-left: ${props => props.theme.bulletin.backgrounds.wrapper} 5px solid;
  padding-left: 10px;
  font-size: 26px;
  font-weight: bold;
  letter-spacing: -1px;
  border-radius: 10px;

  @media (${media.tablet}) {
    margin-bottom: 0.5em;
    font-size: 28px;
  }
`;

const PhotoItem = styled.p`
// border-left: ${props => props.theme.bulletin.backgrounds.wrapper} 5px solid;
padding: 10px;
// border: black 3px solid;

`;

const SubTitle = styled.p`
  color: ${props => props.theme.bulletin.colors.subTitle};
  font-size: 18px;
  line-height: 1.6;
  // border-left: ${props => props.theme.post.colors.primary} 5px solid;
  padding-left: 10px;
  
  ${props => props.bold === true
    ? 'font-weight: normal; font-size: 28px'
    : 'font-weight: normal;'};

  @media (${media.tablet}) {
    font-size: 16px;
  }
`;

const ReadMore = styled.p`
color: #ffffff;
font-size: 17px;
font-weight: bold;
letter-spacing: -1px;
text-align: right;
background-color: #df3c3c;
border-radius: 30px;
padding: 8px;
padding-right:20px;

@media (${media.tablet}) {
  margin-bottom: 0.5em;
  font-size: 28px;
}
`;
class BlogItem extends Component {
  render() {
    const { title, subTitle, picture, bold, linkTo } = this.props;
    console.log("PIC=",picture)
    return (
      <Wrapper>
        <Title>{title}</Title>
        <PhotoItem>
        { picture && 
          <img
            src={`https://media.graphcms.com/resize=w:600,a:top,fit:scale/${picture}`}
            alt={title}
            title={title}
            width="256" 
          />
        }
        </PhotoItem>
        <SubTitle bold={bold}>{subTitle}</SubTitle>

        {linkTo &&
          <ReadMore>
            <Link to={linkTo}>Read more...</Link>
          </ReadMore>
        }

      </Wrapper>
    );
  }
}

export default BlogItem;
