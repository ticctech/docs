import React from "react";
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export const Swagger = ({ spec }: any) => {

    return <SwaggerUI
        // layout="baseLayout"
        defaultModelRendering={"example"}
        displayOperationId
        docExpansion={"full"}
        spec={spec} />
}
export default Swagger;