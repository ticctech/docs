

import React from 'react';
import Swagger from '../../../components/Swagger';

import ActWorkflow from "../activity.swagger.json";

export const Activity = () => {
        return <Swagger spec={ActWorkflow} />
}
export default Activity;