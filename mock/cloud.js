//功能列表
var featureList =  {
  "code": 0,
  "message": "成功",
  "data": {
    "offset": 0,
    "limit": 2147483647,
    "total": 2,
    "size": 10,
    "pages": 1,
    "current": 1,
    "searchCount": true,
    "records": [
      {
        "parentName": "公有云地址管理2",
        "urlName": "添加地址",
        "systemName": "系统设置",
        "id": 2,
        "sort": 2,
        "url": "business/address/add",
        "NAME": "菜单结构",
        "isShow": 1
      },
      {
        "parentName": "公有云菜单结构",
        "urlName": "地址列表",
        "systemName": "公有云",
        "id": 1,
        "sort": 2,
        "url": "business/address/queryPage",
        "name": "地址列表",
        "isShow": 1
      }
    ],
    "orderByField": null,
    "asc": true,
    "offsetCurrent": 0
  }
}
var feature = {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 1,
    "name": "功能列表",
    "parentId": 5,
    "isShow": 1,
    "url": 2,
    "icon": "图标",
    "sort": 2,
    "urls": "2,3"
  }
}

//后台功能列表
var backstageFeatureList =  {
  "code": 0,
  "message": "成功",
  "data": {
    "offset": 0,
    "limit": 2147483647,
    "total": 2,
    "size": 10,
    "pages": 2,
    "current": 1,
    "searchCount": true,
    "pager" : {
       "total" : 20,
       "limit" : 2147483647,
       "pages" : 2,
       "current" : 1,
       "size" : 10
    },
    "records": [
      {
        "systemId": 1,
        "parentName": "系统设置",
        "code": "6b1595d36706446d8cd3b7c9c7e98371",
        "systemName": "系统",
        "name": "地址管理",
        "id": 7,
        "sort": 1,
        "type": 0,
        "parentId": 3,
        "url": "/address/queryList",
        "isShow": 1
      },{
        "systemId": 1,
        "parentName": "系统设置",
        "code": "6b1595d36706446d8cd3b7c9c7e98371",
        "systemName": "系统",
        "name": "地址管理",
        "id": 8,
        "sort": 1,
        "type": 0,
        "parentId": 3,
        "url": "/address/queryList",
        "isShow": 1
      }
    ],
    "orderByField": null,
    "asc": true,
    "offsetCurrent": 0
  }
}
var backstageFeature = {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 1,
    "name": "菜单结构",
    "parentId": 5,
    "isShow": 1,
    "url": 2,
    "icon": "图标",
    "sort": 2,
    "urls": "2,3"
  }
}

//地址列表
var addressList =  {
  "code": 0,
  "message": "成功",
  "data": {
    "offset": 0,
    "limit": 2147483647,
    "total": 9,
    "size": 10,
    "pages": 1,
    "current": 1,
    "searchCount": true,
    "records": [
      {
        "name": "菜单结构修改",
        "description": "菜单结构",
        "id": 9,
        "url": "business/menu/update",
        "status": 0
      },
      {
        "name": "添加菜单结构",
        "description": "添加菜单结构",
        "id": 8,
        "url": "business/menu/add",
        "status": 0
      },
      {
        "name": "修改功能",
        "description": "修改功能",
        "id": 7,
        "url": "business/resource/update",
        "status": 0
      },
      {
        "name": "地址列表",
        "description": "地址列表",
        "id": 4,
        "url": "business/address/queryPage",
        "status": 0
      },
      {
        "name": "查询地址详情",
        "description": "查询地址详情",
        "id": 3,
        "url": "address/queryDetail",
        "status": 0
      }
    ],
    "orderByField": null,
    "asc": true,
    "offsetCurrent": 0
  }
}
var address = {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 9,
    "url": "business/menu/update",
    "name": "菜单结构修改",
    "description": "菜单结构",
    "status": 0
  }
}

//后台地址列表
var backstageAddressList = {
  "code": 0,
  "message": "成功",
  "data": {
    "offset": 0,
    "limit": 2147483647,
    "total": 3,
    "size": 10,
    "pages": 1,
    "current": 1,
    "searchCount": true,
    "records": [
      {
        "name": "地址列表",
        "description": "列表",
        "id": 4,
        "url": "/address/queryList",
        "status": 0
      },
      {
        "name": "地址列表",
        "description": "列表",
        "id": 3,
        "url": "/address/queryList",
        "status": 0
      },
      {
        "name": "地址列表",
        "description": "列表",
        "id": 2,
        "url": "/address/queryList",
        "status": 0
      }
    ],
    "orderByField": null,
    "asc": true,
    "offsetCurrent": 0
  }
}
var backstageAddress = {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 9,
    "url": "business/menu/update",
    "name": "菜单结构修改",
    "description": "菜单结构",
    "status": 0
  }
}

