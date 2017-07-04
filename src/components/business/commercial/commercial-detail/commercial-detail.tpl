<div class="commercialDetail-wrap">
  <tab-panel :tab-items="tabItems">
    <panel-ele>
      <div class="edit-content">
        <div class="details">
          <div class="edit-title">
            <span>基本信息</span>
            <a class="edit-href" v-link = "{ path: '/page/commercialList/Edit', query: { id: info.id }}">编辑</a>
          </div>
          <div class="baseInfo-wrap">
            <div class="baseInfo">{{info.commLevel != 3 ? "商户号" : "子商户号"}}：{{ info.merchants | isNull }}</div>
            <div class="baseInfo">业务类型：{{ info.businessType == 0 ? '充电':'租车' }}</div>
            <div class="baseInfo">{{info.commLevel != 3 ? "商户类型" : "子商户类型"}}：{{ info.commType | commType }}</div>
            <div class="baseInfo">商户级别：{{ info.commLevel | commLevel }}</div>
            <div class="baseInfo">商户行业：{{ info.commIndustry | commIndustry }}</div>
            <div class="baseInfo">商户类别：{{ info.commCategory | commCategory }}</div>
            <div class="baseInfo">{{info.commLevel != 3 ? "商户名称" : "子商户名称"}}：{{ info.commName | isNull }}</div>
            <div class="baseInfo">{{info.commLevel != 3 ? "商户简称" : "子商户简称"}}：{{ info.shortName | isNull }}</div>
            <div class="baseInfo" v-show="info.commLevel == 2">所属集团商户：{{ info.pid | groupComm }}</div>
            <div class="baseInfo" v-show="info.commLevel == 3">所属商户：{{ info.pid | groupComm }}</div>
            <div class="baseInfo">运营方式：{{ info.operateType | operateType }}</div>
            <div class="baseInfo">运营商：{{ operateName }}</div>
            <div class="baseInfo">联系人：{{ info.contacts | isNull }}</div>
            <div class="baseInfo">联系电话：{{ info.phone | isNull }}</div>
            <div class="baseInfo">联系邮箱：{{ info.email | isNull }}</div>
            <div class="baseInfo">组织机构代码：{{ info.code | isNull }}</div>
            <div class="baseInfo">创建时间：{{ info.createTime | getNormalTime }}</div>
            <div class="baseInfo">客服电话：{{ info.servicePhone | isNull}}</div>
            <div class="baseInfo-block" v-show="info.commLevel != 2">商户：{{ info.name | isNull }}</div>
            <div class="baseInfo-block">
              <span>图片：</span>
              <div class="img-wrap">
                <img :src="info.commLogo || defaultImg" alt="">
                <p>logo图片</p>
              </div>
              <div class="img-wrap">
                <img :src="info.commIcon || defaultImg" alt="">
                <p>icon图标</p>
              </div>
            </div>
          </div>
          <div class="edit-title">
            <span>公司信息</span>
            <a class="edit-href" v-link = "{ path: '/page/commercialList/Edit', query: { id: info.id }}">编辑</a>
          </div>
          <div class="companyInfo-detail-wrap">
            <div class="baseInfo">公司地址：{{ companyAdd }}</div>
            <div class="baseInfo">公司类型：{{ info.companyType | companyType }}</div>
            <div class="baseInfo">成立日期：{{ info.registrationTime | getNormalTime }}</div>
            <div class="baseInfo">注册资金：{{ info.registrationAmount | isNull }}</div>
            <div class="baseInfo">法人代表：{{ info.legalPerson | isNull }}</div>
            <div class="baseInfo-block">
              <span>营业执照照片：</span>
              <div class="img-wrap">
                <img :src="info.businessLicence || defaultImg" alt="">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </panel-ele>
    <panel-ele>
      <div class="edit-content">
        <commercial-server
          v-if="isEditAccount" 
          :merchant-detail="merchantDetail"></commercial-server>
        <div class="account-detail" v-if="!isEditAccount">
          <div class="edit-title">
            <span>登录账号</span>
            <a class="edit-href" @click="editAccount">编辑</a>
          </div>
          <div class="adminInfo-wrap">
            <div class="baseInfo">姓名：{{ merchantDetail.merchant.merchant | isNull }}</div>
            <div class="baseInfo">密码：{{ merchantDetail.merchant.password | isNull }}</div>
            <div class="baseInfo">手机：{{ merchantDetail.merchant.phone | isNull }}</div>
            <div class="baseInfo">邮箱：{{ merchantDetail.merchant.email | isNull }}</div>
          </div>
        </div>
        <div class="edit-title">
          <span>业务信息</span>
        </div>
        <div class="adminInfo-wrap">
          <div class="baseInfo">缴纳保证金：{{ merchantDetail.isBond == 0 ?'否': '是' }}</div>
          <div class="baseInfo">保证金金额：{{ merchantDetail.bondAmount | bondAmount }}</div>
          <div class="baseInfo-block">充电模式：按金额</div>
          <div class="baseInfo">
            <div class="money-show">
              <span v-for="item in merchantDetail.prepayAmountList">{{item.amount |rent}}</span>
            </div>
          </div>
        </div>
     </div>
    </panel-ele>
    <panel-ele>
      <div class="edit-content">
        <config-info  
          :config-param="configParams"
          v-if="configEdit"></config-info>
        <div class="config-wrap" v-if="!configEdit">
          <div class="edit-title">
            <span>配置信息</span>
            <a class="edit-href" @click="editConfig">编辑</a>
          </div>
          <div class="adminInfo-wrap">
            <div class="baseInfo">组织机构代码：{{ configParams.operatorId | isNull }}</div>
            <div class="baseInfo">token密钥：{{ configParams.operatorSecret | isNull }}</div>
            <div class="baseInfo">回调地址：{{ configParams.callback | isNull }}</div>
          </div>
        </div>
      </div>
    </panel-ele>
  </tab-panel>
</div>