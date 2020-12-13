const stateGame = {
    soBanThang: 0,
    soBanChoi: 0,
    chon: 'Chắc ta sợ!',
    mayChon: 'Nhào dô!',
    ketQua: "I'm iron man, i love you 3000 !!"
}

export const GameReducer = (state = stateGame, action) => {

    switch (action.type) {
        case 'OAN_TU_TI': {
            state.chon = action.chon;
            return { ...state };
        }
        case 'PLAY_GAME': {
            let ketQua = '';
            if (state.chon === 'Chắc ta sợ!') {
                ketQua = "Bạn chưa chọn!"
            } else {
                if (state.chon === action.mayChon) {
                    ketQua = "Hòa nhau!";
                    state.soBanChoi += 1;
                } else if ((state.chon === 'keo.png' && action.mayChon === 'bao.png')
                    || (state.chon === 'bao.png' && action.mayChon === 'bua.png')
                    || (state.chon === 'bua.png' && action.mayChon === 'keo.png')
                ) {
                    ketQua = "Bạn thắng!";
                    state.soBanThang += 1;
                    state.soBanChoi += 1;
                }
                else {
                    ketQua = "Bạn thua!";
                    state.soBanChoi += 1;
                }
                state.mayChon = action.mayChon;
            }
            state.ketQua = ketQua;
            return { ...state };
        }
    }

    return state;

}