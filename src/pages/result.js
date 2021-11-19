import React from 'react'
import MasterCard from '../components/ui/MasterCard';
import withAuth from '../components/withAuth';
import { useScoreExam } from '../context/ScoreExamState';

const result = () => {

  const [score, setScore] = useScoreExam();

    return (
        <div className="container">
            <div className="row py-5 justify-content-center">
                <div className="col-lg-6 col-md-8 col-sm-10">
                 <MasterCard title={ `Your Result ${score}`} />

                </div>
            </div>

        </div>
    )
}

export default withAuth(result) 
