const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Active Crop ",
    version: "1.0.0",
    description: "API for Active crop."
  },
  paths: {
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
    "/admin/auth/signup-page": {
      "get": {
        "summary": "Render Admin Sign-Up Page",
        "description": "Returns a JSON response and renders the Admin Sign-Up page.",
        "tags": ["Admin Authentication"],
        "responses": {
          "200": {
            "description": "Sign-Up Page Rendered",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Sign Up Page"
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
    "/admin/auth/signup": {
      "post": {
        "summary": "Create an Admin Account",
        "description": "Processes admin account creation request and logs request body.",
        "tags": ["Admin Authentication"],
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {}
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Processing Request",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Processing"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Internal Server Error",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "message": {
                      "type": "string",
                      "example": "Internal Server Error"
                    },
                    "error": {
                      "type": "string",
                      "example": "Error details"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/admin/auth/signin-page": {
      "get": {
        "summary": "Render Admin Sign-In Page",
        "description": "Returns the Admin Sign-In HTML page.",
        "tags": ["Admin Authentication"],
        "responses": {
          "200": {
            "description": "Successfully rendered the sign-in page",
            "content": {
              "text/html": {
                "example": "<html>...</html>"
              }
            }
          }
        }
      }
    },
    "/admin/auth/signin": {
      "post": {
        "summary": "Admin Sign-In",
        "tags": ["Admin Authentication"],
        "description": "Authenticates an admin and returns access and refresh tokens.",
        "requestBody": {
          "required": true,
          "content": {
            "application/json": {
              "schema": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string",
                    "example": "admin@example.com"
                  },
                  "password": {
                    "type": "string",
                    "example": "securePassword123"
                  }
                },
                "required": ["email", "password"]
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Login successful",
            "content": {
              "application/json": {
                "example": {
                  "message": "Login Successful ...",
                  "type": "success",
                  "redirect": ""
                }
              }
            }
          },
          "400": {
            "description": "Invalid credentials or user issues",
            "content": {
              "application/json": {
                "examples": {
                  "User Not Found": {
                    "value": {
                      "message": "User not Found",
                      "type": "warning"
                    }
                  },
                  "User Verification Issue": {
                    "value": {
                      "message": "Unable to Login , Please Contact Tech Support",
                      "type": "warning"
                    }
                  },
                  "Invalid Credentials": {
                    "value": {
                      "message": "Password or Email is Invalid",
                      "type": "error"
                    }
                  }
                }
              }
            }
          },
          "500": {
            "description": "Internal Server Error",
            "content": {
              "application/json": {
                "example": {
                  "message": "Internal Server Error",
                  "type": "error"
                }
              }
            }
          }
        }
      }
    },
    "/admin/auth/logout": {
      "get": {
        "summary": "Admin Logout",
        "tags": ["Admin Authentication"],
        "description": "Logs out the admin by destroying the session.",
        "responses": {
          "200": {
            "description": "Logout successful",
            "content": {
              "application/json": {
                "example": {
                  "message": "Logout successful",
                  "type": "success",
                  "redirect": "/admin/login"
                }
              }
            }
          },
          "500": {
            "description": "Logout failed due to server error",
            "content": {
              "application/json": {
                "example": {
                  "message": "Logout failed",
                  "type": "error"
                }
              }
            }
          }
        }
      }
    },
    "/admin": {
      "get": {
        "summary": "Render Admin Dashboard",
        "tags": ["Admin Dashboard"],
        "description": "Returns the Admin Dashboard HTML page.",
        "responses": {
          "200": {
            "description": "Successfully rendered the dashboard page",
            "content": {
              "text/html": {
                "example": "<html>...</html>"
              }
            }
          }
        }
      }
    },
    "/admin/category/category-list-page": {
      "get": {
        "summary": "Render Category List Page",
        "tags": ["Category Management"],
        "description": "Returns the Category List HTML page.",
        "responses": {
          "200": {
            "description": "Successfully rendered the category list page",
            "content": {
              "text/html": {
                "example": "<html>...</html>"
              }
            }
          }
        }
      }
    },
    "/admin/category/create-category-page": {
      "get": {
        "summary": "Render Category Create Page",
        "tags": ["Category Management"],
        "description": "Returns the Create Category HTML page.",
        "responses": {
          "200": {
            "description": "Successfully rendered the create category page",
            "content": {
              "text/html": {
                "example": "<html>...</html>"
              }
            }
          }
        }
      }
    },
    "/admin/category/create-category": {
      "post": {
        "summary": "Create a New Category",
        "tags": ["Category Management"],
        "description": "Creates a new category with an optional image upload.",
        "requestBody": {
          "required": true,
          "content": {
            "multipart/form-data": {
              "schema": {
                "type": "object",
                "properties": {
                  "cataName": {
                    "type": "string",
                    "description": "Name of the category",
                    "example": "Electronics"
                  },
                  "description": {
                    "type": "string",
                    "description": "Description of the category",
                    "example": "Category for electronic gadgets"
                  },
                  "categoery_image": {
                    "type": "string",
                    "format": "binary",
                    "description": "Category image file"
                  }
                },
                "required": ["cataName", "description"]
              }
            }
          }
        },
        "responses": {
          "201": {
            "description": "Category created successfully",
            "content": {
              "application/json": {
                "example": {
                  "message": "Category Created ...",
                  "type": "success"
                }
              }
            }
          },
          "409": {
            "description": "Category name already exists",
            "content": {
              "application/json": {
                "example": {
                  "message": "Category Name Already Exists",
                  "type": "warning"
                }
              }
            }
          },
          "500": {
            "description": "Internal Server Error or image upload failure",
            "content": {
              "application/json": {
                "examples": {
                  "Upload Failure": {
                    "value": {
                      "message": "Failed to upload image",
                      "type": "error"
                    }
                  },
                  "Server Error": {
                    "value": {
                      "message": "Internal Server Error",
                      "type": "error"
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/admin/category/update-category-page/{id}": {
      "get": {
        "summary": "Render Category Edit Page",
        "tags": ["Category Management"],
        "description": "Returns the Edit Category HTML page.",
        "responses": {
          "200": {
            "description": "Successfully rendered the edit category page",
            "content": {
              "text/html": {
                "example": "<html>...</html>"
              }
            }
          }
        }
      }
    },

  }
}


export default swaggerDocument