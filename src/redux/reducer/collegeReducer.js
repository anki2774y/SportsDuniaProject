import { createSlice } from '@reduxjs/toolkit';
import collegeData from '../../dummyData/data';

const intialState = {
    collegeData
}

const collegeSlice = createSlice({
    name: 'college',
    initialState: intialState,
    reducers: {
        setInitialState: (state, action) => {
            console.log("action ", collegeData);
            state.collegeData = collegeData;
        },
        searchByCollegeName: (state, action) => {
            // console.log("Buttone clicked", action.payload);
            const searchName = action.payload;
            const colleges = state.collegeData;
            const filterCollegesByName = (colleges, searchName) => {
                return colleges.filter(college => 
                    college.collegeDetail.name.toLowerCase().includes(searchName.toLowerCase())
                );
            };
            const filteredColleges = filterCollegesByName(colleges, searchName);

            state.collegeData = filteredColleges;
        },
        sortByRating: (state, action) => {
            const sortByRating = (data, descending) => {
                if (descending) {
                    return [...data].sort((a, b) => parseFloat(b.userReviews.rating) - parseFloat(a.userReviews.rating));
                } else {
                    return data;
                }
            };

            const sortedColleges = sortByRating(state.collegeData, action.payload);

            state.collegeData = sortedColleges;
        },
        sortByFees: (state, action) => {
            const sortByFees = (data, descending) => {
                if (descending) {
                    return [...data].sort((a, b) => parseFloat(b.courseFee.amount.replace(/,/g, '')) - parseFloat(a.courseFee.amount.replace(/,/g, '')));
                } else {
                    return data;
                }
            };

            const sortedColleges = sortByFees(state.collegeData, action.payload);

            state.collegeData = sortedColleges;
        },
        sortByAscendingorDescending: (state, action) => {
            const sortByFees = (data, descending) => {
                return [...data].sort((a, b) => {
                    const feeA = parseFloat(a.courseFee.amount.replace(/,/g, ''));
                    const feeB = parseFloat(b.courseFee.amount.replace(/,/g, ''));
                    return descending ? feeB - feeA : feeA - feeB;
                });
            };
            
            
            const sortedColleges = sortByFees(state.collegeData, action.payload);

            state.collegeData = sortedColleges;
        }
    }
})

export const collegeReducer = collegeSlice.reducer;
export const actions = collegeSlice.actions;

export const collegeSelector = (state) => state.collegeReducer.collegeData;