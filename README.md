# mlin
A scaffolding to quickly generates projects.

## Installation
```
git clone https://github.com/wupengju/mlin.git

cd mlin 

npm install

npm link
```

## Usage
Open terminal and type `mlin` or `mlin -h` , you'll see the help infomation below:
```
  Usage: mlin <command>


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    add      Add a new template
    list     List all the templates
    init     Generate a new project
    delete   Delete a template

  Examples:

    $ mlin add
    $ mlin list
    $ mlin init
    $ mlin delete
```

## Commands
### add
add new template.
### list
display template.
### init
choose a template to create a new project.
### delete
delete a template.

## Template
Templates were saved in template.json that has default structure like eg.1 and add new template like eg.2:
** eg.1 **
```
{}
```
** eg.2 **
```
{"test":{"templateUrl":"https://github.com/wupengju/The-question-bank-script.git","branch":"master"}}
```

# License
MIT.