import React from 'react'
import { useContext } from "react";
import { gameContext } from "../context/gameContext";

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    // const postsPerPage = useContext(gameContext)
    // const totalPosts = useContext(gameContext)


    const pageNumbers = []

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }


    return (
        <nav>
            <ul className = "pagination d-flex justify-content-center mt-3">
                {pageNumbers.map(number => (
                    <li key = {number} className = "page-item">
                        <a  onClick={() => paginate(number)} href = "!#" className = "page-link bg-primary text-light h5 m-1">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination