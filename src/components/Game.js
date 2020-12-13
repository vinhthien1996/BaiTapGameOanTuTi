import React, { Component } from 'react';
import style from './GameOanTuTi.module.css';
import NhanVat from './NhanVat';
import May from './May';
import { connect } from 'react-redux';

class Game extends Component {

    oanTuTi = (chon) => {

    }

    render() {
        return (
            <div className={style.bgGame}>
                <div className="container-fluid pt-4">
                    <div className="row">
                        <div className="col-4 text-center">
                            <NhanVat image='player.png' chon='keo.png' />
                        </div>
                        <div className="col-4 text-center">
                            <p className={style.colorOrange}>{this.props.ketQua}</p>
                            <p className={style.colorGreen}>Số bàn thắng: <span className={style.colorYellow}>{this.props.soBanThang}</span></p>
                            <p className={style.colorGreen}>Số bàn chơi: <span className={style.colorYellow}>{this.props.soBanChoi}</span></p>
                            <button className="btn btn-success" onClick={() => this.props.playGame()}>Play Game</button>
                        </div>
                        <div className="col-4 text-center">
                            <May image='playerComputer.png' chon='bao.png' />
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        soBanThang: state.stateGame.soBanThang,
        soBanChoi: state.stateGame.soBanChoi,
        chon: state.stateGame.chon,
        ketQua: state.stateGame.ketQua
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        playGame: () => {
            const arr = ['keo.png', 'bua.png', 'bao.png'];
            let rand = Math.floor(Math.random() * Math.floor(3));
            const action = {
                type: 'PLAY_GAME',
                mayChon: arr[rand]
            }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);