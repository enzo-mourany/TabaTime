import React, {createContext, useState} from 'react';

export interface DurationContextProps {
  durationExercise: number;
  setDurationExercise: (durationExercise: number) => void;
  durationRest: number;
  setDurationRest: (durationRest: number) => void;
}

export const DurationContext = createContext<DurationContextProps>({
  durationExercise: 0,
  setDurationExercise: () => {},
  durationRest: 0,
  setDurationRest: () => {},
});

interface Props {
  children: React.ReactNode;
}

export const DurationProvider: React.FC<Props> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [durationExercise, setDurationExercise] = useState<number>(5);
  const [durationRest, setDurationRest] = useState<number>(5);

  return (
    <DurationContext.Provider
      value={{
        durationExercise,
        setDurationExercise,
        durationRest,
        setDurationRest,
      }}>
      {children}
    </DurationContext.Provider>
  );
};
