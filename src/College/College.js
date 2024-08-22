import { useDispatch } from 'react-redux';
import CollegeCard from '../CollegeCard/CollegeCard';
import styled from './College.module.css';
import { actions } from '../redux/reducer/collegeReducer';
import { useState } from 'react';

function College() {

    const disptach = useDispatch();
    const [search, setSearch] = useState('');

    const [rating, setRating] = useState(false);
    const [fees, setFees] = useState(false);
    const [ascOrDes, setAsc] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        disptach(actions.searchByCollegeName(search));
        setSearch('');
    }

    const sortByRating = (e) => {
        e.preventDefault();
        setRating(!rating);
        disptach(actions.sortByRating(rating));
    }

    const sortByFees = (e) => {
        e.preventDefault();
        setFees(!fees);
        disptach(actions.sortByFees(fees));
    }

    const sortByAscendingorDescending = (e) => {
        e.preventDefault();
        setRating(!ascOrDes);
        disptach(actions.sortByAscendingorDescending(ascOrDes));
    }
    
    

    return (
        <>
            <div className={styled.sortOrSearch}>
                <form onSubmit={handleClick}>
                    <input placeholder='Search by College Name' onChange={(e) => setSearch(e.target.value)} value={search} />
                    <button type='submit'> Submit </button>
                </form>
                <div className={styled.sort}>
                    <p>Sort By :  </p>
                    <div>
                        <button onClick={sortByRating}> Rating </button>
                    </div>
                    <div>
                        <button onClick={sortByFees}> Fees </button>
                    </div>
                    <div>
                        <button onClick={sortByAscendingorDescending}> AscendingOrDescending </button>
                    </div>
                </div>
            </div>

            <table border={1} className={styled.styledTable}>
                <thead>
                    <tr>
                        <th> CD Rank </th>
                        <th> Colleges </th>
                        <th> Course Fees </th>
                        <th> Placement </th>
                        <th> User Reviews </th>
                        <th> Ranking </th>
                    </tr>
                </thead>  
                <tbody>
                    <CollegeCard />
                </tbody>
            </table>
        </>
    )
}

export default College;