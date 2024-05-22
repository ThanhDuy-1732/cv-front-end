// Utilities
import { createContext, Dispatch } from 'react';

// Types
import { Project } from '@/app/_api/index';
import { ProjectReducerActionType } from './_reducer';
import { AwardData, EducationData, InformationData, OverviewData, ProjectsData, SkillData, WorkExperienceData } from '@/app/_api/query-graphql';

export const ProjectContext = createContext<Pick<Project, '_id' | 'name' | 'company' | 'mainTechs'> | {}>({});

export const ProjectedDispatchContext = createContext<Dispatch<ProjectReducerActionType>>(() => {});

export const AwardsContext = createContext<AwardData>([]);
export const SkillsContext = createContext<SkillData>([]);
export const ProjectsContext = createContext<ProjectsData>([]);
export const OverviewsContext = createContext<OverviewData>([]);
export const EducationsContext = createContext<EducationData>([]);
export const InformationContext = createContext<InformationData>([]);
export const WorkExperiencesContext = createContext<WorkExperienceData>([]);