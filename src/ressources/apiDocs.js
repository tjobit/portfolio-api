const options = {
    'openapi': '3.0.3',
    'info': {
        'title': 'Porfolio API',
        'description': 'API for my porfolio, my projects and to know more about me',
        'version': '0.0.1'
    },
    'servers': [
        {
            'url': 'http://localhost:3030/'
        }
    ],
    'paths': {
        '/register': {
            'post': {
                'tags': ['Auth'],
                'summary': 'Register user',
                'description': 'Add user to database with name, password',
                'operationId': 'registerUser',
                'parameters': [
                    {
                        'name': 'name',
                        'in': 'body',
                        'description': 'name of user',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'password',
                        'in': 'body',
                        'description': 'password of user',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    }
                ],
                'responses': {
                    '201': {
                        'description': 'Created',
                        'content': {
                            'application/json': {
                                'schema': {
                                    '$ref': '#/components/schemas/Auth'
                                }
                            }
                        }
                    },
                    '409': {
                        'description': 'This name is already registered'
                    }
                }
            }
        },
        '/login': {
            'post': {
                'tags': ['Auth'],
                'summary': 'Login user',
                'description': 'Log user and get access token with name and password',
                'operationId': 'loginUser',
                'parameters': [
                    {
                        'name': 'name',
                        'in': 'body',
                        'description': 'name of user',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'password',
                        'in': 'body',
                        'description': 'password of user',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'content': {
                            'application/json': {
                                'schema': {
                                    '$ref': '#/components/schemas/Auth'
                                }
                            }
                        }
                    },
                    '404': {
                        'description': 'No user found with this name'
                    },
                    '403': {
                        'description': 'Wrong password'
                    }
                }
            }
        },
        '/refresh': {
            'post': {
                'tags': ['Auth'],
                'summary': 'refreh user tokens',
                'description': 'Generate access token for a user with his refresh token',
                'operationId': 'refreshUserTokens',
                'parameters': [
                    {
                        'name': 'refreshToken',
                        'in': 'body',
                        'description': 'refresh token of user',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'content': {
                            'application/json': {
                                'schema': {
                                    'type': 'object',
                                    'properties': {
                                        'accessToken': {
                                            'type': 'string'
                                        },
                                        'refreshToken': {
                                            'type': 'string'
                                        },
                                        'expires': {
                                            'type': 'number'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '/user/{id}': {
            'delete': {
                'tags': ['User'],
                'summary': 'Delete user',
                'description': 'Delete user from database',
                'operationId': 'deleteUser',
                'parameters': [
                    {
                        'name': 'Authorization',
                        'in': 'header',
                        'description': 'access token',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'id',
                        'in': 'query',
                        'description': 'id of user deleted',
                        'required': true,
                        'schema': {
                            'type': 'number'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'User deleted'
                    },
                    '404': {
                        'description': 'User not found with this id'
                    }
                }
            },
            'put': {
                'tags': ['User'],
                'summary': 'Update user',
                'description': 'Update user in database',
                'operationId': 'updateUser',
                'parameters': [
                    {
                        'name': 'Authorization',
                        'in': 'header',
                        'description': 'access token',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'id',
                        'in': 'query',
                        'description': 'id of user updated',
                        'required': true,
                        'schema': {
                            'type': 'number'
                        }
                    },
                    {
                        'name': 'name',
                        'in': 'body',
                        'description': 'name of user to update',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'User updated'
                    },
                    '404': {
                        'description': 'User not found with this id'
                    }
                }
            },
            'get': {
                'tags': ['User'],
                'summary': 'get user',
                'description': 'Get user name',
                'operationId': 'getUsers',
                'parameters': [
                    {
                        'name': 'Authorization',
                        'in': 'header',
                        'description': 'access token of user',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'id',
                        'in': 'query',
                        'description': 'id of user updated',
                        'required': true,
                        'schema': {
                            'type': 'number'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'content': {
                            'application/json': {
                                'schema': {
                                    'type': 'object',
                                    'properties': {
                                        'id': {
                                            'type': 'number'
                                        },
                                        'name': {
                                            'type': 'string'
                                        },
                                        'password': {
                                            'type': 'string'
                                        },
                                        'salt': {
                                            'type': 'string'
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        'description': 'User not found'
                    }
                }
            }
        },
        '/user': {
            'get': {
                'tags': ['User'],
                'summary': 'get all users',
                'description': 'Get all users name',
                'operationId': 'getUsers',
                'parameters': [
                    {
                        'name': 'Authorization',
                        'in': 'header',
                        'description': 'access token of user',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'content': {
                            'application/json': {
                                'schema': {
                                    'type': 'object',
                                    'properties': {
                                        'users': {
                                            'type': 'array',
                                            'items': {
                                                'type': 'object',
                                                'properties': {
                                                    'id': {
                                                        'type': 'number'
                                                    },
                                                    'name': {
                                                        'type': 'string'
                                                    },
                                                    'password': {
                                                        'type': 'string'
                                                    },
                                                    'salt': {
                                                        'type': 'string'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        'description': 'User not found'
                    }
                }
            }
        },
  
        '/metric/pictures': {
            'get': {
                'tags': ['Metric'],
                'summary': 'Get all pictures',
                'description': 'Retrieve all pictures from projects',
                'operationId': 'getPictures',
                'parameters': [
                    {
                        'name': 'Authorization',
                        'in': 'header',
                        'description': 'access token of user',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'content': {
                            'application/json': {
                                'schema': {
                                    'type': 'array',
                                    'items': {
                                        'type': 'string'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        'project': {
            'post': {
                'tags': ['Project'],
                'summary': 'Create a project',
                'description': 'Create a project with name, shortDescription, longDescription, nbParticipants, tags, githubUrl, websiteUrl, startDate, endDate, thumbnailUrl, picturesUrl',
                'operationId': 'createProject',
                'parameters': [
                    {
                        'name': 'Authorization',
                        'in': 'header',
                        'description': 'access token of user',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'name',
                        'in': 'body',
                        'description': 'name of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'shortDescription',
                        'in': 'body',
                        'description': 'short description of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'longDescription',
                        'in': 'body',
                        'description': 'long description of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'nbParticipants',
                        'in': 'body',
                        'description': 'number of participants of project',
                        'required': true,
                        'schema': {
                            'type': 'number'
                        }
                    },
                    {
                        'name': 'tags',
                        'in': 'body',
                        'description': 'tags of project',
                        'required': true,
                        'schema': {
                            'type': 'array',
                            'items': {
                                'type': 'string'
                            }
                        }
                    },
                    {
                        'name': 'githubUrl',
                        'in': 'body',
                        'description': 'github url of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'websiteUrl',
                        'in': 'body',
                        'description': 'website url of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'startDate',
                        'in': 'body',
                        'description': 'start date of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'endDate',
                        'in': 'body',
                        'description': 'end date of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'thumbnailUrl',
                        'in': 'body',
                        'description': 'thumbnail url of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'picturesUrl',
                        'in': 'body',
                        'description': 'pictures url of project',
                        'required': true,
                        'schema': {
                            'type': 'array',
                            'items': {
                                'type': 'string'
                            }
                        }
                    }
                ],
                'responses': {
                    '201': {
                        'description': 'successful operation',
                        'content': {
                            'application/json': {
                                'schema': {
                                    'type': 'object',
                                    'properties': {
                                        'id': {
                                            'type': 'number'
                                        },
                                        'name': {
                                            'type': 'string'
                                        },
                                        'shortDescription': {
                                            'type': 'string'
                                        },
                                        'longDescription': {
                                            'type': 'string'
                                        },
                                        'nbParticipants': {
                                            'type': 'number'
                                        },
                                        'tags': {
                                            'type': 'array',
                                            'items': {
                                                'type': 'string'
                                            }
                                        },
                                        'githubUrl': {
                                            'type': 'string'
                                        },
                                        'websiteUrl': {
                                            'type': 'string'
                                        },
                                        'startDate': {
                                            'type': 'string'
                                        },
                                        'endDate': {
                                            'type': 'string'
                                        },
                                        'thumbnailUrl': {
                                            'type': 'string'
                                        },
                                        'picturesUrl': {
                                            'type': 'array',
                                            'items': {
                                                'type': 'string'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '409': {
                        'description': 'This project is already registered'
                    }
                }
            },
            'get': {
                'tags': ['Project'],
                'summary': 'Get all projects',
                'description': 'Retrieve all projects',
                'operationId': 'getProjects',
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'content': {
                            'application/json': {
                                'schema': {
                                    'type': 'array',
                                    'items': {
                                        'type': 'object',
                                        'properties': {
                                            'id': {
                                                'type': 'number'
                                            },
                                            'name': {
                                                'type': 'string'
                                            },
                                            'shortDescription': {
                                                'type': 'string'
                                            },
                                            'longDescription': {
                                                'type': 'string'
                                            },
                                            'nbParticipants': {
                                                'type': 'number'
                                            },
                                            'tags': {
                                                'type': 'array',
                                                'items': {
                                                    'type': 'string'
                                                }
                                            },
                                            'githubUrl': {
                                                'type': 'string'
                                            },
                                            'websiteUrl': {
                                                'type': 'string'
                                            },
                                            'startDate': {
                                                'type': 'string'
                                            },
                                            'endDate': {
                                                'type': 'string'
                                            },
                                            'thumbnailUrl': {
                                                'type': 'string'
                                            },
                                            'picturesUrl': {
                                                'type': 'array',
                                                'items': {
                                                    'type': 'string'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        '/project/{id}': {
            'get': {
                'tags': ['Project'],
                'summary': 'Get project',
                'description': 'Get project by id',
                'operationId': 'getProjectById',
                'parameters': [
                    {
                        'name': 'id',
                        'in': 'path',
                        'description': 'id of project to return',
                        'required': true,
                        'schema': {
                            'type': 'number'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'content': {
                            'application/json': {
                                'schema': {
                                    'type': 'object',
                                    'properties': {
                                        'id': {
                                            'type': 'number'
                                        },
                                        'name': {
                                            'type': 'string'
                                        },
                                        'shortDescription': {
                                            'type': 'string'
                                        },
                                        'longDescription': {
                                            'type': 'string'
                                        },
                                        'nbParticipants': {
                                            'type': 'number'
                                        },
                                        'tags': {
                                            'type': 'array',
                                            'items': {
                                                'type': 'string'
                                            }
                                        },
                                        'githubUrl': {
                                            'type': 'string'
                                        },
                                        'websiteUrl': {
                                            'type': 'string'
                                        },
                                        'startDate': {
                                            'type': 'string'
                                        },
                                        'endDate': {
                                            'type': 'string'
                                        },
                                        'thumbnailUrl': {
                                            'type': 'string'
                                        },
                                        'picturesUrl': {
                                            'type': 'array',
                                            'items': {
                                                'type': 'string'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        'description': 'No project found with this id'
                    }
                }
            },
            'put': {
                'tags': ['Project'],
                'summary': 'Update project',
                'description': 'Update project by id',
                'operationId': 'updateProject',
                'parameters': [
                    {
                        'name': 'id',
                        'in': 'path',
                        'description': 'id of project to update',
                        'required': true,
                        'schema': {
                            'type': 'number'
                        }
                    },
                    {
                        'name': 'Authorization',
                        'in': 'header',
                        'description': 'access token of user',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'name',
                        'in': 'body',
                        'description': 'name of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'shortDescription',
                        'in': 'body',
                        'description': 'short description of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'longDescription',
                        'in': 'body',
                        'description': 'long description of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'nbParticipants',
                        'in': 'body',
                        'description': 'number of participants of project',
                        'required': true,
                        'schema': {
                            'type': 'number'
                        }
                    },
                    {
                        'name': 'tags',
                        'in': 'body',
                        'description': 'tags of project',
                        'required': true,
                        'schema': {
                            'type': 'array',
                            'items': {
                                'type': 'string'
                            }
                        }
                    },
                    {
                        'name': 'githubUrl',
                        'in': 'body',
                        'description': 'github url of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'websiteUrl',
                        'in': 'body',
                        'description': 'website url of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'startDate',
                        'in': 'body',
                        'description': 'start date of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'endDate',
                        'in': 'body',
                        'description': 'end date of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'thumbnailUrl',
                        'in': 'body',
                        'description': 'thumbnail url of project',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    },
                    {
                        'name': 'picturesUrl',
                        'in': 'body',
                        'description': 'pictures url of project',
                        'required': true,
                        'schema': {
                            'type': 'array',
                            'items': {
                                'type': 'string'
                            }
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation',
                        'content': {
                            'application/json': {
                                'schema': {
                                    'type': 'object',
                                    'properties': {
                                        'id': {
                                            'type': 'number'
                                        },
                                        'name': {
                                            'type': 'string'
                                        },
                                        'shortDescription': {
                                            'type': 'string'
                                        },
                                        'longDescription': {
                                            'type': 'string'
                                        },
                                        'nbParticipants': {
                                            'type': 'number'
                                        },
                                        'tags': {
                                            'type': 'array',
                                            'items': {
                                                'type': 'string'
                                            }
                                        },
                                        'githubUrl': {
                                            'type': 'string'
                                        },
                                        'websiteUrl': {
                                            'type': 'string'
                                        },
                                        'startDate': {
                                            'type': 'string'
                                        },
                                        'endDate': {
                                            'type': 'string'
                                        },
                                        'thumbnailUrl': {
                                            'type': 'string'
                                        },
                                        'picturesUrl': {
                                            'type': 'array',
                                            'items': {
                                                'type': 'string'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    },
                    '404': {
                        'description': 'No project found with this id'
                    }
                }
            },    
            'delete': {
                'tags': ['Project'],
                'summary': 'Delete project',
                'description': 'Delete project by id',
                'operationId': 'deleteProject',
                'parameters': [
                    {
                        'name': 'id',
                        'in': 'path',
                        'description': 'id of project to delete',
                        'required': true,
                        'schema': {
                            'type': 'number'
                        }
                    },
                    {
                        'name': 'Authorization',
                        'in': 'header',
                        'description': 'access token of user',
                        'required': true,
                        'schema': {
                            'type': 'string'
                        }
                    }
                ],
                'responses': {
                    '200': {
                        'description': 'successful operation'
                    },
                    '404': {
                        'description': 'No project found with this id'
                    }
                }
            }      
        }
    },
    'components': {
        'schemas': {
            'Auth': {
                'type': 'object',
                'properties': {
                    'accessToken': {
                        'type': 'string'
                    },
                    'refreshToken': {
                        'type': 'string'
                    },
                    'expires': {
                        'type': 'number'
                    },
                    'userProfile': {
                        'type': 'object',
                        'properties': {
                            'id': {
                                'type': 'string'
                            },
                            'name': {
                                'type': 'string'
                            }
                        }
                    }
                }
            }
        }
    }
};

export default options;