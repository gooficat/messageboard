
namespace MessageBoard;

public class MessageBoard
{
    public static void Main(string[] args)
    {
        var options = new WebApplicationOptions
        {
            WebRootPath = "../wwwroot",
            Args = args,
            EnvironmentName = "Development"
        };

        var builder = WebApplication.CreateBuilder(options);
        var app = builder.Build();
        app.MapGet("/", () => $"EnvironmentName: {app.Environment.EnvironmentName}\n" +
        $"ApplicationName: {app.Environment.ApplicationName}\n" +
        $"WebRootPath: {app.Environment.WebRootPath}\n" +
        $"ContentRootPath: {app.Environment.ContentRootPath}");

        app.Run();
    }
}
