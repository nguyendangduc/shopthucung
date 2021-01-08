import React from 'react';
import { useDispatch } from 'react-redux'
import DropDown from 'component/dropdown/DropDown'
import { handle_task_request } from 'store/actions/product/productAction'

function HandingTask(props) {
    const dispatch = useDispatch()

    return (
        <>
            <div className="task-control">
                <div className="task-control-left">
                    <span className="task-control__label">Sắp xếp theo</span>
                    <button class="btn btn--default">Phổ biến</button>
                    <button class="btn btn--default"
                        onClick={
                            () => dispatch(handle_task_request({
                                handingType: "sort",
                                handingPayload: {
                                    sortBy: 'createAt',
                                }
                            }))
                        }>Mới nhất
                     </button>
                    <button class="btn btn--default">Bán chạy</button>
                </div>
                <div className="task-control-right">
                    <DropDown />
                </div>
            </div>
        </>
    );
}

export default HandingTask;

{/*  */ }