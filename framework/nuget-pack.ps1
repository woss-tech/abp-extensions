#write-host "Pack Woss.Abp.Shared.Hosting"
#cd ./src/Woss.Abp.Shared.Hosting
#rmdir ./bin/Release -Recurse 
#dotnet pack -c Release
#cd ./bin/Release/
#dotnet nuget push "*.nupkg" -s gitlab --skip-duplicate
#cd ../../../../
#
#write-host "Pack Woss.Abp.Shared.Hosting.AspNetCore"
#cd ./src/Woss.Abp.Shared.Hosting.AspNetCore
#rmdir ./bin/Release -Recurse 
#dotnet pack -c Release
#cd ./bin/Release/
#nuget push "*.nupkg" -Source gitlab -SkipDuplicate
#cd ../../../../
#
#write-host "Pack Woss.Abp.Shared.Hosting.Gateways"
#cd ./src/Woss.Abp.Shared.Hosting.Gateways
#rmdir ./bin/Release -Recurse 
#dotnet pack -c Release 
#cd ./bin/Release/
#nuget push "*.nupkg" -Source gitlab -SkipDuplicate
#cd ../../../../

write-host "Pack Woss.Abp.Shared.Hosting.Microservices"
cd ./src/Woss.Abp.Shared.Hosting.Microservices
rmdir ./bin/Release -Recurse 
dotnet pack -c Release 
cd ./bin/Release/
dotnet nuget push "*.nupkg" -s gitlab --skip-duplicate
cd ../../../../

#write-host "Pack Woss.Abp.Shared.Localization"
#cd ./src/Woss.Abp.Shared.Localization
#rmdir ./bin/Release -Recurse 
#dotnet pack -c Release 
#cd ./bin/Release/
#nuget push "*.nupkg" -Source gitlab -SkipDuplicate
#cd ../../../../



