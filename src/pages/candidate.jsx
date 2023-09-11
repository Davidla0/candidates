import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCandidateById } from "../services/candidate.service";

function Candidate() {
    const [candidate, setCandidate] = useState({});
    const { id } = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        getCandidate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const getCandidate = async () => {
        const user = await getCandidateById(id);
        setCandidate(user);
    };

    return (
        <div className="candidate-container">
            <div className="candidate-card">
                <img className="candidate-avatar" src={candidate.avatar} alt="" />
                <div className="candidate-info">
                    <h2 className="candidate-name">
                        {candidate.first_name} {candidate.last_name}
                    </h2>
                    <p className="candidate-title">{candidate.job_title}</p>
                    <p className="candidate-description">{candidate.job_description}</p>
                    <p className="candidate-email">{candidate.email}</p>
                    <p className="candidate-gender">{candidate.gender}</p>
                </div>
            </div>
            <button onClick={() => navigate(-1)}>Back</button>
        </div>
    );
}

export default Candidate;
