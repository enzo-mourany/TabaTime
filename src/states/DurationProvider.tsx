import React, {createContext, useState} from 'react';

export interface DurationContextProps {
  durationExercises: number;
  setDurationExercises: (durationExercises: number) => void;
  durationRest: number;
  setDurationRest: (durationRest: number) => void;
}

export const DurationContext = createContext<DurationContextProps>({
  durationExercises: 0,
  setDurationExercises: () => {},
  durationRest: 0,
  setDurationRest: () => {},
});

export const DurationProvider: React.FC = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [durationExercises, setDurationExercises] = useState<number>(5);
  const [durationRest, setDurationRest] = useState<number>(5);

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
