# -a 配置的端点名 --tartget 模块 -m module

# 生成identity service的api
abp generate-proxy -t ng -a AbpIdentity --target identity -m identity

# 生成account的api
abp generate-proxy -t ng -a AbpAccount --target account -m account