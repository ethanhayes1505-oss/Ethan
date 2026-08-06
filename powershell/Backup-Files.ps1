<#
.SYNOPSIS
    Copies files matching a pattern to a timestamped backup folder.

.DESCRIPTION
    Recursively finds files in the source directory that match the filter,
    then copies them (preserving the folder structure) into a new subfolder
    of the destination named like "Backup_2026-08-06_142530".

.PARAMETER Source
    The directory to back up from.

.PARAMETER Destination
    The directory that will hold the timestamped backup folder.

.PARAMETER Filter
    A wildcard filter for which files to copy. Defaults to * (everything).

.EXAMPLE
    .\Backup-Files.ps1 -Source C:\Projects -Destination D:\Backups -Filter *.docx
#>
param(
    [Parameter(Mandatory)]
    [string]$Source,

    [Parameter(Mandatory)]
    [string]$Destination,

    [string]$Filter = '*'
)

if (-not (Test-Path -Path $Source -PathType Container)) {
    Write-Error "Source not found or not a directory: $Source"
    exit 1
}

$timestamp = Get-Date -Format 'yyyy-MM-dd_HHmmss'
$backupRoot = Join-Path -Path $Destination -ChildPath "Backup_$timestamp"

$files = Get-ChildItem -Path $Source -Recurse -File -Filter $Filter
if (-not $files) {
    Write-Warning "No files matching '$Filter' found in $Source. Nothing to back up."
    exit 0
}

$sourceFull = (Resolve-Path -Path $Source).Path

foreach ($file in $files) {
    $relative = $file.FullName.Substring($sourceFull.Length).TrimStart('\', '/')
    $target = Join-Path -Path $backupRoot -ChildPath $relative

    New-Item -ItemType Directory -Path (Split-Path -Path $target -Parent) -Force | Out-Null
    Copy-Item -Path $file.FullName -Destination $target
}

Write-Host "Backed up $($files.Count) file(s) to $backupRoot"
