using Serilog;
using Volo.Abp.DependencyInjection;

namespace Volo.Abp.Shared.Hosting.Microservices;

public abstract class PendingMigrationsCheckerBase : ITransientDependency
{
    protected async Task TryAsync(Func<Task> task, int retryCount = 3)
    {
        try
        {
            await task();
        }
        catch (Exception ex)
        {
            retryCount--;
            if (retryCount <= 0) throw;
            Log.Warning($"{ex.GetType().Name} has been thrown. The operation will be tried {retryCount} times more. Exception:\n{ex}");
            await Task.Delay(RandomHelper.GetRandom(5000, 15000));
            await TryAsync(task, retryCount);
        }
    }
}