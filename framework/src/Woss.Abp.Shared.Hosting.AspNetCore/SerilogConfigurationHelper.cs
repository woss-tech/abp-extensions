using Serilog;
using Serilog.Events;

namespace Volo.Abp.Shared.Hosting.AspNetCore;

public static class SerilogConfigurationHelper
{
    public static void Configure(string applicationName)
    {
        const string logOutputTemplate = "[{Timestamp:HH:mm:ss} {Level:u3}] {RequestId:l} {Message:lj} {NewLine}{Exception}";

        Log.Logger = new LoggerConfiguration()
#if DEBUG
            .MinimumLevel.Debug()
#else
                .MinimumLevel.Information()
#endif
            .MinimumLevel.Override("Microsoft", LogEventLevel.Information)
            .MinimumLevel.Override("Microsoft.EntityFrameworkCore", LogEventLevel.Warning)
            .Enrich.FromLogContext()
            .Enrich.WithProperty("Application", $"{applicationName}")
            .WriteTo.Async(c => c.File("logs/.log", rollingInterval: RollingInterval.Day, retainedFileCountLimit: 7, outputTemplate: logOutputTemplate))
            .WriteTo.Async(c => c.Console(outputTemplate: logOutputTemplate))
            .CreateLogger();
    }
}