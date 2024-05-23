
// Types
import { Award, Project, Skill, Overview, Education, Information, WorkExperience } from './index';

export type TypeExcludeId<T> = Omit<T, '_id'>

export type AwardData = Array<TypeExcludeId<Award>>;

export type getAllAwardData = {
  data: {
    getAllAward: AwardData
  }
};

export type SkillData = Array<TypeExcludeId<Skill>>;

export type getAllSkillData = {
  data : {
    getAllSkill: SkillData
  }
};

export type ProjectsData = Array<Pick<Project, '_id' | 'name' | 'company' | 'mainTechs'>>;

export type getAllProjectData = {
  data: {
    getAllProject: ProjectsData
  }
};

export type ProjectData = TypeExcludeId<Project>;

export type getProjectData = {
  data: {
    getProject: ProjectData
  }
};

export type OverviewData = Array<TypeExcludeId<Overview>>;

export type getAllOverviewData = {
  data: {
    getAllOverview: OverviewData,
  }
};

export type EducationData = Array<TypeExcludeId<Education>>;

export type getAllEducationData = {
  data: {
    getAllEduction: EducationData
  }
};

export type InformationData = Array<TypeExcludeId<Information>>;

export type getAllInformationData = {
  data: {
    getAllInformation: InformationData
  }
};

export type WorkExperienceData = Array<TypeExcludeId<WorkExperience>>;

export type getAllWorkExperienceData = {
  data: {
    getAllWorkExperience: WorkExperienceData
  }
};

export const getAllAwardQuery = `
  query GetData {
    getAllAward {
      time
      title
      location
      position
    }
  }
`;

export const getAllSkillQuery = `
  query GetData {
    getAllSkill {
      type
      skills
    }
  }
`;

export const getAllProject = `
  query GetData {
    getAllProject {
      _id
      name
      company
      mainTechs
    }
  }
`;

export const getProject = `
  query GetData($id: String!) {
    getProject(id: $id) {
      name
      url
      time
      company
      position
      mainTechs
      description
      numberOfMember
      technologyInUse
      responsibilitiesAndAchievement
    }
  }
`;

export const getAllOverview = `
  query GetData {
    getAllOverview {
      value
    }
  }
`;

export const getAllEducation = `
  query GetData {
    getAllEduction {
      time
      title
      score
      subInfo
      location
    }
  }
`;

export const getAllInformation = `
  query GetData {
    getAllInformation {
      title
      content
    }
  }
`;

export const getAllWorkExperience = `
  query GetData {
    getAllWorkExperience {
      time
      company
      position
      description
    }
  }
`;
