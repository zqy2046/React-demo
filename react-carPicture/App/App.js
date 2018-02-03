import React, { Component } from 'react';
import { connect } from 'dva';

import PicPicBox from './components/BigPicBox'
import Picker from './components/Picker';
import PicNavBox from './components/PicNavShow';
import './styles/style.less';

class App extends Component {
  constructor ({init}) {
    super();
    init();
  }

  render () {
    return (
      <div className="wrapperBox">
        <div className="showBigPic" >
          <PicPicBox/>
        </div>
        <div className="rightBox">
          <Picker/>
          <PicNavBox/>
        </div>
      </div>
    )
  }
}

export default connect(
  null,
  (dispatch)=>({
    init(){
      dispatch({"type":"carShow/fetchInitData_async"})
    },
  })
)(App);