import React, {createContext, useState} from 'react';

export const DurationContext = createContext();

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const DurationProvider: React.FC<Props> = ({children}) => {
  const [durationExercises, setDurationExercises] = useState(5);
  const [durationRest, setDurationRest] = useState(5);

  return (
    <DurationContext.Provider
      value={{
        durationExercises,
        setDurationExercises,
        durationRest,
        setDurationRest,
      }}>
      {children}
    </DurationContext.Provider>
  );
};
