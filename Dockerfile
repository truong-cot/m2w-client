#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1 AS base

FROM mcr.microsoft.com/dotnet/core/sdk:3.1 AS build
ARG BUILD_CONFIGURATION=Release

WORKDIR /src
COPY Mobiplus/Mobiplus.csproj .
RUN dotnet restore 
COPY . .
WORKDIR "/src/."
RUN dotnet build "Mobiplus/Mobiplus.csproj" -c $BUILD_CONFIGURATION -o /app/build


RUN dotnet publish -c release -o /app

FROM build AS publish
FROM base AS final

RUN ln -fs /usr/share/zoneinfo/Asia/Ho_Chi_Minh /etc/localtime

WORKDIR /app
COPY --from=publish /app .
#RUN ls --recursive

#ENV AppSettings__DebugMode=True
ENV ASPNETCORE_URLS=http://+:6000
ENTRYPOINT ["dotnet", "WebAdmin.dll"]
