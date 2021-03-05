import React from 'react'
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const CategoryImage = (props) => (
    <StaticQuery
      query={graphql`
        query {
          images: allFile {
            edges {
              node {
                relativePath
                name
                childImageSharp {
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid
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
  
        const imageFluid = image.node.childImageSharp.fluid;
      return <Img alt={props.alt} fluid={imageFluid} />;
      }}
    />
  );
  
  CategoryImage.propTypes = {
    filename: PropTypes.string,
    alt: PropTypes.string,
  };
  
  export default CategoryImage;