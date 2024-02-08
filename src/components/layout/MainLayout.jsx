import React from 'react';
import PropType from 'prop-types';
import Header from '../Header';

export default function MainLayout({ children, pageTitle }) {
  return (
    <div className="mx-3 md:mx-10">
      <Header />
      <div className="my-10">
        {pageTitle !== '' ? <h1 className="text-3xl font-bold underline decoration-orange-400">{pageTitle}</h1> : ''}
      </div>
      <div className="flex my-10">
        { children }
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  children: PropType.node.isRequired,
  pageTitle: PropType.string,
};

MainLayout.defaultProps = {
  pageTitle: '',
};
