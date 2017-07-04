var express = require('express');
var app = express();
require('./cloud')(app);

var carType = {
    "code": 0,
    "data": {
      "records": [
        {
          "createtime": 1470886641001,
          "id": 1,
          "brandName":'宝马',
          "name":'i8',
          "typeName":'RV_231'
        },
        {
          "createtime": 1470883431000,
          "id": 6,
          "brandName":'特斯拉',
          "name":'高级充电汽车',
          "typeName":'ModelS'
        }
      ],
      "pager" : {
         "total" : 200,
         "limit" : 2147483647,
         "pages" : 10,
         "current" : 5,
         "size" : 10
      }
    },
    "success": true
};

var carSeries = {
      "code": 0,
      "data": {
          "pager": {
              "total": 8,
              "limit": 2147483647,
              "pages": 1,
              "current": 1,
              "size": 15
          },
          "records": [
              {
                  "brandName": "宝马",
                  "createtime": 1470824520000,
                  "id": 4,
                  "intro": "2b3c",
                  "logo": "http://test.platform.chargerlink.com/img/car/icon_smart.png",
                  "name": "2b",
                  "status": 1
              },
              {
                  "brandName": "比亚迪",
                  "createtime": 1470725194000,
                  "id": 3,
                  "intro": "dfsf",
                  "logo": "http://test.platform.chargerlink.com/img/car/icon_smart.png",
                  "name": "dfdsf",
                  "status": 2
              },
              {
                  "brandName": "特斯拉",
                  "createtime": 1470725229000,
                  "id": 5,
                  "intro": "vxv",
                  "logo": "http://test.platform.chargerlink.com/img/car/icon_smart.png",
                  "name": "dff",
                  "status": 1
              },
              {
                  "brandName": "东风标致",
                  "createtime": 1470725284000,
                  "id": 1,
                  "intro": "bfg",
                  "logo": "http://test.platform.chargerlink.com/img/car/icon_smart.png",
                  "name": "ngn",
                  "status": 1
              }
          ]
      },
      "success": true,
      "code": 0,
      "message": "水的一B"
};

var carBrand =  {
    "code": 0,
    "data": {
        "pager": {
            "total": 2,
            "limit": 2147483647,
            "pages": 1,
            "current": 1,
            "size": 15
        },
        "records": [
            {
                "brandName": "宝马X6",
                "createtime": 1471241738000,
                "id": 2,
                "intro": "宝马电动车",
                "logo": "http://test.platform.chargerlink.com/img/car/icon_smart.png",
                "officialSite": "http://www.baoma.com",
                "status": 0
            },
            {
                "brandName": "宝马X7",
                "createtime": 1471241725000,
                "id": 1,
                "intro": "宝马自行车+电动车",
                "logo": "http://test.platform.chargerlink.com/img/car/icon_smart.png",
                "officialSite": "http://www.baoma.com",
                "status": 1
            }
        ]
    },
    "message": "success",
    "success": true
};

var brandList = {
  "code": 0,
  "data": {
    "records": [
      {
        "brandName": "7dfsd",//品牌名
        "createtime": "1470815971000",//创建时间
        "status": 1,    //状态分为1和0
        "id"  : 1
      },
      {
        "brandName": "csvsv",//品牌名
        "createtime": "1470651412000",//创建时间
        "intro": " svsdv",//简介
        "logo": "csvsv",//logo
        "officialSite": "sdfsfc",//官方网站
        "id"  : 11
      },
      {
        "brandName": "cxcx",
        "createtime": "1470648489000",
        "intro": "dfdf",
        "logo": "xcsxc",
        "officialSite": " xvvdd",
        "id"  : 111
      },
    ]
  },
  "code":0,
  "message":"成功"
};

var carList = {
  "code": 0,
  "data": {
    "records": [
      {
        "brandName": "",
        "createtime": 1470725229000,
        "intro": "vxv",
        "logo": "fsf",
        "name": "dff",
        "status": 1,
        "id"  : 1
      },
      {
        "brandName": "",
        "createtime": 1470827692000,
        "name": "helloworld",
        "status": 1,
        "id"  : 11
      },
      {
        "brandName": "",
        "createtime": 1470725284000,
        "intro": "bfg",
        "logo": "bgb",
        "name": "ngn",
        "status": 1,
        "id"  : 111
      }
    ]
  },
  "code":0,
  "message":"成功"
};

