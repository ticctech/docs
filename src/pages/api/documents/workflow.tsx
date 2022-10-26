
import React from "react";

import Swagger from '../../../components/Swagger'
import * as WorkflowSwag from "../workflow.swagger.json"

export const Workflow = () => {
    return <Swagger spec={WorkflowSwag} />
}
export default Workflow;