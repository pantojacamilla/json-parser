    {&#xD;&#xA;       "web_app":{&#xD;&#xA;          "main":[&#xD;&#xA;             {&#xD;&#xA;                "Description_title":"Cuubez API Description",&#xD;&#xA;                "Description":"Use virtual networking services among devices that are managed by the OpenStack Compute service. The Networking (neutron) API v2.0 combines the API v1.1 functionality with some essential Internet Protocol Address Management (IPAM) functionality."&#xD;&#xA;             }&#xD;&#xA;          ],&#xD;&#xA;          "head":[&#xD;&#xA;             {&#xD;&#xA;                "class_server":"employee resource",&#xD;&#xA;                "title":"cuubez example employee"&#xD;&#xA;             }&#xD;&#xA;          ],&#xD;&#xA;          "methode_server":{&#xD;&#xA;             "get_group":[&#xD;&#xA;                {&#xD;&#xA;                   "name":"employees",&#xD;&#xA;                   "description":"get all the empldoyee from the repository",&#xD;&#xA;                   "response":[&#xD;&#xA;                      {&#xD;&#xA;                         "code":"500",&#xD;&#xA;                         "reason":"internal server error"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"200",&#xD;&#xA;                         "reason":"success response"&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "body":[&#xD;&#xA;                      {&#xD;&#xA;                         "type":"object",&#xD;&#xA;                         "id":"urn:jsonschema:com:cuubez:example:entity:Employee",&#xD;&#xA;                         "properties":{&#xD;&#xA;                            "address":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "department":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "name":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "empId":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "telNo":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            }&#xD;&#xA;                         }&#xD;&#xA;                      }&#xD;&#xA;                   ]&#xD;&#xA;                }&#xD;&#xA;             ],&#xD;&#xA;             "post_single":[&#xD;&#xA;                {&#xD;&#xA;                   "name":"employees",&#xD;&#xA;                   "description":"get all the employee from the repository",&#xD;&#xA;                   "response":[&#xD;&#xA;                      {&#xD;&#xA;                         "code":"500",&#xD;&#xA;                         "reason":"internal server error"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"200",&#xD;&#xA;                         "reason":"success response"&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "body":[&#xD;&#xA;                      {&#xD;&#xA;                         "type":"object",&#xD;&#xA;                         "id":"urn:jsonschema:com:cuubez:example:entity:Employee",&#xD;&#xA;                         "properties":{&#xD;&#xA;                            "address":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "department":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "name":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "empId":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "telNo":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            }&#xD;&#xA;                         }&#xD;&#xA;                      }&#xD;&#xA;                   ]&#xD;&#xA;                }&#xD;&#xA;             ],&#xD;&#xA;             "get_single":[&#xD;&#xA;                {&#xD;&#xA;                   "name":"employees/{empId}",&#xD;&#xA;                   "description":"get single employee from the repository",&#xD;&#xA;                   "request":[&#xD;&#xA;                      {&#xD;&#xA;                         "parameter":"(QP)empId",&#xD;&#xA;                         "type":"string",&#xD;&#xA;                         "description":"employee identity"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "parameter":"(HP)org_Id",&#xD;&#xA;                         "type":"string",&#xD;&#xA;                         "description":"organization identity"&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "response":[&#xD;&#xA;                      {&#xD;&#xA;                         "code":"500",&#xD;&#xA;                         "reason":"internal server error"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"200",&#xD;&#xA;                         "reason":"succes response"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"400",&#xD;&#xA;                         "reason":"no employee found"&#xD;&#xA;                      }&#xD;&#xA;                   ]&#xD;&#xA;                }&#xD;&#xA;             ],&#xD;&#xA;             "delete_single":[&#xD;&#xA;                {&#xD;&#xA;                   "name":"employees/{empId}",&#xD;&#xA;                   "description":"delete single employee from the repository",&#xD;&#xA;                   "request":[&#xD;&#xA;                      {&#xD;&#xA;                         "parameter":"(PP)empId",&#xD;&#xA;                         "type":"string",&#xD;&#xA;                         "description":"employee identity"&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "response":[&#xD;&#xA;                      {&#xD;&#xA;                         "code":"500",&#xD;&#xA;                         "reason":"internal server error"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"200",&#xD;&#xA;                         "reason":"succes response"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"400",&#xD;&#xA;                         "reason":"no employee found"&#xD;&#xA;                      }&#xD;&#xA;                   ]&#xD;&#xA;                }&#xD;&#xA;             ],&#xD;&#xA;             "put_single":[&#xD;&#xA;                {&#xD;&#xA;                   "name":"employees/{empId}",&#xD;&#xA;                   "description":"update single employee",&#xD;&#xA;                   "request":[&#xD;&#xA;                      {&#xD;&#xA;                         "parameter":"(PP)empId",&#xD;&#xA;                         "type":"string",&#xD;&#xA;                         "description":"employee identity"&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "body":[&#xD;&#xA;                      {&#xD;&#xA;                         "type":"object",&#xD;&#xA;                         "id":"urn:jsonschema:com:cuubez:example:entity:Employee",&#xD;&#xA;                         "properties":{&#xD;&#xA;                            "address":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "department":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "name":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "empId":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "telNo":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            }&#xD;&#xA;                         }&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "response":[&#xD;&#xA;                      {&#xD;&#xA;                         "code":"500",&#xD;&#xA;                         "reason":"internal server error"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"200",&#xD;&#xA;                         "reason":"succes response"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"400",&#xD;&#xA;                         "reason":"no employee found"&#xD;&#xA;                      }&#xD;&#xA;                   ]&#xD;&#xA;                }&#xD;&#xA;             ]&#xD;&#xA;          }&#xD;&#xA;       },&#xD;&#xA;       "client_app":{&#xD;&#xA;          "methode_client":{&#xD;&#xA;             "head":[&#xD;&#xA;                {&#xD;&#xA;                   "class_client":"User resource",&#xD;&#xA;                   "title":"/users"&#xD;&#xA;                }&#xD;&#xA;             ],&#xD;&#xA;             "post_single_user":[&#xD;&#xA;                {&#xD;&#xA;                   "name":"users",&#xD;&#xA;                   "description":"Add new user to repository",&#xD;&#xA;                   "response":[&#xD;&#xA;                      {&#xD;&#xA;                         "code":"500",&#xD;&#xA;                         "reason":"internal server error"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"200",&#xD;&#xA;                         "reason":"success response"&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "body":[&#xD;&#xA;                      {&#xD;&#xA;                         "type":"object",&#xD;&#xA;                         "id":"urn:jsonschema:com:cuubez:example:entity:Employee",&#xD;&#xA;                         "properties":{&#xD;&#xA;                            "address":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "department":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "name":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "empId":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "telNo":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            }&#xD;&#xA;                         }&#xD;&#xA;                      }&#xD;&#xA;                   ]&#xD;&#xA;                }&#xD;&#xA;             ],&#xD;&#xA;             "delete_single_user":[&#xD;&#xA;                {&#xD;&#xA;                   "name":"users/{userId}",&#xD;&#xA;                   "description":"delete single user from the repository ",&#xD;&#xA;                   "request":[&#xD;&#xA;                      {&#xD;&#xA;                         "parameter":"(PP)userId",&#xD;&#xA;                         "type":"string",&#xD;&#xA;                         "description":"user identity"&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "response":[&#xD;&#xA;                      {&#xD;&#xA;                         "code":"500",&#xD;&#xA;                         "reason":"internal server error"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"200",&#xD;&#xA;                         "reason":"succes response"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"400",&#xD;&#xA;                         "reason":"no employee found"&#xD;&#xA;                      }&#xD;&#xA;                   ]&#xD;&#xA;                }&#xD;&#xA;             ],&#xD;&#xA;             "put_single_user":[&#xD;&#xA;                {&#xD;&#xA;                   "name":"users/{userId}",&#xD;&#xA;                   "description":"update single user",&#xD;&#xA;                   "request":[&#xD;&#xA;                      {&#xD;&#xA;                         "parameter":"(PP)userId",&#xD;&#xA;                         "type":"string",&#xD;&#xA;                         "description":"user identity"&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "body":[&#xD;&#xA;                      {&#xD;&#xA;                         "type":"object",&#xD;&#xA;                         "id":"urn:jsonschema:com:cuubez:example:entity:User",&#xD;&#xA;                         "properties":{&#xD;&#xA;                            "address":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "department":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "name":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "userId":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "telNo":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            }&#xD;&#xA;                         }&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "response":[&#xD;&#xA;                      {&#xD;&#xA;                         "code":"500",&#xD;&#xA;                         "reason":"internal server error"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"200",&#xD;&#xA;                         "reason":"succes response"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"400",&#xD;&#xA;                         "reason":"no user found"&#xD;&#xA;                      }&#xD;&#xA;                   ]&#xD;&#xA;                }&#xD;&#xA;             ],&#xD;&#xA;             "get_users":[&#xD;&#xA;                {&#xD;&#xA;                   "name":"users",&#xD;&#xA;                   "description":"get all the users from the repository",&#xD;&#xA;                   "response":[&#xD;&#xA;                      {&#xD;&#xA;                         "code":"500",&#xD;&#xA;                         "reason":"internal server error"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"200",&#xD;&#xA;                         "reason":"success response"&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "body":[&#xD;&#xA;                      {&#xD;&#xA;                         "type":"object",&#xD;&#xA;                         "id":"urn:jsonschema:com:cuubez:example:entity:User",&#xD;&#xA;                         "properties":{&#xD;&#xA;                            "address":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "department":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "name":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "userId":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            },&#xD;&#xA;                            "telNo":{&#xD;&#xA;                               "type":"string"&#xD;&#xA;                            }&#xD;&#xA;                         }&#xD;&#xA;                      }&#xD;&#xA;                   ]&#xD;&#xA;                }&#xD;&#xA;             ],&#xD;&#xA;             "get_single_user":[&#xD;&#xA;                {&#xD;&#xA;                   "name":"users/{userId}",&#xD;&#xA;                   "description":"get single user from the repository",&#xD;&#xA;                   "request":[&#xD;&#xA;                      {&#xD;&#xA;                         "parameter":"(PP)userId",&#xD;&#xA;                         "type":"string",&#xD;&#xA;                         "description":"user identity"&#xD;&#xA;                      }&#xD;&#xA;                   ],&#xD;&#xA;                   "response":[&#xD;&#xA;                      {&#xD;&#xA;                         "code":"500",&#xD;&#xA;                         "reason":"internal server error"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"200",&#xD;&#xA;                         "reason":"succes response"&#xD;&#xA;                      },&#xD;&#xA;                      {&#xD;&#xA;                         "code":"400",&#xD;&#xA;                         "reason":"no user found"&#xD;&#xA;                      }&#xD;&#xA;                   ]&#xD;&#xA;                }&#xD;&#xA;             ]&#xD;&#xA;          }&#xD;&#xA;       }&#xD;&#xA;    }