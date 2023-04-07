using Volo.Abp.Modularity;
using Volo.Abp.Shared.Hosting.AspNetCore;

namespace Volo.Abp.Shared.Hosting.Gateways;

[DependsOn(
    typeof(AbpSharedHostingAspNetCoreModule)
)]
public class AbpSharedHostingGatewaysModule : AbpModule
{
}