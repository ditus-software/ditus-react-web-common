/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-shadow */
//
// Copyright (c) DITUS INC. All rights reserved. See LICENSE file in the project
// root for details.
//
import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { materialLight } from 'react-syntax-highlighter/dist/cjs/styles/prism';

/**
 * Renders markdown.
 * @param {*} props The properties of the component.
 * @returns {HTMLElement} An HTML element representing the component.
 */
function Markdown(props) {
  const { className, markdown } = props;

  const components = {
    code({
      // eslint-disable-next-line react/prop-types
      node, inline, className, children, ...props
    }) {
      const match = /language-(\w+)/.exec(className || '');
      return !inline && match ? (
        // eslint-disable-next-line react/no-children-prop,
        <SyntaxHighlighter
          style={materialLight}
          language={match[1]}
          PreTag="div"
          // eslint-disable-next-line react/no-children-prop
          children={
            String(children).replace(/\n$/, '')
          }
          // eslint-disable-next-line react/jsx-props-no-spreading
          {
          ...props
        }
        />
      ) : (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <code className={className} {...props} />
      );
    },
  };

  if (markdown) {
    return (
      <ReactMarkdown className={className} components={components} remarkPlugins={[gfm]}>
        {markdown}
      </ReactMarkdown>
    );
  }

  return null;
}

export default Markdown;

Markdown.propTypes = {
  className: PropTypes.string,
  markdown: PropTypes.string,
};

Markdown.defaultProps = {
  className: null,
  markdown: null,
};
