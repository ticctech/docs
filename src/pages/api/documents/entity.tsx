import React from "react";

import Swagger from '../../../components/Swagger'
import * as EntitySwag from '../entity.swagger.json';

export const Entity = () => {
    return <Swagger spec={EntitySwag} />
}
export default Entity;