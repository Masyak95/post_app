import React from 'react';
import usePagination from "../../../hooks/usePagination";
import s from"./Pagination.module.css"
const Pagination = ({totalPages, page, changePage}) => {

    const pagesArray = usePagination(totalPages);

    return (
        <div className={s.wrapper}>
            {pagesArray.map((p) => (
                <span
                    onClick={()=>changePage(p)}
                    className={page === p ? `${s.page} ${s.current}` : s.page}
                    key={p}
                >
                        {p}
                    </span>
            ))}
        </div>
    );
};

export default Pagination;