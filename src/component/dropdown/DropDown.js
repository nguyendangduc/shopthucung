import React, {useEffect} from 'react';
import './index.css';
import { handle_task_request } from 'store/actions/product/productAction'
import { useDispatch } from 'react-redux'
function DropDown(props) {
    const dispatch = useDispatch()
    const myFunction = (event) => {
        document.getElementById("myDropdown").classList.toggle("show");
      }
    useEffect(() => {
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {
              var dropdowns = document.getElementsByClassName("dropdown-content");
              var i;
              for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                  openDropdown.classList.remove('show');
                }
              }
            }
        }
    },[])
    
    const sort = (sort) => {
      dispatch(handle_task_request({
          handingType: "sort",
          handingPayload: sort
      }))
  }
    return (
        <>
            <div className="dropdown">
                <div onClick={myFunction} class="dropbtn-wrap">
                <button  className="dropbtn btn btn--default">Giá</button>
                <span className="ti-angle-down"></span>
                </div>
                <div id="myDropdown" className="dropdown-content">
                <a onClick={() => { sort({ sortBy: "price", val: 1 }) }}>Giá: Cao đến Thấp</a>
                <a onClick={() => { sort({ sortBy: "price", val: -1 }) }}>Giá: Thấp đến Cao</a>
                <a onClick={() => { sort({ sortBy: "name", val: 1 }) }}>Tên: A-Z</a>
                <a onClick={() => { sort({ sortBy: "name", val: -1 }) }}>Tên: A-Z</a>
                </div>
            </div>
        </>
    );
}

export default DropDown;
{/* <div>
                    <span>Sắp xếp theo giá:</span>
                    <button className="btn filterPrice" onClick={() => { sort({ sortBy: "price", val: 1 }) }}>Thấp đến cao</button>
                    <button className="btn filterPrice" onClick={() => { sort({ sortBy: "price", val: -1 }) }}>Cao đến
                    thấp</button>
                </div>
                <div>
                    <span>Sắp xếp theo tên:</span>
                    <button className="btn filterName" onClick={() => { sort({ sortBy: "name", val: 1 }) }}>A đến Z</button>
                    <button className="btn filterName" onClick={() => { sort({ sortBy: "name", val: -1 }) }}>Z đến A</button>
                </div> */}