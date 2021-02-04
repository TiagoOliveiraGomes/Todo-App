import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    todo: () => ({
        description: "ler livros",
        list: [{
            _id: 1,
            description: "pagar fatura do cartão",
            done: true
            },
            {
            _id: 2,
            description: "jogar video game",
            done: false
            },
            {
            _id: 3,
            description: "ver youtube",
            done: true
            }]
    })
})

export default rootReducer