//菜单列表
var menuList = {
  "code": 0,
  "message": "成功",
  "data": [
    {
      "id": 1,
      "name": "公有云",
      "parentId": 0,
      "status": null,
      "icon": "公有云icon",
      "url": "business/address/queryPage",
      "children": [
        {
          "id": 2,
          "name": "公有云地址管理",
          "parentId": 1,
          "status": null,
          "icon": "地址管理icon",
          "url": "business/address/queryPage",
          "children": null
        },
        {
          "id": 3,
          "name": "公有云菜单结构",
          "parentId": 1,
          "status": null,
          "icon": "菜单结构icon",
          "url": "business/address/queryPage",
          "children": null
        }
      ]
    }
  ]
}
var menu = {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 3,
    "name": "公有云菜单结构",
    "parentId": 1,
    "status": 1,
    "icon": "菜单结构icon",
    "url": 1
  }
}

//后台菜单列表
var backstageMenuList = {
  "code": 0,
  "message": "成功",
  "data": [
    {
      "id": 1,
      "name": "公有云",
      "parentId": 0,
      "status": null,
      "icon": "公有云icon",
      "url": "business/address/queryPage",
      "children": [
        {
          "id": 2,
          "name": "公有云地址管理",
          "parentId": 1,
          "status": null,
          "icon": "地址管理icon",
          "url": "business/address/queryPage",
          "children": null
        },
        {
          "id": 3,
          "name": "公有云菜单结构",
          "parentId": 1,
          "status": null,
          "icon": "菜单结构icon",
          "url": "business/address/queryPage",
          "children": null
        }
      ]
    },{
      "id": 2,
      "name": "公有云",
      "parentId": 0,
      "status": null,
      "icon": "公有云icon",
      "url": "business/address/queryPage",
      "children": [
        {
          "id": 2,
          "name": "公有云地址管理",
          "parentId": 1,
          "status": null,
          "icon": "地址管理icon",
          "url": "business/address/queryPage",
          "children": null
        },
        {
          "id": 3,
          "name": "公有云菜单结构",
          "parentId": 1,
          "status": null,
          "icon": "菜单结构icon",
          "url": "business/address/queryPage",
          "children": null
        }
      ]
    }
  ]
}
var backstageMenu = {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 3,
    "name": "功能管理",
    "parentId": 1,
    "parentName": "公有云",
    "status": 1,
    "icon": "功能管理icon",
    "url": "query",
    "children": null
  }
}

//角色管理
var roleList = {
  "code": 0,
  "message": "成功",
  "data": {
    "offset": 0,
    "limit": 2147483647,
    "total": 34,
    "size": 10,
    "pages": 4,
    "current": 1,
    "searchCount": true,
    "records": [
      {
        "id": 1,
        "name": "role1",
        "isDelete": null,
        "description": null,
        "status": 1,
        "updateBy": null,
        "updateTime": null
      },
      {
        "id": 27,
        "name": "role11",
        "isDelete": null,
        "description": null,
        "status": 0,
        "updateBy": null,
        "updateTime": null
      }
    ],
    "orderByField": null,
    "asc": true,
    "offsetCurrent": 0
  }
}

var backstageFeatureGroup = {
  "code": 0,
  "message": "成功",
  "data": [
    {
      "parentId": 2,
      "name": "公有云地址管理",
      "systemId": 1
    },
    {
      "parentId": 3,
      "name": "公有云菜单结构",
      "systemId": 1
    },
    {
      "parentId": 5,
      "name": "公有云地址管理2",
      "systemId": 4
    }
  ]
}
var backstageAddressGroup = {
  "code": 0,
  "message": "成功",
  "data": [
    {
      "name": "列表地址",
      "id": 1,
      "url": "/api/address/queryPage"
    },
    {
      "name": "修改功能",
      "id": 2,
      "url": "/api/resource/update"
    },
    {
      "name": "功能列表",
      "id": 3,
      "url": "/api/resource/queryPage"
    },
    {
      "name": "添加地址",
      "id": 4,
      "url": "/api/address/add"
    },
    {
      "name": "修改地址",
      "id": 5,
      "url": "/api/address/update"
    },
    {
      "name": "菜单结构",
      "id": 6,
      "url": "/api/menu/queryPage"
    },
    {
      "name": "添加",
      "id": 7,
      "url": "/api/menu/add"
    }
  ]
}
var backstageMenuGroup = {
  "code": 0,
  "message": "成功",
  "data": [
    {
      "id": 1,
      "name": "系统",
      "parentId": null,
      "parentName": null,
      "status": null,
      "isDelete": null,
      "icon": null,
      "createBy": null,
      "updateBy": null,
      "createTime": null,
      "updateTime": null,
      "children": null
    },
    {
      "id": 2,
      "name": "数据",
      "parentId": null,
      "parentName": null,
      "status": null,
      "isDelete": null,
      "icon": null,
      "createBy": null,
      "updateBy": null,
      "createTime": null,
      "updateTime": null,
      "children": null
    }
  ]
}

