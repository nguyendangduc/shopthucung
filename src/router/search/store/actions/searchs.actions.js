import { API, SUCCESS_CODE } from 'const/config';
import {RequestUtils} from "utils";
export const GET_SEARCH = '[SEARCH APP] SEARCH ORDER';

export function searchExcute(keyword, page)
{
    return (dispatch) => {
        const request = RequestUtils.Get(API.SEARCH, {q: keyword});
        request.then((response) => {
            if(response.data.errorCode === SUCCESS_CODE) {
                dispatch({
                    type   : GET_SEARCH,
                    payload: response.data,
                    page: page
                })
            }
        });
    }
}
