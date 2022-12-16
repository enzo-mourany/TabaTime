import React, {createContext, useState} from 'react';

export interface DurationContextProps {
  durationExercise: number;
  setdurationExercise: (durationExercise: number) => void;
  durationRest: number;
  setDurationRest: (durationRest: number) => void;
}

export const DurationContext = createContext<DurationContextProps>({
  durationExercise: 0,
  setdurationExercise: () => {},
  durationRest: 0,
  setDurationRest: () => {},
});

export const DurationProvider: React.FC = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [durationExercise, setdurationExercise] = useState<number>(5);
  const [durationRest, setDurationRest] = useState<number>(5);

  return (
    <DurationContext.Provider
      value={{
        durationExercise,
        setdurationExercise,
        durationRest,
        setDurationRest,
      }}>
      {children}
    </DurationContext.Provider>
  );
};
