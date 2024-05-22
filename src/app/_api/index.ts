// Utilities
import { httpInstance } from '@/app/_http/index';

// Query
import * as graphQLQuery from './query-graphql';

// Types
import { InformationDataType, AwardDataType, EducationDataType, ProjectDataType, SkillDataType, WorkExperienceDataType } from '@/app/_data/index';
import { AxiosResponse } from 'axios';

export type IdType = {
  _id: string;
}

export type Information = Omit<InformationDataType, 'icon'> & IdType;

export type InformationData = {
  information: Array<Information>;
};

export type Award = AwardDataType & IdType;

export type AwardData = {
  awards: Array<Award>;
};

export type Education = EducationDataType & IdType;

export type EducationData = {
  educations: Array<Education>;
};

export type Overview = IdType & {
  value: string;
};

export type OverviewData = {
  overviews: Array<Overview>;
};

export type Project = ProjectDataType & IdType;

export type ProjectsData = {
  projects: Array<Project>;
}

export type ProjectData = {
  project: Project;
};

export type Skill = SkillDataType & IdType;

export type SkillData = {
  skills: Array<Skill>;
};

export type WorkExperience = WorkExperienceDataType & IdType;

export type WorkExperienceData = {
  workExperiences: Array<WorkExperience>;
}

export const graphQLURL: string = '/graphql';

export const getAllInformation = async (): Promise<AxiosResponse<InformationData>> => {
  return await httpInstance.get('/information');
};

export const getAllAward = async (): Promise<AxiosResponse<AwardData>> => {
  return await httpInstance.get('awards');
};

export const getAllEduction = async (): Promise<AxiosResponse<EducationData>> => {
  return await httpInstance.get('/educations')
};

export const getAllOverview = async (): Promise<AxiosResponse<OverviewData>> => {
  return await httpInstance.get('/overviews');
};

export const getAllProject = async (): Promise<AxiosResponse<ProjectsData>> => {
  return await httpInstance.get('/projects');
};

export const getProject = async (id: string): Promise<AxiosResponse<ProjectData>> => {
  return await httpInstance.get(`/projects/${id}`);
};

export const getAllSkill = async (): Promise<AxiosResponse<SkillData>> => {
  return await httpInstance.get('/skills');
};

export const getAllWorkExperience = async (): Promise<AxiosResponse<WorkExperienceData>> => {
  return await httpInstance.get('/work-experiences');
};

export const getGraphQLQuery = async (query: string): Promise<AxiosResponse<any>> => {
  return await httpInstance.post(graphQLURL, { query });
}

export const getGraphQLQueryWithVariables = async (query: string, variables: Object): Promise<AxiosResponse<any>> => {
  return await httpInstance.post(graphQLURL, {
    query,
    variables,
  });
};

export const getAllAwardByQuery = async (): Promise<AxiosResponse<graphQLQuery.getAllAwardData>> => {
  return await getGraphQLQuery(graphQLQuery.getAllAwardQuery);
};

export const getAllSkillByQuery = async (): Promise<AxiosResponse<graphQLQuery.getAllSkillData>> => {
  return await getGraphQLQuery(graphQLQuery.getAllSkillQuery);
};

export const getAllProjectByQuery = async (): Promise<AxiosResponse<graphQLQuery.getAllProjectData>> => {
  return await getGraphQLQuery(graphQLQuery.getAllProject);
};

export const getProjectByQuery = async (id: string): Promise<AxiosResponse<graphQLQuery.getProjectData>> => {
  return await getGraphQLQueryWithVariables(graphQLQuery.getProject, {
    id,
  });
};

export const getAllOverviewByQuery = async (): Promise<AxiosResponse<graphQLQuery.getAllOverviewData>> => {
  return await getGraphQLQuery(graphQLQuery.getAllOverview);
};

export const getAllEducationByQuery = async (): Promise<AxiosResponse<graphQLQuery.getAllEducationData>> => {
  return await getGraphQLQuery(graphQLQuery.getAllEducation);
};

export const getAllInformationByQuery = async (): Promise<AxiosResponse<graphQLQuery.getAllInformationData>> => {
  return await getGraphQLQuery(graphQLQuery.getAllInformation);
};

export const getAllWorkExperienceByQuery = async (): Promise<AxiosResponse<graphQLQuery.getAllWorkExperienceData>> => {
  return await getGraphQLQuery(graphQLQuery.getAllWorkExperience);
};

