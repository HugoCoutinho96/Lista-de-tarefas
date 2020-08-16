import {combineReducers} from "redux"

const rootReducer = combineReducers({
    todo: () => ({
        description: '',
        list: [{
            _id: 1,
            description: 'Curso ReactJs',
            done: true
        },{
            _id: 2,
            description: 'Curso React Native',
            done: false
        },{
            _id: 3,
            description: 'Curso Magento',
            done: false
        }]
    })
})

export default rootReducer
