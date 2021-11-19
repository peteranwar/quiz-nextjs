import react, { useState, useContext, createContext, useEffect } from 'react'


const ScoreExamContext = createContext();


export const ScoreExamProvider = ({ children }) => {
  const [score, setScore] = useState(0);





  return (
    <ScoreExamContext.Provider value={[score, setScore]}>
      {children}
    </ScoreExamContext.Provider>
  )
}


export const useScoreExam = () => useContext(ScoreExamContext)