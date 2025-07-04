import React from "react";

interface Props {
  params: Promise<{
    projectId: string;
  }>;
}

const ProjectDetailPage = async ({ params }: Props) => {
  const { projectId } = await params;
  return <div>ProjectDetailPage {projectId}</div>;
};

export default ProjectDetailPage;