var featureGroup = {
  "code": 0,
  "message": "成功",
  "data": [
    {
      "parentId": 2,
      "name": "公有云地址管理",
      "systemId": 1
    },
    {
      "parentId": 3,
      "name": "公有云菜单结构",
      "systemId": 1
    },
    {
      "parentId": 5,
      "name": "公有云地址管理2",
      "systemId": 4
    }
  ]
}
var addressGroup = {
  "code": 0,
  "message": "成功",
  "data": [
    {
      "parentName": "公有云菜单结构",
      "urlName": "添加地址",
      "systemName": "公有云",
      "name": "菜单结构",
      "id": 1,
      "sort": 2,
      "url": "business/address/add",
      "isShow": 1
    },
    {
      "parentName": "公有云地址管理2",
      "urlName": "添加地址",
      "systemName": "系统设置",
      "name": "菜单结构",
      "id": 2,
      "sort": 2,
      "url": "business/address/add",
      "isShow": 1
    }
  ]
}
var menuGroup = {
  "code": 0,
  "message": "成功",
  "data": [
    {
      "id": 1,
      "name": "系统",
      "parentId": null,
      "parentName": null,
      "status": null,
      "isDelete": null,
      "icon": null,
      "createBy": null,
      "updateBy": null,
      "createTime": null,
      "updateTime": null,
      "children": null
    },
    {
      "id": 2,
      "name": "数据",
      "parentId": null,
      "parentName": null,
      "status": null,
      "isDelete": null,
      "icon": null,
      "createBy": null,
      "updateBy": null,
      "createTime": null,
      "updateTime": null,
      "children": null
    }
  ]
}

module.exports = app => {

  //公有云
  app.get('/api/business/resource/queryPage', function (req, res) {
    res.send(featureList);
  });
  app.get('/api/business/resource/queryDetail', function (req, res) {
    res.send(feature);
  });

  app.get('/api/business/address/queryPage', function (req, res) {
    res.send(addressList);
  });
  app.get('/api/business/address/queryDetail', function (req, res) {
    res.send(address);
  });

  app.get('/api/business/menu/queryList', function (req, res) {
    res.send(menuList);
  });
  app.get('/api/business/menu/queryDetail', function (req, res) {
    res.send(menu);
  });

  //公有云后台
  app.get('/api/resource/queryPage', function (req, res) {
    res.send(backstageFeatureList);
  });
  app.get('/api/resource/queryDetail', function (req, res) {
    res.send(backstageFeature);
  });

  app.get('/api/address/queryPage', function (req, res) {
    res.send(backstageAddressList);
  });
  app.get('/api/address/queryDetail', function (req, res) {
    res.send(backstageAddress);
  });

  app.get('/api/menu/queryList', function (req, res) {
    res.send(backstageMenuList);
  });
  app.get('/api/menu/queryDetail', function (req, res) {
    res.send(backstageMenu);
  });

  app.get('/api/role/queryList', function(req, res) {
    res.send(roleList);
  });

  //下拉菜单
  app.get('/api/business/resource/queryFunction', function (req, res) {
    res.send(featureGroup);
  });
  app.get('/api/business/address/queryAddressList', function (req, res) {
    res.send(addressGroup);
  });
  app.get('/api/business/menu/queryParentList', function (req, res) {
    res.send(menuGroup);
  });

  app.get('/api/resource/queryFunction', function (req, res) {
    res.send(backstageFeatureGroup);
  });
  app.get('/api/address/queryAddressList', function (req, res) {
    res.send(backstageAddressGroup);
  });
  app.get('/api/menu/queryParentList', function (req, res) {
    res.send(backstageMenuGroup);
  });


}
