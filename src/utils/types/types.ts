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
export interface stateSkills{
    softSkills:Array<softSkills>,
    techSkills:Array<techSkill>
}