var hardwareList = {
    "code" : 0,
    "data" : {
        "pager" : {
             "total" : "2",    //总条数
             "limit" : "2147483647", //最大限制条数
             "pages" : "1", //总页数
             "current" : "1", //当前页
             "size" : "10" //每页数据条数
        },
        "records" : [
              {
                  "addWay" : "1", //添加方式 1：新增 2：采集
                  "brandList" : [
                       {
                            "brandName" : "特斯拉",    //品牌名称
                            "createtime" : "1470823082000", //创建时间
                            "id" : "1", //品牌id
                            "intro" : "特斯拉电动车",//品牌介绍
                            "officialSite" : "www.tesla.com",//官方地址
                            "status" : "0"  //状态
                       }
                  ],
                  "brands" : "1,2",
                  "businessSource" : "其他", //商户来源
                  "chargeInterfaceNum" : "2", //充电接口数量
                  "chargeWay" : "1", //(充电方式)连接线/便携充
                  "createtime" : "1470643062000", //创建时间
                  "currentList" : [
                      {
                            "chargeInterface" : "1", //充电接头类型
                            "createtime" : "1470704877000", //创建时间
                            "current" : "1", //电流
                            "currentType" : "1", //电流类型1：交流 2：直流
                            "deviceId" : "1", //设备id
                            "id" : "1", //输出电流id
                            "powerKw" : "11", //功率
                            "standard" : "1", //标准
                            "status" : "1", //
                            "voltage" : "1" //电压
                       }
                  ],
                  "currentOutType" : "1", //电流输出类型  1:交流 2：直流
                  "deviceDesc" : "用于特斯拉电动车充电", //设备描述
                  "deviceModel" : "2", //设备型号
                  "deviceName" : "设备名称1", //设备名称
                  "deviceSeries" : "1", //设备系列
                  "deviceType" : "1", //设备类型
                  "id" : "1",
                  "imgUrl" : "'http://placehold.it/350x150'", //设备图片
                  "interfaceStandard" : "1", //接口标准  1：国标 2:欧标
                  "modelList" : [
                          {
                          "id":1,//车型id
                          "brandId":1,  //车系id
                          "seriesId":1, //品牌id
                          "year":"2016",//车型年份
                          "typeName":"2015年豪华版" //车型名称
                          }
                  ],
                  "models" : "1,2",
                  "operateId" : "1", //运营商id
                  "ratedCurrent" : "10", //额定电流
                  "ratedPower" : "100", //额定功率
                  "ratedVoltage" : "220", //额定电压
                  "sbluetooth" : "1", //是否支持蓝牙
                  "smeasureElec" : "1",//是否支持端桩计量
                  "semergencyStopBtn" : "1", //是否支持急停按钮
                  "sinNet" : "1", //是否对接充电网  1：已对接充电网  2：未对接充电网 3：直接和平台对接
                  "sinNetDetail" : "1",  //1：自建电桩  2：对接内置网络盒子 3：直接和平台对接
                  "skeybody" : "1",  //是否支持键盘
                  "skeybodyDetail" : "1", //1：物理键盘 2：虚拟键盘
                  "slock" : "1", //是否支持桩端锁 1：支持  2：不支持 3：未知

                  "slockDetail" : "1",//1：支持pin码解锁  2：不支持PIN码解锁
                  "snet" : "1",
                  "spos" : "1",  //是否支持刷卡1：支持 2：不支持 3：未知
                  "sposDetail" : "1",//1：储值卡  2：鉴权卡
                  "sscreen" : "1", //是否支持显示屏  1：支持 2：不支持 3：未知
                  "sscreenColorType" : "1",//显示屏颜色  1：黑白 2：彩色
                  "sscreenScale" : "12",//显示屏尺寸
                  "status" : "1"
             }
        ]
   },
   "success" : "true" ,
   "message" : "操作成功！"
};

