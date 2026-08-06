# PowerShell Cheat Sheet

A quick reference for everyday PowerShell, plus example scripts in this folder.

## Getting help

```powershell
Get-Help Get-Process            # Help for a command
Get-Help Get-Process -Examples  # Usage examples
Get-Command *service*           # Find commands by name
Get-Member                      # Inspect an object's properties/methods
Update-Help                     # Download the latest help files
```

## Navigation and files

```powershell
Get-Location                    # pwd
Set-Location C:\Users           # cd
Get-ChildItem                   # ls / dir
Get-ChildItem -Recurse -Filter *.log
New-Item -ItemType Directory -Name "NewFolder"
New-Item -ItemType File -Name "notes.txt"
Copy-Item source.txt dest.txt
Move-Item old.txt new-place\
Remove-Item unwanted.txt
Get-Content file.txt            # cat
Set-Content file.txt "Hello"    # overwrite
Add-Content file.txt "More"     # append
Test-Path C:\Temp               # does it exist?
```

## The pipeline

PowerShell pipes **objects**, not text — filter and shape them with these:

```powershell
Get-Process | Where-Object { $_.CPU -gt 100 }
Get-Process | Sort-Object CPU -Descending | Select-Object -First 5
Get-Service | Select-Object Name, Status
Get-ChildItem | ForEach-Object { $_.Name.ToUpper() }
Get-Process | Measure-Object WorkingSet -Sum
Get-Service | Group-Object Status
```

## Variables and types

```powershell
$name = "Ethan"
$numbers = 1, 2, 3, 4, 5        # array
$hash = @{ Key = "Value"; Port = 8080 }  # hashtable
[int]$count = 42                # typed variable
"$name has $($numbers.Count) numbers"    # string interpolation
```

## Comparison and logic

| Operator | Meaning          |
|----------|------------------|
| `-eq`    | equals           |
| `-ne`    | not equals       |
| `-gt`    | greater than     |
| `-lt`    | less than        |
| `-like`  | wildcard match   |
| `-match` | regex match      |
| `-in`    | value in list    |

```powershell
if ($count -gt 10) { "big" } elseif ($count -gt 5) { "medium" } else { "small" }
```

## Loops

```powershell
foreach ($n in $numbers) { $n * 2 }
for ($i = 0; $i -lt 5; $i++) { $i }
while ($count -gt 0) { $count-- }
1..10 | ForEach-Object { $_ * $_ }
```

## Functions

```powershell
function Get-Greeting {
    param(
        [Parameter(Mandatory)]
        [string]$Name,
        [int]$Times = 1
    )
    1..$Times | ForEach-Object { "Hello, $Name!" }
}

Get-Greeting -Name "Ethan" -Times 3
```

## Error handling

```powershell
try {
    Get-Item "C:\does-not-exist.txt" -ErrorAction Stop
}
catch {
    Write-Warning "Something went wrong: $_"
}
finally {
    "Runs either way"
}
```

## System info & processes

```powershell
Get-Process                     # running processes
Stop-Process -Name notepad
Get-Service                     # services (Windows)
Start-Service -Name Spooler
Get-ComputerInfo                # OS/hardware summary (Windows)
Get-EventLog -LogName System -Newest 20   # Windows PowerShell 5.1
```

## Working with data

```powershell
Get-Process | Export-Csv procs.csv -NoTypeInformation
Import-Csv procs.csv
Get-Content config.json | ConvertFrom-Json
$hash | ConvertTo-Json
Invoke-RestMethod https://api.github.com/repos/PowerShell/PowerShell
```

## Example scripts in this folder

| Script | What it does |
|--------|--------------|
| [`Get-FolderSize.ps1`](Get-FolderSize.ps1) | Reports the size of each subfolder in a directory, sorted largest first |
| [`Backup-Files.ps1`](Backup-Files.ps1) | Copies files matching a pattern to a timestamped backup folder |

Run a script:

```powershell
# You may need to allow local scripts once (as admin, Windows only):
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

.\Get-FolderSize.ps1 -Path C:\Users\Ethan
.\Backup-Files.ps1 -Source C:\Projects -Destination D:\Backups -Filter *.docx
```

## Learn more

- [Official PowerShell docs](https://learn.microsoft.com/powershell/)
- [PowerShell on GitHub](https://github.com/PowerShell/PowerShell) — cross-platform (Windows, macOS, Linux)
