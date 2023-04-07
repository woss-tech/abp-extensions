namespace Woss.Abp.EntityFrameworkCore.Extensions.EntityFrameworkCore;

public class ModelBuilderConfigurationOptions
{
    public NameConvertType NameConvertType { get; set; } = NameConvertType.SnakeCase;
}

public enum NameConvertType
{
    SnakeCase,

    PascalCase
}