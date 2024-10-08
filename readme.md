# ContributorJS 🟩

![before/after graph](./medias/beforeafter.jpg)
> Example of a git graph before and after using the script

## Table of contents

- [How does it work?](#how-does-it-work)
- [Usage guide 🚀](#usage-guide-)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Fill in the `.env.example` file](#fill-in-the-envexample-file)
    - [Example of a filled `.env` file](#example-of-a-filled-env-file)
    - [Run the script](#run-the-script)
      - [`/tmp` folder](#tmp-folder)
- [Troubleshooting 🔧](#troubleshooting-)

## How does it work?

The script will create a local repository and generate commits in it. Once the commits are created, it will push them to the remote repository you specified in the `.env` file. If you didn't specify a remote repository, you will have to push the changes yourself.

## Usage guide 🚀

> [!IMPORTANT]  
> Please note that if you want the repository to be private but still want the contributions to appear on your profile. You will have to check the `Private contributions` option in your profile settings.

![Private contribution setting](./medias/privatecontribution.png)

### Prerequisites

To use this script, you will need both [Node.js](https://nodejs.org/en/) and [git](https://git-scm.com/) installed on your machine.

### Installation

To install the script, you will have to clone the repository and install the dependencies.

```sh
git clone https://github.com/AmnezziaCS/ContributorJS.git
cd ./ContributorJS/
npm install
```

### Fill in the `.env.example` file

To make the script work, you will have to fill in the `.env` file with your information.

**The following values are mandatory**:

- `GIT_USER_EMAIL`: Your git email.

**The following values are optional**:

- `GIT_REPOSITORY`: The link to the repository you want to push the commits to. If left empty, the script will create a local repository that you'll have to push yourself.
- `MAX_COMMITS_PER_DAY`: Defaults to `6` if empty. The maximum number of commits the script will create per day. Also note that the script will create a random number of commits between `0` and `MAX_COMMITS_PER_DAY`.
- `COMMIT_ON_WEEKENDS`: Defaults to `NO` if empty. Whether or not you want the script to create commits on weekends.

#### Example of a filled `.env` file

```.env
GIT_USER_EMAIL = myamazingemail@test.com
GIT_REPOSITORY = https://github.com/AmnezziaCS/myamazingrepository.git
MAX_COMMITS_PER_DAY = 9
COMMIT_ON_WEEKENDS = NO
```

Once the `.env.example` file is filled, you can rename it to `.env`.

### Run the script

To run the script, you will have to execute the following command in the root folder of the project.

```sh
node .
```

#### `/tmp` folder

A `/tpm` folder is going to be created in your `./ContributorJS/` folder. It will contain the local repository with all the commits.

If you chose not to specify a remote repository, you can push the commits to your own repository from this folder.

## Troubleshooting 🔧

> [!NOTE]
> The activity might take a bit of time to appear on your profile.

If the script doesn't go through, you should get an error in your cmd. if so, make sure:

- That you set the correct **email** in `.env`.
- That you gave the correct **repository** link in `.env`.
- That the repository you created is fully **empty**.
- That you **followed the setup guide correctly**.

However, if you still have issues, feel free to open an issue on the [GitHub repository](https://github.com/AmnezziaCS/ContributorJS/issues).
