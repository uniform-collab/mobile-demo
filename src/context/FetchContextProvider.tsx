import React, { createContext, useState, useEffect, ReactNode, useContext, useMemo } from 'react';
import { CanvasClient } from '@uniformdev/canvas';
import { UNIFORM_PROJECT_ID, UNIFORM_API_KEY, UNIFORM_CLI_BASE_EDGE_URL } from '@env';

type routeProps = { route: string; screen?: string; slug?: string };

const client = new CanvasClient({
  apiKey: UNIFORM_API_KEY,
  projectId: UNIFORM_PROJECT_ID,
  edgeApiHost: UNIFORM_CLI_BASE_EDGE_URL,
  bypassCache: true,
});

type FetchContextProps = {
  composition: any;
};

const FetchContext = createContext<FetchContextProps>({
  composition: {},
});

export type FetchContextProviderProps = {
  initialSlug?: string;
  children: ReactNode;
};

export const FetchContextProvider = ({ initialSlug = '/', children }: FetchContextProviderProps) => {
  const [composition, setComposition] = useState<any>(null);
  const [slug, setSlug] = useState<string>(initialSlug);

  useEffect(() => {
    const fetchData = async () => {
      const { composition: newComposition } = await client.getCompositionBySlug({ slug, locale: 'en-US' });
      setComposition(newComposition);
    };

    fetchData();
  }, [slug]);

  const value = useMemo(
    () => ({
      composition,
    }),
    [composition]
  );

  return <FetchContext.Provider value={value}>{children}</FetchContext.Provider>;
};

export const useFetchContext = () => useContext(FetchContext);
