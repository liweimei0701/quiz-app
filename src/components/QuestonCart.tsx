import React from "react";
import { AnswerObject } from "../App";
import { Wrapper, ButtonWrapper } from "./QuestionCart.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNO: number;
  totalQuestions: number;
};
const QuestionCart: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNO,
  totalQuestions
}) => {
  return (
    <Wrapper>
      <p className="number">
        Question: {questionNO} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }}></p>
      <div>
        {answers.map((item) => (
          <ButtonWrapper
            key={item}
            correct={userAnswer?.correctAnswer === item}
            userClicked={userAnswer?.answer === item}
          >
            <button disabled={!!userAnswer} value={item} onClick={callback}>
              <span dangerouslySetInnerHTML={{ __html: item }}></span>
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </Wrapper>
  );
};
export default QuestionCart;

