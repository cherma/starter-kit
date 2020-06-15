import React from 'react';
// used for making the prop types of this component
import PropTypes from 'prop-types';

const CardAuthor = ({ link,avatar, avatarAlt, title, description}) =>{
  return (
    <div className="author">
      <a href={link ? link:'#'}>
        <img className="avatar border-gray" src={avatar} alt={avatarAlt} />
        <h5 className="title">{title}</h5>
      </a>
      <p style={{color: '#5f6368'}} className="description no-fonweight">
        {description}
      </p>
    </div>
  );
};

CardAuthor.propTypes = {
  // Where the user to be redirected on clicking the avatar
  link: PropTypes.string,
  avatar: PropTypes.string,
  avatarAlt: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ])
};

export default CardAuthor;
