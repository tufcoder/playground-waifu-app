```bash
dotnet new web -n minimal-dotnet-backend
cd minimal-dotnet-backend
dotnet new gitignore
dotnet new editorconfig
dotnet new readme
dotnet new sln
dotnet sln add <csproj>
dotnet add package Swashbuckle.AspNetCore
dotnet add package Microsoft.AspNetCore.OpenApi
```