import { loggerReducer } from '../slices/loggerSlice' 
import { modalReducer } from '../slices/modalSlice'
import { boardsReducer } from '../slices/boardsSlice'

const reducer = {
    logger : loggerReducer,
    board : boardsReducer,
    modal : modalReducer
}

export default reducer;