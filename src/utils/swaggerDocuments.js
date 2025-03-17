const swaggerDocument ={
    openapi: "3.0.0",
    info: {
      title: "Active Crop ",
      version: "1.0.0",
      description: "API for Active crop."
    },
    paths:{
      "/admin/role/create": {
        "post": {
          "summary": "Create a new role",
          "description": "Creates a new role with a name and description. Returns an error if the role already exists.",
          "tags": ["Role"],
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "roleName": {
                      "type": "string",
                      "example": "Admin"
                    },
                    "description": {
                      "type": "string",
                      "example": "Administrator role with full access"
                    }
                  },
                  "required": ["roleName", "description"]
                }
              }
            }
          },
          "responses": {
            "201": {
              "description": "Role Created Successfully",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Role Created Successfully"
                      },
                      "role": {
                        "type": "object",
                        "properties": {
                          "roleName": {
                            "type": "string",
                            "example": "Admin"
                          },
                          "description": {
                            "type": "string",
                            "example": "Administrator role with full access"
                          }
                        }
                      }
                    }
                  }
                }
              }
            },
            "400": {
              "description": "Role Already exists",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Role Already exists"
                      }
                    }
                  }
                }
              }
            },
            "500": {
              "description": "Internal server error",
              "content": {
                "application/json": {
                  "schema": {
                    "type": "object",
                    "properties": {
                      "message": {
                        "type": "string",
                        "example": "Internal server error"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      },
    }
}


export default swaggerDocument