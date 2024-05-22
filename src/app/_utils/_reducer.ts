// Types
import { loadingContextType } from './_context'
import { ProjectDataType } from '@/app/_data/index';
export type ProjectReducerActionType = {
  type: 'show' | 'close',
  project: ProjectDataType
};

export type LoadingReducerActionType = {
  type: 'set',
  value: loadingContextType,
}

export const projectReducer  = (projected: ProjectDataType, action: ProjectReducerActionType) => {
  switch (action.type) {
    case 'show': {
      return action.project;
    };

    case 'close': {
      return action.project;
    };

    default: {
      return projected;
    }
  }
};

export const loadingReducer = (value: loadingContextType, action: LoadingReducerActionType) => {
  switch (action.type) {
    case 'set':
      if (value.value) {
        const updatedStack = value.stack + Number(action.value.value || -1)*action.value.stack;

        return {
          stack: updatedStack,
          value: !!updatedStack,
        };
      };

      return action.value;

    default:
      return value;
  }
};