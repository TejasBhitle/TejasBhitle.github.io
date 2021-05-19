export interface Project {
    name:string,
    index:number,
    description:string,
    iconUrl:string,
    features: Feature[],
    links: ProjectLink[]
  }
  
  export interface Feature{
    text: string
  }
  
  export interface ProjectLink{
    name:string,
    url:string
  }
  