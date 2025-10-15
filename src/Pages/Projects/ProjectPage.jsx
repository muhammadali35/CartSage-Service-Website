import React from 'react'
import SectionHeader from '../../components/SectionHeader'
import projectH from '../../assets/projejctH.jpg'
import ProjectSection from './Project'
const ProjectPage = () => {
  return (
    <>
<SectionHeader title="Projects" bgImage={projectH} />
      <ProjectSection/>
    </>
  )
}

export default ProjectPage
