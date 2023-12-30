export interface techSkill {
    name:string,
    image:string,
    level:string,
    type:string,
    yearExperience:number,
}
export interface softSkills {
    name:string,
    type:string
}
export interface project {
    name:string,
    description:string,
    rol:string,
    technologies:Array<string>,
    repositoryURL:string,
    deployURL:string,
    imageURL:string
}
export interface stateProjects {
    allProjects:Array<project>
}
export interface stateSkills{
    softSkills:Array<softSkills>,
    techSkills:Array<techSkill>
}
