using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddHttpClient();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(c =>
{
    c.SwaggerDoc(
        "v1",
        new OpenApiInfo
        {
            Title = "Waifu API",
            Version = "V1"
        }
    );
});

builder.Services.AddOpenApi();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
    {
        policy.AllowAnyOrigin()
            .AllowAnyMethod()
            .AllowAnyHeader();
    });
});


var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI(c =>
    {
        c.SwaggerEndpoint("/swagger/v1/swagger.json", "Waifu API V1");
    });
}

app.MapGet("/api/waifu", async (HttpClient httpClient) =>
{
    var response = await httpClient.GetAsync("https://api.waifu.pics/sfw/waifu");

    if (response.IsSuccessStatusCode)
    {
        var content = await response.Content.ReadAsStringAsync();

        return Results.Text(content, "application/json");
    }

    return Results.StatusCode((int)response.StatusCode);
})
.Produces<string>(StatusCodes.Status200OK)
.Produces(StatusCodes.Status500InternalServerError)
.WithName("GetWaifu")
.WithOpenApi();

app.UseCors("AllowAll");

app.Run();
