import React from 'react';

export const myContext = React.createContext();

const Provider = props => {

  const [isOpenThumbnails, setThumbnailsState] = React.useState(false);

  return (
    <myContext.Provider value={{
      isOpenThumbnails,
      toggleThumbnails: () => setThumbnailsState(!isOpenThumbnails)
    }}>
      {props.children}
    </myContext.Provider>
  )
};

export default ({ element }) => (
  <Provider>
    {element}
  </Provider>
)