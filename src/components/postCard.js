import React from "react"

export default props => (
  <article
    className={`post-card ${props.count % 3 === 0 && `post-card-large`} ${
      props.postClass
    } ${props.node.frontmatter.piece ? `with-image` : `no-image`} ${
      props.isLast ? "is-last" : ""
    }`}
    style={
      props.node.frontmatter.piece && {
        backgroundImage: `url(${props.node.frontmatter.piece})`,
      }
    }
  >
    <div className="post-card-content">
      <h2 className="post-card-title">
        {props.node.frontmatter.title || props.node.fields.slug}
      </h2>
    </div>
  </article>
)
