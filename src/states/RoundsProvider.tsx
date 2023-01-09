import React, {createContext, useState} from 'react';

export interface RoundsContextProps {
    rounds: number;
    setRounds: (rounds: number) => void;
};

export const RoundsContext = createContext<RoundsContextProps>({
    rounds: 0,
    setRounds: () => {},
});

interface Props {
    children: React.ReactNode;
  }

  export const RoundsProvider: React.FC<Props> = ({
    children,
  }: {
    children: React.ReactNode;
  }) => {
    const [rounds, setRounds] = useState<number>(1);

    return (
        <RoundsContext.Provider
            value={{
                rounds,
                setRounds,
            }}
        >
            {children}
        </RoundsContext.Provider>
    );
};