//岗位列表
var jobSetList = {
  "code": 0,
  "message": "成功",
  "data": {
    "pager" : {
       "total" : "2",    //总条数
       "limit" : "2147483647", //最大限制条数
       "pages" : "1", //总页数
       "current" : "1", //当前页
       "size" : "10" //每页数据条数
    },
    "offset": 0,
    "limit": 2147483647,
    "total": 51,
    "size": 2147483647,
    "pages": 1,
    "current": 1,
    "searchCount": true,
    "records": [
      {
        "id": 1,
        "empCount": 0,
        "status": true,
        "positionName": "string111"
      },
      {
        "id": 3,
        "empCount": 0,
        "status": true,
        "positionName": "人事2312"
      },
      {
        "positionName": "string111",
        "empCount": 0,
        "id": 2,
        "status": true
      },
      {
        "positionName": "人事",
        "empCount": 0,
        "id": 7,
        "status": true
      },
      {
        "positionName": "人事2333",
        "empCount": 0,
        "id": 6,
        "status": true
      },
      {
        "positionName": "人事2",
        "empCount": 0,
        "id": 7,
        "status": true
      }
    ],
    "orderByField": null,
    "asc": true,
    "offsetCurrent": 0
  }
};

var jobSetDetails = {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 1,
    "positionName": "hr",
    "status": 1,
    "updateBy": null,
    "updateTime": 1472022917000,
    "isDelete": 0
  }
}

//员工列表
var staffSetList = {
  "code": 0,
  "message": "成功",
  "data": {
    "pager" : {
       "total" : "2",    //总条数
       "limit" : "2147483647", //最大限制条数
       "pages" : "1", //总页数
       "current" : "1", //当前页
       "size" : "10" //每页数据条数
    },
    "offset": 0,
    "limit": 2147483647,
    "total": 3,
    "size": 10,
    "pages": 1,
    "current": 1,
    "searchCount": true,
    "records": [
      {
        "empName": "string323233",
        "telephone": "string",
        "id": 3,
        "empNo": "string",
        "tencentQq": 0,
        "email": "string"
      },
      {
        "positionName": "hr",
        "deptName": "chargerlink",
        "empName": "csddadf",
        "telephone": "0",
        "id": 1,
        "empNo": "111",
        "tencentQq": 0,
        "email": "0"
      },
      {
        "positionName": "hr",
        "deptName": "chargerlink",
        "empName": "asdf",
        "telephone": "2",
        "id": 2,
        "empNo": "222",
        "tencentQq": 0,
        "email": "2"
      }
    ],
    "orderByField": null,
    "asc": true,
    "offsetCurrent": 0
  }
}

//员工详情
var staffSetDetail = {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 1,
    "empName": "csddadf",
    "empNo": "111",
    "email": "0",
    "telephone": "0",
    "tencentQq": 0,
    "positionId": 13,
    "departmentId": 1,
    "status": 1,
    "updateBy": null,
    "updateTime": null
  }
}

//账户列表
var accountList = {
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
    "pager" : {
       "total" : "2",
       "limit" : "2147483647",
       "pages" : "1",
       "current" : "1",
       "size" : "10"
    },
    "records": [
      {
        "id": 1,
        "username": "charger",
        "last_login_time": 1472023284000,
        "status": 0,
        "position_id": 1,
        "emp_name": "asdf",
        "dept_name": "chargerlink",
        "role_names": "role1,role3,role2",
        "position_name": "hr"
      },
      {
        "id": 1,
        "username": "chargerlink",
        "last_login_time": 1472023284000,
        "status": 0,
        "position_id": 1,
        "emp_name": "csddadf",
        "dept_name": "chargerlink",
        "role_names": "role3,role1,role2",
        "position_name": "hr"
      }
    ],
    "orderByField": null,
    "asc": true,
    "offsetCurrent": 0
  }
}

