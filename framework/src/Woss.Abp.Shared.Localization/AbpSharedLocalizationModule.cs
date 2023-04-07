using Volo.Abp.Localization;
using Volo.Abp.Modularity;
using Volo.Abp.Shared.Localization.Localization;
using Volo.Abp.Validation;
using Volo.Abp.Validation.Localization;
using Volo.Abp.VirtualFileSystem;

namespace Volo.Abp.Shared.Localization;

[DependsOn(
    typeof(AbpValidationModule)
)]
public class AbpSharedLocalizationModule : AbpModule
{
    public override void ConfigureServices(ServiceConfigurationContext context)
    {
        Configure<AbpVirtualFileSystemOptions>(options => { options.FileSets.AddEmbedded<AbpSharedLocalizationModule>(); });

        Configure<AbpLocalizationOptions>(options =>
        {
            options.Resources
                .Add<AbpResource>("zh-Hans")
                .AddBaseTypes(typeof(AbpValidationResource)).AddVirtualJson("/Localization/Abp");

            options.DefaultResourceType = typeof(AbpResource);
        });
    }
}