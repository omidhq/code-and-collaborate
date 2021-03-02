import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Logo = (props) => (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                  fixed(width: 100) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => {
        const image = data.images.edges.find(n => {
          return n.node.relativePath.includes(props.filename);
        });
        if (!image) return null;
  
        const imageFixed = image.node.childImageSharp.fixed;
        return <Img alt={props.alt} fixed={imageFixed} />;
      }}
    />
  );
  
  Logo.propTypes = {
    filename: PropTypes.string,
    alt: PropTypes.string,
  };
  
  export default Logo;