//账户详情
var accountDetail = {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 1,
    "username": "chargerlink",
    "status": 0,
    "emp_name": "csddadf",
    "role_ids": "1222,272",
    "role_names": "role1,role2,role3",
    "employee_id": 13
  }
}

//角色列表
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
    "pager" : {
       "total" : "2",    //总条数
       "limit" : "2147483647", //最大限制条数
       "pages" : "1", //总页数
       "current" : "1", //当前页
       "size" : "10" //每页数据条数
    },
    "records": [
      {
        "id": 1222,
        "name": "role1",
        "isDelete": null,
        "description": null,
        "status": 1,
        "updateBy": null,
        "updateTime": null
      },
      {
        "id": 272,
        "name": "role11",
        "isDelete": null,
        "description": null,
        "status": 1,
        "updateBy": null,
        "updateTime": null
      },
      {
        "id": 273,
        "name": "role11",
        "isDelete": null,
        "description": null,
        "status": 1,
        "updateBy": null,
        "updateTime": null
      },
      {
        "id": 274,
        "name": "role11",
        "isDelete": null,
        "description": null,
        "status": 1,
        "updateBy": null,
        "updateTime": null
      },
      {
        "id": 275,
        "name": "role11",
        "isDelete": null,
        "description": null,
        "status": 1,
        "updateBy": null,
        "updateTime": null
      },{
        "id": 276,
        "name": "role11",
        "isDelete": null,
        "description": null,
        "status": 1,
        "updateBy": null,
        "updateTime": null
      },
      {
        "id": 278,
        "name": "role11",
        "isDelete": null,
        "description": null,
        "status": 1,
        "updateBy": null,
        "updateTime": null
      }
    ],
    "orderByField": null,
    "asc": true,
    "offsetCurrent": 0
  }
}

//角色详情
var roleDetail = {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 42,
    "name": "role_test",
    "status": 1,
    "resourceRoleList": [
      {
        "id": 4,
        "roleId": 42,
        "resourceId": 1
      },
      {
        "id": 6,
        "roleId": 42,
        "resourceId": 5
      }
    ]
  }
}

