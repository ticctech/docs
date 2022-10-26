import React from "react";

import Swagger from '../../../components/Swagger'
import CheckSwag from "../swagger.json"

export const Check = () => {
    return <Swagger spec={CheckSwag} />
}
export default Check;