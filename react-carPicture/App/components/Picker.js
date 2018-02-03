import React, {Component} from 'react';
import { connect } from 'dva';
import classnames from 'classnames';

class Picker extends Component {
  constructor(props) {
    super(props);
  }

  showAlbum (){
    const {images,position} = this.props;
    const tempObj = {
      "view": "外观",
      "center": "内饰",
      "detail": "细节"
    };
    const viewObj = images[position.color] && images[position.color];
    if(viewObj){
      let itemsArr = [];
      Object.keys(tempObj).forEach((item,i)=> {
        if(viewObj.hasOwnProperty(item)){
          itemsArr.push(
            <li onClick={()=> {this.props.changeAlbum(item)}}
                key = {i}
                className={classnames({"cur":item===position.album})}
            >
              {tempObj[item]}（{viewObj[item].length}）
            </li>
          )
        }
      })
      return itemsArr;
    }
    return null;
  }

  render() {
    const { images ,position } = this.props;
    const colorArr = Object.keys(images);
    return (
      <div className="picker mt-15">
        <h1>丰田卡罗拉</h1>
        <h3>2017新款 2.4L T</h3>
        <ul className="album mt-15 mb-15">
          {this.showAlbum()}
        </ul>
        <div className="cl"></div>
        <ol className="color mt-15 mb-15">
          {colorArr.map((item, index) => {
            return (
              <li
                onClick={()=>{this.props.changeColor(item)}}
                key={index}
                style={{"background": `${item}`}}
                className={classnames({"cur": item === position.color})}>
              </li>
            )
          })}
        </ol>
      </div>
    )
  }
}

export default connect(
  ({carShow})=>({
    "images": carShow.images,
    "position": carShow.position
  }),
  (dispatch) => ({
    changeAlbum(album) {
      dispatch({"type":'carShow/change_Album',album})
    },
    changeColor(color) {
      dispatch({"type":"carShow/change_color",color})
    }
  })

)(Picker);