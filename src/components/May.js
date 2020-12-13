import React, { Component } from 'react';
import style from './GameOanTuTi.module.css';
import { connect } from 'react-redux';

class May extends Component {
    render() {

        return (
            <div className={style.containerGame}>
                <div className="row">
                    <div className="col-12">
                        <div className={style.quote}>{this.props.mayChon == 'Nhào dô!' ? this.props.mayChon : <img src={'./img/game/' + this.props.mayChon} width="50" />}</div>
                        <img src={'./img/game/' + this.props.image} width="150" />
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        mayChon: state.stateGame.mayChon,
    }
}

export default connect(mapStateToProps)(May);
