// Utilities
import { createContext, Dispatch } from 'react';

// Types
import { ProjectDataType } from '@/app/_data/index';
import { ProjectReducerActionType } from './_reducer';

export const ProjectContext = createContext<ProjectDataType | {}>({});

export const ProjectedDispatchContext = createContext<Dispatch<ProjectReducerActionType>>(() => {});