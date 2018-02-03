import React, { Component } from 'react';
import { connect } from 'dva';

class BigPicBox extends Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  showBibPicture() {
    const { images ,position } = this.props;
    const { color,album,idx } = position;
    let picUrlArr = images[color] && images[color][album];
    if(picUrlArr) {
      return <img src={`/images/Corolla/${color}/${album}/${picUrlArr[idx]}`}/>
    }
  }
  render () {
    return (
      <div>
        <div
          className="prevBtn"
          onClick={(e)=>{e.preventDefault(),this.props.goPrevPic()}}
        ></div>
        <div className="big_picBox">
          { this.showBibPicture()}
        </div>
        <div
          style={{"MozUserSelect":"none"}}
          className="nextBtn"
          onClick={(e)=>{e.preventDefault(),this.props.goNextPic()}}
        >
        </div>
      </div>
    )
  }
}
export default connect(
  ({carShow})=>({
    images:carShow.images,
    position:carShow.position
  }),
  (dispatch)=>({
    goNextPic() {
      dispatch({"type":"carShow/go_next"})
    },
    goPrevPic() {
      dispatch({"type":'carShow/go_prev'})
    }
  })
)(BigPicBox)