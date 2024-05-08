// Types
import { ProjectDataType } from '@/app/_data/index';
export type ProjectReducerActionType = {
  type: 'show' | 'close',
  project: ProjectDataType
};

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
}