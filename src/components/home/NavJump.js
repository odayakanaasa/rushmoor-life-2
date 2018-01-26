import React from 'react'
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';
import * as palette from '../../data/Style';
// import BlockItem from '../../components/BlockItem';

import {
    Link
} from 'react-router'
import BulletinItem from '../../components/BulletinItem';

import Card from '../../components/Card';

const Wrapper = styled.section`
  display: flex;
  height: auto;
  padding: 50px 0;
  justify-content: center;
  background-color: #000;

  @media (${media.tablet}) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  display: flex;
  width: calc(1024px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: ${rhythm(0.5)} 0;

  @media (${media.tablet}) {
    margin: 0;
    flex-wrap: wrap;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${palette.GRID_COLUMNS}, 1fr);
  grid-gap: 50px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  .gatsby-image-outer-wrapper, .gatsby-image-wrapper {
    position: static !important;
  }
`;

const Content = styled.div`
display: flex;
height: auto;
padding: 50px 0;
justify-content: center;
background-color: #000;

@media (${media.tablet}) {
  padding: 20px 0;
}
`;

class NavJump extends React.Component {

    // static propTypes = {
    //     data: React.PropTypes.object,
    // }

    

    render() {
        const postEdges = this.props.postEdges;
        console.log('introblock', this.props.data)
        return (
            <Wrapper>
                <Container>                   
                    <Row>
                        <BulletinItem
                            bold={false}
                            picture="Mayor_with_The_Games_Shop_jo6dar.jpg"
                            title="Farnborough Half Marathon"
                            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus, tellus dictum pretium tincidunt, augue odio ultricies mi, vel malesuada eros ex sed augue. Pellentesque mauris arcu, consequat in congue."
                        />
                        <BulletinItem
                            bold={false}
                            picture="e008kghczojdpns9yh1t.jpg"
                            title="Airshow Public Days"
                            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus, tellus dictum pretium tincidunt, augue odio ultricies mi, vel malesuada eros ex sed augue. Pellentesque mauris arcu, consequat in congue."
                        />
                    </Row>
                    <Row>
                        <BulletinItem
                            bold={false}
                            picture="e008kghczojdpns9yh1t.jpg"
                            title="Airshow Trade Days"
                            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus, tellus dictum pretium tincidunt, augue odio ultricies mi, vel malesuada eros ex sed augue. Pellentesque mauris arcu, consequat in congue."
                        />
                        <BulletinItem
                            bold={false}
                            picture="e008kghczojdpns9yh1t.jpg"
                            title="Free Festive FairTrade Food and Film Festival"
                            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus, tellus dictum pretium tincidunt, augue odio ultricies mi, vel malesuada eros ex sed augue. Pellentesque mauris arcu, consequat in congue."
                        />
                    </Row>
                    <Row>
                        <BulletinItem
                            bold={false}
                            picture="e008kghczojdpns9yh1t.jpg"
                            title="Airshow Trade Days"
                            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus, tellus dictum pretium tincidunt, augue odio ultricies mi, vel malesuada eros ex sed augue. Pellentesque mauris arcu, consequat in congue."
                        />
                        <BulletinItem
                            bold={false}
                            picture="e008kghczojdpns9yh1t.jpg"
                            title="Free Festive FairTrade Food and Film Festival"
                            subTitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean faucibus, tellus dictum pretium tincidunt, augue odio ultricies mi, vel malesuada eros ex sed augue. Pellentesque mauris arcu, consequat in congue."
                        />
                    </Row>
                    <Content>
                    <Grid>
            {postEdges.map(post => (
              <Card
                date={post.node.frontmatter.date}
                title={post.node.frontmatter.title}
                cover={post.node.frontmatter.cover.childImageSharp.sizes}
                path={post.node.fields.slug}
                areas={post.node.frontmatter.areas}
                slug={post.node.fields.slug}
                key={post.node.fields.slug}
              />
            ))}
            {/* {posts.map(project => ( */}
            { /* 
            <Card
              date={project.node.postDate}
              title={project.node.postTitle}
              cover={project.node.postImage.handle}
              path="http://www.headforcode.com"
              slug={project.node.postSlug}
              key={project.node.postSlug}
            />
            */ }

            {/* ))} */}
          </Grid>
          </Content>
                </Container>
            </Wrapper>

        )
    }

    // Dan, If not logged in show the Register button, otherwise show the view all photos button
    _renderButton() {
        if (!this.props.data.user) {
            return <Link className="f3 fw4 hover-red no-underline black-70 dib pv2 ph3 ba" to="/signup" >Register Now!</Link>
        } else {
            return <Link className="f3 fw4 hover-red no-underline black-70 dib pv2 ph3 ba" to="/Photo" >View all photos</Link>
        }
    }

    _showText() {
        if (!this.props.data.user) {
            return <h3 className="f3">1. Sign-up</h3>
        } else {
            return <h3 className="f3">2. Add photos</h3>
        }
    }
}

export default NavJump
