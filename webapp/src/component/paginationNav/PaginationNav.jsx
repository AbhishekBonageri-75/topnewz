import React from 'react';

function PaginationNav(props){
    return (
      <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-end">
                <li className="page-item">
                  <div className="page-link" tabIndex="-1" 
                  onClick={e=>props.changePageIndex(props.pageIndex-1)}>Previous</div>
                </li>
                { [...Array(Math.floor(props.numOfPages)).keys()].map(i=> (
                  <li key={i} className="page-item"><div className="page-link" 
                  onClick={e=>props.changePageIndex(i)} >
                      {i+1}</div></li>
                )) }
                <li className="page-item">
                  <div className="page-link" 
                  onClick={e=>props.changePageIndex(props.pageIndex+1)}>Next</div>
                </li>
              </ul>
            </nav>
    );
  }
  
export default PaginationNav;