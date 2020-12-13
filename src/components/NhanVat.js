import React, { Component } from 'react';
import style from './GameOanTuTi.module.css';
import { connect } from 'react-redux';

class NhanVat extends Component {

    play = (chon) => {

    }

    render() {
        return (
            <div className={style.containerGame}>
                <div className="row">
                    <div className="col-12">
                        <div className={style.quote}>{this.props.chon == 'Chắc ta sợ!' ? this.props.chon : <img src={'./img/game/' + this.props.chon} width="50" />}</div>
                        <img src={'./img/game/' + this.props.image} width="150" />
                    </div>
                    <div className="col-12">
                        <button className="btn btn-light m-1">
                            <img src="./img/game/keo.png" width="50" onClick={() => this.props.oanTuTi('keo.png')} />
                        </button>
                        <button className="btn btn-light m-1">
                            <img src="./img/game/bua.png" width="50" onClick={() => this.props.oanTuTi('bua.png')} />
                        </button>
                        <button className="btn btn-light m-1">
                            <img src="./img/game/bao.png" width="50" onClick={() => this.props.oanTuTi('bao.png')} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        chon: state.stateGame.chon,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        oanTuTi: (chon) => {
            const action = {
                type: 'OAN_TU_TI',
                chon
            }

            dispatch(action);
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NhanVat);
