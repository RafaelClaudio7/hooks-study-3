import * as types from './types';


export const reducer = (state, action) => {
    switch (action.type) {
        case types.POSTS_LOADED: {
            console.log(action.type);
            return {...state, posts: action.payload};
        }
        default:
            break;
    }

    console.log('Não encontrei a action', action.type);
    return {...state};
}