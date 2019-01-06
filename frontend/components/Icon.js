import React from 'react';
import styled from 'styled-components';

const Icon = (props) => {
  const Element = props.el;
  return (
    <Element viewBox='0 0 16 16' className={`icon icon-${props.icon}`}>
      <use xlinkHref={`../static/icons/sprite.svg#${props.icon}`} />
    </Element>
  )
}

export default Icon;