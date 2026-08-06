<#
.SYNOPSIS
    Reports the size of each subfolder in a directory, sorted largest first.

.DESCRIPTION
    Scans the immediate subfolders of the given path, totals the size of all
    files inside each one (recursively), and prints a table with sizes in MB.

.PARAMETER Path
    The directory to scan. Defaults to the current directory.

.PARAMETER Top
    How many folders to show. Defaults to all of them.

.EXAMPLE
    .\Get-FolderSize.ps1 -Path C:\Users\Ethan -Top 10
#>
param(
    [string]$Path = (Get-Location).Path,

    [int]$Top = [int]::MaxValue
)

if (-not (Test-Path -Path $Path -PathType Container)) {
    Write-Error "Path not found or not a directory: $Path"
    exit 1
}

Get-ChildItem -Path $Path -Directory |
    ForEach-Object {
        $bytes = (Get-ChildItem -Path $_.FullName -Recurse -File -ErrorAction SilentlyContinue |
            Measure-Object -Property Length -Sum).Sum
        if (-not $bytes) { $bytes = 0 }

        [pscustomobject]@{
            Folder = $_.Name
            SizeMB = [math]::Round($bytes / 1MB, 2)
        }
    } |
    Sort-Object SizeMB -Descending |
    Select-Object -First $Top |
    Format-Table -AutoSize
