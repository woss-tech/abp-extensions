using Medallion.Threading;
using Medallion.Threading.Redis;
using Microsoft.Extensions.DependencyInjection;
using StackExchange.Redis;
using Volo.Abp.AspNetCore.MultiTenancy;
using Volo.Abp.Caching;
using Volo.Abp.Caching.StackExchangeRedis;
using Volo.Abp.DistributedLocking;
using Volo.Abp.Modularity;
using Volo.Abp.MultiTenancy;
using Volo.Abp.Shared.Hosting.AspNetCore;

namespace Volo.Abp.Shared.Hosting.Microservices;

[DependsOn(
    typeof(AbpSharedHostingAspNetCoreModule),
    typeof(AbpAspNetCoreMultiTenancyModule),
    typeof(AbpCachingStackExchangeRedisModule),
    typeof(AbpDistributedLockingModule)
)]
public class AbpSharedHostingMicroservicesModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        var configuration = context.Services.GetConfiguration();

        Configure<AbpMultiTenancyOptions>(options => { options.IsEnabled = false; });
        Configure<AbpDistributedCacheOptions>(options => options.KeyPrefix = "Abp:");

        context.Services.AddSingleton<IDistributedLockProvider>(_ =>
        {
            var connection = ConnectionMultiplexer.Connect(configuration["Redis:Configuration"]);
            return new RedisDistributedSynchronizationProvider(connection.GetDatabase());
        });
    }
}