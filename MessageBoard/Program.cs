
namespace MessageBoard;

public class MessageBoard
{
    public static void Main(string[] args)
    {
        var options = new WebApplicationOptions
        {
            ContentRootPath = "C:/Users/User/Documents/messageboard/wwwroot",
            WebRootPath = "C:/Users/User/Documents/messageboard/wwwroot",
            Args = args,
            EnvironmentName = "Development"
        };

        var builder = WebApplication.CreateBuilder(options);
        var app = builder.Build();

        var defaultFileOptions = new DefaultFilesOptions();

        defaultFileOptions.DefaultFileNames.Clear();

        defaultFileOptions.DefaultFileNames.Add("index.html");

        app.UseDefaultFiles(defaultFileOptions);

        app.UseStaticFiles();

        app.Run(async (context) =>
        {
            await context.Response.WriteAsync("Request handled and response generated");
        });

        app.Run();
    }
}
