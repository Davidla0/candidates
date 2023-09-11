import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { queryCandidates } from '../services/candidate.service';
import Logout from '../cmp/LogOut';
import { Cookies } from 'react-cookie';
import ImageLoader from '../cmp/imgLoader';
import Loading from '../cmp/Loader';

function CandidateList() {
    const [candidates, setCandidates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize, ] = useState(10); // Adjust the page size as needed
    const location = useLocation();
    const navigate = useNavigate();
    const cookies = new Cookies();

    useEffect(() => {
        // Parse query parameters from the URL
        const searchParams = new URLSearchParams(location.search);
        const page = parseInt(searchParams.get('page')) || 1;

        // Set the current page based on the URL query parameters
        setCurrentPage(page);

        // Fetch candidates based on current page and page size
        getCandidates(page);
    }, [location]);

    const getCandidates = async (page) => {
        const token = cookies.get('token')
        // Fetch candidates for the specified page and page size
        const response = await queryCandidates({ page, pageSize, token });
        // Update the candidate list
        setCandidates(response);
    };

    // Handle pagination button clicks
    const handlePageChange = (newPage) => {
        // Update the URL query parameter
        const searchParams = new URLSearchParams(location.search);
        searchParams.set('page', newPage);
        navigate({ search: searchParams.toString() });

        // Fetch candidates for the new page
        getCandidates(newPage);
    };

    const handleSelectCandidate = (candidateId) => {
        navigate(`/candidate/${candidateId}`)
    }

    if(!candidates) return <Loading />
    return (
        <div>
            <div>
                <Logout />
            </div>
            <ul className='candidate-list'>
                {candidates.map((candidate) => (
                    <div key={candidate.id} className='candidate-card' onClick={() => handleSelectCandidate(candidate.id)}>
                        <p><strong>{candidate.first_name + ' ' + candidate.last_name}</strong></p>
                        <ImageLoader src={candidate.avatar}/>
                        <p><strong>{candidate.job_title}</strong></p>
                    </div>
                ))}
            </ul>

            {/* Pagination controls */}
            <div className="pagination">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={candidates.length < pageSize}
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default CandidateList;
