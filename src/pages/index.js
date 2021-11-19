import { useRouter } from "next/router";

import { useState, useEffect } from 'react';

import Head from 'next/head'
import Image from 'next/image'
import withAuth from '../components/withAuth'
import { useUserData } from '../context/UserDataState';
import { useScoreExam } from '../context/ScoreExamState';


const questions = [
  {
    id: 1,
    questionText: 'What is the capital of France?',
    answerOptions: [
      { answerText: 'New York', isCorrect: false },
      { answerText: 'London', isCorrect: false },
      { answerText: 'Paris', isCorrect: true },
      { answerText: 'Dublin', isCorrect: false },
    ],
  },
  {
    id: 2,
    questionText: 'Who is CEO of Tesla?',
    answerOptions: [
      { answerText: 'Jeff Bezos', isCorrect: false },
      { answerText: 'Elon Musk', isCorrect: true },
      { answerText: 'Bill Gates', isCorrect: false },
      { answerText: 'Tony Stark', isCorrect: false },
    ],
  },
  {
    id: 3,
    questionText: 'The iPhone was created by which company?',
    answerOptions: [
      { answerText: 'Apple', isCorrect: true },
      { answerText: 'Intel', isCorrect: false },
      { answerText: 'Amazon', isCorrect: false },
      { answerText: 'Microsoft', isCorrect: false },
    ],
  },
  {
    id: 4,
    questionText: 'How many Harry Potter books are there?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '6', isCorrect: false },
      { answerText: '7', isCorrect: true },
    ],
  },
  {
    id: 5,
    questionText: 'Find median and mode of the messages received on 9 consecutive days 15, 11, 9, 5, 18, 4, 15, 13, 17.',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4', isCorrect: false },
      { answerText: '18, 15', isCorrect: true },
      { answerText: '15, 16', isCorrect: false },
    ],
  },
  {
    id: 6,
    questionText: 'The random variables X and Y have variances 0.2 and 0.5 respectively. Let Z= 5X-2Y. The variance of Z is?',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4=2', isCorrect: false },
      { answerText: '4', isCorrect: true },
      { answerText: '5', isCorrect: false },
    ],
  },
  {
    id: 7,
    questionText: 'Poisson distribution is applied for ___________',
    answerOptions: [
      { answerText: '1', isCorrect: false },
      { answerText: '4=2', isCorrect: false },
      { answerText: '4', isCorrect: true },
      { answerText: '5', isCorrect: false },
    ],
  },
];

function Home() {
  const router = useRouter()

  const [userData] = useUserData();
  const [score, setScore] = useScoreExam();

  const [currentQuestion, setCurrentQuestion] = useState(0);


  function shuffleArray(array) {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
  useEffect(() => {
    shuffleArray(questions)
  }, [])

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      router.push('/result')
    }
  };

  return (
    <div>
      <Head>
        <title>Quiz Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="home-page">
        <div className="conatiner">
          <h1 className="main-header text-center mx-auto pt-3 mb-5">Welcome <span>{userData?.name}</span> </h1>
          <div className="row">
            <div className="col-lg-5 col-md-7">
              <h4 className="d-flex">Question {currentQuestion + 1} /  <h3>{questions.length}</h3> </h4>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-md-6 my-2">
              <h2 className='question-header'>{questions[currentQuestion].questionText}</h2>
            </div>
            <div className="col-lg-5 col-md-6 my-2 ">
              <div className='answer-container d-md-block d-sm-flex flex-column align-items-sm-center'>
                <ul className="list-unstyled">
                  {questions[currentQuestion].answerOptions.map((answerOption) => (
                    <li key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}


export default withAuth(Home)