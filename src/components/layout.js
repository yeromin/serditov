import React from "react";
import Header from "./header/header";
import { myContext } from './provider';

const Layout = (props) => {

  let pageClass = '';
  props.location.pathname === '/' ? pageClass = '-main' : pageClass = props.location.pathname.replace('/', '-');

  return (
    <myContext.Consumer>
      {context => (
        <div className={`page${pageClass} ${context.isOpenThumbnails ? 'thumbnails_opened' : ``}`}>
          <Header clickHandler={context.toggleThumbnails} page={pageClass}/>
          {props.children}
        </div>
      )
      }
    </myContext.Consumer>
  )
}

export default Layout