//组织列表
var organizeList = {
  "code": 0,
  "message": "成功",
  "data": [
    {
      "id": 1,
      "deptName": "chargerlink",
      "parentId": 0,
      "sort": 1,
      "isDelete": null,
      "status": 1,
      "updateBy": null,
      "updateTime": null,
      "children": [
        {
          "id": 2,
          "deptName": "dept1",
          "parentId": 1,
          "sort": 1,
          "isDelete": null,
          "status": 1,
          "updateBy": null,
          "updateTime": null,
          "children": [
            {
              "id": 4,
              "deptName": "dept1-1",
              "parentId": 2,
              "sort": 1,
              "isDelete": null,
              "status": 1,
              "updateBy": null,
              "updateTime": null,
              "children": [
                {
                  "id": 7,
                  "deptName": "dept1-1-1",
                  "parentId": 4,
                  "sort": 2,
                  "isDelete": null,
                  "status": 1,
                  "updateBy": null,
                  "updateTime": null,
                  "children": null
                },
                {
                  "id": 8,
                  "deptName": "dept1-1-2",
                  "parentId": 4,
                  "sort": 2,
                  "isDelete": null,
                  "status": 1,
                  "updateBy": null,
                  "updateTime": null,
                  "children": [
                    {
                      "id": 9,
                      "deptName": "dept1-1-2-1",
                      "parentId": 8,
                      "sort": 1,
                      "isDelete": null,
                      "status": 1,
                      "updateBy": null,
                      "updateTime": null,
                      "children": null
                    }
                  ]
                }
              ]
            },
            {
              "id": 5,
              "deptName": "dept1-2",
              "parentId": 2,
              "sort": 2,
              "isDelete": null,
              "status": 1,
              "updateBy": null,
              "updateTime": null,
              "children": null
            },
            {
              "id": 6,
              "deptName": "dept1-3",
              "parentId": 2,
              "sort": 4,
              "isDelete": null,
              "status": 1,
              "updateBy": null,
              "updateTime": null,
              "children": null
            }
          ]
        },
        {
          "id": 16,
          "deptName": "dept-test003",
          "parentId": 1,
          "sort": 1,
          "isDelete": null,
          "status": 1,
          "updateBy": null,
          "updateTime": null,
          "children": null
        },
        {
          "id": 17,
          "deptName": "dept-test03",
          "parentId": 1,
          "sort": 1,
          "isDelete": null,
          "status": 1,
          "updateBy": null,
          "updateTime": null,
          "children": null
        },
        {
          "id": 3,
          "deptName": "dept2",
          "parentId": 1,
          "sort": 2,
          "isDelete": null,
          "status": 1,
          "updateBy": null,
          "updateTime": null,
          "children": [
            {
              "id": 10,
              "deptName": "dept2-1",
              "parentId": 3,
              "sort": 1,
              "isDelete": null,
              "status": 1,
              "updateBy": null,
              "updateTime": null,
              "children": null
            },
            {
              "id": 11,
              "deptName": "dept2-2",
              "parentId": 3,
              "sort": 2,
              "isDelete": null,
              "status": 1,
              "updateBy": null,
              "updateTime": null,
              "children": null
            }
          ]
        }
      ]
    },
    {
      "id": 12,
      "deptName": "aaaa",
      "parentId": 0,
      "sort": 1,
      "isDelete": null,
      "status": 1,
      "updateBy": null,
      "updateTime": null,
      "children": [
        {
          "id": 14,
          "deptName": "dept-test01",
          "parentId": 12,
          "sort": 1,
          "isDelete": null,
          "status": 1,
          "updateBy": null,
          "updateTime": null,
          "children": null
        },
        {
          "id": 15,
          "deptName": "dept-test02",
          "parentId": 12,
          "sort": 1,
          "isDelete": null,
          "status": 1,
          "updateBy": null,
          "updateTime": null,
          "children": [
            {
              "id": 18,
              "deptName": "dept-test04",
              "parentId": 15,
              "sort": 1,
              "isDelete": null,
              "status": 1,
              "updateBy": null,
              "updateTime": null,
              "children": [
                {
                  "id": 19,
                  "deptName": "dept-test05",
                  "parentId": 18,
                  "sort": 1,
                  "isDelete": null,
                  "status": 1,
                  "updateBy": null,
                  "updateTime": null,
                  "children": null
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": 13,
      "deptName": "dept-test",
      "parentId": 0,
      "sort": 1,
      "isDelete": null,
      "status": 1,
      "updateBy": null,
      "updateTime": null,
      "children": null
    }
  ]
}

//组织详情
var organizeDetail =  {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 1,
    "deptName": "chargerlink",
    "parentId": 0,
    "sort": 1,
    "isDelete": null,
    "status": 1,
    "updateBy": 1,
    "updateTime": 1472019240000,
    "children": null
  }
}

//权限功能菜单结构

var queryResourceTree = {
  "code": 0,
  "message": "成功",
  "data": [
    {
      "id": 1,
      "name": "系统",
      "parentId": 0,
      "status": null,
      "icon": "系统icon",
      "url": "/api/address/queryPage",
      "urlId": 1,
      "children": [
        {
          "id": 3,
          "name": "地址管理",
          "parentId": 1,
          "status": null,
          "icon": "地址管理icon",
          "url": "/api/address/queryPage",
          "urlId": 1,
          "children": [
            {
              "id": 4,
              "name": "地址add",
              "parentId": 3,
              "status": null,
              "icon": "图标",
              "url": "/api/address/add",
              "urlId": 4,
              "children": null
            },
            {
              "id": 5,
              "name": "地址update",
              "parentId": 3,
              "status": null,
              "icon": "图标",
              "url": "/api/address/update",
              "urlId": 5,
              "children": null
            },
            {
              "id": 6,
              "name": "地址update1",
              "parentId": 3,
              "status": null,
              "icon": "图标",
              "url": "/api/address/update",
              "urlId": 5,
              "children": null
            },
            {
              "id": 1,
              "name": "地址列表",
              "parentId": 3,
              "status": null,
              "icon": "图标",
              "url": "/api/address/queryPage",
              "urlId": 1,
              "children": null
            }
          ]
        },
        {
          "id": 4,
          "name": "功能管理",
          "parentId": 1,
          "status": null,
          "icon": "管理icon",
          "url": "/api/resource/queryPage",
          "urlId": 3,
          "children": [
            {
              "id": 3,
              "name": "功能列表1",
              "parentId": 4,
              "status": null,
              "icon": "图标",
              "url": "/api/menu/queryPage",
              "urlId": 6,
              "children": null
            },
            {
              "id": 2,
              "name": "功能列表",
              "parentId": 4,
              "status": null,
              "icon": "图标",
              "url": "/api/resource/queryPage",
              "urlId": 3,
              "children": null
            }
          ]
        },
        {
          "id": 5,
          "name": "菜单管理",
          "parentId": 1,
          "status": null,
          "icon": "管理icon",
          "url": "/api/menu/queryPage",
          "urlId": 6,
          "children": []
        }
      ]
    },
    {
      "id": 2,
      "name": "个人中心",
      "parentId": 0,
      "status": null,
      "icon": "个人中心icon",
      "url": "/api/address/queryPage",
      "urlId": 1,
      "children": []
    }
  ]
}

var hardWareEditInfo = {
    "code": 0,
    "data": { 
      "addWay" : "1",
      "brandList" : [
            { 
                "brandName" : "特斯拉",   
                "createtime" : "1470823082000", 
                "id" : "1", 
                "intro" : "特斯拉电动车",
                "officialSite" : "www.tesla.com",
                "status" : "0"  
           }
      ], 
      "brands" : "", 
      "businessSource" : "其他", 
      "chargeInterfaceNum" : "2", 
      "chargeWay" : "1", 
      "createtime" : "1470643062000", 
      "currentList" : [
           { 
                "chargeInterface" : "1", 
                "createtime" : "1470704877000",
                "zcurrent" : "100", 
                "jcurrent" : "10", 
                "currentType" : "1", 
                "deviceId" : "1",
                "id" : "1", 
                "powerKw" : "11",
                "standard" : "1",
                "status" : "1",
                "zvoltage" : "20",
                "jvoltage" : "220"
           } 
      ], 
      "currentOutType" : "1", 
      "deviceDesc" : "用于特斯拉电动车充电", 
      "deviceModel" : "2", 
      "deviceName" : "设备名称1",
      "deviceSeries" : "1", 
      "deviceType" : "1",
      "id" : "1", 
      "imgUrl" : "test.jpg,test2.jpg,test3.jpg",
      "interfaceStandard" : "1",
      "modelList" : [
              {
              "id":1,
              "brandId":1,  
              "seriesId":1, 
              "year":"2016",
              "typeName":"2015年豪华版" 
              }
      ], 
      "models" : "", 
      "operateId" : "1", 
      "ratedCurrent" : "10",
      "ratedPower" : "100", 
      "ratedVoltage" : "220",
      "sbluetooth" : "1", 
      "smeasureElec" : "1",
      "semergencyStopBtn" : "1",
      "sinNet" : "1", 
      "sinNetDetail" : "1",
      "skeybody" : "1", 
      "skeybodyDetail" : "1",
      "slock" : "1", 
      "slockDetail" : "1",
      "snet" : "1", 
      "spos" : "1",
      "sposDetail" : "1",
      "sscreen" : "1", 
      "sscreenColorType" : "1",
      "sscreenScale" : "12",
      "status" : "1",
      "remark": "23213"
    }
}

var operateList = {
    "code": 0,
    "data": [
        {
            "createtime": 1471508656000,
            "fullName": "特斯拉厂商", 
            "id": 1,
            "logo": "112.jpg",  
            "name": "特斯拉",
            "operateType": 11,
            "remark": "121",
            "servicePhone": "121",
            "serviceTime": "121",
            "source": 12,
            "status": 1
        }
    ],
    "message": "成功"
}

var deviceList = { 
     "code" : 0,
     "message"  :   "返回成功",
     "data" : [
         { 
             "id" : "1", 
             "name" : "特斯拉", 
             "createtime" : 12121211121211,
             "status" : "0" 
        }
     ]
}

var seriesList =  { 
     "code" : 0, 
     "data" : [ 
           { 
               "createtime" : "1471510159000", 
               "id" : "1", 
               "name" : "p1-P2",
               "status" : "0" 
          }
     ],
     "message" : "成功" 
}

var carBrandList = { 
     "code" : 0, 
     "data" : [ 
            { 
               "id" : 3, 
               "brandName" : "特斯拉",
               "officialSite" : "www.tesla.com",  
               "intro" : "特斯拉电动车", 
               "createtime" : "Aug 10, 2016 5:58:02 PM", 
               "status" : "0", 
               "seriesList": [
                {
                    "id": 1,
                    "brandId": 1,
                    "name": "X11111",
                    "createtime": 1471241780000,
                    "intro": "http: //www.baomao.com",
                    "logo": "111.jpg",
                    "status": 1,
                    "carTypeList": [
                        {
                            "id":11,
                            "seriesId": 1,
                            "brandId": 1,
                            "typeName": "helloWord"
                        }
                    ]

                }       
              ]
            },
            { 
               "id" : "2", 
               "brandName" : "特斯拉2",
               "officialSite" : "www.tesla.com",  
               "intro" : "特斯拉电动车3131", 
               "createtime" : "Aug 10, 2016 5:58:02 PM", 
               "status" : "0", 
               "seriesList": [
                {
                    "id": 2,
                    "brandId": 1,
                    "name": "X22222",
                    "createtime": 1471241780000,
                    "intro": "http: //www.baomao.com",
                    "logo": "111.jpg",
                    "status": 1,
                    "carTypeList": [
                        {
                            "id":1,
                            "seriesId": 1,
                            "brandId": 1,
                            "typeName": "3131helloWord"
                        },
                        {
                            "id":2,
                            "seriesId": 1,
                            "brandId": 1,
                            "typeName": "3131helloWord"
                        },
                        {
                            "id":3,
                            "seriesId": 1,
                            "brandId": 1,
                            "typeName": "3131helloWord"
                        },
                        {
                            "id":4,
                            "seriesId": 1,
                            "brandId": 1,
                            "typeName": "3131helloWord"
                        },
                        {
                            "id":5,
                            "seriesId": 1,
                            "brandId": 1,
                            "typeName": "3131helloWord"
                        }

                    ]
                },
                {
                    "id": 3,
                    "brandId": 1,
                    "name": "X2222222222",
                    "createtime": 1471241780000,
                    "intro": "http: //www.baomao.com",
                    "logo": "111.jpg",
                    "status": 1,
                    "carTypeList": [
                        {
                            "id":10,
                            "seriesId": 1,
                            "brandId": 1,
                            "typeName": "dasd"
                        }
                    ]

                }       
              ]
            } 
     ]
} 

var commercialInfo = {
  "code": 0,
  "message": "成功",
  "data": {
    "id": 63,
    "merchants": "A000001",
    "commType": 2,
    "commName": "充电网有限公司",
    "shortName": "充电网",
    "commLogo": null,
    "contacts": "开发",
    "phone": "13684785475",
    "email": "61233434@163.com",
    "createTime": 1474535630000,
    "commCategory": 1,
    "commIndustry": 1,
    "license": "1232343",
    "code": "20161035",
    "legalPerson": "12345",
    "province": "广东",
    "city": "深圳",
    "area": "南山",
    "detail": "航盛科技大厦",
    "merchant": {
      "merchantId": 48,
      "userName": "A000001admin",
      "password": "ENJUHMDE",
      "merchant": "开发",
      "phone": "13684785475",
      "email": "61233434@163.com",
      "status": 0,
      "createTime": 1474535630000,
      "updateTime": 1474535630000,
      "loginTime": null,
      "serviceTime": 1506038400000,
      "accountNumber": 10
    },
    "resources": [
      {
        "id": 1,
        "resoureName": "菜单结构",
        "parentResourceId": 3,
        "parentResourceName": "菜单结构3"
      },
      {
        "id": 2,
        "resoureName": "testUpdate",
        "parentResourceId": 1,
        "parentResourceName": "菜单结构"
      }
    ]
  }
}

var systemLog = {
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
        "createTime": "2016-09-23 03:09:35",
        "requestUrl": "/accesscontrol-web/api/business/menu/update",
        "clientIp": "0:0:0:0:0:0:0:1",
        "id": 1462,
        "account": "55(test)",
        "content": "菜单不存在"
      },
      {
       "createTime": "2016-09-23 03:09:35",
        "requestUrl": "/accesscontrol-web/api/business/menu/update",
        "clientIp": "0:0:0:0:0:0:0:1",
        "id": 1461,
        "account": "55(test)",
        "content": "菜单不存在"
      }
    ],
    "orderByField": null,
    "asc": true,
    "offsetCurrent": 0
  }
}
//================car====================

app.get('/api/carTypeInfo/findCarInfo', function (req, res) {
  res.send(carType);
});

app.get('/api/carSeries/findCarSeries', function (req, res) {
  res.send(carSeries);
});

app.get('/api/carBrand/findBrands', function (req, res) {
  res.send(carBrand);
});

//获取品牌下拉列表
app.get('/api/carTypeInfo/findBrandInfo', function (req, res) {
  res.send(brandList);
});

//获取车系下拉列表
app.get('/api/carSeries/findCarSeries', function (req, res) {
  res.send(carList);
});

//增加车型
app.get('/api/carTypeInfo/insertCarTypeInfo', function (req, res) {
  res.send({"code":0});
});

//=================system===================

//岗位查询
app.get('/api/position/queryPage', function (req, res) {
  res.send(jobSetList);
});

//岗位详情
app.post('/api/position/queryDetails', function (req, res) {
  res.send(jobSetDetails);
});

//岗位修改
app.post('/api/position/update', function (req, res) {
  res.send({'code': 0});
});

//员工列表
app.get('/api/employee/queryPage', function (req, res) {
  res.send(staffSetList);
});

//员工详情
app.post('/api/employee/queryDetails', function (req, res) {
  res.send(staffSetDetail);
});

//员工修改
app.post('/api/employee/update', function (req, res) {
  res.send({'code': 0});
});

//账户列表
app.get('/api/account/querypage', function (req, res) {
  res.send(accountList);
});

//账户详情
app.post('/api/account/detail', function (req, res) {
  res.send(accountDetail);
});

//角色列表
app.get('/api/role/queryList', function (req, res) {
  res.send(roleList);
});

//角色详情
app.post('/api/role/queryDetail', function (req, res) {
  res.send(roleDetail);
});

//角色修改
app.get('/api/role/add', function (req, res) {
  res.send({'code': 0});
});

//组织列表
app.get('/api/department/queryList', function (req, res) {
  res.send(organizeList);
});

//组织详情
app.get('/api/department/queryDetail', function (req, res) {
  res.send(organizeDetail);
});

//组织编辑
app.get('/api/department/update', function (req, res) {
  res.send({'code': 0});
});

//权限功能菜单结构
app.get('/api/menu/queryResourceTree', function (req, res) {
  res.send(queryResourceTree);
});


//================= hardware ================

app.get('/api/device/page', function (req, res) {
  res.send(hardwareList);
});

app.get('/api/device/findById', function (req, res) {
  res.send(hardWareEditInfo);
});

app.get('/api/operate/list', function (req, res) {
  res.send(operateList);
});

app.get('/api/device/manufacturer/list', function (req, res) {
  res.send(deviceList);
});

app.get('/api/device/series/list', function (req, res) {
  res.send(seriesList);
});

app.post('/api/carBrand/queryBrandRelatedList', function (req, res) {
  res.send(carBrandList);
});

//================= commercial ================
app.post('/api/commercial/findCommercialInfo', function (req, res) {
  res.send(commercialInfo);
});

//================= dataCenter ================
app.get('/api/systemLog/queryPage', function (req, res) {
  res.send(systemLog);
});

//================= other =================
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
