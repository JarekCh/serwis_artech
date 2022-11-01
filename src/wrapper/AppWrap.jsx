import React from 'react';

const AppWrap = (Component) =>
  function HOC() {
    return <Component />;
  };

export default AppWrap;
