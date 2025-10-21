import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import projectH from '../../assets/optimized/HeroImgs/projectHero.webp'
import ProjectSection from './Project'
import Project from './Project'
const ProjectPage = () => {
  return (
    <>
<SectionHeader title="Projects" bgImage={projectH} />
    <Project/>
    </>
  )
}

export default ProjectPage
